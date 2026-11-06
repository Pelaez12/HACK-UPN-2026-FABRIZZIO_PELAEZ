/**
 * Ellie Life Enterprise — DeepSeek Integration
 * Ejecuta análisis estructurado únicamente en backend.
 * Aplica reglas de abstención (confianza < 0.70) y fallback RULES-ONLY.
 */

export async function analyzeReportWithDeepSeek({
  type,
  description,
  district = 'Piura',
  sector = null,
  people_needing_help = false,
  apiKey = process.env.DEEPSEEK_API_KEY || process.env.NVIDIA_API_KEY,
  model = process.env.DEEPSEEK_MODEL || (process.env.NVIDIA_API_KEY ? 'deepseek-ai/deepseek-v4.1-flash' : 'deepseek-chat'),
  baseUrl = process.env.DEEPSEEK_BASE_URL || (process.env.NVIDIA_API_KEY ? 'https://integrate.api.nvidia.com/v1' : 'https://api.deepseek.com')
}) {
  // Si no hay API key configurada, ejecutar inmediatamente fallback seguro
  if (!apiKey || apiKey.trim() === '') {
    return runRulesOnlyFallback({
      type,
      description,
      district,
      sector,
      people_needing_help,
      reason: 'api_key_missing'
    });
  }

  const systemPrompt = `Eres el asistente de análisis comunitario de Ellie Life Enterprise para Piura, Perú.
Analiza el reporte recibido por un ciudadano ante emergencias del Fenómeno El Niño.
Tu tarea es clasificar el tipo y sector, evaluar la confianza objetiva y detectar información faltante.
REGLAS ESTRICTAS:
1. Devuelve ÚNICAMENTE un objeto JSON válido con los campos:
   - "type": tipo clasificado (inundacion, desborde_rio, via_bloqueada, vivienda_afectada, persona_necesita_ayuda, otro)
   - "sector": sector o distrito detectado
   - "confidence": número entre 0.00 y 1.00 que refleja el nivel de certeza basado en la evidencia
   - "missing": array de strings con datos clave que faltan (ej: ["ubicacion_exacta", "referencia_visual", "numero_afectados"])
   - "abstained": booleano. DEBE ser true si confidence < 0.70 o falta evidencia esencial
   - "rationale": breve justificación técnica en 1 o 2 frases.
2. NO inventes información oficial, ni declares emergencias oficiales.
3. No incluyas markdown, comillas triples ni texto fuera del JSON.`;

  const userContent = JSON.stringify({
    type,
    description: String(description || '').slice(0, 1000), // límite de seguridad
    district,
    sector,
    people_needing_help: Boolean(people_needing_help)
  });

  try {
    const endpoint = baseUrl.endsWith('/') ? `${baseUrl}chat/completions` : `${baseUrl}/chat/completions`;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey.trim()}`
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userContent }
        ],
        temperature: 0.1,
        max_tokens: 500
      }),
      signal: controller.signal
    });

    clearTimeout(timeout);

    if (!res.ok) {
      return runRulesOnlyFallback({
        type,
        description,
        district,
        sector,
        people_needing_help,
        reason: `http_error_${res.status}`
      });
    }

    const data = await res.json();
    const rawContent = data.choices?.[0]?.message?.content?.trim() || '';

    // Limpieza de bloque de código si viniera envuelto
    const cleanJsonStr = rawContent.replace(/^```json\s*/i, '').replace(/```$/i, '').trim();
    let parsed;
    try {
      parsed = JSON.parse(cleanJsonStr);
    } catch {
      return runRulesOnlyFallback({
        type,
        description,
        district,
        sector,
        people_needing_help,
        reason: 'invalid_json_response'
      });
    }

    // Validación de esquema requerido
    const isValidSchema =
      parsed &&
      typeof parsed === 'object' &&
      typeof parsed.type === 'string' &&
      typeof parsed.confidence === 'number' &&
      typeof parsed.abstained === 'boolean' &&
      Array.isArray(parsed.missing) &&
      typeof parsed.rationale === 'string';

    if (!isValidSchema) {
      return runRulesOnlyFallback({
        type,
        description,
        district,
        sector,
        people_needing_help,
        reason: 'schema_validation_failed'
      });
    }

    // Regla de abstención obligatoria
    const normalizedConfidence = Math.max(0, Math.min(1, parsed.confidence));
    const shouldAbstain = parsed.abstained === true || normalizedConfidence < 0.70;

    return {
      success: true,
      ai_used: true,
      ai_provider: 'DeepSeek',
      ai_model: model,
      type: parsed.type,
      sector: parsed.sector || sector || district,
      confidence: Number(normalizedConfidence.toFixed(2)),
      missing: parsed.missing,
      abstained: shouldAbstain,
      rationale: parsed.rationale,
      fallback_used: false,
      safety_notice: 'Análisis generado por IA para revisión humana obligatoria. No oficial.'
    };
  } catch (err) {
    return runRulesOnlyFallback({
      type,
      description,
      district,
      sector,
      people_needing_help,
      reason: err.name === 'AbortError' ? 'timeout' : 'network_error'
    });
  }
}

/**
 * Fallback determinista RULES-ONLY
 * Garantiza continuidad y seguridad cuando la IA no está disponible o falla.
 */
export function runRulesOnlyFallback({
  type = 'otro',
  description = '',
  district = 'Piura',
  sector = null,
  people_needing_help = false,
  reason = 'rules_only'
}) {
  const text = `${type} ${description}`.toLowerCase();
  let classifiedType = type || 'otro';
  const missing = [];

  if (/inunda|aniego|agua.*empoz|encharc/.test(text)) classifiedType = 'inundacion';
  else if (/rio|desborde|quebrada|chira|piura/.test(text)) classifiedType = 'desborde_rio';
  else if (/bloque|via|carretera|puente|transito/.test(text)) classifiedType = 'via_bloqueada';
  else if (/casa|vivienda|techo|pared/.test(text)) classifiedType = 'vivienda_afectada';
  else if (/ayuda|atrapad|rescate|socorro/.test(text) || people_needing_help) classifiedType = 'persona_necesita_ayuda';

  if (!description || description.trim().length < 15) {
    missing.push('descripcion_detallada');
  }
  if (!sector) {
    missing.push('sector_especifico');
  }
  missing.push('inspeccion_humana_obligatoria');

  return {
    success: true,
    ai_used: false,
    ai_provider: null,
    ai_model: null,
    type: classifiedType,
    sector: sector || district || 'Piura',
    confidence: 0.50, // Confianza determinista prudente
    missing,
    abstained: true, // Siempre abstención preventiva en fallback
    rationale: 'IA no disponible. Se ejecutó el fallback RULES-ONLY. Revisa antes de confirmar.',
    fallback_used: true,
    fallback_reason: reason,
    safety_notice: 'Clasificación basada en reglas deterministas sin IA. Requiere revisión humana.'
  };
}

# Ronda 5 — propuesta final consolidada

## Voluntad Visible: Buzón efímero auditado

**Estado:** propuesta única recomendada por A2 (90/100; ventaja de 5 puntos sobre la reserva visual). La recomendación es provisional hasta confirmar R2–R4 y demostrar los controles en la demo; no se afirma ausencia de bloqueantes desconocidos.

- **Problema concreto:** durante lluvias, desbordes o bloqueos asociados al Fenómeno del Niño, los reportes comunitarios llegan repetidos, ambiguos y sin una señal clara de qué debe revisar primero una mesa de respuesta. Publicarlos automáticamente puede amplificar rumores o exponer personas.
- **Población:** vecinos que aportan reportes sintéticos o con consentimiento y una persona moderadora de una mesa municipal/brigada en una única zona piloto. No es canal oficial de emergencias ni se dirige directamente a personas en peligro.
- **Función concreta de IA:** extracción estructurada desde texto de (a) tipo de incidente, (b) ubicación aproximada y (c) campos faltantes; agrupamiento temporal-espacial de posibles duplicados; y abstención cuando confianza/evidencia no alcanza el umbral. Compara contra baseline de palabras clave y muestra la transformación y los errores del fixture. La IA no determina verdad, severidad médica ni asignación de recursos.
- **Datos públicos [fuente por verificar]:** nombres y calles de OpenStreetMap **[fuente por verificar]**; comunicados públicos INDECI/COEN **[fuente por verificar]**; datos abiertos de una municipalidad **[fuente por verificar]**. Para el pitch, cinco mensajes serán sintéticos o cedidos con permiso explícito; cada registro mostrará fuente, fecha, licencia y estado real/sintético.
- **Privacidad y seguridad cerradas:** no guardar texto libre, fotografías, audio, nombres, teléfonos ni ubicación precisa; usar identificador aleatorio de sesión y celda geográfica amplia. Ejecutar en memoria local, sin API de mensajería ni publicación; al terminar, borrar el estado y mostrar evidencia de pantalla. Si el borrado no puede demostrarse, no persistir ningún dato y ejecutar sólo un fixture precargado. Retención, consentimiento y requisitos jurídicos siguen **[CONFIRMAR]**.
- **Demo de 3 minutos:**
  1. Cargar cinco mensajes sintéticos (dos duplicados, uno ambiguo y dos distintos).
  2. Mostrar extracción de campos y ubicación redondeada; ocultar el texto original tras procesarlo.
  3. Comparar baseline de palabras clave con IA y mostrar matriz de errores del fixture, sin extrapolarla a campo.
  4. Mostrar el agrupamiento de duplicados y la abstención del ambiguo (“requiere revisión”).
  5. La moderadora aprueba manualmente un incidente, cambia su estado a “revisado” y luego borra la sesión; ningún reporte se publica ni se envía.
- **Alcance construible durante el evento:** formulario local de cinco categorías, pipeline de texto por lote, extracción, clustering, umbral de abstención, fixture etiquetado, baseline, métrica simple de precisión/recall del fixture, panel de moderación y borrado en memoria. Fuera de alcance: WhatsApp/Telegram, datos personales reales, fotos/audio, geolocalización precisa, alertas, despacho, predicciones oficiales, integración con instituciones y operación 24/7.

## Evidencia mínima para ratificación

| Control | Evidencia que debe verse | Si falla |
|---|---|---|
| Consentimiento/procedencia | Fixture sintético o permiso documentado y etiqueta por mensaje | No usar el mensaje; conservar sólo fixture sintético |
| Privacidad | Campos minimizados, ubicación amplia, sesión en memoria y pantalla de borrado | Ejecutar sólo datos precargados en memoria; no aceptar entradas |
| IA pertinente | Entrada → extracción/clustering/abstención, baseline y errores del fixture | No afirmar generalización ni precisión de campo |
| Moderación | Estado inicial “por confirmar”, acción humana y registro | No publicar ni priorizar automáticamente |
| Licencias | Fuente, fecha y licencia visibles | Sustituir por fixture propio etiquetado |
| Evento | Evidencia de la función central construida durante la hackathon | **[CONFIRMAR]** formato aceptado por organización |

## Rúbrica esperada y límites de afirmación

- **Innovación:** integración responsable de extracción, deduplicación, abstención y moderación con mínimo dato; no se afirma novedad absoluta.
- **IA pertinente:** funciones NLP/clustering/abstención comparadas con baseline; la matriz mide sólo el fixture local.
- **Impacto:** reduce trabajo de consolidación para una mesa que revisa reportes; no se prometen vidas salvadas, adopción ni mejora operativa sin evaluación de campo.
- **Prototipo:** flujo offline reproducible en tres minutos con cinco mensajes, revisión y borrado.
- **Factibilidad:** alcance pequeño y sin infraestructura externa; persistencia, escala y operación institucional quedan fuera.
- **Pitch:** narrativa “ruido → incidente trazable → revisión humana → borrado”, con advertencia fija de simulación/no canal oficial.

## Criterios de no ratificación

No presentar esta propuesta como ganadora ejecutable si: (1) R2–R4 prohíben fixtures sintéticos, requieren datos reales o exigen operación en vivo; (2) no puede demostrarse ejecución en memoria/borrado o consentimiento; (3) no se puede mostrar al menos un fixture etiquetado y baseline; (4) se exige que la IA verifique verdad o decida emergencias. Esos requisitos no aparecen definidos en los materiales disponibles y quedan **[CONFIRMAR]**.

## Cierre

- **Qué hice:** consolidé la mejor propuesta de R4 en una única versión mínima, corrigiendo privacidad, retención, consentimiento, reidentificación, métricas débiles, moderación, licencias y exceso de integración; añadí evidencia y criterios de no ratificación.
- **Qué entrego y dónde:** `hackathon/ideas/ronda-5-b1.md`.
- **Supuestos:** el pitch puede usar un fixture sintético rotulado y una demo offline; la rúbrica de `hackathon/01-analisis.md` sigue vigente; R2–R4 no están definidos.
- **[CONFIRMAR]:** significado de R2–R4, aceptación de fixtures, reglas de privacidad/retención/consentimiento, licencias de fuentes, formato de evidencia de desarrollo, horario/conectividad y si el jurado exige datos reales u operación en vivo.

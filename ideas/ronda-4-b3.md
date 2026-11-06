# Ronda 4 — prueba adversarial final intermedia (B3)

## Método y límite de conclusión
Audité `ronda-4-b1.md` contra `01-analisis.md`. El análisis contractual no define R2, R3 ni R4, ni mínimos de aprobación (`01-analisis.md:38-50`); por tanto es imposible certificar “sin bloqueantes R2–R4”. Marco riesgos y condiciones de no ratificación con **[CONFIRMAR]**, sin inventar reglas. La rúbrica sí exige IA pertinente, demo verificable y factibilidad (`:40-47`).

## Candidata principal: Voluntad Visible — Buzón efímero

- **Privacidad no totalmente cerrada:** almacenamiento local temporal y botón de borrado son controles de diseño, no evidencia de borrado. Cachés, logs, backups o memoria del navegador podrían conservar texto/ubicación. Si no puede probarse borrado, el plan “sólo en memoria” debe ser el único modo de demo (`ronda-4-b1.md:13`). Mostrar prueba de ausencia de datos tras borrar y no usar persistencia del navegador.
- **Acceso:** “sólo a la moderadora” no constituye control de autenticación/autoridad en un formulario local. Usar exclusivamente fixture sintético y declarar que no es sistema multiusuario; **[CONFIRMAR]** requisitos de privacidad aplicables (`:12-15`, `01-analisis.md:28`).
- **IA vs. reglas:** extracción estructurada, clustering y abstención son funciones claras, pero baseline de palabras clave y cinco mensajes sólo evidencian una demo. Reportar etiquetas, casos evaluados y errores; no afirmar generalización. Un clustering temporal-espacial puede agrupar mensajes distintos en una celda amplia: la persona debe confirmar cada duplicado.
- **Procedencia:** OSM, INDECI/COEN y datos municipales siguen “fuente por verificar” (`:12`). Sin licencias confirmadas, la versión segura es memoria + mensajes propios/sintéticos; no atribuir datos sintéticos a instituciones.
- **Viabilidad:** cinco mensajes, pipeline, matriz de errores y borrado caben en 3 minutos (`:14-15`), siempre que todo sea offline y precargado. Moderador disponible en el pitch es dependencia humana **[CONFIRMAR]**.
- **Bloqueo:** no se demuestra bloqueo definitivo; no ratificar si no se verifica borrado/consentimiento cuando se usen mensajes no sintéticos, o si R2–R4 exige operación real.

## Reserva visual: AlertaBarrio — GeoJSON

- **Pertinencia IA:** el propio diseño admite que sin fixture etiquetado es sólo scoring heurístico (`ronda-4-b1.md:21`). Eso evita una afirmación engañosa, pero puede hacer que la propuesta no satisfaga “uso pertinente de IA” (25 puntos, `01-analisis.md:42-43`). **[CONFIRMAR]** si el jurado acepta generador restringido + abstención como IA suficiente.
- **Datos/licencias:** mostrar fuente/licencia en cada capa no equivale a haberlas validado; OSM, SRTM, SENAMHI e INDECI siguen pendientes (`:22`). GeoJSON local con datos sintéticos es construible, pero no prueba aplicabilidad geográfica real.
- **Riesgo de interpretación:** “ruta estimada” y colores bajo/medio/alto pueden inducir seguridad pese a la advertencia. Mantener mensaje fijo “simulación; no evacuación/alerta” y prohibir CTA de navegación. Baseline por distancia puede ser inadecuado, pero debe presentarse como referencia, no verdad.
- **Fuera de distribución:** un caso OOD y abstención son útiles, pero no especifican método para detectar OOD ni umbral. Documentar regla reproducible y no mostrar una métrica de campo inexistente.
- **Viabilidad:** fallback tabular y GeoJSON local reducen riesgo; 20–50 segmentos y dos rutas aún pueden consumir demo (`:23-25`). Precalcular rutas y dejar sólo un cambio de escenario.
- **Bloqueo:** no definitivo. No ratificar si R2–R4 exige modelo entrenado/etiquetas reales y no se cuenta con ellas; esta condición permanece **[CONFIRMAR]**.

## Reserva condicionada: Quebrada Vigía

- **IA condicionada:** extracción/normalización, anomalías y ficha estructurada sí son IA declarada; el ranking sólo se habilita con etiquetas independientes (`ronda-4-b1.md:31`). Si el jurado espera predicción/ranking como función principal, la alternativa sin etiquetas podría puntuar bajo IA e innovación. **[CONFIRMAR]** criterio exacto.
- **Procedencia independiente:** la frase “fuente independiente de etiquetas/procedencia [CONFIRMAR]” es un requisito abierto, no evidencia. Si no existe, no usar accuracy; sensibilidad y baseline tampoco validan decisiones de inspección.
- **Riesgo operativo:** “apoyo para priorizar revisión” puede convertirse en prioridad de facto en una brigada; registrar aprobación humana y mostrar limitaciones junto al ranking/heurística. Nunca ordenar inspección o evacuación automáticamente (`:33-35`).
- **Datos/licencias:** precipitación, geología, elevación, OSM e INDECI siguen no confirmados (`:32`). Cuatro registros sintéticos prueban interfaz, no pertinencia municipal.
- **Viabilidad:** extracción, sensibilidad, abstención y ficha son acotadas; cargar cuatro registros con procedencia visible y un caso faltante debe ser fixture fijo.
- **Bloqueo:** no definitivo, pero no ratificar como “modelo de ranking IA” sin etiquetas independientes y licencia/cobertura confirmadas.

## Prueba contra R2–R4 y reglas contractuales

1. **R2/R3/R4:** documentos no contienen sus definiciones; solicitar confirmación oficial antes del fallo final. Ninguna propuesta puede etiquetarse libre de bloqueantes sólo por autodeclaración (`01-analisis.md:50-54`).
2. **Datos y legalidad:** Bases responsabilizan al equipo de calidad, seguridad, legalidad y procedencia, y prohíben resultados no verificados como oficiales (`01-analisis.md:15,36`). Fuentes/licencias deben aparecer con fecha, no sólo “[fuente por verificar]”.
3. **Evento:** funciones centrales deben construirse durante el evento y la entrega/formato son vacíos **[CONFIRMAR]** (`01-analisis.md:13,26`). Registrar commits y preparar fallback offline, sin afirmar que una demo precargada fue construida durante la jornada.
4. **Pitch:** los tres flujos tienen demasiados pasos si se ejecutan literalmente en 3 minutos. Ensayar un caso feliz + abstención; precargar métricas, licencia y auditoría (`01-analisis.md:13-14,47`).

## Veredicto adversarial intermedio
Voluntad Visible sigue siendo la opción de menor riesgo geoespacial y de seguridad, pero **condicionada** a borrado demostrable, fixture/consentimiento y moderador. AlertaBarrio queda reserva por dependencia de etiquetas/licencias y por el riesgo de ser sólo heurística. Quebrada Vigía queda reserva condicionada: sin etiquetas independientes sólo puede presentarse honestamente como extracción + heurística, no ranking aprendido. No hay BLOQUEANTE definitivo demostrable; sí hay condiciones de no ratificación que deben cerrarse antes de declarar ganadora.

## Cierre
- **Qué hice:** probé adversarialmente riesgos residuales de privacidad, ética, licencias, IA, evento, demo y R2–R4.
- **Qué entrego y dónde:** `hackathon/ideas/ronda-4-b3.md`.
- **Supuestos:** R2–R4, privacidad, aceptación de fixtures y entregables siguen sin definición pública.
- **[CONFIRMAR]:** significado de R2–R4, borrado/retención, consentimiento, licencias/cobertura, aceptación de heurísticas y fixtures, conectividad, horario y evidencia de desarrollo.

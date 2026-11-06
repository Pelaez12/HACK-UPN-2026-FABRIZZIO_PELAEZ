# Ronda 4 — propuestas corregidas ante riesgos residuales

## Base y límites

A2 R3 puntuó Voluntad Visible Moderada 90, AlertaBarrio Verificable 85 y Quebrada Vigía Auditada 83. Esta ronda cierra riesgos prácticos sin inventar los requisitos R2–R4: privacidad/retención y fixture de Voluntad; etiquetas, scoring y licencias de AlertaBarrio; circularidad, procedencia y riesgo operativo de Quebrada. Si una regla oficial exige datos reales, operación en vivo o prohíbe fixtures, queda **[CONFIRMAR]** y se detiene el alcance afectado.

## 1. Voluntad Visible — “Buzón efímero auditado” (candidata principal)

- **Problema concreto:** reportes comunitarios de desbordes y calles bloqueadas llegan duplicados o ambiguos, y una mesa de respuesta necesita consolidarlos para revisión sin convertirlos en hechos oficiales.
- **Población:** vecinos que aportan un reporte sintético/cedido y una persona moderadora de una mesa municipal o brigada en una zona piloto.
- **Función concreta de IA:** extracción estructurada de tipo de incidente, ubicación aproximada y campos faltantes desde texto; clustering temporal-espacial de posibles duplicados; abstención si faltan evidencia o confianza. Compara contra baseline de palabras clave y deja registro de transformación.
- **Datos públicos [fuente por verificar]:** nombres/calles de OpenStreetMap **[fuente por verificar]**; comunicados INDECI/COEN **[fuente por verificar]**; datos abiertos municipales **[fuente por verificar]**. Para demo usar mensajes sintéticos o con consentimiento documentado; no retener texto libre ni ubicación precisa.
- **Privacidad y control corregidos:** identificador aleatorio de sesión, ubicación redondeada, sin fotos/audio, almacenamiento local temporal y botón de borrado verificable; acceso sólo a la moderadora. La duración de retención y requisitos de privacidad aplicables quedan **[CONFIRMAR]**. Si no puede garantizarse borrado, operar sólo en memoria durante la demo.
- **Demo de 3 minutos:** cargar cinco mensajes sintéticos (dos duplicados, uno ambiguo), extraer campos y ubicar celda amplia, comparar baseline/IA, mostrar abstención del ambiguo, moderar un incidente y borrar la sesión; la interfaz confirma que nada se publica automáticamente.
- **Alcance construible durante el evento:** formulario local de cinco categorías, pipeline de texto en lote, clustering, abstención, matriz de errores del fixture y moderación; sin WhatsApp/Telegram, alertas, asignación de recursos, datos personales reales o publicación.

## 2. AlertaBarrio — “Comparador GeoJSON con abstención” (reserva visual)

- **Problema concreto:** familias y brigadas no pueden comparar dos trayectos con riesgo estimado de anegamiento bajo un escenario de lluvia; el producto no debe afirmar que una ruta es segura.
- **Población:** familias, comerciantes y brigadas de un barrio/distrito piloto.
- **Función concreta de IA:** clasificador interpretable de bajo/medio/alto sobre segmentos, entrenado y evaluado sólo si existe fixture etiquetado con procedencia; si no existe, se denomina explícitamente scoring heurístico y se mantiene como reserva. Un generador restringido explica sólo variables visibles y se abstiene ante faltantes.
- **Datos públicos [fuente por verificar]:** calles OpenStreetMap **[fuente por verificar]**; elevación SRTM u otra fuente pública **[fuente por verificar]**; precipitación/avisos SENAMHI **[fuente por verificar]**; reportes INDECI/municipalidad **[fuente por verificar]**. La demo usa GeoJSON local y cada capa muestra fuente, fecha, licencia y real/sintético.
- **Correcciones de scoring/alcance:** baseline por distancia, fixture de casos con etiqueta y un caso fuera de distribución; no atribuir precisión de campo. Fallback sin mapa interactivo: tabla de dos rutas y factores, para preservar demo offline. “Menor riesgo estimado” nunca significa evacuación ni alerta.
- **Demo de 3 minutos:** elegir origen/destino, comparar baseline y ruta estimada, cambiar escenario, abrir factores/licencias y métrica del fixture, quitar elevación para provocar abstención; mostrar fallback tabular si falla el mapa.
- **Alcance construible durante el evento:** 20–50 segmentos GeoJSON, dos escenarios, dos rutas, baseline, clasificador o scoring etiquetado honestamente, explicación, abstención y fallback; sin API en vivo, navegación, predicción hidrológica ni publicación.

## 3. Quebrada Vigía — “Ficha de inspección sin circularidad” (reserva condicionada)

- **Problema concreto:** una brigada necesita ordenar la inspección preventiva de cuatro quebradas ante escenarios de lluvia, pero un orden exploratorio no debe presentarse como predicción ni despacho.
- **Población:** brigadas municipales y juntas vecinales de una única zona piloto.
- **Función concreta de IA:** extracción y normalización de variables públicas, detección de faltantes/anomalías y generación estructurada de una ficha auditable. Sólo si existe una fuente independiente de etiquetas/procedencia **[CONFIRMAR]** se habilita un modelo de ranking; de lo contrario, el orden es heurístico visible y no se reclama IA predictiva.
- **Datos públicos [fuente por verificar]:** precipitación/avisos SENAMHI **[fuente por verificar]**; elevación y geología INGEMMET/Geo Perú **[fuente por verificar]**; vías OpenStreetMap **[fuente por verificar]**; inventarios de eventos INDECI **[fuente por verificar]**. Fecha, licencia y real/sintético se muestran por registro.
- **Correcciones de circularidad y operación:** nunca etiquetar “inspeccionar primero” usando el mismo score que luego se pretende validar; si no hay juicio independiente, demostrar sensibilidad/baseline en vez de accuracy. La ficha dice “apoyo para priorizar revisión”, exige aprobación humana y no contiene órdenes de evacuación.
- **Demo de 3 minutos:** cargar cuatro registros y baseline de lluvia, aplicar escenario, mostrar factores y sensibilidad, quitar una variable para abstención, generar ficha y registrar que una persona decide; enseñar procedencia de cualquier etiqueta o declarar “sin etiqueta independiente”.
- **Alcance construible durante el evento:** cuatro registros, dos escenarios, extracción/normalización, baseline, sensibilidad, ficha, abstención y revisión; sin predicción de activación, despacho automático, sensores en vivo, alerta pública ni modelo de ranking sin etiquetas legítimas.

## Matriz de cierre de riesgos

| Propuesta | Corrección verificable | Criterio de no ratificación | Plan offline |
|---|---|---|---|
| Voluntad Visible | borrado/sesión, ubicación amplia, moderación y fixture evaluado | no se garantiza borrado o permiso de mensajes | demo en memoria con cinco mensajes sintéticos |
| AlertaBarrio | etiqueta IA vs heurística, fuente por capa, fallback tabular | no hay licencia/cobertura y jurado exige IA entrenada | GeoJSON local y tabla de dos rutas |
| Quebrada Vigía | etiquetas independientes o declaración honesta de heurística | no hay procedencia independiente y se exige modelo validado | extracción + baseline + ficha sin ranking predictivo |

## Salvaguardas comunes

- No emitir alertas oficiales, diagnósticos, órdenes de evacuación ni afirmaciones de verdad/seguridad.
- Mostrar fuente, licencia, fecha, real/sintético, confianza y abstención por dato faltante.
- Usar datos sintéticos o permiso explícito; revisión humana antes de publicar o actuar.
- Registrar la función construida durante el evento y mantener demo reproducible sin red.
- Si R2–R4 exigen una condición desconocida, etiquetarla **[CONFIRMAR]** y no afirmar cumplimiento.

## Cierre

- **Qué hice:** corregí los riesgos residuales de R3 y dejé tres propuestas acotadas: Voluntad Visible como principal, AlertaBarrio como reserva visual y Quebrada Vigía como reserva condicionada; añadí criterios explícitos de no ratificación y fallback offline.
- **Qué entrego y dónde:** `hackathon/ideas/ronda-4-b1.md`.
- **Supuestos:** fixtures sintéticos rotulados son admisibles sólo mientras no se confirme lo contrario; R2–R4, privacidad, licencias y entregables no están definidos en los materiales.
- **[CONFIRMAR]:** reglas R2–R4, retención/borrado, consentimiento, aceptación de fixtures, licencias/cobertura, exigencia de etiquetas independientes, conectividad, horario y evidencia de desarrollo durante el evento.

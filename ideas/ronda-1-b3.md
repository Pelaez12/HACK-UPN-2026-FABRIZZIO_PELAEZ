# Ronda 1 — auditoría adversarial (B3)

## Criterio de revisión
Se revisaron únicamente `ronda-1-b1.md` y `01-analisis.md`. “BLOQUEANTE” se reserva para una violación demostrada de R2/R3/R4, ausencia de función clara de IA o imposibilidad de prototipar en la ventana. Las bases extraídas no definen etiquetas R2–R4; por ello cualquier correspondencia exacta debe **[CONFIRMAR]**. Sí constan pitch de 3 minutos y trabajo central durante el evento (`01-analisis.md:13-15`).

## Hallazgos por propuesta

### 1. AlertaBarrio
- **Riesgo de datos:** lluvia, elevación, calles e historial dependen de fuentes aún no verificadas; cobertura, licencia, resolución y actualización están explícitamente pendientes (`ronda-1-b1.md:10`, `:63-64`). Un mapa convincente podría ser inválido si no se confirma para el distrito.
- **Riesgo técnico:** combinar lluvia, DEM y reportes, enrutar y explicar incertidumbre en una sola demo puede exceder la ventana; el alcance acotado (un distrito, CSV/GeoJSON y reglas) sí es construible (`:11-12`). **[CONFIRMAR]** tamaño de equipo, conectividad y tiempo efectivo (`01-analisis.md:20-22`).
- **Riesgo de seguridad:** “ruta segura” puede interpretarse como instrucción oficial en una emergencia; la propuesta debe mantener escenario simulado, advertencia y revisión humana. Bases exigen no presentar resultados no verificados como oficiales (`01-analisis.md:15`, `:36`).
- **IA:** clasificación/riesgo y asistente están claramente especificados (`ronda-1-b1.md:9`); no hay BLOQUEANTE probado por falta de IA.

### 2. Quebrada Vigía
- **Riesgo de validez:** ranking aprendido con pocos antecedentes puede producir falsa prioridad; el dataset sintético completa campos faltantes (`ronda-1-b1.md:18-21`) y no debe mezclarse silenciosamente con observaciones reales. Mostrar fecha, variables y confianza es necesario.
- **Riesgo de alcance:** conseguir 4–10 quebradas con pendientes, suelo, lluvia e inventarios licenciados no está confirmado (`:19`, `:21`). **[CONFIRMAR]** fuentes, cobertura y licencia antes de comprometer el ranking.
- **Riesgo operativo:** una municipalidad podría leer el orden como orden de inspección; conservar “priorización para apoyo” y decisión humana, como ya propone la ficha (`:18`).
- **IA:** ranking y generación trazable son funciones concretas (`:18`); no BLOQUEANTE probado. El uso de dataset sintético requiere rotulado visible por calidad/procedencia (`01-analisis.md:15`, `:36`).

### 3. Agua Clara
- **BLOQUEANTE potencial R2/R3/R4 — [CONFIRMAR]:** la imagen sólo permite categorías visuales de turbidez, pero el problema se formula como riesgo de contaminación (`ronda-1-b1.md:25-30`). Si R2/R3/R4 exigen orientación sanitaria confiable o no permiten riesgo de daño, el clasificador visual no satisface el requisito; las reglas disponibles no aclaran esos códigos.
- **Riesgo grave de seguridad:** usuarios pueden convertir “clara” en “potable”; el prototipo debe bloquear lenguaje de seguridad y derivar a laboratorio/autoridad. La propuesta advierte que no sustituye laboratorio (`:25`, `:29-30`), pero debe ser prominente en demo.
- **Riesgo de datos/modelo:** imágenes curadas o dataset propio pueden no representar iluminación, recipientes y sedimentos locales; licencia y guía OMS/OPS/MINSA siguen **[fuente por verificar]** (`:28`).
- **IA:** visión de 3 clases y recuperación con guía son claras (`:27`), así que no es bloqueo por ausencia de IA.

### 4. SiembraDecide
- **Riesgo de impacto:** una recomendación de fecha/cultivo con series y pronósticos no verificados puede causar pérdidas; el prototipo debe llamarse apoyo exploratorio, no asesoría agronómica oficial. La propia propuesta pide validar con extensionista (`ronda-1-b1.md:39`).
- **Riesgo de factibilidad:** integrar clima, requerimientos y disponibilidad hídrica de una cuenca en dos cultivos en tiempo limitado puede ser demasiado; el cálculo tabular reproducible reduce el riesgo (`:37-39`). **[CONFIRMAR]** cuenca piloto, fuentes, licencia y disponibilidad (`:37`, `:64`).
- **Riesgo de IA sustantiva:** si sólo hay reglas tabulares, el jurado podría considerarlo cálculo convencional y puntuar bajo “uso pertinente de IA” (25 puntos; `01-analisis.md:14`, `:42-47`). Debe demostrarse recomendador/ranking explicable y comparación con baseline, no sólo fórmula.
- **BLOQUEANTE:** no probado mientras se mantenga el modelo de recomendación y su explicación (`ronda-1-b1.md:36`); **[CONFIRMAR]** si R2 exige aprendizaje entrenado o basta IA explicable.

### 5. SaludCalor
- **Riesgo máximo de seguridad/legalidad:** triage de síntomas puede inducir retraso o alarma; datos sanitarios y directorio de establecimientos no están verificados (`ronda-1-b1.md:45-48`). Debe usar casos sintéticos, no guardar datos y ante cualquier señal crítica derivar a emergencia, sin diagnóstico.
- **Riesgo de operación:** “botón de llamada/ubicación” y derivación local pueden no funcionar sin permisos, geolocalización o conectividad; el pitch debe mostrar un fallback estático y declararlo **[CONFIRMAR]** (`:47`, `01-analisis.md:22`, `:36`).
- **Riesgo de IA:** un clasificador de respuestas puede ser sólo reglas; para la rúbrica (IA 25 puntos) mostrar clasificación, confianza, rechazo fuera de alcance y citas de recuperación (`ronda-1-b1.md:45-48`; `01-analisis.md:42-47`).
- **BLOQUEANTE potencial R2/R3/R4 — [CONFIRMAR]:** si esos códigos incluyen prohibición de consejo médico/triage automatizado, la idea no es admisible; el análisis contractual sólo exige seguridad, legalidad y no presentar resultados no verificados, sin prohibición expresa (`01-analisis.md:15`, `:36`).

### 6. Voluntad Visible
- **Riesgo de abuso/desinformación:** extracción de urgencia, detección de lenguaje no verificable y priorización pueden amplificar rumores o exponer ubicación de personas; revisión humana obligatoria y estado “por confirmar” deben ser invariantes (`ronda-1-b1.md:52-57`).
- **Riesgo de privacidad/licencia:** fotos, ubicación y reportes pueden contener datos personales; Bases no detallan privacidad, publicación, imagen ni licencias (`01-analisis.md:28`). Usar datos sintéticos con permiso explícito como ya se propone (`ronda-1-b1.md:55`).
- **Riesgo de alcance:** deduplicación espacial-temporal, extracción multimodal y tablero podrían ser demasiados componentes; un formulario y cinco reportes precargados mantienen demo construible (`:56-57`).
- **IA:** extracción, deduplicación/agrupamiento y detección de no verificado son funciones claras (`:54`); no BLOQUEANTE probado. **[CONFIRMAR]** que “lenguaje no verificable” no se venda como verificador de verdad.

## Bloqueantes consolidados
1. **Ningún bloqueo definitivo demostrado** con la evidencia disponible: las seis propuestas tienen función de IA y un alcance de demo acotado.
2. **Bloqueantes potenciales a resolver antes de elegir:** Agua Clara y SaludCalor podrían violar R2/R3/R4 si esos códigos restringen consejo sanitario o riesgo de daño; confirmar el significado oficial de R2–R4. La evidencia contractual disponible no contiene esos rótulos ni una prohibición explícita (`01-analisis.md:38-50`).
3. Todas dependen de fuentes, licencias, cobertura y horarios aún **[CONFIRMAR]**; esto es riesgo de ejecución, no bloqueo automático mientras se pueda usar un fixture sintético legalmente etiquetado.

## Recomendaciones de selección
- Exigir una matriz mínima por finalista: fuente/licencia confirmada, datos reales vs sintéticos, función IA frente a baseline, advertencia de incertidumbre, y demo reproducible en 3 minutos.
- Penalizar explícitamente cualquier afirmación de alerta oficial, potabilidad, diagnóstico, recomendación agronómica definitiva o publicación automática. Mantener decisión humana y resultados “por confirmar”, conforme a `01-analisis.md:15,36`.
- **[CONFIRMAR]** cronograma, equipo 1–6 vs 3–6, conectividad y entregables antes de afirmar que una integración de datos es factible (`01-analisis.md:20-27`).

## Cierre
- **Qué hice:** audité riesgos, IA, seguridad, datos y factibilidad de las seis ideas sin inventar fuentes.
- **Qué entrego y dónde:** `hackathon/ideas/ronda-1-b3.md`.
- **Supuestos:** R2/R3/R4 no están definidos en los documentos extraídos; por eso se marcan potenciales y **[CONFIRMAR]**, no bloqueantes definitivos.
- **Pendientes:** confirmar códigos R2–R4, datasets/licencias, horario/equipo, conectividad y reglas sanitarias/privacidad.

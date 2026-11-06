# Ronda 3 — evaluación A2 y decisión recomendada

## Método y límites

Evalué los refinamientos de `ronda-3-b1.md` contra la rúbrica oficial de `hackathon/01-analisis.md`: innovación (20), IA pertinente (25), impacto (20), prototipo (15), factibilidad (10) y pitch (10). Las métricas sólo cuentan como evidencia del fixture local, no como desempeño de campo. Fuentes, licencias, privacidad, retención, horario y aceptación de fixtures permanecen **[CONFIRMAR]**. Como R2, R3 y R4 no están definidos en los documentos disponibles, no invento sus umbrales.

## Puntajes

| Propuesta R3 | Innovación | IA | Impacto | Prototipo | Factibilidad | Pitch | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| **Voluntad Visible Moderada** | 18/20 | 23/25 | 17/20 | 14/15 | 9/10 | 9/10 | **90/100** |
| AlertaBarrio Verificable | 17/20 | 20/25 | 17/20 | 14/15 | 8/10 | 9/10 | **85/100** |
| Quebrada Vigía Auditada | 17/20 | 19/25 | 17/20 | 14/15 | 8/10 | 8/10 | **83/100** |

### 1. Voluntad Visible Moderada — 90/100

- **Innovación, 18/20:** el diseño “mínimo dato, máxima trazabilidad” combina extracción, agrupación y moderación sin convertir reportes en hechos. La innovación es de integración responsable, no una garantía de novedad absoluta.
- **IA pertinente, 23/25:** extracción estructurada, clustering espaciotemporal y abstención comparados contra palabras clave son funciones concretas; la matriz de confusión/precision-recall del fixture hace verificable el valor. Resto 2 puntos porque cinco mensajes no validan generalización y deben definirse etiquetas/casos no vistos.
- **Impacto, 17/20:** reduce sobrecarga informativa para mesa municipal/brigada y evita publicación automática. No se atribuyen mejoras operativas reales ni adopción sin usuarios y datos de campo **[CONFIRMAR]**.
- **Prototipo, 14/15:** demo completa con duplicados, mensaje ambiguo, ubicación redondeada, baseline, abstención y aprobación auditada. Resto 1 por riesgo de intentar mostrar demasiados pasos en tres minutos.
- **Factibilidad, 9/10:** funciona offline con fixtures, NLP acotado y sin GIS pesado. Resto 1 por retención, control de acceso, borrado verificable y disponibilidad de moderador **[CONFIRMAR]**.
- **Pitch, 9/10:** el contraste caos → incidente consolidado es inmediato. Debe mostrar incertidumbre geográfica y mantener “por confirmar” hasta decisión humana.

### 2. AlertaBarrio Verificable — 85/100

- **Innovación, 17/20:** comparador microvial de rutas bajo escenarios de lluvia ofrece una lectura útil frente a mapa macro/ruta por distancia; pierde puntos por ser una extensión reconocible de ruteo ponderado.
- **IA pertinente, 20/25:** el refinamiento distingue clasificador entrenado de scoring heurístico, añade fixture, métricas, explicaciones restringidas y abstención. Resto 5 porque puede quedarse sin etiquetas legítimas y entonces ser sólo heurística; debe confirmarse si eso satisface el crédito de IA **[CONFIRMAR]**.
- **Impacto, 17/20:** problema concreto de anegamiento urbano, con población clara; no demuestra seguridad ni reducción de incidentes reales y depende de cobertura local **[CONFIRMAR]**.
- **Prototipo, 14/15:** ruta base/alternativa, escenario, factores, métrica y abstención son visualmente verificables. Resto 1 por sensibilidad de geometrías y carga de demo.
- **Factibilidad, 8/10:** comparador offline y fixtures acotan dependencias, pero licencias/cobertura de OSM, elevación y lluvia siguen sin confirmar; el mapa añade riesgo técnico.
- **Pitch, 9/10:** diferencia entre rutas se entiende rápido. La advertencia permanente debe impedir que “menor riesgo estimado” se interprete como ruta segura o evacuación.

### 3. Quebrada Vigía Auditada — 83/100

- **Innovación, 17/20:** priorización transparente de inspección preventiva y sensibilidad es pertinente para cuadrillas limitadas; se parece a una matriz multicriterio si no hay aprendizaje real.
- **IA pertinente, 19/25:** separar ranking IA, baseline y heurística es metodológicamente honesto; el modelo interpretable y ficha estructurada son plausibles. Resto 6 porque las etiquetas “inspeccionar primero” y su procedencia continúan **[CONFIRMAR]**, con riesgo de circularidad respecto de los mismos pesos.
- **Impacto, 17/20:** aborda exposición a huaicos y recursos escasos sin prometer predicción; cuatro registros sintéticos no evidencian utilidad municipal real.
- **Prototipo, 14/15:** tabla, escenario, contribuciones, sensibilidad/abstención y ficha caben offline. Resto 1 por riesgo de confundir ranking exploratorio con orden operativo.
- **Factibilidad, 8/10:** cálculo liviano y cuatro registros son construibles, pero capas geológicas, inventarios, licencias y catálogo piloto están por verificar.
- **Pitch, 8/10:** pregunta operativa es potente, aunque exige repetir que decide una persona y no es alerta ni despacho.

## Umbral, margen y bloqueantes

1. **Umbral ≥85:** Voluntad Visible (90) y AlertaBarrio (85) lo alcanzan; Quebrada Vigía (83) no.
2. **Ventaja ≥5:** Voluntad Visible supera a AlertaBarrio por **5 puntos**, el mínimo solicitado. Mantiene liderazgo de R2 (88) y mejora por privacidad/evaluación, aunque no se deben tratar fixtures como validación de campo.
3. **Construibilidad:** Voluntad Visible es la opción más robusta: formulario, cinco fixtures, extracción/clustering, abstención, moderación y auditoría offline. AlertaBarrio es reserva visual, condicionada a fallback de GeoJSON; Quebrada es reserva operativa, condicionada a etiquetas legítimas.
4. **Bloqueantes R2–R4:** no hay bloqueo definitivo demostrado en los materiales. Esto **no equivale a declarar “sin bloqueantes”**, porque el significado oficial de R2/R3/R4 falta. Antes de ratificar, confirmar si se exigen datos reales, modelo validado, operación en vivo, reglas de retención o prohibición de fixtures **[CONFIRMAR]**.
5. **Condiciones de no ratificación:** Voluntad Visible debe detener publicación si no puede aplicar borrado/retención y control de acceso; debe usar exclusivamente mensajes sintéticos o cedidos. Si el jurado exige impacto real o datos institucionales, las tres requieren reevaluación.

## Recomendación al capitán A0

**Recomiendo ratificar provisionalmente a Voluntad Visible Moderada como ganadora R3 (90/100), condicionada al cierre de privacidad, moderación, fixture etiquetado y definición de R2–R4.** Cumple el umbral, obtiene ventaja exacta de 5 puntos y tiene la IA más demostrable junto con la menor dependencia geoespacial. Mantener AlertaBarrio (85) como reserva primera por su fuerza visual; no ratificar Quebrada Vigía (83) sin procedencia legítima de etiquetas y separación demostrable de regla versus IA.

## Cierre

- **Qué hice:** puntué las tres propuestas R3 criterio por criterio, comprobé umbral/margen/construibilidad y audité potenciales bloqueantes sin inventar R2–R4.
- **Qué entrego y dónde:** `hackathon/ideas/ronda-3-a2.md`.
- **Supuestos:** la rúbrica de `01-analisis.md` permanece vigente; los fixtures sintéticos rotulados son admisibles salvo regla posterior; las métricas se limitan al fixture.
- **Pendientes [CONFIRMAR]:** definición de R2/R3/R4; retención y privacidad aplicables; licencias y cobertura; procedencia de etiquetas; aceptación de fixtures; métrica mínima; horario, conectividad, entregables y evidencia de funciones desarrolladas durante el evento.

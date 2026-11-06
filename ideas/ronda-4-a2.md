# Ronda 4 — veredicto A2 y decisión recomendada

## Método y límite de certificación

Evalué las tres versiones corregidas contra la rúbrica oficial de `hackathon/01-analisis.md` (20/25/20/15/10/10). Distingo controles diseñados de evidencia demostrada: el borrado, las licencias, el consentimiento y las métricas deben probarse en la demo/entrega. R2, R3 y R4 no están definidos en los documentos disponibles; por ello no certifico “cero bloqueantes” por simple declaración.

## Puntuación independiente

| Propuesta R4 | Innovación | IA pertinente | Impacto | Prototipo | Factibilidad | Pitch | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| **Voluntad Visible — Buzón efímero auditado** | 18 | 23 | 17 | 14 | 9 | 9 | **90/100** |
| AlertaBarrio — Comparador GeoJSON | 17 | 20 | 17 | 14 | 8 | 9 | **85/100** |
| Quebrada Vigía — Ficha sin circularidad | 17 | 18 | 17 | 14 | 8 | 8 | **82/100** |

### Voluntad Visible — 90/100

- **Innovación, 18/20:** integración responsable de extracción, deduplicación y moderación con mínimo dato; el valor está en resolver infoxicación sin publicar rumores, no en afirmar novedad absoluta.
- **IA, 23/25:** NLP estructurado, clustering espacio-temporal y abstención comparados con baseline de palabras clave son funciones concretas. Resto 2: cinco mensajes y una matriz de errores sólo demuestran el fixture; no generalización.
- **Impacto, 17/20:** útil para una mesa municipal/brigada que revisa reportes, sin prometer despacho ni mejora de campo. Adopción y beneficio real **[CONFIRMAR]**.
- **Prototipo, 14/15:** carga, duplicados, ambigüedad, redondeo, baseline, abstención, moderación y borrado forman una demo verificable. Resto 1 por el riesgo de saturar tres minutos.
- **Factibilidad, 9/10:** offline, cinco mensajes sintéticos y librerías livianas; resta 1 porque el borrado local, cachés/logs y control de acceso deben evidenciarse, no sólo describirse.
- **Pitch, 9/10:** narrativa clara de “ruido a incidente auditado”; debe mostrar que cada agrupación requiere confirmación humana.

### AlertaBarrio — 85/100

- **Innovación, 17/20:** comparador microvial bajo escenarios de lluvia supera un mapa estático, aunque es una extensión reconocible de ruteo ponderado.
- **IA, 20/25:** clasificador con fixture etiquetado, explicador restringido y abstención son pertinentes; si no hay etiquetas, queda en scoring heurístico y el crédito de IA puede caer **[CONFIRMAR]**.
- **Impacto, 17/20:** problema urbano comprensible y relevante; no demuestra seguridad, reducción de incidentes ni cobertura real.
- **Prototipo, 14/15:** rutas, escenario, factores, métrica, abstención y fallback tabular son reproducibles; resta 1 por la sensibilidad del mapa/segmentos en el pitch.
- **Factibilidad, 8/10:** GeoJSON local y fallback reducen riesgo, pero licencias/cobertura de capas y exigencia de etiquetas siguen **[CONFIRMAR]**.
- **Pitch, 9/10:** contraste visual fuerte; la advertencia “simulación, no alerta ni ruta segura” debe ser persistente.

### Quebrada Vigía — 82/100

- **Innovación, 17/20:** ficha auditable y análisis de sensibilidad mejoran una matriz de inspección, pero sin etiquetas independientes se aproxima a una heurística convencional.
- **IA, 18/25:** extracción/normalización, anomalías y ficha estructurada son IA acotada; el ranking no puede llamarse aprendido sin etiquetas legítimas. Resto 7 por procedencia todavía abierta y riesgo de circularidad.
- **Impacto, 17/20:** responde a cuadrillas con pocos recursos, sin predecir huaicos; cuatro registros sintéticos no prueban utilidad municipal.
- **Prototipo, 14/15:** baseline, sensibilidad, faltante, ficha y aprobación humana son demostrables; resta 1 por riesgo de que el ranking se interprete como orden operativo.
- **Factibilidad, 8/10:** cálculo liviano, pero catálogo, geología, lluvia, licencias y etiquetas independientes están por verificar.
- **Pitch, 8/10:** pregunta operativa atractiva, pero requiere explicar continuamente “apoyo exploratorio, decide una persona”.

## Umbral, margen y bloqueantes

- **Umbral ≥85:** Voluntad Visible (90) y AlertaBarrio (85) lo cumplen; Quebrada Vigía (82) no.
- **Ventaja ≥5:** Voluntad Visible supera a AlertaBarrio por **5 puntos**, margen mínimo requerido.
- **Construibilidad:** Voluntad Visible es la más segura para una demo offline; AlertaBarrio conserva fallback tabular; Quebrada sólo es reserva si no se exagera el ranking.
- **Bloqueantes:** no existe evidencia documental de un bloqueo definitivo, pero tampoco es posible certificar ausencia: R2–R4 carecen de definición. Condiciones de no ratificación: (1) no poder ejecutar Voluntad sólo en memoria o demostrar borrado; (2) usar mensajes sin consentimiento; (3) no poder mostrar etiquetas/errores del fixture; (4) que R2–R4 exija datos reales u operación en vivo **[CONFIRMAR]**.

## Recomendación al capitán A0

**Recomiendo ratificar provisionalmente Voluntad Visible — Buzón efímero auditado (90/100)**: supera el umbral y mantiene ventaja de 5 puntos, con IA más explícita y menor dependencia geoespacial. La ratificación final debe quedar condicionada a demo en memoria/borrado verificable, mensajes sintéticos o consentimiento, moderación humana y confirmación de R2–R4. AlertaBarrio queda reserva visual (85); Quebrada Vigía, reserva condicionada (82).

## Cierre

- **Qué hice:** puntué R4 criterio por criterio, comprobé umbral, margen, construibilidad y riesgos de no ratificación.
- **Qué entrego y dónde:** `hackathon/ideas/ronda-4-a2.md`.
- **Supuestos:** fixtures rotulados y demo offline son admisibles salvo regla posterior; la rúbrica de `01-analisis.md` sigue vigente.
- **Pendientes [CONFIRMAR]:** definiciones R2–R4, privacidad/retención/borrado, consentimiento, licencias, aceptación de fixtures y heurísticas, horario/conectividad, entregables y evidencia de desarrollo durante el evento.

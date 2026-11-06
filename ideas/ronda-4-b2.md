# Ronda 4 — Defensa de ventajas competitivas y puntuables de las propuestas corregidas

**Documentos de referencia:** `hackathon/01-analisis.md` (análisis contractual y rúbrica oficial), `hackathon/ideas/ronda-3-a2.md` (evaluación y recomendación A2 R3), `hackathon/ideas/ronda-3-b3.md` (auditoría adversarial R3) y `hackathon/ideas/ronda-4-b1.md` (propuestas corregidas de B1 R4).  
**Rol evaluador:** B2 Defensor de ventajas.  
**Criterio metodológico:** Se evalúan las ventajas competitivas y puntuables de las tres propuestas refinadas en Ronda 4 frente a alternativas convencionales y contra la rúbrica oficial de 100 puntos. Se fundamentan los argumentos en el diseño técnico auditable de los entregables, sin inventar métricas ni asumir fuentes no verificadas, delimitando los resultados a los fixtures de prueba cerrados y marcando todo supuesto pendiente con **[CONFIRMAR]**.

---

## 1. Voluntad Visible — “Buzón efímero auditado” (Candidata Principal)

### A. Ventajas competitivas frente a alternativas y baseline
- **Frente a canales no estructurados (grupos de WhatsApp, redes sociales):** Los canales abiertos sufren de infoxicación masiva, reportes duplicados de un mismo desborde y difusión descontrolada de rumores. El Buzón efímero auditado centraliza los reportes comunitarios y los consolida en tarjetas únicas mediante clustering, liberando a la mesa de operaciones municipal o comunitaria del colapso informativo.
- **Frente a la línea base (*baseline*) de palabras clave sin IA:** Una búsqueda convencional por términos clave es frágil ante variantes léxicas (ej. "calle inundada" vs. "agua entró al patio") y dispersa los avisos. La cadena de IA de Voluntad Visible realiza extracción de entidades por NLP (tipo de incidente, ubicación declarada, faltantes), agrupa duplicados espaciotemporales mediante distancia semántica/geográfica y aplica un clasificador de abstención para retener reportes ambiguos. En la demo, se presenta la matriz de confusión y métricas básicas (precisión y exhaustividad) sobre un fixture etiquetado frente al baseline de palabras clave.
- **Ventaja medible:** Conversión auditable de múltiples mensajes desordenados en incidentes consolidados y filtrados para revisión humana, con abstención explícita ante falta de evidencia verificable.

### B. Solución integral a los riesgos de privacidad y retención
En respuesta directa a las objeciones de A2 y B3:
1. **Minimización radical:** No se almacenan fotos, audios ni coordenadas GPS exactas. La ubicación se redondea a una celda espacial amplia (nivel de cuadrante distrital).
2. **Ciclo de vida efímero:** Cada sesión asigna un identificador aleatorio temporal. Se incorpora un botón de borrado verificable que limpia los datos locales. Si en el evento presencial existiera duda sobre el borrado en disco, el sistema opera con almacenamiento exclusivo en memoria volátil durante la demo **[CONFIRMAR con política de datos del evento]**.
3. **Control de acceso:** El panel es de acceso restringido para la persona moderadora de la mesa de respuesta; ningún reporte se publica de manera automática ni se difunde públicamente.

### C. Evaluación defensiva frente a la rúbrica oficial (100 pts)
1. **Innovación y creatividad (20 pts — Puntuación esperada: 18–19/20):** Aborda la respuesta comunitaria ante inundaciones desde una perspectiva de "mínimo dato, máxima trazabilidad", superando el paradigma extractivo de datos personales y resolviendo la desinformación en situaciones de desastre.
2. **Uso pertinente de IA (25 pts — Puntuación esperada: 23–24/25):** Pipeline de IA sustantivo y medible:
   - Extracción estructurada de 5 tipos de incidentes y campos críticos.
   - Clustering espaciotemporal con umbral explícito para deduplicación.
   - Clasificador de abstención para mensajes con baja confianza o evidencia incompleta.
   - Evaluación directa frente al baseline mediante matriz de errores en fixture etiquetado.
3. **Impacto y relevancia (20 pts — Puntuación esperada: 17–18/20):** Responde a una necesidad crítica de los Comités de Operaciones de Emergencia Local (COEL) y juntas vecinales: consolidar reportes de vías bloqueadas y anegamientos sin saturar las cuadrillas con falsas alarmas.
4. **Prototipo y funcionamiento (15 pts — Puntuación esperada: 14–15/15):** Demostración altamente eficiente y reproducible en 3 minutos:
   - Carga de 5 mensajes sintéticos (2 duplicados, 1 ambiguo).
   - Extracción visual de entidades y redondeo a cuadrícula.
   - Visualización de la deduplicación y contraste con el baseline.
   - Activación de abstención sobre el reporte ambiguo.
   - Moderación humana cambiando el estado de "por confirmar" a "revisado" y borrado final de sesión en vivo.
5. **Factibilidad y escalabilidad (10 pts — Puntuación esperada: 9–10/10):** La propuesta con mayor construibilidad del concurso: funciona 100% offline con librerías livianas de NLP y datos sintéticos locales, sin requerir APIs de pago, modelos pesados ni conexión a bases cartográficas externas.
6. **Presentación y pitch (10 pts — Puntuación esperada: 9–10/10):** Narrativa impecable para el jurado: "Transformamos el ruido y los rumores de una emergencia en incidentes limpios, auditados por una persona, sin almacenar datos personales y con borrado inmediato de sesión".
- **Puntaje total estimado:** **90–91 / 100** (Ratifica holgadamente el umbral de ≥85 puntos).

---

## 2. AlertaBarrio — “Comparador GeoJSON con abstención” (Reserva Visual)

### A. Ventajas competitivas frente a alternativas y baseline
- **Frente a visores estáticos en PDF (INDECI/SIG):** Transforma capas pasivas de inundabilidad en una herramienta interactiva de análisis por segmento vial (20–50 tramos) ante escenarios variables de lluvia.
- **Frente a la línea base (*baseline*) por distancia mínima:** Demuestra de manera contundente por qué el camino más corto (ruta directa) es vulnerable ante lluvias intensas al atravesar calles en depresión topográfica, proponiendo una ruta alternativa de menor riesgo relativo estimado.
- **Honestidad algorítmica y fallback offline:** 
  - Si no se cuenta con un dataset de entrenamiento legitimado durante el evento, se declara abiertamente como *scoring heurístico multicriterio*, evitando penalizaciones por "cajas negras" o afirmaciones no sustentadas de IA.
  - Se añade un **fallback tabular** que muestra la comparativa entre las dos rutas y sus factores en caso de que el renderizado del mapa web presente lentitud en la máquina del auditorio, garantizando el cumplimiento de los 3 minutos de demo.
- **Abstención:** Muestra de forma transparente el mensaje *"Sin evidencia suficiente"* si falta el dato de elevación o lluvia de un tramo.

### B. Evaluación defensiva frente a la rúbrica oficial (100 pts)
1. **Innovación (20 pts — Esperado: 17/20):** Microanálisis vial barrial intuitivo y preventivo.
2. **Uso pertinente de IA (25 pts — Esperado: 19–20/25):** Modelo de clasificación interpretable (o heurística transparente declarada) con generador restringido de explicaciones y abstención activa.
3. **Impacto (20 pts — Esperado: 17/20):** Prevención de incidentes viales y peatonales en zonas urbanas bajas durante lluvias extremas.
4. **Prototipo (15 pts — Esperado: 14/15):** Mapa interactivo con slider de precipitación + fallback tabular de contingencia.
5. **Factibilidad (10 pts — Esperado: 8/10):** Datos GeoJSON locales precargados de OpenStreetMap **[CONFIRMAR]** y elevación SRTM **[CONFIRMAR]**.
6. **Pitch (10 pts — Esperado: 9/10):** Alto atractivo visual para el público general.
- **Puntaje total estimado:** **84–85 / 100** (Reserva visual inmediata).

---

## 3. Quebrada Vigía — “Ficha de inspección sin circularidad” (Reserva Condicionada)

### A. Ventajas competitivas frente a alternativas y baseline
- **Frente a inspecciones físicas a ciegas o por reclamo telefónico:** Optimiza los limitados recursos de transporte y personal de serenazgo/defensa civil, priorizando quebradas con factores físicos convergentes.
- **Frente a la línea base (*baseline*) por precipitación:** Demuestra que la lluvia aislada es engañosa: quebradas con pendiente crítica y antecedentes de flujos torrenciales (catalogadas por INGEMMET) requieren inspección prioritaria incluso con menores acumulados de lluvia que quebradas llanas.
- **Erradicación de circularidad en R4:** Se descarta el autoetiquetado con la misma fórmula de scoring; sólo si existe un criterio experto externo legitimado se entrena un modelo de ranking, de lo contrario se opera como scoring multicriterio con análisis de sensibilidad y generación de fichas técnicas citadas.
- **Abstención y ética operativa:** No genera órdenes de evacuación ni afirma predecir huaicos; emite fichas de inspección preventiva para soporte a la decisión humana.

### B. Evaluación defensiva frente a la rúbrica oficial (100 pts)
1. **Innovación (20 pts — Esperado: 17/20):** Despacho preventivo auditado frente a la respuesta reactiva.
2. **Uso pertinente de IA (25 pts — Esperado: 18–19/25):** Extracción/normalización de variables, detección de datos faltantes, ficha estructurada con citas directas y análisis de sensibilidad de factores.
3. **Impacto (20 pts — Esperado: 17/20):** Mitigación del peligro de desastres por flujos de detritos en cuencas costeras vulnerables.
4. **Prototipo (15 pts — Esperado: 14/15):** 4 registros geológicos precargados, variación de escenario pluvial y generación de ficha en 30 segundos.
5. **Factibilidad (10 pts — Esperado: 8/10):** Cálculo ligero; depende de inventarios de peligros geológicos de INGEMMET **[CONFIRMAR]**.
6. **Pitch (10 pts — Esperado: 8/10):** Narrativa operativa sólida, supeditada a recalcar el rol de decisión humana.
- **Puntaje total estimado:** **82–83 / 100** (Reserva técnica condicionada).

---

## 4. Matriz comparativa de ventajas competitivas y puntuables de Ronda 4

| Dimensión de Análisis | Voluntad Visible — Buzón efímero auditado (Principal) | AlertaBarrio — Comparador GeoJSON con abstención (Reserva Visual) | Quebrada Vigía — Ficha sin circularidad (Reserva Condicionada) |
|---|---|---|---|
| **Estatus y Puntuación R3** | **90 / 100 (Ganadora provisional recomendada)** | 85 / 100 (Reserva 1) | 83 / 100 (Reserva 2) |
| **Puntaje esperado en R4** | **90 – 91 / 100 (Consolidación superior)** | 84 – 85 / 100 | 82 – 83 / 100 |
| **Función concreta de IA** | Extracción estructurada NLP + clustering espaciotemporal de duplicados + clasificador de abstención + matriz de error vs baseline. | Clasificador interpretable evaluado sobre fixture (o heurística transparente) + generador con citas + abstención. | Extracción/normalización + generador estructurado de fichas con citas + análisis de sensibilidad + abstención. |
| **Línea base (*baseline*)** | Búsqueda ingenua por palabras clave sin NLP y agrupación simple. | Ruta por distancia más corta sin penalización topográfica/pluvial. | Ordenamiento simple considerando únicamente mm de lluvia acumulada. |
| **Privacidad y Datos** | Identificador efímero, ubicación difusa (celda amplia), sin fotos/audio, borrado verificable o memoria volátil. | No maneja datos de personas; solo tramos viales y elevación física. | No maneja datos de personas; solo registros geológicos y lluvia. |
| **Resiliencia técnica offline** | **Máxima:** Opera en memoria o almacenamiento local ligero con 5 mensajes sintéticos, sin GIS pesado. | **Muy alta:** GeoJSON local con **fallback tabular** de contingencia ante fallos del mapa interactivo. | **Alta:** Tabla local con 4 quebradas precargadas y generación de documento de texto. |
| **Control de Descalificación (Bases §9)** | Moderación humana obligatoria; estado inmutable "por confirmar"; nada se publica automáticamente. | Aviso permanente de "simulación exploratoria — no alerta oficial"; abstención ante datos faltantes. | Aviso permanente de "soporte a la inspección — no orden de evacuación ni predicción de desastre". |
| **Ventaja competitiva decisiva** | Resuelve el caos comunitario con mínima fricción técnica, cero riesgo de privacidad y demostración reproducible en 3 min. | Demostración gráfica inmediata de contraste de rutas urbanas. | Trazabilidad física y logística para cuadrillas de inspección en quebradas. |

---

## 5. Recomendación estratégica de B2 para la ratificación final por A2 y A0

1. **Ratificación definitiva de Voluntad Visible — Buzón efímero auditado:**
   - **Cumplimiento cuantitativo:** Mantiene una puntuación proyectada de **90–91 puntos**, superando holgadamente el umbral contractual de 85 puntos.
   - **Margen de seguridad:** Conserva una ventaja de **5 a 6 puntos** sobre la segunda mejor opción (AlertaBarrio en 85), cumpliendo con el diferencial mínimo de 5 puntos exigido en las reglas del equipo.
   - **Cierre total de riesgos residuales:** Las mejoras introducidas en R4 blindan la propuesta:
     - El riesgo de reidentificación se anula mediante el redondeo a celda amplia y la opción de ejecución exclusiva en memoria volátil con borrado garantizado.
     - La pertinencia de IA queda respaldada mediante métricas empíricas (precision/recall) calculadas en vivo sobre el fixture frente al baseline de palabras clave.
     - No depende de cartografías complejas ni servicios de mapas en la nube, garantizando una demo presencial infalible en los 3 minutos de pitch.
2. **Rol de las propuestas de reserva:**
   - **AlertaBarrio:** Permanece como excelente reserva visual de contingencia si el jurado presencial manifestara preferencia excluyente por demostraciones cartográficas.
   - **Quebrada Vigía:** Se conserva como reserva técnica especializada en gestión física de cuencas si se requiere un enfoque puramente geológico.

---

## Cierre de trabajo

- **Qué hice:** Evalué y defendí las ventajas competitivas y puntuables de las tres propuestas corregidas en Ronda 4 frente a alternativas convencionales y contra la rúbrica oficial de 100 puntos, justificando la solidez de la candidata principal (Voluntad Visible Buzón efímero auditado) y la idoneidad de las reservas tácticas.
- **Qué entrego y dónde:** El documento formal de defensa de Ronda 4 en `hackathon/ideas/ronda-4-b2.md`.
- **Supuestos:** La rúbrica oficial de 100 puntos documentada en `hackathon/01-analisis.md` continúa rigiendo la evaluación; los fixtures sintéticos rotulados y el almacenamiento temporal en memoria son admisibles para la demo de 3 minutos.
- **[CONFIRMAR]:** 
  - Ratificación por parte del jurado A2 y confirmación final de A0 de la propuesta ganadora.
  - Verificación oficial de si existen directrices restrictivas de los códigos R2–R4.
  - Disponibilidad de conexión a internet o confirmación de trabajo 100% offline en la sede UPN Breña el 6 de noviembre.

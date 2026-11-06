# Ronda 3 — Defensa de refinamientos de las tres propuestas finalistas

**Documentos de referencia:** `hackathon/01-analisis.md` (análisis contractual y rúbrica oficial), `hackathon/ideas/ronda-2-a2.md` (evaluación A2 R2 y recomendación provisional), `hackathon/ideas/ronda-2-b3.md` (auditoría adversarial R2) y `hackathon/ideas/ronda-3-b1.md` (refinamientos de B1 R3).  
**Rol evaluador:** B2 Defensor de ventajas.  
**Criterio metodológico:** Se defienden los refinamientos técnicos y contractuales de las tres propuestas finalistas en Ronda 3 (Voluntad Visible Moderada, AlertaBarrio Verificable y Quebrada Vigía Auditada). Atendiendo al control crítico de A2 y a las advertencias de B3, **sólo se formulan métricas fundamentadas en los fixtures de prueba y datasets etiquetados de la demo**, sin inventar estadísticas de campo ni dar por sentada la disponibilidad de APIs o fuentes institucionales. Todo parámetro dependiente de verificación externa se consigna con **[CONFIRMAR]**.

---

## 1. Voluntad Visible Moderada — edición “mínimo dato, máxima trazabilidad”

### A. Ventajas competitivas frente a alternativas y baseline
- **Frente a canales informales (WhatsApp vecinal, redes sociales):** Los canales abiertos sufren de dispersión, saturación de mensajes idénticos y difusión de rumores no confirmados. Voluntad Visible centraliza y estructura los datos en un panel auditable para la mesa de respuesta local.
- **Frente al baseline sin IA (búsqueda por palabras clave y agrupación simple):** El baseline mecánico falla ante la variedad léxica comunitaria (ej. "se salió el río" vs. "huaico en la avenida") y dispersa reportes sobre un mismo evento. El pipeline de IA refinado en R3:
  1. Extrae de forma estructurada el tipo de incidente, la referencia geográfica aproximada y los campos obligatorios faltantes.
  2. Aplica clustering espaciotemporal con umbral de similitud explícito y visible para agrupar duplicados en un único incidente.
  3. Ejecuta un clasificador de abstención que retiene los mensajes con ambigüedad o falta de evidencia crítica en estado *"por confirmar — evidencia insuficiente"*.
- **Métricas sustentadas sobre fixture local:** A diferencia de R1 y R2, B1 incorpora en R3 un conjunto de evaluación cerrado y etiquetado (fixtures sintéticos) que permite contrastar en vivo la matriz de confusión y métricas básicas (precisión / exhaustividad) frente al baseline de palabras clave, evidenciando de forma empírica la pertinencia del componente de IA.

### B. Privacidad por diseño y eliminación de reidentificación
- En respuesta directa a las objeciones de privacidad de A2 y B3:
  - Se suprime la retención de texto libre íntegro y coordenadas GPS precisas tras la extracción estructurada.
  - La ubicación se redondea a una celda espacial amplia (nivel de cuadrante o sector vecinal).
  - Se asigna un identificador seudonimizado con política de retención corta **[CONFIRMAR con normativa de datos personales]**.
  - No se emplean imágenes, audio ni reconocimiento biométrico durante la hackathon.
  - La tarjeta de incidente permanece en estado *"por confirmar"* hasta la validación obligatoria de un moderador humano (*human-in-the-loop*).

### C. Evaluación defensiva frente a la rúbrica oficial (100 pts)
1. **Innovación y creatividad (20 pts):** Resuelve el dilema ético y técnico de la respuesta ciudadana en emergencias mediante un enfoque de "mínimo dato, máxima trazabilidad", filtrando el caos sin invadir la privacidad ni generar desinformación.
2. **Uso pertinente de IA (25 pts):** Cadena de IA rigurosa y demostrable: extracción NLP estructurada + clustering espaciotemporal de duplicados + filtro de abstención. La inclusión del evaluador con matriz de errores frente al baseline justifica plenamente los 25 puntos de IA, superando la objeción de "IA como simple adorno".
3. **Impacto y relevancia (20 pts):** Descongestiona las mesas de operaciones municipales y comités comunitarios durante inundaciones y desbordes, permitiendo priorizar la inspección y el despacho de auxilio hacia zonas con múltiples reportes coincidentes.
4. **Prototipo y funcionamiento (15 pts):** Demo limpia, estructurada y sin fricción para los 3 minutos de pitch:
   - Carga de 5 mensajes sintéticos (dos duplicados y uno ambiguo).
   - Extracción estructurada y redondeo de ubicación espacial en pantalla.
   - Comparación instantánea contra el baseline de palabras clave mostrando la mejora de detección.
   - Demostración de abstención automática ante el caso ambiguo.
   - Aprobación manual de un reporte por el moderador humano con registro de auditoría.
5. **Factibilidad y escalabilidad (10 pts):** Es la propuesta con menor dependencia de infraestructura externa: no requiere modelos digitales de elevación ni capas geológicas complejas; opera íntegramente offline con fixtures locales y librerías livianas de NLP.
6. **Presentación y pitch (10 pts):** Narrativa visual inmediata: "De 5 mensajes caóticos en un chat a un único incidente geocodificado por cuadrante, auditado por una persona y sin almacenar datos privados".

### D. Resguardo contractual y supuestos
- Cumple con Bases §9 al garantizar que ningún reporte se publica como hecho oficial sin moderación humana.
- **[CONFIRMAR]:** Política de retención temporal y compatibilidad de campos con el sistema EDAN de INDECI.

---

## 2. AlertaBarrio Verificable — edición “comparador abstencionista”

### A. Ventajas competitivas frente a alternativas y baseline
- **Frente a visores macroestáticos:** Los mapas de INDECI/SIG proporcionan información agregada de susceptibilidad pero no orientan en el nivel microvial durante una lluvia intensa.
- **Frente a la línea base (*baseline*) por distancia mínima:** El ruteo convencional calcula la ruta más corta sin considerar la acumulación hídrica. AlertaBarrio compara lado a lado la ruta convencional directa (que atraviesa calles bajas inundables) con la ruta alternativa de menor riesgo estimado por cota y precipitación.
- **Refinamiento R3 de la función de IA:** Se redefine formalmente como un *comparador offline de rutas con clasificador interpretable*. Si se cuenta con un dataset local etiquetado de tramos críticos, se entrena un clasificador interpretable; si no se dispone de etiquetas legítimas, se etiqueta transparentemente como *scoring heurístico multicriterio*, evitando engañar al jurado. El componente de lenguaje se restringe a generar explicaciones basadas exclusivamente en las variables físicas activas.
- **Mecanismo estricto de abstención:** Si un tramo carece de dato de elevación validado o umbral de lluvia, el sistema no extrapola datos ficticios; emite el mensaje visible: *"Sin evidencia suficiente — no se genera estimación de riesgo para este tramo"*.

### B. Evaluación defensiva frente a la rúbrica oficial (100 pts)
1. **Innovación y creatividad (20 pts):** Herramienta pedagógica y preventiva de microescala barrial que empodera a familias y brigadas locales para anticipar puntos críticos de acumulación de agua.
2. **Uso pertinente de IA (25 pts):** Modelo de clasificación interpretable con métricas explícitas sobre fixture (o heurística auditada) + generador restringido con citas directas a las variables físicas + regla de abstención.
3. **Impacto y relevancia (20 pts):** Disminuye el riesgo de peatones y vehículos atrapados en badenes y pasos a desnivel durante lluvias anómalas de El Niño.
4. **Prototipo y funcionamiento (15 pts):** Interfaz en mapa interactivo local con 20–50 segmentos precargados de un distrito piloto:
   - Selección de origen/destino y trazado simultáneo de la ruta por distancia vs. ruta de menor riesgo relativo.
   - Variación de escenario de lluvia con recálculo visual de colores por tramo.
   - Demostración de abstención al ocultar una variable de elevación.
   - Aviso contractual permanente en pantalla: *"Simulación exploratoria — no constituye alerta oficial ni ruta garantizada"*.
5. **Factibilidad y escalabilidad (10 pts):** Totalmente ejecutable offline mediante archivos GeoJSON precargados y datos abiertos de OpenStreetMap **[CONFIRMAR]** y elevación SRTM **[CONFIRMAR]**.
6. **Presentación y pitch (10 pts):** Muy potente visualmente para el jurado: la diferencia entre la ruta ingenua y la ruta precavida se comprende en menos de 30 segundos.

### C. Resguardo contractual y supuestos
- Erradicación absoluta de términos como "ruta segura" o "alerta oficial", blindando la propuesta contra penalizaciones por responsabilidad civil o descalificación bajo las Bases (§9).
- **[CONFIRMAR]:** Licencias de capas geográficas del distrito piloto y formato de los datos de lluvia del SENAMHI.

---

## 3. Quebrada Vigía Auditada — edición “ranking reproducible para inspección”

### A. Ventajas competitivas frente a alternativas y baseline
- **Frente a inspecciones físicas por turno o reclamo vecinal:** Las brigadas municipales dispersan sus escasos vehículos atendiendo llamadas dispersas sin saber qué cuenca alta está recibiendo mayor descarga pluvial.
- **Frente al baseline sin IA (ordenamiento únicamente por lluvia acumulada):** Quebrada Vigía demuestra que ordenar solo por milímetros de lluvia es insuficiente: una quebrada con lluvia moderada pero con alta pendiente y suelo inestable con antecedentes de flujo de detritos presenta mayor urgencia de inspección que una quebrada plana con lluvia intensa.
- **Refinamiento R3 de la función de IA:** 
  1. Si se cuenta con pares de entrenamiento etiquetados por especialistas de gestión de riesgos, se ejecuta un modelo de ranking interpretable; si no se cuenta con datos de entrenamiento legitimados, se declara explícitamente como *scoring multicriterio ponderado*, evitando vender una fórmula matemática como "IA aprendida".
  2. Generador estructurado de fichas técnicas de inspección preventiva que cita textualmente el origen, fecha y valor de cada variable (pendiente, precipitación, antecedente).
  3. Análisis de sensibilidad visible que muestra cómo varía la posición de una quebrada al ajustar las ponderaciones.
  4. Umbral de abstención activo que solicita revisión humana inmediata cuando falta información crítica.

### B. Evaluación defensiva frente a la rúbrica oficial (100 pts)
1. **Innovación y creatividad (20 pts):** Optimización logística preventiva del despacho de cuadrillas de defensa civil local mediante priorización física y trazable.
2. **Uso pertinente de IA (25 pts):** Modelo de ranking interpretable o heurística explícita complementada con generación estructurada de fichas técnicas trazables y análisis de sensibilidad de factores.
3. **Impacto y relevancia (20 pts):** Enfoque directo en la mitigación del peligro de huaicos en quebradas de la costa central y norte durante El Niño, enfocado en el soporte a cuadrillas y comités de quebrada.
4. **Prototipo y funcionamiento (15 pts):** Demostración ágil con 4 a 10 registros georreferenciados:
   - Tabla comparativa entre el baseline de lluvia y el ranking multivariable.
   - Control de escenario de lluvia y recálculo del orden en vivo.
   - Activación de abstención al retirar la variable geológica de una quebrada.
   - Generación instantánea de la ficha de inspección preventiva con la indicación expresa: *"Uso exclusivo de apoyo a la decisión humana"*.
5. **Factibilidad y escalabilidad (10 pts):** Se apoya en inventarios públicos de peligros geológicos de INGEMMET **[CONFIRMAR]** y cartas de pendientes. Cálculo liviano y reproducible en cualquier equipo estándar.
6. **Presentación y pitch (10 pts):** Responde de manera clara y directa la pregunta operativa: "¿Adónde enviamos la primera brigada esta tarde?", respaldada por datos auditables y sin falsas promesas predictivas.

### C. Resguardo contractual y supuestos
- La ficha y la interfaz declaran explícitamente que no predicen la ocurrencia de huaicos ni ordenan evacuaciones públicas, cumpliendo las restricciones éticas y de calidad de las Bases.
- **[CONFIRMAR]:** Disponibilidad del catálogo de quebradas activas del distrito seleccionado en el repositorio de INGEMMET/CENEPRED.

---

## 4. Matriz comparativa de ventajas y métricas sustentadas en Ronda 3

| Dimensión de Evaluación | Voluntad Visible Moderada (R3) | AlertaBarrio Verificable (R3) | Quebrada Vigía Auditada (R3) |
|---|---|---|---|
| **Estatus en R2 (A2)** | **88 / 100 (Recomendada como ganadora provisional)** | 83 / 100 (Reserva visual) | 82 / 100 (Reserva operativa) |
| **Refinamiento central de IA en R3** | Extracción estructurada + clustering espaciotemporal con umbral visible + clasificador de abstención + matriz precision/recall sobre fixture. | Comparador offline de rutas con clasificador interpretable (o heurística declarada) + generador restringido con citas + abstención. | Ranking interpretable (o scoring multicriterio explícito) + generador estructurado de fichas con citas + análisis de sensibilidad + abstención. |
| **Línea base (*baseline*) de contraste** | Búsqueda por palabras clave sin NLP y agrupación ingenua. | Ruta convencional por distancia más corta sin ponderación pluvial ni cota. | Ordenamiento simple considerando únicamente mm de lluvia acumulada. |
| **Sustento de métricas** | Matriz de confusión (precision/recall) y reducción de duplicados medidos sobre fixture etiquetado de 5 mensajes. | Contraste de metros de exposición a tramos críticos entre ruta base vs ruta estimada sobre fixture de 20-50 segmentos. | Análisis de sensibilidad de pesos y variación de orden sobre fixture de 4-10 quebradas. |
| **Privacidad y Datos Sensibles** | Supresión de texto libre y GPS fino; redondeo a celda amplia; seudonimización y retención corta. | No maneja datos de personas; solo información física vial y de elevación. | No maneja datos de personas; solo registros geológicos y pluviométricos. |
| **Mitigación de Descalificación (Bases §9)** | Moderación humana obligatoria antes de publicar; estado inmutable "por confirmar"; casos sintéticos etiquetados. | Cartel permanente de "simulación exploratoria — no alerta oficial"; abstención ante datos faltantes. | Cartel de "soporte a la inspección preventiva — no orden de evacuación"; decisión humana obligatoria. |
| **Resiliencia técnica de la demo en 3 min** | **Máxima:** Opera íntegramente offline con fixtures locales de texto sin dependencia de geometrías GIS pesadas. | **Alta:** Requiere capas GeoJSON locales y renderizado en mapa web preconfigurado. | **Alta:** Requiere tabla de datos geológicos y mapa local preconfigurado. |

---

## 5. Recomendación estratégica de B2 para la ratificación final

1. **Ratificación de Voluntad Visible Moderada como propuesta ganadora:**
   - La propuesta consolida su liderazgo al subsanar rigurosamente los dos únicos flancos vulnerables señalados por A2 y B3 en R2:
     - **Privacidad resuelta:** implementa minimización radical de datos (difuminado de ubicación a cuadrante, eliminación de texto libre y retención corta).
     - **IA sustantiva probada:** incorpora un conjunto de evaluación cerrado que mide precisión y recall frente al baseline, demostrando valor objetivo de la IA sin inventar cifras de campo.
   - Es la opción con mayor factibilidad operativa y menor riesgo de fallo en vivo durante el pitch presencial de 3 minutos, al no depender de cartografías complejas ni servicios GIS externos.
2. **Mantenimiento de reservas estratégicas:**
   - Si la organización de la hackathon exige explícitamente un componente cartográfico interactivo, **AlertaBarrio Verificable** queda blindada técnicamente con su comparador offline de dos rutas y abstención estricta.
   - Si el panel evaluador prioriza la gestión municipal de riesgos físicos en cuenca, **Quebrada Vigía Auditada** aporta una solución de despacho preventivo metodológicamente transparente con análisis de sensibilidad y fichas auditables.

---

## Cierre de trabajo

- **Qué hice:** Defendí de forma rigurosa y comparativa los refinamientos de las tres propuestas finalistas en Ronda 3, sustentando el uso pertinente de IA con baselines y métricas delimitadas a fixtures de prueba, acreditando las salvaguardas de privacidad y abstención, y estructurando la matriz comparativa de ventajas frente a la rúbrica de 100 puntos.
- **Qué entrego y dónde:** El documento formal de defensa de Ronda 3 en `hackathon/ideas/ronda-3-b2.md`.
- **Supuestos:** La rúbrica oficial de 100 puntos documentada en `hackathon/01-analisis.md` se aplica consistentemente; los fixtures sintéticos rotulados y el cálculo offline son válidos para la demostración presencial de 3 minutos en UPN Breña.
- **[CONFIRMAR]:** 
  - Aprobación formal por parte del jurado A2 y ratificación de A0 de la propuesta ganadora.
  - Verificación de definiciones de los códigos R2–R4 si la organización los publicara antes del evento.
  - Regla definitiva sobre tamaño de equipo (1–6 según Bases vs. 3–6 según Detalle) y horario efectivo del 6 de noviembre.

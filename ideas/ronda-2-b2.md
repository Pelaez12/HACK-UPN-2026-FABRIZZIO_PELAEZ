# Ronda 2 — Defensa de ventajas de las tres propuestas mejoradas

**Documentos de referencia:** `hackathon/01-analisis.md` (análisis contractual y rúbrica oficial), `hackathon/ideas/ronda-1-a2.md` (evaluación y observaciones críticas del jurado A2), `hackathon/ideas/ronda-1-a0-decision.md` (decisión de A0) y `hackathon/ideas/ronda-2-b1.md` (propuestas mejoradas de B1).  
**Rol evaluador:** B2 Defensor de ventajas.  
**Criterio metodológico:** Se defienden las tres propuestas finalistas optimizadas en Ronda 2 (AlertaBarrio Verificable, Voluntad Visible Moderada y Quebrada Vigía Auditada) frente a alternativas convencionales y contra los seis criterios de la rúbrica oficial de 100 puntos. Atendiendo al control crítico de A2 en R1, **no se presentan hipótesis operativas ni metas de diseño como hechos consumados** (evitando afirmar tiempos fijos de respuesta, porcentajes de reducción no probados o adopción garantizada sin evidencia); toda fuente, licencia o métrica por corroborar se marca explícitamente con **[CONFIRMAR]**.

---

## 1. AlertaBarrio Verificable — rutas de menor riesgo estimado

### A. Ventajas competitivas frente a alternativas y frente a baseline
- **Frente a visores y mapas macro estáticos (INDECI/SIG):** Los mapas convencionales muestran áreas inundables agregadas a nivel distrital o departamental, sin resolución de calle ni capacidad de actualizarse ante variaciones en el volumen de lluvia. AlertaBarrio Verificable calcula el riesgo estimado a nivel de tramo vial (20–50 segmentos en el piloto) combinando topografía relativa (pendientes/elevación) y escenarios de precipitación.
- **Frente a navegadores comerciales vehiculares (Google Maps, Waze):** Los navegadores comerciales optimizan por congestión vehicular y tiempo de viaje, desconociendo depresiones topográficas o zonas ciegas de drenaje que se transforman en trampas de agua.
- **Frente a la línea base (*baseline*) sin IA:** Comparado con un ruteo geográfico estándar (camino más corto por distancia euclidiana o vial), AlertaBarrio Verificable penaliza activamente los segmentos con riesgo pluvial y topográfico estimado. Durante la demo se contrasta la ruta convencional directa (que cruza el tramo anegado) frente a la ruta sugerida de menor riesgo relativo, evidenciando de forma objetiva la utilidad de la ponderación algorítmica.
- **Mecanismo de abstención (*fail-safe*):** A diferencia de modelos que interpolan o inventan datos cuando hay vacíos de información, el sistema incorpora un umbral de abstención: si falta la elevación confirmada o la precipitación de un tramo, emite el estado explícito *"sin evidencia suficiente para evaluar riesgo"*, evitando inducir al usuario a un falso sentido de seguridad.

### B. Evaluación defensiva frente a la rúbrica oficial (100 pts)
1. **Innovación y creatividad (20 pts):** Desplaza el paradigma de "navegación por congestión" hacia "navegación preventiva ante anegamiento urbano" a microescala barrial, con interfaz intuitiva orientada a peatones, comerciantes y brigadas locales.
2. **Uso pertinente de IA (25 pts):** La función de IA está delimitada y justificada: un modelo de clasificación/scoring calcula el nivel de riesgo por tramo con base en parámetros físicos reales o simulados, y un generador restringido redacta una explicación breve citando únicamente las variables de elevación y lluvia del tramo. Se prescinde de agentes autónomos innecesarios o modelos sobredimensionados.
3. **Impacto y relevancia (20 pts):** Atiende un problema recurrente durante El Niño costero: la desorientación en medio de precipitaciones extremas en zonas urbanas densas, protegiendo vidas y facilitando la movilidad preventiva de vecinos y brigadas.
4. **Prototipo y funcionamiento (15 pts):** Demostración altamente robusta para el pitch: utiliza un conjunto precargado de 20–50 tramos viales de un distrito piloto en formato GeoJSON, lo que permite ejecutar la simulación de forma local y offline si la conectividad del auditorio falla. Muestra claramente:
   - Ruta base vs. ruta de menor riesgo estimado.
   - Cambio dinámico de colores por tramo al variar el escenario de lluvia.
   - Activación de advertencia y abstención al simular la pérdida de un dato crítico.
5. **Factibilidad y escalabilidad (10 pts):** Emplea especificaciones abiertas de OpenStreetMap **[CONFIRMAR]** y modelos digitales de elevación públicos (SRTM/ALOS PALSAR **[CONFIRMAR]**). Es técnicamente desplegable como visor web progresivo (PWA) de bajo consumo de datos en una ventana de implementación orientativa inferior a 6 meses **[CONFIRMAR]**.
6. **Presentación y pitch (10 pts):** Narrativa visual de máxima claridad para los 3 minutos de pitch: el jurado observa cómo un tramo se anega en la simulación y cómo el sistema recalcula la alternativa explicando el porqué, mostrando siempre en pantalla el aviso: *"Simulación — no constituye alerta oficial"*.

### C. Resguardo contractual y supuestos
- Se eliminó la etiqueta de "ruta segura" para erradicar cualquier garantía infundada de riesgo cero. Se adopta la denominación contractual rigurosa: *"ruta de menor riesgo estimado"*.
- **[CONFIRMAR]:** Confirmar la licencia y resolución de la cuadrícula de elevación (ej. SRTM 30m vs. mapas municipales) y la disponibilidad de datos históricos de lluvia de SENAMHI para calibrar los escenarios del piloto.

---

## 2. Voluntad Visible Moderada — incidentes comunitarios con privacidad

### A. Ventajas competitivas frente a alternativas y frente a baseline
- **Frente a canales informales caóticos (grupos de WhatsApp / publicaciones en redes sociales):** Los grupos comunitarios abiertos colapsan con cientos de mensajes superpuestos, rumores, audios extensos e información desactualizada, impidiendo que una mesa distrital de operaciones identifique prioridades de apoyo.
- **Frente a formularios rígidos de mesa de partes o call centers saturados:** Los trámites burocráticos exigen detalles formales que una persona afectada por un desborde no puede llenar en medio de una emergencia.
- **Frente a la línea base (*baseline*) sin IA:** B1 incorpora una comparación visible entre una búsqueda manual por palabras clave (ej. buscar "inundación") y el pipeline de IA. Mientras que el baseline mecánico genera falsos positivos y dispersa reportes sobre un mismo evento, la extracción por NLP clasifica entidad, urgencia y ubicación aproximada, y el agrupamiento espaciotemporal fusiona mensajes duplicados en una única ficha de incidente.
- **Privacidad y moderación estricta (*human-in-the-loop*):** La propuesta en R2 restringió deliberadamente el alcance a texto y georreferenciación voluntaria aproximada (eliminando reconocimiento facial, voz o imágenes sensibles). Seudonimiza los reportes y establece como regla de diseño inviolable que ningún reporte se publica como hecho confirmado sin la aprobación previa de un moderador humano. La categoría "no verificable" se redefine objetivamente como "falta de evidencia mínima" y nunca como un detector de mentiras.

### B. Evaluación defensiva frente a la rúbrica oficial (100 pts)
1. **Innovación y creatividad (20 pts):** Combina la participación ciudadana (*crowdsourcing*) con un filtro algorítmico de ordenamiento y desduplicación, respetando la privacidad y resolviendo la sobrecarga de datos en centros de coordinación.
2. **Uso pertinente de IA (25 pts):** Cadena de procesamiento de lenguaje natural (NLP) acotada y verificable:
   - Extracción de tipología de incidente (desborde, bloqueo vial, anegamiento de vivienda).
   - Extracción de ubicación declarada y nivel de urgencia relativo.
   - Clustering espaciotemporal para agrupar duplicados de un mismo suceso.
   - La IA asiste y pre-clasifica para la cola de moderación, pero no reemplaza el criterio del operador humano.
3. **Impacto y relevancia (20 pts):** Mejora sustantivamente la capacidad operativa de comités de operaciones de emergencia distritales (COEL), juntas vecinales y brigadas voluntarias, canalizando la ayuda comunitaria hacia puntos críticos no atendidos.
4. **Prototipo y funcionamiento (15 pts):** Demostración ágil y reproducible en 3 minutos:
   - Ingesta de 5 reportes sintéticos de prueba (dos de ellos duplicados con redacción distinta sobre el colapso del mismo punto vial).
   - Visualización de la extracción estructurada y la agrupación en el tablero.
   - Contraste visual con el baseline sin IA.
   - Acción del moderador cambiando el estado de "por confirmar" a "revisado".
   - Demostración de que un mensaje carente de evidencia permanece retenido sin publicarse.
5. **Factibilidad y escalabilidad (10 pts):** No requiere hardware costoso ni modelos gigantescos; corre sobre librerías estándar de NLP y bases tabulares locales. No depende de acuerdos previos con empresas de telecomunicaciones ni APIs complejas durante la fase de concurso.
6. **Presentación y pitch (10 pts):** Contraste narrativo de alto impacto: "Transformar el caos de cientos de mensajes de auxilio en un panel de control ordenado, con incidentes consolidados y verificación humana responsable".

### C. Resguardo contractual y supuestos
- Cumple cabalmente con la protección de datos personales al trabajar con reportes seudonimizados y casos de prueba sintéticos para la demo.
- Protege al equipo frente a las Bases (§9) al garantizar que ninguna tarjeta de incidente se declara como hecho oficial.
- **[CONFIRMAR]:** Compatibilidad del esquema de incidentes con la taxonomía EDAN (Evaluación de Daños y Análisis de Necesidades) del INDECI **[CONFIRMAR]**.

---

## 3. Quebrada Vigía Auditada — priorización de inspección con abstención

### A. Ventajas competitivas frente a alternativas y frente a baseline
- **Frente a inspecciones físicas reactivas o por turno aleatorio:** Ante avisos meteorológicos de activación de quebradas en una cuenca (ej. quebradas de la cuenca del Rímac o Lurín), los municipios cuentan con cuadrillas limitadas. Inspeccionar por orden cronológico de llamadas dispersa recursos en quebradas sin riesgo inminente mientras otras se saturan en la parte alta.
- **Frente a matrices estáticas en hojas de cálculo:** Las planillas estáticas no recalculan la sensibilidad de la amenaza cuando varían los umbrales de precipitación o cuando la lluvia antecedente supera la capacidad de infiltración del terreno.
- **Frente a la línea base (*baseline*) sin IA:** Se implementa un baseline de comparación directa que ordena las quebradas considerando únicamente los milímetros de lluvia acumulada. Quebrada Vigía Auditada demuestra su valor superior al incorporar factores geológicos determinantes (pendiente crítica del terreno y antecedentes de flujo de detritos catalogados por INGEMMET), evidenciando que una quebrada con menor lluvia pero con mayor pendiente y antecedentes puede ser mucho más inestable que una de fondo plano con lluvia moderada.
- **Ponderación transparente y abstención auditada:** Se erradica cualquier noción de "caja negra". Los pesos de cada variable son explícitos, se incluye análisis de sensibilidad ante variaciones de lluvia y el sistema se abstiene formalmente si faltan variables clave (pendiente o lluvia acumulada), exigiendo verificación en campo en lugar de calcular valores ficticios.

### B. Evaluación defensiva frente a la rúbrica oficial (100 pts)
1. **Innovación y creatividad (20 pts):** Enfoque proactivo de priorización de cuadrillas basado en riesgo multivariable explicable, transformando la defensa civil local de un modelo puramente reactivo a uno preventivo y auditable.
2. **Uso pertinente de IA (25 pts):** Algoritmo de scoring/ranking multicriterio con trazabilidad completa de variables y generación automática de fichas de inspección técnica. La IA no predice una catástrofe con falsas precisiones numéricas, sino que genera una recomendación ordenada para optimizar la logística de inspección de brigadas.
3. **Impacto y relevancia (20 pts):** Responde a una de las mayores amenazas a la vida durante El Niño en las quebradas y laderas de la vertiente occidental del Perú (huaicos y deslizamientos). Dirigido a brigadistas municipales y comités comunitarios de quebrada.
4. **Prototipo y funcionamiento (15 pts):** Estructura de demo limpia, determinista y completamente ejecutable en 3 minutos:
   - Tabla y mapa de 4 a 10 quebradas de una zona piloto con sus variables y baseline por lluvia.
   - Control interactivo de precipitación acumulada que actualiza el ranking dinámico y muestra la contribución ponderada de cada variable.
   - Retiro de una variable en vivo para mostrar cómo el sistema se abstiene y genera una alerta de datos incompletos.
   - Generación de la ficha técnica de inspección para la primera quebrada de la lista.
5. **Factibilidad y escalabilidad (10 pts):** Utiliza registros de inventario de peligros geológicos de INGEMMET **[CONFIRMAR]** y capas de elevación públicas. La carga computacional es reducida y su adopción por subgerencias de gestión del riesgo de desastres distritales es viable en el corto plazo (<6 meses **[CONFIRMAR]**).
6. **Presentación y pitch (10 pts):** Claridad expositiva contundente para el jurado: "Nuestras brigadas no pueden estar en 10 sitios a la vez: Quebrada Vigía Auditada indica con datos transparentes cuál quebrada debe revisarse primero y por qué, sin emitir falsas alarmas ni esconder sus cálculos".

### C. Resguardo contractual y supuestos
- La propuesta explicita que no predice la activación definitiva de un huaico ni emite órdenes de evacuación, actuando exclusivamente como un sistema de soporte a la priorización de inspecciones.
- **[CONFIRMAR]:** Inventario de quebradas críticas de libre disposición para el distrito seleccionado como piloto (ej. Lurigancho-Chosica o Punta Hermosa).

---

## 4. Matriz comparativa de ventajas defensivas de las propuestas en Ronda 2

| Criterio de Rúbrica | AlertaBarrio Verificable | Voluntad Visible Moderada | Quebrada Vigía Auditada |
|---|---|---|---|
| **Innovación y Creatividad (20 pts)** | Alta originalidad: microriesgo vial por tramo y navegación adaptativa ante anegamiento. | Alta: filtro inteligente contra caos e infoxicación en emergencias comunitarias. | Alta: priorización algorítmica y auditable de inspección vs. respuesta reactiva. |
| **Uso pertinente de IA (25 pts)** | Clasificador por tramo + explicación acotada + umbral de abstención. Supera baseline directo. | NLP para extracción + clustering espaciotemporal + filtro de evidencia. Supera búsqueda por palabras clave. | Scoring multivariable ponderado + ficha explicativa + abstención. Supera baseline de orden sólo por lluvia. |
| **Impacto y Relevancia (20 pts)** | Muy alto: seguridad de desplazamiento urbano y protección de bienes para familias y brigadas. | Alto: optimización de la coordinación ciudadana y mitigación de desinformación vecinal. | Muy alto: prevención de fatalidades por huaicos en poblaciones vulnerables de quebrada. |
| **Prototipo / Funcionamiento (15 pts)** | Excelente: mapa interactivo con slider de escenarios, ruteo dinámico y abstención visible en vivo. | Muy bueno: tablero con ingesta de mensajes, agrupación, moderación y descarte de reportes sin evidencia. | Excelente: tabla dinámica de 4–10 quebradas, ranking en vivo con aportes de variables y ficha descargable. |
| **Factibilidad / Escalabilidad (10 pts)** | Alta: capas abiertas de OSM y elevación. Demostrable offline con fixtures locales etiquetados. | Muy alta: cero dependencia de capas geoespaciales complejas; pipeline de texto liviano y reproducible. | Alta: requiere catálogo de quebradas y pendientes (INGEMMET/DEM); cálculo liviano y reproducible. |
| **Presentación y Pitch 3 min (10 pts)** | Inmediata: el contraste antes/después de la lluvia y el recálculo de la ruta se comprende en 30 segundos. | Clara y persuasiva: transición del caos de mensajes dispersos a un panel consolidado de incidentes. | Operativa y directa: responde la pregunta clave de gestión de desastres: "¿a qué quebrada enviamos la brigada?". |
| **Manejo de Baseline exigido en R2** | Ruta convencional por distancia más corta sin ponderación pluvial. | Extracción mecánica por palabras clave sin NLP y agrupación ingenua. | Ordenamiento simple considerando únicamente mm de lluvia acumulada. |
| **Control de Falso Sentido de Seguridad** | Abstención si faltan datos de lluvia/cota; aviso de "ruta de menor riesgo estimado". | Retención obligatoria en estado "por confirmar" hasta moderación humana; minimización de datos. | Abstención explícita ante datos incompletos; pesos publicados; no declara activación ni evacuación. |

---

## 5. Análisis comparativo y recomendación estratégica para el jurado A2

1. **Paridad de cumplimiento técnico:** Las tres propuestas han incorporado satisfactoriamente los requerimientos de la Ronda 2: líneas base (*baselines*) explícitas para justificar el uso de IA, mecanismos de abstención frente a datos faltantes, reducción de alcances inflados y respeto riguroso al principio de no presentar resultados como oficiales (Bases §9).
2. **Propuesta recomendada como primera prioridad defensiva: AlertaBarrio Verificable.**
   - Justificación: Es la propuesta que maximiza la calificación en **Prototipo y Pitch (25 pts conjuntos)** gracias a su naturaleza gráfica interactiva en mapa, permitiendo al jurado ver en vivo el impacto del modelo al cambiar el umbral de lluvia y contrastarlo con el baseline sin IA. Su enfoque en el problema urbano del anegamiento de calles conecta directamente con la experiencia cotidiana de la población durante El Niño costero.
3. **Planes de contingencia estratégicos:**
   - Si durante la fase presencial se presentaran restricciones severas de conectividad o dificultad para cargar capas cartográficas distritales, **Voluntad Visible Moderada** ofrece la mayor resiliencia técnica por apoyarse en procesamiento de texto con fixtures sintéticos sin dependencia geoespacial estricta.
   - Si el panel evaluador manifiesta un perfil marcadamente técnico en gestión de desastres naturales o geología, **Quebrada Vigía Auditada** ofrece la defensa metodológica más robusta en términos de rigor físico, análisis de sensibilidad y auditoría de variables.

---

## Cierre de trabajo

- **Qué hice:** Defendí con rigor metodológico y contractual las tres propuestas finalistas optimizadas en Ronda 2 (AlertaBarrio Verificable, Voluntad Visible Moderada y Quebrada Vigía Auditada), comparando sus ventajas competitivas frente a alternativas convencionales y frente a sus respectivas líneas base (*baselines*), analizando cada una bajo los 6 criterios de la rúbrica oficial de 100 puntos y eliminando cualquier aseveración no demostrada de acuerdo con el control crítico de A2.
- **Qué entrego y dónde:** El documento formal de defensa de Ronda 2 en `hackathon/ideas/ronda-2-b2.md`.
- **Supuestos:** La rúbrica oficial de 100 puntos de `hackathon/01-analisis.md` se mantiene idéntica para la evaluación de R2; las demos deben ejecutarse estrictamente en un pitch de 3 minutos durante la sesión presencial; el uso de datos sintéticos o precargados claramente etiquetados es admisible ante la falta de fuentes institucionales en tiempo real.
- **[CONFIRMAR]:** 
  - Disponibilidad de datos y licencias de OpenStreetMap, SRTM, SENAMHI e INGEMMET para el distrito piloto seleccionado.
  - Conectividad a internet y condiciones técnicas del auditorio/patio en la sede UPN Breña el 6 de noviembre.
  - Ratificación por parte del jurado A2 de la suficiencia de los baselines y mecanismos de abstención propuestos.

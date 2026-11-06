# Ronda 1 — Defensa de ventajas de las seis ideas frente a la rúbrica y alternativas

**Documentos de referencia:** `hackathon/01-analisis.md` (análisis contractual y rúbrica oficial) y `hackathon/ideas/ronda-1-b1.md` (propuestas iniciales de B1).  
**Rol evaluador:** B2 Defensor de ventajas.  
**Criterio metodológico:** Se argumentan ventajas comparables y medibles para cada una de las seis ideas frente a alternativas convencionales y contra los seis criterios de la rúbrica oficial de 100 puntos (Innovación 20, IA Pertinente 25, Impacto 20, Prototipo 15, Factibilidad/Escalabilidad 10, Pitch 10). No se inventan cifras ni se asumen fuentes verificadas; todo dato no comprobado se marca con **[CONFIRMAR]**.

---

## 1. AlertaBarrio: rutas seguras ante inundación

### A. Ventajas competitivas frente a alternativas convencionales
- **Frente a visores y mapas estáticos de inundación (INDECI/SIG en PDF):** Las herramientas actuales muestran zonas de inundabilidad histórica a nivel macro, pero son estáticas e inservibles durante un evento pluvial en curso. AlertaBarrio calcula la criticidad por tramo vial en función del umbral de lluvia actual o simulado combinado con microtopografía (pendientes y elevación), transformando un mapa pasivo en una guía activa de evacuación local.
- **Frente a aplicaciones de navegación comerciales (Waze, Google Maps):** Los navegadores comerciales optimizan únicamente por congestión vehicular o bloqueos reportados manualmente por conductores. No modelan escorrentía superficial ni acumulación de agua por cota topográfica, pudiendo dirigir a peatones o vehículos hacia pasos a desnivel o depresiones con alto riesgo de anegamiento.
- **Ventaja medible:** Reduce a segundos la identificación de una ruta alternativa segura en escala barrial, eliminando el tránsito a ciegas por tramos con probabilidad crítica de anegamiento.

### B. Evaluación defensiva frente a la rúbrica oficial (100 pts)
1. **Innovación y creatividad (20 pts):** Originalidad al enfocar la resiliencia a nivel de tramo de calle (microescala urbana) y no a nivel de distrito general, resolviendo el dilema del ciudadano de a pie ("¿por cuál esquina puedo cruzar sin quedar atrapado?").
2. **Uso pertinente de IA (25 pts):** La IA no es cosmética ni un chatbot genérico: un modelo de clasificación/scoring procesa variables físicas (cota, pendiente, lluvia acumulada) y reportes locales para ponderar el nivel de riesgo por segmento. La generación de lenguaje se restringe a explicar los factores de riesgo de la ruta elegida, previniendo alucinaciones.
3. **Impacto y relevancia (20 pts):** Protege vidas y bienes en zonas urbanas populares y asentamientos en planicies de inundación, además de facilitar el desplazamiento de brigadas municipales de serenazgo y rescate.
4. **Prototipo y funcionamiento (15 pts):** Altamente demostrable en entorno web interactivo (mapa con capas GeoJSON/Leaflet o Mapbox) con datos precargados de un distrito piloto. Se pueden simular 3 intensidades de lluvia y ver cómo el grafo de calles cambia de color y recalcula la ruta en tiempo real.
5. **Factibilidad y escalabilidad (10 pts):** Basado en datos abiertos de elevación (SRTM/ALOS PALSAR **[CONFIRMAR]**) y trazado vial (OpenStreetMap **[CONFIRMAR]**). Es técnicamente desplegable como servicio web municipal o comunitario en menos de 6 meses.
6. **Presentación y pitch (10 pts):** Curva visual inmediata: en los 3 minutos del pitch, el jurado ve un caso de uso claro (sube la lluvia de 10 mm a 40 mm, la calle principal se bloquea en rojo y el sistema traza la ruta segura por la cota alta).

### C. Cumplimiento contractual y control de riesgos
- No emite "alertas oficiales de emergencia" (evita infracción a Bases §9), sino que se formula como "herramienta de asistencia y cálculo de riesgo por tramo para soporte a la decisión".
- **[CONFIRMAR]:** Disponibilidad de datos de lluvia en tiempo real de SENAMHI o necesidad de operar con pronósticos por bandas horarias y escenarios simulados durante la hackathon.

---

## 2. Quebrada Vigía: priorización de huaicos

### A. Ventajas competitivas frente a alternativas convencionales
- **Frente a inspecciones físicas aleatorias o reactivas:** Las cuadrillas municipales y de defensa civil tienen capacidades operativas y vehículos limitados. Sin un modelo de priorización, las inspecciones se deciden por orden de llegada de llamadas o por cercanía geográfica, desatendiendo quebradas críticas que están acumulando mayor volumen de precipitación en la cuenca alta.
- **Frente a matrices estáticas en Excel o avisos regionales:** Un aviso de SENAMHI de nivel naranja abarca provincias enteras. Quebrada Vigía desagrega el riesgo a nivel de microcuenca/quebrada específica combinando pendiente, lluvia antecedente y antecedentes geológicos.
- **Ventaja medible:** Ordenamiento cuantitativo inmediato (ranking de 1 a N) de quebradas críticas, permitiendo concentrar el 100% de los recursos de inspección en las zonas con mayor probabilidad de activación antes de que ocurra el evento.

### B. Evaluación defensiva frente a la rúbrica oficial (100 pts)
1. **Innovación y creatividad (20 pts):** Transforma la gestión de desastres de un modelo de respuesta pasiva a uno de despacho preventivo basado en priorización algorítmica objetiva.
2. **Uso pertinente de IA (25 pts):** Algoritmo de ranking/scoring multicriterio que pondera variables heterogéneas (lluvia acumulada en 24h/72h, ángulo de pendiente del MDE, geología y antecedentes de eventos). Genera automáticamente fichas técnicas trazables con checklist operativo para la cuadrilla, justificando cada variable sin cajas negras opacas.
3. **Impacto y relevancia (20 pts):** Aborda directamente uno de los peligros más letales del Fenómeno del Niño en la costa y vertiente occidental del Perú (huaicos y flujos de lodo en quebradas secas reactivadas). Beneficia directamente a municipios de quebrada (ej. Lurigancho-Chosica, Chaclacayo, Punta Hermosa).
4. **Prototipo y funcionamiento (15 pts):** Ejecución limpia y determinista en la demo: 4 a 10 quebradas preconfiguradas, un control deslizante de precipitación acumulada, reordenamiento dinámico del ranking y generación instantánea de la ficha de inspección con sus factores de riesgo.
5. **Factibilidad y escalabilidad (10 pts):** Emplea inventarios geológicos públicos de INGEMMET **[CONFIRMAR]** y modelos digitales de elevación abiertos. Puede ser adoptado por plataformas de Defensa Civil local en un plazo inferior a 6 meses.
6. **Presentación y pitch (10 pts):** Narrativa operativa contundente para el jurado: "Con solo 2 camionetas y 8 quebradas en alerta, ¿adónde va la brigada primero? Quebrada Vigía lo responde en 5 segundos con datos auditables".

### C. Cumplimiento contractual y control de riesgos
- Todo el ranking se presenta con niveles de confianza explícitos y estado de demostración, sin suplantar las alertas oficiales del COEN/INDECI.
- **[CONFIRMAR]:** Catálogo de quebradas críticas de INGEMMET disponible para el distrito seleccionado como piloto en Lima o regiones.

---

## 3. Agua Clara: detección de riesgo en agua almacenada

### A. Ventajas competitivas frente a alternativas convencionales
- **Frente a análisis de laboratorio físico-químico y microbiológico:** Los kits de laboratorio y pruebas de cultivo tardan entre 24 y 72 horas y son inaccesibles económica y logísticamente para familias aisladas tras una inundación. Agua Clara ofrece un triaje preliminar visual e instantáneo (en segundos) en el punto de uso.
- **Frente a inspección humana empírica ("a simple vista"):** La apreciación visual no estandarizada genera dos errores graves: consumir agua aparentemente clara pero con sedimentos finos sin clorar, o desechar agua ligeramente turbia que podría ser tratada eficazmente mediante filtración y desinfección doméstica.
- **Frente a folletos de papel estáticos:** Los manuales impresos suelen perderse o dañarse durante huaicos e inundaciones. La aplicación digital proporciona la guía paso a paso ajustada a la categoría visual detectada.
- **Ventaja medible:** Diagnóstico preliminar de turbidez en <3 segundos desde la captura fotográfica y entrega directa de la dosis de desinfección recomendada por guías oficiales de salud.

### B. Evaluación defensiva frente a la rúbrica oficial (100 pts)
1. **Innovación y creatividad (20 pts):** Aplicación de visión por computadora (Computer Vision en borde o cliente móvil) orientada a la salud pública de emergencia, complementada con un asistente de instrucciones sanitarias verificadas.
2. **Uso pertinente de IA (25 pts):** Empleo de una red convolucional / clasificador visual ligero para discriminar turbidez y partículas visibles, acoplado a un motor de recuperación contextual que extrae únicamente protocolos estandarizados (MINSA/OPS), con detección obligatoria de muestras "no concluyentes" ante mala iluminación o reflejos.
3. **Impacto y relevancia (20 pts):** Prevención directa de enfermedades diarreicas agudas (EDAs), parasitosis y cólera en poblaciones sin acceso a red pública de agua potable durante y después de eventos de El Niño.
4. **Prototipo y funcionamiento (15 pts):** Demostración sumamente ágil y tangible: se suben tres fotos reales preparadas (agua clara, turbia, sedimentada) y el modelo clasifica en vivo con su porcentaje de confianza y muestra el instructivo exacto de desinfección.
5. **Factibilidad y escalabilidad (10 pts):** Puede correr en dispositivos móviles sin requerir servidores de alto costo (modelos tipo MobileNet/TensorFlow Lite **[CONFIRMAR]**). Gran potencial de adopción comunitaria a través de promotores de salud y ollas comunes.
6. **Presentación y pitch (10 pts):** Demo muy visual y de alto impacto emotivo y humanitario, fácilmente comprensible para jurados de cualquier disciplina técnica o de negocios.

### C. Cumplimiento contractual y control de riesgos
- Exime formalmente cualquier pretensión de sustituir un análisis microbiológico o declarar "potabilidad química", mostrando un aviso de responsabilidad legal obligatorio que protege al equipo de descalificaciones por afirmaciones médicas no verificadas (Bases §9).
- **[CONFIRMAR]:** Protocolo oficial exacto del MINSA/DIGESA para desinfección intradomiciliaria con hipoclorito de sodio comercial al 5%.

---

## 4. SiembraDecide: calendario agrícola resiliente

### A. Ventajas competitivas frente a alternativas convencionales
- **Frente al calendario agrícola tradicional por costumbres:** El Fenómeno del Niño altera drásticamente los patrones de lluvia, temperatura mínima y humedad del suelo, haciendo fracasar los calendarios consuetudinarios basados en fechas fijas heredadas.
- **Frente a boletines agroclimáticos extensos en PDF (SENAMHI/MIDAGRI):** Los informes técnicos suelen tener decenas de páginas con terminología probabilística compleja (anomalías de SST, deciles de lluvia) que el pequeño agricultor no puede traducir operativamente a su parcela.
- **Ventaja medible:** Transforma proyecciones climáticas multivariables en 2 o 3 opciones concretas de fechas de siembra o variedades recomendadas con su respectiva matriz de riesgo explicada en lenguaje simple.

### B. Evaluación defensiva frente a la rúbrica oficial (100 pts)
1. **Innovación y creatividad (20 pts):** Personalización agronómica y climática adaptativa: cruza requerimientos fenológicos del cultivo con escenarios pronosticados para calcular ventanas óptimas de siembra bajo condiciones anómalas.
2. **Uso pertinente de IA (25 pts):** Motor de optimización / recomendación multicriterio basado en funciones agronómicas de balance hídrico y grados-día de desarrollo, acompañado de un generador de explicaciones en lenguaje claro que detalla los supuestos climáticos considerados (evitando determinismos falsos).
3. **Impacto y relevancia (20 pts):** Impacto socioeconómico directo sobre la agricultura familiar, que concentra la mayor vulnerabilidad frente a sequías o inundaciones de El Niño en valles costeros e interandinos, resguardando la inversión en semillas y fertilizantes.
4. **Prototipo y funcionamiento (15 pts):** Demostrable con un simulador paramétrico enfocado en 2 cultivos prioritarios (ej. maíz amarillo duro y arroz, o frejol) en una cuenca representativa. Permite al usuario variar el escenario (Niño débil vs moderado/fuerte) y recalcular las recomendaciones al instante.
5. **Factibilidad y escalabilidad (10 pts):** Se fundamenta en requerimientos de cultivos estandarizados (INIA/FAO **[CONFIRMAR]**) y series históricas y pronósticos del SENAMHI **[CONFIRMAR]**. Implementable como servicio web o por mensajería asistida para agencias agrarias en <6 meses.
6. **Presentación y pitch (10 pts):** Fuerte atractivo para la categoría de sostenibilidad, resiliencia económica y seguridad alimentaria frente al cambio climático.

### C. Cumplimiento contractual y control de riesgos
- Las recomendaciones se presentan siempre como escenarios probabilísticos para la planificación y no como promesas de rendimiento agrícola garantizado.
- **[CONFIRMAR]:** Requerimientos térmicos y de humedad de los cultivos seleccionados para la cuenca piloto.

---

## 5. SaludCalor: triage conversacional por golpes de calor

### A. Ventajas competitivas frente a alternativas convencionales
- **Frente a afiches y campañas estáticas de información:** Las advertencias genéricas ("tome agua y cúbrase del sol") no identifican cuándo los síntomas iniciales de un paciente (anhidrosis, confusión, fiebre >40°C) han cruzado el umbral hacia un golpe de calor potencialmente letal.
- **Frente a líneas de emergencia telefónica saturadas (106 / 113):** En picos de calor extremo, las centrales telefónicas sufren saturación de llamadas. SaludCalor actúa como filtro inicial automatizado disponible 24/7 sin tiempo de espera.
- **Frente a búsquedas no reguladas en internet:** Evita que el usuario aplique remedios caseros contraproducentes o demore la atención de una emergencia médica real.
- **Ventaja medible:** Clasificación de riesgo clínico preliminar en menos de 90 segundos a través de 8 preguntas clave, con direccionamiento georreferenciado al centro de salud MINSA más cercano.

### B. Evaluación defensiva frente a la rúbrica oficial (100 pts)
1. **Innovación y creatividad (20 pts):** Triaje adaptativo conversacional focalizado en la patología específica de estrés térmico derivado de anomalías de temperatura durante El Niño costero, con especial énfasis en trabajadores a la intemperie y adultos mayores.
2. **Uso pertinente de IA (25 pts):** Clasificador de gravedad por procesamiento de respuestas en lenguaje natural (NLP) con mapeo determinista a 3 categorías de riesgo (autocuidado / consulta prioritaria / emergencia crítica inmediata) asistido por RAG anclado exclusivamente en guías oficiales de la OMS/OPS y MINSA, con rechazo activo de consultas fuera de alcance.
3. **Impacto y relevancia (20 pts):** Prevención de secuelas neurológicas permanentes y muerte por golpe de calor en poblaciones vulnerables (niños, ancianos, agricultores y obreros de construcción).
4. **Prototipo y funcionamiento (15 pts):** Flujo conversacional rápido y libre de fricción: se ejecutan en vivo 2 casos de prueba (uno leve que muestra medidas de enfriamiento y otro grave que activa alarma roja, llamada simulada al SAMU y mapa de centros de salud).
5. **Factibilidad y escalabilidad (10 pts):** Cero barreras de hardware: corre en cualquier navegador móvil, chatbot de Telegram o WhatsApp. No almacena datos personales sensibles (cumple privacidad sin fricción legal) y su costo de infraestructura es mínimo.
6. **Presentación y pitch (10 pts):** Demostración dinámica con dramatización de casos de uso claros que demuestran empatía, rigor y utilidad en menos de 2 minutos.

### C. Cumplimiento contractual y control de riesgos
- Incorpora un aviso visible que estipula que el sistema no realiza diagnóstico médico definitivo ni prescribe medicamentos, cumpliendo las restricciones éticas y de calidad de las Bases (§9).
- **[CONFIRMAR]:** Lista y georreferenciación de establecimientos de salud del MINSA/SUSALUD **[CONFIRMAR]** en el distrito seleccionado.

---

## 6. Voluntad Visible: reportes comunitarios verificables

### A. Ventajas competitivas frente a alternativas convencionales
- **Frente a grupos informales y caóticos de WhatsApp o redes sociales:** Los canales informales sufren de saturación masiva, reportes duplicados de un mismo evento desde distintos ángulos, desinformación, rumores infundados y ausencia total de coordenadas geográficas precisas.
- **Frente a formularios municipales web tradicionales y burocráticos:** Los formularios rígidos exigen completar decenas de campos tediosos que la ciudadanía en crisis no llena, provocando un subregistro de emergencias.
- **Ventaja medible:** Reducción sustantiva del tiempo de consolidación de incidentes mediante extracción automática de entidades y deduplicación espacio-temporal, entregando a las brigadas un tablero filtrado con incidentes agrupados y priorizados.

### B. Evaluación defensiva frente a la rúbrica oficial (100 pts)
1. **Innovación y creatividad (20 pts):** Inteligencia colectiva filtrada: combina la agilidad del reporte ciudadano con la rigurosidad de un pipeline de validación y deduplicación algorítmica para evitar el spam y la desinformación.
2. **Uso pertinente de IA (25 pts):** Extracción de entidades nombradas (NER) para ubicar referencias espaciales y tipología de daño desde texto libre o audios transcritos; clustering espacial y temporal para fusionar reportes duplicados del mismo hecho; detección de lenguaje conjetural o rumores para asignar estado "por confirmar" y exigir validación humana.
3. **Impacto y relevancia (20 pts):** Optimiza la asignación de maquinaria pesada, motobombas y personal de socorro de municipalidades y COEN/INDECI hacia las vías bloqueadas y familias realmente damnificadas.
4. **Prototipo y funcionamiento (15 pts):** Demostración en vivo sumamente atractiva: se ingresan 5 reportes heterogéneos (2 de ellos duplicados con distinto texto sobre la misma calle inundada); el sistema extrae los datos, agrupa los duplicados en una sola tarjeta de incidente en el mapa y prioriza la cola de atención.
5. **Factibilidad y escalabilidad (10 pts):** Se integra con APIs estándar de mensajería y mapas abiertos (OpenStreetMap **[CONFIRMAR]**). Es altamente escalable a cualquier distrito del país sin requerir infraestructura propietaria costosa.
6. **Presentación y pitch (10 pts):** Excelente para el pitch de 3 minutos: visualiza la transformación del "caos de mensajes en redes sociales" a un "tablero de comando limpio y ordenado para toma de decisiones".

### C. Cumplimiento contractual y control de riesgos
- Diseñado con el principio de revisión humana en el bucle (*human-in-the-loop*): el sistema no publica incidentes como hechos oficiales hasta su confirmación por un moderador o brigadista, garantizando el cumplimiento estricto del acápite de descalificación por información falsa (Bases §9).
- **[CONFIRMAR]:** Protocolo de taxonomía de daños y emergencias según estándares EDAN de INDECI.

---

## 7. Matriz comparativa de ventajas defensivas frente a la rúbrica oficial

La siguiente matriz sintetiza el desempeño defensivo de las 6 propuestas frente a la rúbrica de 100 puntos y su facilidad de demostración en los 3 minutos de pitch presencial:

| Idea | Uso de IA (25 pts) | Prototipo / Demo 3 min (15 pts + 10 pitch) | Impacto y Relevancia (20 pts) | Innovación (20 pts) | Factibilidad <6m (10 pts) | Ventaja diferencial clave |
|---|---|---|---|---|---|---|
| **1. AlertaBarrio** | Clasificación por tramo + explicabilidad topográfica | Muy alta (mapa interactivo con slider de lluvia y ruteo dinámico) | Alta (movilidad segura de familias y brigadas) | Alta (microescala urbana vial vs mapas macro estáticos) | Alta (datos abiertos SRTM/OSM) | Navegación orientada a anegamiento físico, no a tráfico comercial |
| **2. Quebrada Vigía** | Algoritmo de ranking multivariable + ficha auditable | Muy alta (reordenamiento dinámico de ranking y ficha técnica) | Muy alta (peligro de muerte por huaicos en quebradas activas) | Alta (despacho preventivo objetivo vs inspección aleatoria) | Muy alta (datos de INGEMMET/SENAMHI) | Priorización inmediata de cuadrillas con recursos municipales escasos |
| **3. Agua Clara** | Computer Vision (turbidez) + RAG de guías sanitarias | Alta (subida de 3 fotos controladas con respuesta en segundos) | Muy alta (salud pública básica y prevención de EDAs post-desastre) | Alta (triaje visual de agua al alcance de cualquier smartphone) | Media-Alta (requiere dataset curado de imágenes) | Evaluación visual rápida en el punto de uso sin esperar días de laboratorio |
| **4. SiembraDecide** | Recomendación multiescenario + balance agroclimático | Media-Alta (dashboard paramétrico de cuenca y 2 cultivos) | Alta (resiliencia económica de agricultura familiar) | Alta (adaptación agronómica ante variabilidad climática extrema) | Media (requiere validar reglas con agrónomos locales) | Desmitificación y traducción operativa de boletines climáticos complejos |
| **5. SaludCalor** | NLP para triaje de riesgo + RAG estricto sin alucinación | Alta (simulación de caso leve vs crítico con SAMU en 90s) | Alta (mitigación de muertes y shock térmico en olas de calor) | Media-Alta (triaje adaptativo focalizado en estrés térmico) | Muy alta (muy ligero, sin barreras de hardware ni datos médicos) | Descongestión de líneas 106/113 y atención inmediata 24/7 |
| **6. Voluntad Visible**| NER + clustering espaciotemporal + filtro de rumores | Muy alta (ingesta de 5 reportes, deduplicación en vivo en mapa) | Alta (coordinación municipal y despeje oportuno de vías) | Alta (filtro inteligente contra caos y fake news en emergencias) | Alta (integrable a canales de mensajería existentes) | Transforma el ruido y caos ciudadano en datos limpios y priorizados |

---

## 8. Conclusiones y recomendaciones estratégicas de B2 para las siguientes rondas

1. **Paridad competitiva de las seis ideas:** Todas las propuestas cuentan con un caso defensivo sólido frente a la rúbrica oficial, diferenciándose nítidamente de alternativas tradicionales o de implementaciones triviales sin IA.
2. **Potencial destacado para la demo de 3 minutos:** Las ideas **1 (AlertaBarrio)**, **2 (Quebrada Vigía)** y **6 (Voluntad Visible)** poseen una ventaja gráfica y operativa inmediata para el pitch ante el jurado, pues el efecto de la IA (reordenamiento, ruteo o deduplicación) se aprecia de forma instantánea al variar los parámetros de entrada.
3. **Alto valor humanitario y de impacto social:** Las ideas **3 (Agua Clara)** y **5 (SaludCalor)** destacan en los criterios de Impacto y Relevancia (20 pts) por abordar riesgos directos a la salud y la vida de poblaciones altamente vulnerables durante El Niño, requiriendo un control estricto de descargos legales para evitar objeciones del jurado.
4. **Resguardo contractual prioritario:** Todas las defensas se han estructurado bajo el principio de "soporte a la decisión" y "herramienta de asistencia", sin atribuirse carácter de alerta oficial ni emitir diagnósticos médicos concluyentes, blindando al equipo contra cualquier riesgo de descalificación según el artículo 9 de las Bases.

---

## Cierre de trabajo

- **Qué hice:** Realicé la defensa integral y estructurada de las seis ideas presentadas en la Ronda 1, contrastando cada una frente a alternativas convencionales y evaluando sus ventajas medibles contra los seis criterios de la rúbrica oficial (100 puntos), incorporando mitigación de riesgos contractuales y una matriz comparativa transversal.
- **Qué entrego y dónde:** El documento formal de defensa en `hackathon/ideas/ronda-1-b2.md`.
- **Supuestos:** La rúbrica oficial consignada en `hackathon/01-analisis.md` (conforme a Bases p. 4, §8 y Detalle p. 22) rige con ponderación estricta de 100 puntos; los prototipos deben ejecutarse en vivo y explicarse con solvencia en un pitch presencial de 3 minutos.
- **[CONFIRMAR]:** 
  - Disponibilidad y formato de acceso a las APIs/archivos abiertos de SENAMHI, INGEMMET, INDECI y DIGESA/MINSA para la fase presencial del 6 de noviembre.
  - Regla aplicable sobre tamaño del equipo (1–6 según Bases vs 3–6 según Detalle).
  - Condiciones de conectividad a internet en la sede presencial (UPN Breña) para evaluar la necesidad de precargar datasets locales y modelos en borde.

# Ronda 1 — seis ideas frente al Fenómeno del Niño

**Marco común.** Las propuestas priorizan un problema concreto, una función de IA demostrable y un prototipo acotado a un pitch de 3 minutos. Los conjuntos se mencionan como candidatos públicos; cada nombre lleva **[fuente por verificar]** para confirmar URL, licencia, cobertura y actualización antes de presentarlo. No se presentan predicciones como información oficial.

## 1. AlertaBarrio: rutas seguras ante inundación

- **Problema concreto:** durante lluvias intensas, una persona no sabe qué calles o puntos de tránsito se anegarán primero ni por dónde evacuar sin cruzar zonas de riesgo.
- **Población:** familias y comerciantes de barrios urbanos bajos; brigadas municipales de primera respuesta.
- **Función concreta de IA:** un modelo de clasificación/riesgo combina lluvia observada o pronosticada, elevación y reportes geolocalizados para puntuar cada tramo como bajo/medio/alto; un asistente genera instrucciones breves basadas solamente en esos tramos y marca la incertidumbre.
- **Datos públicos [fuente por verificar]:** datos de precipitación y pronóstico del SENAMHI **[fuente por verificar]**; mapas de elevación y calles de OpenStreetMap/SRTM **[fuente por verificar]**; registros históricos de inundación de INDECI o gobiernos locales **[fuente por verificar]**.
- **Demo de 3 minutos:** cargar un mapa de un distrito y un escenario de lluvia; mostrar el mapa de riesgo por tramo, cambiar intensidad, seleccionar origen/destino y enseñar ruta alternativa y explicación de los factores.
- **Alcance construible durante el evento:** una sola zona, datos precargados (CSV/GeoJSON), reglas/modelo sencillo reproducible, mapa web y tres escenarios; sin prometer alerta oficial ni navegación en tiempo real.

## 2. Quebrada Vigía: priorización de huaicos

- **Problema concreto:** los equipos locales deben decidir qué quebradas inspeccionar primero cuando la lluvia puede activar huaicos, con poco personal y datos dispersos.
- **Población:** municipalidades, juntas vecinales y brigadas ubicadas cerca de quebradas y laderas.
- **Función concreta de IA:** un modelo de puntuación/ranking aprende de variables de pendiente, lluvia acumulada, suelo y antecedentes para ordenar quebradas; un generador de texto redacta una ficha de inspección trazable, no una orden automática.
- **Datos públicos [fuente por verificar]:** avisos y registros de lluvias del SENAMHI **[fuente por verificar]**; modelos digitales de elevación y pendientes del INGEMMET/Geo Perú **[fuente por verificar]**; inventarios de peligros geológicos de INGEMMET **[fuente por verificar]**; vías de OpenStreetMap **[fuente por verificar]**.
- **Demo de 3 minutos:** seleccionar cuatro quebradas, simular acumulados de lluvia, mostrar el ranking que cambia y abrir la ficha de la primera (variables, fecha, nivel de confianza y checklist).
- **Alcance construible durante el evento:** 4–10 quebradas de un distrito, tabla de variables y ranking auditable; dataset sintético sólo para completar campos faltantes, claramente etiquetado como demostración.

## 3. Agua Clara: detección de riesgo en agua almacenada

- **Problema concreto:** tras inundaciones, los hogares almacenan agua de origen incierto y necesitan una orientación rápida para identificar señales visuales de turbidez o contaminación, sin sustituir un análisis de laboratorio.
- **Población:** familias rurales y periurbanas afectadas, promotores de salud y escuelas.
- **Función concreta de IA:** visión por computadora clasifica fotografías de una muestra en categorías visuales (clara/turbia/con sedimentos) y un asistente de recuperación redacta pasos de desinfección únicamente desde una guía validada, mostrando “no concluyente” cuando la imagen no basta.
- **Datos públicos [fuente por verificar]:** guías de calidad de agua y emergencias de OMS/OPS y MINSA **[fuente por verificar]**; imágenes de turbidez de repositorios abiertos o dataset propio con licencia explícita **[fuente por verificar]**; reportes públicos de calidad de agua de ANA **[fuente por verificar]**.
- **Demo de 3 minutos:** subir tres fotografías de ejemplo, mostrar clasificación y confianza, abrir la guía correspondiente y enseñar el aviso de que no es prueba de potabilidad.
- **Alcance construible durante el evento:** clasificador de 3 clases con imágenes curadas, formulario móvil/web y respuestas con citas a la guía; no diagnosticar microorganismos ni declarar agua segura.

## 4. SiembraDecide: calendario agrícola resiliente

- **Problema concreto:** pequeños agricultores deben escoger fecha o cultivo de siembra cuando El Niño altera lluvias, temperatura y disponibilidad de agua, pero no pueden interpretar múltiples series climáticas.
- **Población:** agricultores familiares y extensionistas de una cuenca piloto.
- **Función concreta de IA:** modelo de recomendación compara escenarios climáticos con requerimientos básicos del cultivo y devuelve alternativas de fecha/cultivo con explicación de riesgos; permite cambiar supuestos y no entrega una única “certeza”.
- **Datos públicos [fuente por verificar]:** series climáticas y pronósticos estacionales del SENAMHI **[fuente por verificar]**; calendarios/requerimientos de cultivos del MIDAGRI/INIA **[fuente por verificar]**; disponibilidad hídrica de ANA **[fuente por verificar]**.
- **Demo de 3 minutos:** elegir cuenca, cultivo y fecha, comparar escenario normal vs. lluvias anómalas, mostrar dos opciones ordenadas y los datos que explican cada recomendación.
- **Alcance construible durante el evento:** una cuenca y dos cultivos, cálculo tabular reproducible y dashboard; validar con un extensionista antes de cualquier uso operativo.

## 5. SaludCalor: triage conversacional por golpes de calor

- **Problema concreto:** en olas de calor asociadas a El Niño, cuidadores y trabajadores no reconocen a tiempo señales de alarma ni saben cuándo buscar atención.
- **Población:** adultos mayores, niños, trabajadores al aire libre y cuidadores en zonas expuestas.
- **Función concreta de IA:** un clasificador de respuestas en lenguaje sencillo identifica señales de alarma a partir de un cuestionario y enruta a “emergencia/consulta/autocuidado”; un motor de recuperación responde sólo con material sanitario oficial y deriva a servicios locales, sin diagnosticar.
- **Datos públicos [fuente por verificar]:** recomendaciones de OMS/OPS y MINSA sobre calor y emergencias **[fuente por verificar]**; avisos meteorológicos del SENAMHI **[fuente por verificar]**; directorio público de establecimientos MINSA/Geo Perú **[fuente por verificar]**.
- **Demo de 3 minutos:** ejecutar dos casos (uno con alarma y otro leve), evidenciar preguntas, fuente de cada consejo y botón de llamada/ubicación; mostrar una respuesta fuera de alcance que se rechaza.
- **Alcance construible durante el evento:** flujo web de 8–10 preguntas, base documental pequeña con citas y reglas de escalamiento; no almacenar datos personales ni sustituir evaluación profesional.

## 6. Voluntad Visible: reportes comunitarios verificables

- **Problema concreto:** los reportes ciudadanos de calles bloqueadas, desbordes o personas afectadas llegan duplicados, incompletos o con rumores, dificultando priorizar ayuda.
- **Población:** vecinos, periodistas locales, municipalidades y organizaciones de respuesta.
- **Función concreta de IA:** extracción de ubicación, tipo de incidente y urgencia desde texto/foto; deduplicación y agrupamiento espacial-temporal; detección de lenguaje potencialmente no verificable. Cada tarjeta conserva evidencia, hora y estado “por confirmar”.
- **Datos públicos [fuente por verificar]:** reportes y comunicados públicos de INDECI/COEN **[fuente por verificar]**; capas geográficas de OpenStreetMap **[fuente por verificar]**; datos abiertos de municipalidades **[fuente por verificar]**. Las imágenes de demo deben tener permiso o ser sintéticas etiquetadas.
- **Demo de 3 minutos:** ingresar cinco reportes (incluidos dos duplicados), mostrar extracción automática, mapa agrupado, cola priorizada y cambio manual de estado; enseñar que un reporte no verificado no se publica como hecho.
- **Alcance construible durante el evento:** formulario y tablero para una zona piloto, modelo de extracción con reglas/LLM acotado y revisión humana obligatoria; sin operar como canal oficial de emergencia.

## Cierre

- **Qué hice:** propuse seis ideas distintas (inundación, huaicos, agua, agricultura, salud y coordinación comunitaria), cada una con problema, población, IA concreta, datos candidatos, demo y alcance acotado.
- **Qué entrego y dónde:** `hackathon/ideas/ronda-1-b1.md`.
- **Supuestos:** las fuentes institucionales y coberturas/licencias deben comprobarse antes de usar datos; los resultados son prototipos y no alertas, diagnósticos ni instrucciones oficiales.
- **[CONFIRMAR]:** URLs/licencias y disponibilidad de cada dataset; distrito/cuenca piloto; formato de entregables y restricciones de conectividad; tamaño de equipo y horario efectivo según las contradicciones documentadas en `hackathon/01-analisis.md`.

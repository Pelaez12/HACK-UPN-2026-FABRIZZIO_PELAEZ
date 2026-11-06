# Ronda 1 — evaluación del jurado A2

## Método y reglas aplicadas

Se aplica la rúbrica documentada en `hackathon/01-analisis.md`: innovación 20, uso pertinente de IA 25, impacto 20, prototipo/funcionamiento 15, factibilidad/escalabilidad 10 y pitch 10 (total 100). La puntuación es una evaluación comparativa de prototipos propuestos, no una validación de que las fuentes ya estén disponibles. Se consideran los argumentos de `ronda-1-b2.md` y los riesgos de `ronda-1-b3.md`.

**Reglas verificadas:** las seis ideas enfrentan un desafío del Fenómeno del Niño, tienen una función de IA identificable, un alcance de demo de 3 minutos y pueden plantearse como apoyo a la decisión. No se observó bloqueo definitivo con la evidencia disponible. Todas requieren confirmar fuentes/licencias, conectividad y datos antes de presentar; Agua Clara y SaludCalor tienen riesgo sanitario potencial R2/R3/R4 **[CONFIRMAR]**. La propuesta no debe presentar resultados como alertas oficiales, diagnósticos o hechos verificados.

## Puntuaciones

| Puesto | Idea | Innovación (20) | IA (25) | Impacto (20) | Prototipo (15) | Factibilidad (10) | Pitch (10) | Total |
|---:|---|---:|---:|---:|---:|---:|---:|---:|
| 1 | AlertaBarrio | 17 | 22 | 18 | 14 | 8 | 9 | **88** |
| 2 | Voluntad Visible | 17 | 22 | 17 | 14 | 8 | 9 | **87** |
| 3 | Quebrada Vigía | 16 | 21 | 18 | 14 | 8 | 9 | **86** |
| 4 | Agua Clara | 16 | 21 | 18 | 13 | 6 | 9 | **83** |
| 5 | SaludCalor | 15 | 20 | 17 | 13 | 8 | 9 | **82** |
| 6 | SiembraDecide | 16 | 20 | 17 | 12 | 7 | 8 | **80** |

### 1. AlertaBarrio — 88/100

- **Innovación 17/20:** micro-riesgo por tramo y ruta alternativa vinculados a inundación, más específico que un mapa estático; la novedad depende de la resolución real disponible.
- **IA 22/25:** clasificación/ranking con lluvia, elevación y reportes, más explicación trazable. Debe compararse con una ruta convencional para demostrar valor no cosmético.
- **Impacto 18/20:** utilidad directa para familias, comercios y brigadas en zonas urbanas anegables.
- **Prototipo 14/15:** mapa con slider y tres escenarios produce evidencia muy visible; limitarse a un distrito y datos precargados.
- **Factibilidad 8/10:** OSM/elevación y fixtures permiten construir, pero cobertura de lluvia, licencia y calidad por calle siguen **[CONFIRMAR]**.
- **Pitch 9/10:** antes/después de subir lluvia se entiende en segundos; incluir advertencia de simulación y no “ruta segura” oficial.

### 2. Voluntad Visible — 87/100

- **Innovación 17/20:** convierte mensajes desordenados en incidentes agrupados y revisables; no debe vender detección de verdad como certeza.
- **IA 22/25:** extracción de ubicación/tipo/urgencia, clustering espacio-temporal y señal de contenido no verificable constituyen una cadena concreta de IA.
- **Impacto 17/20:** mejora coordinación de vecinos y municipalidades; depende de que exista moderación humana con capacidad de respuesta.
- **Prototipo 14/15:** cinco reportes y dos duplicados muestran el valor instantáneamente; usar datos sintéticos o con permiso.
- **Factibilidad 8/10:** formulario, tablero y datos de mapa son acotables; multimodalidad, privacidad y canales reales pueden exceder el evento.
- **Pitch 9/10:** narrativa “caos a tablero” es clara, siempre que cada tarjeta conserve “por confirmar”.

### 3. Quebrada Vigía — 86/100

- **Innovación 16/20:** priorización preventiva de inspecciones por quebrada frente a reacción por llamadas; ranking no equivale a predicción confirmada.
- **IA 21/25:** scoring multivariable y ficha generada explicable; mostrar baseline simple y peso de variables para no parecer una hoja de cálculo.
- **Impacto 18/20:** aborda exposición grave a huaicos y escasez operativa de brigadas.
- **Prototipo 14/15:** slider de lluvia, ranking de 4–10 quebradas y ficha son demo reproducible; rotular datos sintéticos.
- **Factibilidad 8/10:** alcance acotado viable, pero inventario geológico, pendientes, cobertura y licencias están **[CONFIRMAR]**.
- **Pitch 9/10:** pregunta “¿adónde va primero la brigada?” da narrativa operativa; enfatizar decisión humana.

### 4. SiembraDecide — 80/100

- **Innovación 16/20:** traduce escenarios agroclimáticos a opciones de siembra; existe riesgo de parecer un cálculo de reglas ya conocido.
- **IA 20/25:** recomendación explicable y comparación de escenarios son pertinentes; debe evidenciarse el modelo frente a una regla fija, no sólo una fórmula.
- **Impacto 17/20:** puede reducir exposición económica de agricultores familiares, pero necesita validación de extensionista y cultivo/cuenca definidos.
- **Prototipo 12/15:** dashboard de dos cultivos es posible, aunque menos tangible que mapa/ranking y dependiente de muchos supuestos.
- **Factibilidad 7/10:** series, requerimientos y agua deben armonizarse y verificarse; datos faltantes podrían reducir validez.
- **Pitch 8/10:** comparación normal vs. Niño es comprensible, pero requiere explicar incertidumbre sin prometer rendimiento.

### 5. Agua Clara — 83/100 (condicional)

- **Innovación 16/20:** visión sobre turbidez en punto de uso tiene valor; la categoría visual no mide contaminación microbiológica.
- **IA 21/25:** clasificador visual de tres clases y recuperación de guía son concretos; dataset representativo y umbral “no concluyente” son esenciales.
- **Impacto 18/20:** alta relevancia post-inundación, pero un usuario podría inferir que agua clara es potable.
- **Prototipo 13/15:** tres fotos y guía citada son muy demostrables; incluir iluminación adversa y rechazo explícito.
- **Factibilidad 6/10:** requiere imágenes licenciadas y protocolo sanitario confirmado; el riesgo de daño y códigos R2/R3/R4 quedan **[CONFIRMAR]**.
- **Pitch 9/10:** visual e inmediato, siempre con descargo prominente y sin dosis inventada.

### 6. SaludCalor — 82/100 (condicional)

- **Innovación 15/20:** triaje conversacional para estrés térmico es pertinente, aunque cercano a orientación sanitaria existente.
- **IA 20/25:** clasificación de respuestas y recuperación con citas son adecuadas; no debe reducirse a reglas ocultas ni diagnosticar.
- **Impacto 17/20:** población vulnerable y derivación oportuna; riesgo de falsa tranquilidad o demora impide máxima puntuación.
- **Prototipo 13/15:** dos casos sintéticos, rechazo fuera de alcance y derivación son demostrables sin datos personales.
- **Factibilidad 8/10:** flujo web ligero; directorio, conectividad, privacidad y reglas sanitarias siguen **[CONFIRMAR]**.
- **Pitch 9/10:** contraste caso leve/grave es claro; evitar afirmar integración real con emergencias si sólo es simulada.

## Recomendación al A0: top 3

### 1) AlertaBarrio (88)
Recomiendo pase prioritario. Obtiene la mejor combinación de IA visible, impacto y demo: cambiar lluvia y observar el cambio de segmentos/ruta es una evidencia inmediata. Condiciones: seleccionar una sola zona, cargar datos verificables o fixtures claramente etiquetados y reemplazar “ruta segura” por “ruta de menor riesgo estimado / apoyo a decisión”.

### 2) Voluntad Visible (87)
Recomiendo pase. Es altamente demostrable, tiene IA sustantiva (extracción + deduplicación) y evita afirmaciones oficiales mediante revisión humana. Condiciones: demo con datos sintéticos o permisos, minimización de datos personales, estado “por confirmar” inmutable hasta moderación.

### 3) Quebrada Vigía (86)
Recomiendo pase. Tiene alto impacto y un caso operativo nítido; su ranking es explicable y acotable. Condiciones: fijar 4–10 quebradas con fuentes/licencias confirmadas (o fixture rotulado), mostrar baseline/pesos y declarar que prioriza inspección, no predice ni ordena una emergencia.

**Menciones condicionales:** Agua Clara (83) y SaludCalor (82) son fuertes en impacto y pitch, pero no deben pasar por encima del top 3 hasta confirmar códigos R2/R3/R4 y controles sanitarios. Si el organizador confirma que no hay restricción sanitaria y se aprueban salvaguardas, pueden competir como alternativas.

## Control crítico de afirmaciones no evidenciadas en B2

Para evitar que la defensa se convierta en hechos no documentados, el jurado **no usa como evidencia** las siguientes afirmaciones de B2: tiempos de laboratorio de 24–72 horas, resultados en menos de 3 o 90 segundos, reducción porcentual o “100%” de recursos, saturación de líneas 106/113, concentración de agricultura familiar, mortalidad/EDAs evitables, disponibilidad de APIs, adopción en menos de 6 meses, existencia/cobertura exacta de inventarios, ni integración real con SAMU/WhatsApp/Telegram. Son hipótesis de valor o metas de demo y quedan **[CONFIRMAR]** con fuente y licencia.

Tampoco se da por probado que mapas actuales sean estáticos, que Waze/Google Maps carezcan de variables hidrológicas, que los kits sean inaccesibles, ni que una tecnología concreta (MobileNet/TensorFlow Lite) esté disponible. Las puntuaciones anteriores sólo reconocen la claridad del caso de uso, el alcance propuesto y la demostrabilidad descrita en B1, descontando factibilidad/seguridad cuando la afirmación depende de evidencia no verificada.

## Cierre

- **Qué hice:** puntué las seis ideas con la rúbrica oficial, justifiqué cada criterio, revisé reglas y riesgos documentados, separé hipótesis de B2 de hechos verificables y recomendé top 3.
- **Qué entrego y dónde:** `hackathon/ideas/ronda-1-a2.md`.
- **Supuestos:** la rúbrica de `01-analisis.md` es la vigente; las fuentes, licencias, conectividad y significados de R2/R3/R4 aún no están confirmados.
- **[CONFIRMAR]:** ratificación del A0; reglas R2–R4; disponibilidad/licencia de datos; tamaño/horario/equipamiento de equipo; formato de entrega y si el jurado exige datos reales durante la demo.

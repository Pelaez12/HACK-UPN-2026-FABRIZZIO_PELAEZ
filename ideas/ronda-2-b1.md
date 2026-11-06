# Ronda 2 — tres ideas mejoradas tras evaluación A2

## Criterio de mejora

Se toman las tres mejor puntuadas por A2 en `ronda-1-a2.md`: AlertaBarrio, Voluntad Visible y Quebrada Vigía. Se corrigen sus desventajas principales: dependencia de datos no confirmados, riesgo de presentar resultados como oficiales, privacidad, exceso de componentes y falta de baseline. Cada propuesta queda limitada a un piloto con fixtures legales y revisión humana. Las fuentes y licencias siguen **[fuente por verificar]**; no se inventan URLs ni se presentan resultados como oficiales.

## 1. AlertaBarrio Verificable — rutas de menor riesgo estimado

- **Problema concreto:** durante lluvias intensas, familias y brigadas no pueden comparar rápidamente calles con mayor riesgo de anegamiento; un mapa general no responde qué tramo conviene evitar.
- **Población:** familias, comerciantes y brigadas de un único barrio/distrito piloto.
- **Mejora frente a R1:** se elimina la promesa de “ruta segura” y el tiempo real. El sistema trabaja con escenarios precargados, etiqueta cada dato como observado/simulado y compara contra una ruta convencional. Si falta lluvia o elevación confirmada, muestra “sin evidencia suficiente” en vez de completar silenciosamente.
- **Función concreta de IA:** clasificador explicable puntúa cada segmento con variables de lluvia, elevación y reportes; un módulo de lenguaje genera una explicación sólo a partir de las variables visibles. Un umbral de abstención bloquea la recomendación cuando faltan campos críticos.
- **Datos públicos [fuente por verificar]:** calles de OpenStreetMap **[fuente por verificar]**; elevación SRTM u otra fuente geoespacial pública **[fuente por verificar]**; precipitación/avisos del SENAMHI **[fuente por verificar]**; reportes públicos de INDECI o municipalidad **[fuente por verificar]**. Se puede usar fixture sintético rotulado si no se confirma licencia a tiempo.
- **Demo de 3 minutos:** (1) elegir origen/destino en un distrito, (2) mostrar ruta base y factores, (3) cambiar escenario de lluvia, (4) mostrar segmentos con riesgo estimado y ruta alternativa, (5) retirar un dato y evidenciar abstención/advertencia. La pantalla dice “simulación, no alerta oficial”.
- **Alcance construible durante el evento:** mapa web de un distrito, 20–50 segmentos precargados, dos escenarios, clasificador o scoring reproducible, explicación y abstención; sin navegación, API en vivo ni instrucción de evacuación.

## 2. Voluntad Visible Moderada — incidentes comunitarios con privacidad

- **Problema concreto:** mensajes ciudadanos sobre desbordes, calles bloqueadas o personas afectadas llegan duplicados, incompletos y sin estado de verificación, dificultando priorizar apoyo.
- **Población:** vecinos y una mesa municipal/brigada que revisa reportes de una zona piloto.
- **Mejora frente a R1:** se reduce la cadena a texto + ubicación voluntaria (sin imágenes ni audio durante el evento), se minimizan datos personales, seudonimizan reportes y se hace obligatoria la revisión humana. “No verificable” es una etiqueta de evidencia faltante, nunca un detector de mentira. Se incorporan métricas de baseline visibles: extracción sin IA y clustering simple para comparar.
- **Función concreta de IA:** extracción de tipo de incidente, ubicación aproximada y urgencia desde texto; agrupamiento espacial-temporal de duplicados; clasificación de campos faltantes y cola para moderación. Cada tarjeta conserva texto de origen, hora, transformación y estado “por confirmar”.
- **Datos públicos [fuente por verificar]:** calles de OpenStreetMap **[fuente por verificar]**; comunicados/reportes públicos de INDECI/COEN **[fuente por verificar]**; datos abiertos municipales **[fuente por verificar]**. Para la demo, usar cinco mensajes sintéticos o con permiso explícito y no recolectar datos de personas reales.
- **Demo de 3 minutos:** (1) ingresar cinco mensajes sintéticos, incluidos dos duplicados, (2) mostrar extracción y ubicación aproximada, (3) enseñar agrupamiento y comparación con baseline, (4) moderar una tarjeta y cambiarla de “por confirmar” a “revisada”, (5) demostrar que un mensaje sin evidencia no se publica como hecho.
- **Alcance construible durante el evento:** formulario local y tablero para cinco tipos de incidente, pipeline de texto, clustering básico, revisión manual y registro de auditoría; sin integración WhatsApp/Telegram, publicación automática, reconocimiento facial ni geolocalización precisa de personas.

## 3. Quebrada Vigía Auditada — priorización de inspección con abstención

- **Problema concreto:** con pocas cuadrillas, una municipalidad necesita ordenar qué quebradas revisar primero ante un escenario de lluvia, sin confundir un ranking exploratorio con una alerta de huaico.
- **Población:** brigadas municipales y juntas vecinales cercanas a 4–10 quebradas de una única zona piloto.
- **Mejora frente a R1:** se reemplaza “modelo aprendido” no verificable por un ranking explicable con pesos publicados, baseline de orden por lluvia solamente y análisis de sensibilidad. Cada quebrada muestra fecha, cobertura, datos reales/sintéticos y nivel de confianza; si faltan pendiente o lluvia, se abstiene y solicita revisión.
- **Función concreta de IA:** modelo de ranking/scoring multicriterio pondera lluvia acumulada, pendiente y antecedente geológico disponibles; un generador estructurado produce una ficha de inspección sólo con esos campos, citando cada entrada. La IA ordena apoyo, no predice activación ni ordena una emergencia.
- **Datos públicos [fuente por verificar]:** avisos/precipitación del SENAMHI **[fuente por verificar]**; modelos de elevación y capas geológicas de INGEMMET o Geo Perú **[fuente por verificar]**; vías de OpenStreetMap **[fuente por verificar]**; inventarios de eventos de INDECI **[fuente por verificar]**. Un fixture sintético se etiqueta en pantalla si las capas no se confirman.
- **Demo de 3 minutos:** (1) mostrar tabla de cuatro quebradas y baseline, (2) activar escenario de lluvia, (3) enseñar nuevo ranking y contribución de cada variable, (4) quitar una variable para provocar abstención, (5) abrir ficha de la primera y confirmar que una persona decide la inspección.
- **Alcance construible durante el evento:** 4–10 registros geográficos precargados, ranking reproducible, slider de dos escenarios, ficha auditable y abstención; sin predicción hidrológica, despacho automático ni alerta pública.

## Comparación y recomendación de la ronda 2

| Idea mejorada | Corrección principal | Riesgo residual | Evidencia demo |
|---|---|---|---|
| AlertaBarrio Verificable | escenarios/abstención y lenguaje “menor riesgo estimado” | cobertura y licencia de capas **[CONFIRMAR]** | cambio de segmentos + ruta + abstención |
| Voluntad Visible Moderada | privacidad, sólo texto, baseline y moderación obligatoria | sesgo de extracción y revisión humana disponible **[CONFIRMAR]** | duplicados + trazabilidad + estado |
| Quebrada Vigía Auditada | pesos/baseline/sensibilidad y no predicción | inventario geológico y lluvia **[CONFIRMAR]** | ranking + contribución + abstención |

**Recomendación provisional:** conservar las tres para la siguiente revisión. Si sólo se permite una, priorizar **AlertaBarrio Verificable** por claridad visual y alcance; escoger **Voluntad Visible Moderada** si no hay capas geoespaciales confirmadas; escoger **Quebrada Vigía Auditada** si una municipalidad aporta un conjunto de quebradas y variables licenciadas. La elección final requiere confirmar fuentes, conectividad, horario y reglas R2/R3/R4.

## Reglas de seguridad y cumplimiento comunes

- Presentar toda salida como simulación/apoyo a decisión, nunca como alerta oficial, diagnóstico, hecho verificado o instrucción de emergencia.
- Etiquetar fuente, fecha, licencia y real/sintético en cada dato; abstenerse ante campos críticos faltantes.
- Usar casos sintéticos o permisos explícitos, minimizar datos personales y mantener revisión humana antes de publicar o actuar.
- Mostrar qué se construyó durante el evento y mantener demo reproducible offline si la conectividad falla.

## Cierre

- **Qué hice:** mejoré las tres propuestas top de A2, reduciendo alcance, agregando abstención/baseline/trazabilidad y corrigiendo lenguaje de seguridad, privacidad y certeza.
- **Qué entrego y dónde:** `hackathon/ideas/ronda-2-b1.md`.
- **Supuestos:** A2 constituye la selección provisional; los datasets institucionales, licencias, conectividad y requisitos R2/R3/R4 no están confirmados.
- **[CONFIRMAR]:** fuentes y licencias para el piloto, disponibilidad de capas, reglas sanitarias/privacidad, tamaño/horario del equipo, formato de entrega y si se aceptan fixtures sintéticos.

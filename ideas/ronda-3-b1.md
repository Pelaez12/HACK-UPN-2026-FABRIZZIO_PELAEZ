# Ronda 3 — refinamiento de las tres propuestas finalistas

## Base de la ronda

A2 R2 recomendó provisionalmente **Voluntad Visible Moderada (88)**, con AlertaBarrio Verificable (83) y Quebrada Vigía Auditada (82) como reservas. Esta ronda corrige los riesgos abiertos: privacidad/reidentificación, evaluación del pipeline NLP, función de IA que no sea sólo fórmula, datos/licencias, confusión con alertas y evidencia del trabajo realizado durante el evento. No se inventan requisitos R2–R4: su significado sigue **[CONFIRMAR]**.

## 1. Voluntad Visible Moderada — edición “mínimo dato, máxima trazabilidad”

- **Problema concreto:** reportes comunitarios sobre desbordes o calles bloqueadas llegan duplicados y sin evidencia suficiente, dificultando que una mesa de respuesta decida qué revisar primero.
- **Población:** vecinos que reportan y una mesa municipal/brigada que modera una zona piloto; no se dirige directamente a personas en peligro.
- **Correcciones aplicadas:** se elimina la conservación de texto libre y ubicación precisa después de extraer campos; seudonimiza un identificador, redondea ubicación a una celda amplia y define retención corta **[CONFIRMAR con privacidad aplicable]**. No hay imágenes, audio, bots ni publicación automática. Se añade conjunto local de evaluación etiquetado y matriz de errores frente a baseline.
- **Función concreta de IA:** extracción estructurada de tipo de incidente, referencia espacial aproximada y campos faltantes desde texto; clustering espacio-temporal con umbral visible para duplicados; clasificación de abstención si la confianza o evidencia es insuficiente. La interfaz permite comparar IA vs. extracción por palabras clave y conserva sólo la explicación/campos necesarios para auditoría.
- **Datos públicos [fuente por verificar]:** calles y nombres de lugar de OpenStreetMap **[fuente por verificar]**; comunicados públicos INDECI/COEN **[fuente por verificar]**; datos abiertos municipales **[fuente por verificar]**. Los mensajes de demo serán sintéticos o cedidos con permiso y se documentará cada licencia.
- **Demo de 3 minutos:** (1) cargar cinco mensajes sintéticos, dos duplicados y uno ambiguo, (2) mostrar campos extraídos y ubicación redondeada, (3) comparar baseline/IA y error conocido en un caso, (4) demostrar abstención del ambiguo, (5) moderar un incidente y mostrar registro de auditoría; la tarjeta sigue “por confirmar” hasta acción humana.
- **Alcance construible durante el evento:** formulario local, cinco tipos de incidente, extracción y clustering en lote, panel de moderación, métrica simple precision/recall sobre fixture etiquetado y registro de auditoría; sin canal oficial, notificación, decisión de recursos ni datos reales personales.

## 2. AlertaBarrio Verificable — edición “comparador abstencionista”

- **Problema concreto:** familias y brigadas no pueden comparar tramos con riesgo estimado de anegamiento ante un escenario de lluvia; un visor general no explica por qué una ruta cambia.
- **Población:** familias, comerciantes y brigadas de un barrio/distrito piloto.
- **Correcciones aplicadas:** deja de llamarse navegación o ruta segura; es un comparador offline de dos rutas. Cada segmento muestra origen/fecha/licencia de datos, el sistema se abstiene si falta una variable crítica y el pitch usa escenarios, no alertas. Se agrega un conjunto pequeño de casos de prueba y baseline por distancia.
- **Función concreta de IA:** clasificador interpretable entrenado/evaluado en un fixture etiquetado (o scoring explícitamente denominado heurístico si no hay etiquetas) puntúa bajo/medio/alto por segmento con lluvia, elevación y reportes; generador restringido convierte sólo los factores visibles en explicación. La demo muestra métricas del fixture y no afirma precisión en campo.
- **Datos públicos [fuente por verificar]:** calles de OpenStreetMap **[fuente por verificar]**; elevación SRTM u otra fuente pública **[fuente por verificar]**; precipitación/avisos SENAMHI **[fuente por verificar]**; reportes públicos de INDECI/municipalidad **[fuente por verificar]**. Si licencia o cobertura no se confirma, usar fixture sintético etiquetado y no mezclarlo con observaciones.
- **Demo de 3 minutos:** (1) elegir origen/destino, (2) comparar ruta por distancia contra ruta de menor riesgo estimado, (3) cambiar escenario de lluvia, (4) abrir factores y métrica del fixture, (5) quitar elevación para activar abstención. Mensaje fijo: “simulación; no alerta ni instrucción de evacuación”.
- **Alcance construible durante el evento:** un mapa, 20–50 segmentos, dos escenarios, dos rutas, clasificador/scoring reproducible, baseline, explicación y abstención; sin API en vivo, navegación, predicción hidrológica ni publicación pública.

## 3. Quebrada Vigía Auditada — edición “ranking reproducible para inspección”

- **Problema concreto:** una brigada con recursos limitados necesita ordenar la inspección preventiva de 4–10 quebradas bajo escenarios de lluvia sin interpretar el orden como predicción o alerta.
- **Población:** brigadas municipales y juntas vecinales de una única zona piloto.
- **Correcciones aplicadas:** se separan explícitamente modelo IA, baseline de lluvia y decisión humana; se evita llamar “aprendido” a un peso que no tenga datos de entrenamiento. Se agrega evaluación de estabilidad: variar una variable no debe ocultarse, y faltantes disparan abstención. Las fichas no incluyen instrucciones de evacuación.
- **Función concreta de IA:** dado un fixture de pares “quebrada a inspeccionar primero” etiquetados por criterios documentados **[confirmar procedencia]**, un modelo de ranking interpretable ordena candidatos y muestra contribución por variable; un generador estructurado crea ficha con citas de campos. Si no hay etiquetas legítimas, el componente IA se limita a extracción/explicación y el ranking se presenta como heurístico, no se infla la puntuación.
- **Datos públicos [fuente por verificar]:** precipitación/avisos SENAMHI **[fuente por verificar]**; elevación y capas geológicas INGEMMET/Geo Perú **[fuente por verificar]**; calles OpenStreetMap **[fuente por verificar]**; inventarios INDECI **[fuente por verificar]**. Fecha, licencia y real/sintético quedan visibles por registro.
- **Demo de 3 minutos:** (1) mostrar cuatro quebradas y baseline, (2) aplicar escenario, (3) mostrar ranking IA y contribuciones, (4) variar un dato para mostrar sensibilidad o abstención, (5) generar ficha de apoyo y confirmar en pantalla que una persona decide. No se publica como alerta.
- **Alcance construible durante el evento:** cuatro registros, dos escenarios, ranking o heurística explícitamente etiquetada, baseline, sensibilidad, ficha auditable y abstención; sin predicción de activación, despacho, sensores en vivo ni orden automática.

## Salvaguardas y decisión provisional

- **Voluntad Visible:** candidata principal por menor dependencia geoespacial; bloqueadores prácticos a resolver: fixture etiquetado, métrica mínima, minimización/retención y moderador disponible.
- **AlertaBarrio:** reserva visual; sólo pasa a principal si se confirma una capa geoespacial/licencia o se acepta fixture sintético y si el jurado admite scoring como IA pertinente **[CONFIRMAR]**.
- **Quebrada Vigía:** reserva operativa; no presentar “aprendizaje” sin etiquetas/procedencia. Si sólo hay reglas, declarar heurística y mostrar por qué la IA aporta explicación/abstención.

Las tres usan datos sintéticos o públicos con licencia confirmada, estados “por confirmar”, decisión humana y demo reproducible offline. Ninguna emite alertas oficiales, diagnósticos ni promesas de seguridad.

## Formato común exigible en demo y entrega

1. Fuente, licencia, fecha y real/sintético por cada dataset.
2. Baseline visible y un caso de abstención.
3. Entrada, transformación IA, salida y confianza/limitación.
4. Qué función se construyó durante el evento, con evidencia reproducible.
5. Privacidad por diseño: no recolectar datos personales reales para el pitch.

## Cierre

- **Qué hice:** refiné las tres finalistas de R2 con evaluación del pipeline, baseline, abstención, minimización de datos, separación IA/heurística y trazabilidad; prioricé provisionalmente Voluntad Visible sin declarar ganador definitivo.
- **Qué entrego y dónde:** `hackathon/ideas/ronda-3-b1.md`.
- **Supuestos:** fixture sintético rotulado puede usarse si no se confirma una fuente; R2–R4 y reglas de privacidad/entrega siguen sin definición pública.
- **[CONFIRMAR]:** licencia y cobertura de datos, privacidad/retención, significado de R2–R4, exigencia de datos reales, conectividad/horario, evidencia de desarrollo durante el evento y aceptación de heurísticas como IA pertinente.

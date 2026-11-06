# Ronda 2 — evaluación independiente A2 y recomendación al A0

## Alcance y método

Evalué únicamente las tres propuestas de `ronda-2-b1.md`, contrastándolas con la defensa B2, la auditoría B3 y la rúbrica documentada en `hackathon/01-analisis.md` (20/25/20/15/10/10 = 100). Los puntajes son juicio del jurado, no resultados medidos: afirmaciones de fuentes, licencias, adopción, precisión, horario y capacidades se mantienen como **[CONFIRMAR]**. No convierto los códigos R2, R3 y R4 en requisitos inventados: los documentos disponibles no los definen.

## Puntajes

| Propuesta | Innovación (20) | IA (25) | Impacto (20) | Prototipo (15) | Factibilidad (10) | Pitch (10) | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| **Voluntad Visible Moderada** | 17 | 22 | 17 | 14 | 9 | 9 | **88** |
| AlertaBarrio Verificable | 16 | 19 | 17 | 14 | 8 | 9 | **83** |
| Quebrada Vigía Auditada | 17 | 18 | 17 | 14 | 8 | 8 | **82** |

### 1. Voluntad Visible Moderada — 88/100

- **Innovación, 17/20:** convierte mensajes comunitarios duplicados y desordenados en incidentes agrupados, con moderación y trazabilidad; es una combinación pertinente, aunque no inédita por sí sola.
- **Uso pertinente de IA, 22/25:** extracción de tipo/ubicación/urgencia, clustering espaciotemporal y detección de campos faltantes son funciones concretas que superan palabras clave y agrupación ingenua. Resto 3 puntos porque la calidad debe probarse con un conjunto de evaluación y cinco fixtures no demuestran generalización **[CONFIRMAR]**.
- **Impacto, 17/20:** atiende la sobrecarga operativa de vecinos, brigadas y mesa municipal; no se afirma adopción ni mejora real sin usuarios/datos institucionales **[CONFIRMAR]**.
- **Prototipo, 14/15:** demo reproducible con cinco mensajes, duplicados, baseline, estado por confirmar y revisión humana. Resta un punto por depender de fixtures sintéticos y por el tiempo ajustado para mostrar todo.
- **Factibilidad, 9/10:** formulario local, NLP liviano, clustering y auditoría son el alcance más construible y resiliente offline. Resta un punto por privacidad/reidentificación residual y taxonomía EDAN/licencias **[CONFIRMAR]**.
- **Pitch, 9/10:** contraste caos → tablero es claro en tres minutos; debe evitar presentar “urgencia” como severidad o verdad y ensayar un único caso feliz más abstención.

### 2. AlertaBarrio Verificable — 83/100

- **Innovación, 16/20:** navegación preventiva a escala de tramo es una aplicación atractiva frente a mapas macro y rutas por distancia, pero el concepto es menos nuevo que su formulación.
- **Uso pertinente de IA, 19/25:** scoring/clasificador explicable y explicación restringida son plausibles y tienen abstención; B3 identifica que podría terminar siendo sólo una fórmula ponderada. Algoritmo, calibración y datos de entrenamiento siguen **[CONFIRMAR]**, por lo que no otorgo puntuación máxima.
- **Impacto, 17/20:** problema urbano concreto y relevante para familias, comerciantes y brigadas; el beneficio se presenta como apoyo exploratorio, no como seguridad real. Cobertura real y efecto sobre desplazamientos **[CONFIRMAR]**.
- **Prototipo, 14/15:** mapa, ruta base, dos escenarios y abstención son demo fuerte y verificable offline con 20–50 segmentos. Resta un punto por coherencia de geometrías/capas y carga de todos los pasos en tres minutos.
- **Factibilidad, 8/10:** fixtures locales reducen dependencia técnica, pero elevación, lluvia, OSM y reportes institucionales tienen fuentes/licencias/cobertura por verificar; no se acredita aún implementación <6 meses **[CONFIRMAR]**.
- **Pitch, 9/10:** cambio visual de escenario comunica valor rápidamente. Debe repetir “simulación, no alerta ni navegación segura” y no inducir falsa seguridad.

### 3. Quebrada Vigía Auditada — 82/100

- **Innovación, 17/20:** priorizar inspecciones con variables visibles, baseline y sensibilidad es valioso para cuadrillas limitadas; pierde algunos puntos por parecer una matriz multicriterio conocida.
- **Uso pertinente de IA, 18/25:** ranking y ficha estructurada son funciones delimitadas, pero B3 señala que pesos publicados pueden ser regla fija y que generar una ficha no vuelve IA al ranking. Debe demostrarse componente de inferencia/aprendizaje o justificarse la contribución de IA **[CONFIRMAR]**.
- **Impacto, 17/20:** aborda huaicos y recursos municipales escasos sin prometer predicción ni evacuación; población, inventario de quebradas y utilidad de campo permanecen por confirmar.
- **Prototipo, 14/15:** 4–10 registros, slider, contribuciones, sensibilidad y abstención caben en una demo determinista. Resta un punto por la coordinación requerida y por demostrar estados faltantes de forma reproducible.
- **Factibilidad, 8/10:** cálculo liviano y fixtures permiten un piloto; capas geológicas, pendientes, inventario y licencias siguen **[CONFIRMAR]**, y no hay evidencia de adopción <6 meses.
- **Pitch, 8/10:** pregunta “¿a qué quebrada enviamos la brigada?” es potente, pero el ranking puede confundirse con orden oficial; exige aviso visible de apoyo exploratorio y decisión humana.

## Auditoría de umbral y bloqueantes

- **Umbral de puntuación:** sólo Voluntad Visible alcanza ≥85 (88). AlertaBarrio (83) y Quebrada Vigía (82) quedan por debajo por riesgos no resueltos de IA sustantiva y evidencia/datos.
- **Ventaja mínima:** Voluntad Visible supera a la segunda (AlertaBarrio) por **5 puntos**, exactamente el margen exigido.
- **Construibilidad:** las tres tienen alcance acotado, fixtures rotulados y operación offline prevista; Voluntad Visible presenta la menor dependencia de capas geoespaciales.
- **Bloqueantes R2–R4:** **no puedo declarar ausencia definitiva** porque R2, R3 y R4 no están definidos en los materiales disponibles. No hay evidencia actual de bloqueo contractual: las tres preservan revisión humana, abstención y rotulado de simulación. Debe confirmarse si algún código exige datos reales, operación en vivo, privacidad específica o prohíbe fixtures **[CONFIRMAR]**.
- **Riesgos que impedirían ratificación:** (1) Voluntad Visible no debe conservar texto/ubicación que permita reidentificar personas; usar sólo sintéticos o permisos y difuminar ubicación; (2) medir al menos errores del pipeline frente al baseline; (3) no publicar ni priorizar automáticamente; (4) registrar qué función central se desarrolló durante el evento, pues las bases lo exigen.

## Recomendación al capitán A0

**Recomiendo ratificar como ganadora provisional a Voluntad Visible Moderada (88/100), condicionada a confirmar R2–R4, privacidad y entregables.** Es la única que supera 85 y mantiene ventaja de 5 puntos; además ofrece la función de IA más explícita y la implementación más robusta sin capas geoespaciales inciertas. Mantener AlertaBarrio como reserva visual (83) y Quebrada Vigía como reserva técnica (82), no como ganadoras mientras no se resuelvan sus riesgos de IA.

## Cierre

- **Qué hice:** reevalué las tres propuestas R2 con la rúbrica de 100 puntos, justifiqué cada criterio, audité umbral/margen/construibilidad y revisé potenciales bloqueantes R2–R4.
- **Qué entrego y dónde:** `hackathon/ideas/ronda-2-a2.md`.
- **Supuestos:** la rúbrica de `01-analisis.md` es la vigente; los códigos R2–R4 no están definidos; fixtures sintéticos rotulados son admisibles mientras no se confirme lo contrario.
- **Pendientes [CONFIRMAR]:** definición oficial de R2/R3/R4; reglas de privacidad y licencias; métrica y fixtures de evaluación NLP; fuentes institucionales; horario/conectividad; formato y evidencia de entrega; qué trabajo debe realizarse durante el evento.

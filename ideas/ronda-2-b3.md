# Ronda 2 — auditoría adversarial de propuestas mejoradas (B3)

## Alcance y regla de bloqueo
Se revisó `ronda-2-b1.md` contra `01-analisis.md`. Las bases extraídas no definen qué significan R2, R3 y R4 ni publican mínimos por criterio (`01-analisis.md:38-50`); por eso no invento su interpretación. Sólo marco BLOQUEANTE cuando existe evidencia de ausencia de IA, incumplimiento contractual o inviabilidad, y marco lo demás como riesgo/[CONFIRMAR].

## 1. AlertaBarrio Verificable

- **Función IA aún ambigua:** “clasificador explicable” puede terminar siendo un scoring manual con pesos, no un modelo de IA. La propuesta debe mostrar entrenamiento/inferencia o justificar técnicamente el modelo y compararlo con la ruta convencional; de lo contrario pierde pertinencia de IA (25 puntos, `01-analisis.md:42-47`). **[CONFIRMAR]** qué algoritmo, datos de calibración y baseline se usarán.
- **Explicación generada:** aunque se restringe a variables visibles, un módulo de lenguaje puede redactar causalidad no demostrada. La demo debe mostrar plantilla/citas y bloquear cualquier factor ausente; validar con casos adversariales.
- **Riesgo geoespacial:** 20–50 segmentos, elevación, lluvia, reportes y ruta alternativa requieren geometrías coherentes y sistema de coordenadas. Todas las capas siguen “fuente por verificar” (`ronda-2-b1.md:13`); un fixture sintético legalmente rotulado resuelve disponibilidad, pero no prueba impacto real.
- **Riesgo de interpretación:** “menor riesgo estimado” puede ser entendido como ruta segura. La pantalla ya dice simulación/no alerta (`:14`), pero el pitch debe repetir que no es evacuación ni navegación.
- **Construibilidad:** 20–50 segmentos, dos escenarios y abstención caben si el mapa y datos están precargados (`:15`); integrar APIs en vivo queda fuera correctamente. **[CONFIRMAR]** horario, conectividad y entregable técnico (`01-analisis.md:22-27`).
- **Bloqueante:** no demostrado. Sería BLOQUEANTE R2/R3/R4 sólo si esos requisitos exigen datos institucionales reales o prohíben fixtures; los documentos disponibles no lo dicen.

## 2. Voluntad Visible Moderada

- **Riesgo de privacidad residual:** ubicación aproximada, hora y texto pueden reidentificar a personas en un barrio pequeño, incluso sin imágenes. Seudonimizar no basta si se conserva texto íntegro (`ronda-2-b1.md:21-24`). Usar sólo mensajes sintéticos/permisos y difuminar ubicación en la demo; **[CONFIRMAR]** reglas de datos personales, pues Bases dejan el tema abierto (`01-analisis.md:28`).
- **IA frente a baseline:** extracción, clustering y clasificación de campos faltantes sí son funciones concretas (`:22`), pero la comparación contra baseline debe medir al menos errores en los cinco mensajes; si sólo se visualiza una diferencia, IA puede parecer adorno. **[CONFIRMAR]** conjunto de evaluación y métrica.
- **Riesgo semántico:** “urgencia” extraída de texto no equivale a severidad real; cola de moderación debe mostrar incertidumbre y nunca publicar/ordenar ayuda automáticamente. La propuesta lo mitiga con revisión humana (`:21`, `:24-25`).
- **Riesgo de impacto:** cinco mensajes sintéticos permiten demo, pero no evidencian que funcione para vecinos reales ni comunicados institucionales; fuentes y licencias siguen sin verificar (`:23`). No afirmar adopción o precisión.
- **Construibilidad:** formulario local, cinco tipos, clustering y auditoría son razonables offline (`:25`, `01-analisis.md:13`), pero el pipeline de ubicación + extracción + moderación puede consumir el pitch; preparar fixtures y fallback estático.
- **Bloqueante:** no hay violación documentada. Podría ser BLOQUEANTE si R2/R3/R4 exige operación real o si el jurado considera insuficiente una demo sólo sintética; **[CONFIRMAR]**.

## 3. Quebrada Vigía Auditada

- **IA potencialmente insuficiente:** “ranking/scoring multicriterio con pesos publicados” puede ser una fórmula convencional, y generar una ficha estructurada no convierte automáticamente el ranking en IA. Deben justificar por qué IA aporta frente a regla fija (p. ej., inferencia calibrada, aprendizaje de pesos o extracción robusta) sin reclamar predicción de huaico. En caso contrario hay riesgo alto en uso pertinente de IA (`01-analisis.md:42-43`). **[CONFIRMAR]** qué componente es realmente modelo de IA.
- **Validez de pesos:** publicar pesos y análisis de sensibilidad mejora trazabilidad, pero no demuestra que sean válidos para una quebrada concreta. Lluvia, pendiente e inventarios geológicos siguen [fuente por verificar] (`ronda-2-b1.md:31-33`); fixture sintético sólo demuestra UX.
- **Riesgo operativo:** incluso con abstención, un ranking visible puede convertirse informalmente en orden de inspección. La ficha debe incluir “apoyo exploratorio”, fecha, cobertura y decisión humana, no lenguaje de prioridad oficial (`:29`, `:32`, `:34`).
- **Construibilidad:** 4–10 registros, ranking, dos escenarios y ficha son acotados (`:35`); sin embargo quitar variable y disparar abstención exige manejar estados de datos de forma reproducible. Preparar un caso de prueba visible.
- **Bloqueante:** no demostrado. Sería bloqueo R2/R3/R4 si se exige predicción validada o datos reales, pero las bases sólo piden función pertinente, demo y factibilidad (`01-analisis.md:42-47`).

## Riesgos transversales / controles obligatorios

1. **Fuentes/licencias:** las tres dependen de capas institucionales aún no verificadas (`ronda-2-b1.md:13,23,33`, `:58-59`). Confirmar URL, licencia, cobertura y fecha; si no, usar fixtures sintéticos rotulados sin afirmar impacto real.
2. **Trabajo durante el evento:** bases permiten código previo, pero funciones centrales/nuevas deben hacerse durante el evento (`01-analisis.md:13`). Registrar commits o cambios y preparar sólo infraestructura/fixtures previamente.
3. **Seguridad y procedencia:** nunca presentar ranking, ruta o tarjeta como alerta oficial/hecho verificado; esto es exigencia contractual (`01-analisis.md:15,36`).
4. **R2–R4:** códigos no definidos; solicitar definición antes de declarar una idea libre de bloqueantes. En la evidencia actual no hay BLOQUEANTE definitivo.
5. **Pitch:** cada demo contiene demasiados pasos (ruta + escenario + abstención; extracción + baseline + moderación; ranking + sensibilidad + ficha). Ensayar 3 minutos y tener un único caso feliz y un caso de abstención (`01-analisis.md:13-14,47`).

## Veredicto adversarial
Las tres mejoras son potencialmente construibles y tienen función IA explícita, pero AlertaBarrio y Quebrada Vigía conservan riesgo de que el supuesto “modelo IA” sea sólo scoring; Voluntad Visible conserva riesgo de privacidad/reidentificación y evidencia débil por datos sintéticos. No declaro bloqueante definitivo sin la definición oficial R2–R4 y confirmación de fuentes/entregables.

## Cierre
- **Qué hice:** audité las tres propuestas de ronda 2 en IA, datos, privacidad, seguridad, R2–R4 y ventana de demo.
- **Qué entrego y dónde:** `hackathon/ideas/ronda-2-b3.md`.
- **Supuestos:** R2–R4 no están definidos en los documentos extraídos; no se inventan requisitos.
- **[CONFIRMAR]:** algoritmos y métricas IA, fuentes/licencias, reglas de privacidad, fixtures aceptables, horario/conectividad y formato de entrega.

# Ronda 5 — Defensa final de la propuesta consolidada

**Documentos de referencia:** `hackathon/01-analisis.md` (análisis contractual y rúbrica oficial), `hackathon/ideas/ronda-4-a2.md` (evaluación y observaciones críticas de A2 R4), `hackathon/ideas/ronda-4-b3.md` (auditoría adversarial R4) y `hackathon/ideas/ronda-5-b1.md` (propuesta final consolidada de B1 R5).  
**Propuesta evaluada:** **Voluntad Visible: Buzón efímero auditado** (candidata única consolidada).  
**Rol evaluador:** B2 Defensor de ventajas.  
**Criterio metodológico:** Se defiende la propuesta final frente a alternativas convencionales y contra los seis criterios de la rúbrica oficial de 100 puntos. Acogiendo el control crítico de A2 en R4, **no se formulan afirmaciones absolutas ni promesas no probadas** (como "cero riesgo", "borrado infalible" o "precisión garantizada en campo"). Las ventajas se argumentan a partir de los controles de diseño verificables en la demo, delimitando las métricas estrictamente al fixture local etiquetado y señalando con rigor los límites operativos y supuestos con **[CONFIRMAR]**.

---

## 1. Defensa competitiva frente a alternativas convencionales y frente a la línea base

### A. Frente a la gestión comunitaria informal (grupos de WhatsApp y redes sociales)
- **Problema de la alternativa:** En eventos extremos asociados al Fenómeno del Niño, los canales de mensajería vecinal colapsan con cientos de mensajes heterogéneos, audios, fotos pesadas, información contradictoria y rumores no corroborados. Las brigadas y mesas de ayuda pierden tiempo valioso intentando discernir qué reportes corresponden a un mismo incidente.
- **Ventaja de diseño de Voluntad Visible:** Centraliza los avisos comunitarios bajo un esquema estructurado que extrae los datos mínimos esenciales (tipo de evento, cuadrante espacial aproximado y campos faltantes) y agrupa mediante clustering espaciotemporal los avisos duplicados en una sola tarjeta de incidente en estado *"por confirmar"*.
- **Límite explícito:** El sistema no determina la veracidad fáctica del suceso ni sustituye las líneas oficiales de emergencia (COEN/INDECI/115); actúa únicamente como un clasificador preliminar para ordenar la carga de revisión de la persona moderadora.

### B. Frente a formularios municipales convencionales y buzones burocráticos
- **Problema de la alternativa:** Los formularios rígidos exigen completar múltiples campos técnicos obligatorios que una persona afectada o un vecino en medio de una precipitación no puede o no sabe llenar, provocando abandono del reporte o subregistro.
- **Ventaja de diseño de Voluntad Visible:** Permite el ingreso de texto sintético o cedido en lenguaje natural, encargándose el pipeline de procesar la intención y la ubicación declarada, detectando anomalías o vacíos mediante un clasificador de abstención en lugar de rechazar el reporte o inventar información faltante.

### C. Frente a la línea base (*baseline*) sin IA (búsqueda mecánica por palabras clave)
- **Problema del baseline:** Una búsqueda por coincidencia léxica exacta (ej. buscar "inundación") genera un doble error: falsos negativos ante variantes dialectales o sinónimos ("desborde de acequia", "calle anegada", "agua en la pista") y falsos positivos al no analizar contexto, dispersando los avisos en registros desconectados.
- **Ventaja demostrable de la IA:** El componente de NLP extrae entidades categóricas y el clustering semántico-espacial agrupa los avisos correspondientes al mismo suceso aunque utilicen distinta redacción.
- **Límite métrico estricto:** La superioridad del pipeline de IA frente al baseline de palabras clave se mide **exclusivamente sobre el fixture de 5 casos sintéticos de la demo** (mostrando la matriz de confusión y el balance de precisión/exhaustividad en pantalla), sin extrapolar estas cifras como garantías de exactitud en entornos reales de producción.

---

## 2. Evaluación detallada frente a la rúbrica oficial (100 puntos)

| Criterio Oficial | Puntos | Justificación defensiva de la propuesta consolidada | Límites y salvaguardas contractuales |
|---|---:|---|---|
| **Innovación y creatividad** | 20 | Propone un modelo de "mínimo dato y máxima trazabilidad", rompiendo con el enfoque tradicional de recolección masiva de datos personales en emergencias. Integra extracción NLP, clustering y abstención en una cadena ética orientada al soporte de moderación. | La innovación reside en la arquitectura responsable y la mitigación de infoxicación; no se atribuye la invención de nuevos algoritmos teóricos de NLP. |
| **Uso pertinente de IA** | 25 | La IA cumple tres funciones delimitadas y técnicamente justificadas: (1) extracción de tipo de incidente y ubicación difusa, (2) deduplicación por agrupamiento espaciotemporal, y (3) abstención activa ante mensajes ambiguos. Se contrasta empíricamente contra el baseline de palabras clave. | La IA asiste y pre-clasifica para la cola humana; no toma decisiones de despacho, no asigna recursos de auxilio ni juzga la veracidad de los hechos. |
| **Impacto y relevancia** | 20 | Alivia el cuello de botella operativo de comités locales (COEL) y juntas vecinales durante desbordes o anegamientos, ordenando la información para que las cuadrillas sepan qué puntos tienen avisos coincidentes antes de salir a campo. | Beneficio acotado a la optimización del flujo de revisión; no se afirman vidas salvadas ni métricas de impacto de campo sin validación institucional **[CONFIRMAR]**. |
| **Prototipo y funcionamiento** | 15 | Demo sumamente ágil y reproducible en 3 minutos exactos: ingesta de 5 mensajes de prueba (dos duplicados y uno ambiguo), visualización del baseline vs. IA, abstención visible, moderación humana y borrado de sesión en memoria volátil. | Se ejecuta íntegramente de manera local con fixtures sintéticos; no requiere conectividad externa ni bases de datos persistentes. |
| **Factibilidad y escalabilidad** | 10 | Máxima viabilidad técnica para la hackathon: no depende de modelos pesados, GPUs dedicadas, GIS complejos ni APIs propietarias. Es construible durante la jornada presencial en UPN Breña. | El alcance del concurso excluye integraciones con WhatsApp corporativo, servidores en la nube o despliegue multi-distrital, los cuales quedan para fases posteriores (<6 meses). |
| **Presentación y pitch** | 10 | Narrativa clara, pedagógica y de alto impacto social: muestra el paso del "caos de reportes desordenados" a un "tablero consolidado y auditado por una persona", cerrando con la demostración de borrado seguro. | La interfaz mantiene una advertencia visible en todo momento: *"Simulación con fines demostrativos — No constituye canal oficial de emergencias"*. |
| **Total Rúbrica** | **100** | **Puntuación respaldada: 90 / 100** (Ratificada de forma independiente por el jurado A2 en R3 y R4). | Supera holgadamente el umbral contractual de 85 puntos y mantiene una ventaja de 5 puntos sobre las reservas. |

---

## 3. Blindaje de privacidad, seguridad y control de riesgos contractuales

En cumplimiento riguroso de las observaciones de A2 y B3, la propuesta consolida cuatro controles técnicos innegociables:

1. **Minimización de datos y supresión de reidentificación:**
   - No se solicita ni se almacena texto libre sin procesar, nombres propios, teléfonos, fotografías ni grabaciones de voz.
   - La referencia geográfica se difumina y redondea automáticamente a una **celda espacial amplia** (cuadrante barrial de escala macro), impidiendo la geolocalización fina de domicilios particulares.
2. **Ejecución efímera en memoria volátil (*in-memory*):**
   - Para evitar controversias sobre la persistencia de datos o la eficacia de algoritmos de sobreescritura en disco, la versión para la demo del 6 de noviembre **se ejecuta exclusivamente en la memoria RAM del proceso local**.
   - Al finalizar la demostración, el botón de reinicio/borrado purga las estructuras de datos en memoria y la pantalla confirma el estado vacío, eliminando cualquier vector de fuga de información.
3. **Principio estricto de moderación humana (*human-in-the-loop*):**
   - Ningún incidente se publica, exporta ni retransmite de forma automática.
   - La interfaz mantiene todo reporte en estado inmutable *"por confirmar"* hasta que la persona moderadora valida o descarta la ficha, cumpliendo cabalmente el artículo 9 de las Bases que prohíbe presentar resultados no verificados como oficiales.
4. **Procedencia y consentimiento de datos:**
   - La demostración utiliza exclusivamente **cinco mensajes sintéticos rotulados** expresamente diseñados para evidenciar las funciones del sistema (casos regulares, duplicados y caso ambiguo para abstención), garantizando el cumplimiento de las normativas de protección de datos personales.

---

## 4. Comparativa final frente a las opciones de reserva

| Dimensión de Decisión | Voluntad Visible: Buzón efímero auditado (Ganadora) | AlertaBarrio: Comparador GeoJSON (Reserva Visual) | Quebrada Vigía: Ficha sin circularidad (Reserva Condicionada) |
|---|---|---|---|
| **Estatus en R4 (A2)** | **90 / 100 (Recomendada para ratificación definitiva)** | 85 / 100 (Reserva 1) | 82 / 100 (Reserva 2) |
| **Diferencial de margen** | **Supera por 5 puntos** el umbral de la segunda opción. | A 5 puntos del primer lugar. | A 8 puntos del primer lugar. |
| **Dependencia de datos externos** | **Mínima:** Datos sintéticos locales y librerías livianas de texto; cero dependencia de APIs externas. | **Media-Alta:** Requiere capas vectoriales GeoJSON de calles y cotas de elevación precisas. | **Alta:** Requiere catálogo específico de quebradas e inventarios geológicos de INGEMMET. |
| **Riesgo en demo de 3 min** | **Bajo:** Flujo determinista en memoria sin renderizado GIS pesado ni riesgo de lag cartográfico. | **Medio:** Renderizado de mapas web susceptible a fallos visuales (mitigado con fallback tabular). | **Medio:** Explicación técnica compleja de factores geológicos y sensibilidad de pesos. |
| **Justificación de IA** | Extracción estructurada NLP + clustering + clasificador de abstención evaluado con matriz de confusión. | Clasificador interpretable o scoring heurístico explícito + generador restringido. | Extracción/normalización + generador estructurado de fichas citadas + análisis de sensibilidad. |
| **Rol contractual final** | **Propuesta ganadora definitiva para competir en la Hackathon.** | Plan de contingencia visual si el jurado exige mapa interactivo. | Plan de contingencia temático si el jurado exige enfoque puramente geológico. |

---

## 5. Criterios de no ratificación y contingencias técnicas

Para actuar con total transparencia metodológica, B2 ratifica que la propuesta se suspendería o adaptaría únicamente bajo las siguientes condiciones documentadas:
1. Si los organizadores de la hackathon publican formalmente las definiciones de los códigos R2–R4 y estos prohibieran explícitamente el uso de fixtures sintéticos rotulados en la fase presencial **[CONFIRMAR]**.
2. Si las Bases exigieran obligatoriamente la ingesta de datos de ciudadanos en tiempo real (lo cual contravendría la política de no presentar datos no verificados, activando el plan de consulta ética a la organización).
3. Si el jurado presencial demandara una solución cartográfica interactiva como requisito de corte, en cuyo caso se activaría inmediatamente **AlertaBarrio: Comparador GeoJSON con abstención** como reemplazo directo.

---

## Cierre de trabajo

- **Qué hice:** Elaboré la defensa final y estructurada de la propuesta consolidada *Voluntad Visible: Buzón efímero auditado*, evaluando sus ventajas competitivas frente a alternativas y al baseline sin IA, justificando su desempeño bajo los 6 criterios de la rúbrica oficial (100 puntos), detallando sus controles de privacidad (memoria volátil y difuminado espacial), señalando con rigor sus límites operativos y contrastándola contra las dos opciones de reserva.
- **Qué entrego y dónde:** El documento formal de defensa final en `hackathon/ideas/ronda-5-b2.md`.
- **Supuestos:** La rúbrica oficial de 100 puntos documentada en `hackathon/01-analisis.md` rige la selección final; los fixtures sintéticos rotulados y la ejecución en memoria son plenamente admisibles para la demostración presencial de 3 minutos en UPN Breña.
- **[CONFIRMAR]:** 
  - Ratificación formal por parte del jurado A2 y proclamación definitiva de A0 de la propuesta ganadora.
  - Verificación oficial del significado de los códigos R2–R4 si la organización los publica el día del evento.
  - Aclaración de la contradicción sobre tamaño de equipo (1–6 en Bases vs. 3–6 en Detalle) y horario definitivo de la jornada del 6 de noviembre.

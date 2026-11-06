# Ronda 3 — auditoría adversarial de refinamientos (B3)

## Alcance
Revisé `ronda-3-b1.md` y `01-analisis.md`. R2–R4 no están definidos en el análisis contractual (`01-analisis.md:38-50`), por lo que no invento bloqueantes. Audito IA, datos/licencias, ética, privacidad, evento y demo. Un fixture puede demostrar funcionamiento, pero no impacto de campo.

## 1. Voluntad Visible — mínimo dato

- **Privacidad residual:** eliminar texto y ubicación precisa después de extraer reduce exposición, pero la combinación de celda amplia, hora y tipo de incidente aún podría reidentificar en un barrio pequeño. Retención corta y regla aplicable están “[CONFIRMAR]” (`ronda-3-b1.md:11`). Definir plazo, quién accede y borrado verificable; usar exclusivamente mensajes sintéticos/cedidos en demo.
- **Riesgo de geocodificación:** extraer referencia espacial aproximada desde texto puede ubicar mal un incidente; mostrar incertidumbre y no convertir la celda en coordenada exacta. OSM y comunicados INDECI/COEN siguen con fuente/licencia por verificar (`:13`).
- **IA y evaluación:** extracción/clustering/abstención son funciones concretas y baseline visible (`:12-14`), pero cinco mensajes no permiten afirmar precisión general. Precision/recall debe reportarse como fixture, con definición de etiquetas y casos no vistos; no usar métricas como validación operativa.
- **Riesgo de moderación:** tarjeta “por confirmar” hasta acción humana está bien, pero una persona puede aprobar una extracción errónea. Registrar quién/cuándo y conservar evidencia mínima; no publicar ni notificar automáticamente (`:14-15`).
- **Evento:** formulario, NLP, clustering, panel, métricas y auditoría son muchos componentes para una ventana cuyo horario/entregable sigue [CONFIRMAR] (`01-analisis.md:22-27`). Fijar cinco fixtures offline y un camino de demo; dejar importación real fuera.
- **Bloqueante:** no probado. Sólo sería bloqueante R2/R3/R4 si se exige datos personales/operación real o retención que el diseño no pueda cumplir; no está documentado.

## 2. AlertaBarrio — comparador abstencionista

- **Riesgo de función IA:** se corrige el problema al distinguir clasificador entrenado de scoring heurístico (`ronda-3-b1.md:22`), pero si no hay etiquetas, la salida es heurística y no debe presentarse como IA. El jurado podría puntuar bajo uso pertinente de IA (25 puntos, `01-analisis.md:42-43`). **[CONFIRMAR]** si scoring/explicación/abstención satisface R2–R4.
- **Riesgo de datos:** capas OSM, SRTM, SENAMHI e INDECI permanecen no verificadas (`:23`). Mezclar fixture y observaciones está prohibido por diseño; la demo debe mostrar fuente, licencia, fecha y real/sintético por segmento, no sólo en documentación.
- **Riesgo metodológico:** “menor riesgo estimado” con fixture pequeño puede reflejar los pesos construidos por el equipo, no desempeño predictivo. Métricas del fixture y baseline por distancia deben acompañarse de limitación explícita; retirar elevación debe producir abstención determinista (`:24`).
- **Ética/seguridad:** mensaje “no alerta ni evacuación” es adecuado; aun así, dos rutas visuales pueden inducir conducta de evacuación. Añadir advertencia persistente y decisión humana, sin lenguaje de seguridad.
- **Evento:** mapa, routing, clasificador, baseline, explicación y abstención es alcance ajustado pero sensible a datos geoespaciales; fallback totalmente precargado es imprescindible (`:25`, `01-analisis.md:13`).
- **Bloqueante:** no demostrado; potencial si bases/jurado no aceptan fixtures sintéticos o heurística como IA (**[CONFIRMAR]**).

## 3. Quebrada Vigía — ranking reproducible

- **Riesgo principal de IA:** el modelo de ranking necesita pares etiquetados “inspeccionar primero” cuya procedencia está “[confirmar]” (`ronda-3-b1.md:32`). Sin etiquetas legítimas, sólo extracción/explicación es IA y el ranking es heurístico; no debe recibir crédito como aprendizaje. Aclarar algoritmo, origen de etiquetas y métrica antes de elegir.
- **Riesgo de circularidad:** si criterios documentados generan las etiquetas y luego el modelo aprende esos mismos criterios, la evaluación sólo reproduce la regla. Mostrar baseline de lluvia, partición del fixture y análisis de sensibilidad, sin afirmar capacidad de predicción de huaicos.
- **Riesgo operativo:** ranking visible puede convertirse en orden de inspección pese al aviso; ficha debe decir apoyo exploratorio, cobertura/fecha y “decide persona”, nunca prioridad oficial o instrucción de emergencia (`:29-35`).
- **Datos/licencias:** lluvia, geología, elevación, OSM e inventarios INDECI no tienen fuente confirmada (`:33`). Cuatro registros sintéticos permiten demo, no validan utilidad para una municipalidad.
- **Evento:** cuatro registros, ranking, baseline, sensibilidad, ficha y abstención son razonables offline, pero faltantes y cambio de variable deben ser casos preconstruidos para evitar fallo en vivo (`:34-35`).
- **Bloqueante:** no probado. Potencial si R2/R3/R4 exige modelo validado con datos institucionales reales; requisitos no publicados.

## Riesgos transversales y controles

1. **Licencias/procedencia:** confirmar URL, licencia, cobertura y fecha de cada fuente; Bases hacen responsable al equipo por calidad, legalidad y procedencia, y prohíben presentar resultados no verificados como oficiales (`01-analisis.md:15,36`).
2. **Trabajo del evento:** documentar commits o cambios de las funciones centrales, pues nuevas funcionalidades deben realizarse durante el evento (`01-analisis.md:13`).
3. **Fixtures:** etiquetar sintético en UI, evitar datos personales reales y no atribuir desempeño de campo. **[CONFIRMAR]** aceptación formal de fixtures y formato de entrega (`01-analisis.md:26,54`).
4. **Demo de tres minutos:** limitarla a un caso feliz y uno de abstención; métricas, baseline y auditoría deben estar precargados (`01-analisis.md:13-14,47`).
5. **R2–R4 y privacidad:** solicitar definición oficial y reglas de retención antes de declarar ganadora libre de bloqueantes. El diseño de Voluntad Visible es el más prudente, pero aún tiene dependencia de moderador, fixture etiquetado y política de borrado.

## Veredicto
No hay BLOQUEANTE definitivo demostrado con la documentación disponible. Voluntad Visible es la candidata de menor riesgo técnico/geoespacial, pero requiere cerrar retención, acceso y moderación. AlertaBarrio requiere confirmar si scoring/heurística cuenta como IA y licencias geoespaciales. Quebrada Vigía requiere etiquetas con procedencia legítima; sin ellas debe presentarse como heurística y puede perder puntos de IA.

## Cierre
- **Qué hice:** audité refinamientos de ronda 3 en riesgos de datos, ética, licencias, privacidad, IA, evento y construibilidad.
- **Qué entrego y dónde:** `hackathon/ideas/ronda-3-b3.md`.
- **Supuestos:** R2–R4 y reglas de privacidad/entrega siguen sin definición pública; no se inventan requisitos.
- **[CONFIRMAR]:** licencias/cobertura, retención, aceptación de fixtures, algoritmo/métricas IA, horario, conectividad y evidencia de desarrollo durante el evento.

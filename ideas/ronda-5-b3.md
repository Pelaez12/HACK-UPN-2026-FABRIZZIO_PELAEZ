# Ronda 5 — auditoría adversarial final (B3)

## Veredicto ejecutivo
La propuesta es técnicamente acotada y tiene IA concreta, pero **no puede declararse todavía “sin bloqueantes”**: permanecen cuatro condiciones abiertas que pueden impedir ratificación (definición R2–R4, aceptación de fixture sintético, evidencia real de memoria/borrado/consentimiento y formato de evidencia del trabajo durante el evento). No son violaciones demostradas en los documentos disponibles; están expresamente **[CONFIRMAR]** en la propuesta final (`ronda-5-b1.md:40-49`) y en el análisis contractual (`01-analisis.md:26,50-54`).

## Hallazgos favorables verificables

- El problema, población y límites son claros; no se presenta como canal oficial ni se dirige directamente a personas en peligro (`ronda-5-b1.md:7-8`).
- La IA es una función identificable (extracción estructurada, clustering temporal-espacial y abstención), con baseline y errores del fixture, no un reclamo de verdad o despacho (`:9`, `:33-35`). Satisface la exigencia documental de función IA concreta, aunque la pertinencia final corresponde al jurado (`01-analisis.md:42-43`).
- El alcance offline (cinco mensajes, pipeline por lote, moderación y borrado) es compatible con pitch de tres minutos en principio (`ronda-5-b1.md:12-18`; `01-analisis.md:13-14`).
- Se previenen daños obvios: sin nombres/teléfonos/fotos/audio, sin publicación, alertas ni asignación automática (`ronda-5-b1.md:11,18`).

## Riesgos y condiciones abiertas

### 1. BLOQUEANTE CONTRACTUAL ABIERTO: R2–R4 no definidos
El análisis contractual sólo publica la rúbrica general y reconoce que no hay subcriterios, mínimos ni penalizaciones; no contiene etiquetas R2–R4 (`01-analisis.md:38-50`). La propuesta admite que sería descartada si esos códigos prohíben fixtures, exigen datos reales/operación viva o requieren verificación de verdad (`ronda-5-b1.md:40-42`). **Hasta obtener confirmación oficial, esto bloquea la certificación final de “sin bloqueantes”, aunque no pruebe incumplimiento.**

### 2. BLOQUEANTE CONDICIONAL: fixture y consentimiento
Los cinco mensajes serán sintéticos o cedidos con permiso, pero el permiso y las licencias aún no se aportan; las fuentes OSM, INDECI/COEN y municipalidad siguen `[fuente por verificar]` (`ronda-5-b1.md:10`, `:24-28`, `:49`). Si no hay evidencia por registro, usar sólo fixtures creados por el equipo y etiquetados como sintéticos. No mostrar comunicados reales sin confirmar licencia/procedencia; Bases hacen responsable al equipo de legalidad y procedencia (`01-analisis.md:15,36`).

### 3. BLOQUEANTE CONDICIONAL: memoria y borrado
“Ejecutar en memoria”, ocultar texto y mostrar pantalla de borrado describen comportamiento esperado, no evidencia ejecutada (`ronda-5-b1.md:11,14,17`). Estado del navegador, logs o librerías podrían persistir datos; la alternativa segura es fixture precargado sin aceptar entradas si no se puede demostrar borrado (`:11`, `:25`). La retención, consentimiento y requisitos jurídicos siguen `[CONFIRMAR]`; no afirmar “privacidad cerrada” frente al jurado.

### 4. Riesgo IA/medición
Precision/recall de un fixture pequeño mide únicamente esos mensajes; no demuestra precisión general ni deduplicación en campo (`ronda-5-b1.md:15,26,34`). Deben verse etiquetas, definición del baseline y matriz de errores. Clustering de mensajes distintos puede sugerir duplicado; siempre requiere confirmación humana. La abstención por umbral necesita umbral reproducible y caso ambiguo fijo, no una decisión manual disfrazada de modelo.

### 5. Riesgo de moderación e interpretación
La aprobación manual evita publicación automática, pero una tarjeta “revisada” puede percibirse como verdad. Mantener estado “revisado por moderadora”, evidencia original mínima y advertencia fija “simulación/no canal oficial”; nunca convertir la cola en prioridad de recursos (`ronda-5-b1.md:16-18,27,38`).

### 6. Evidencia del evento
Bases exigen que trabajo central/nuevas funcionalidades se hagan durante el evento, aunque permiten código previo (`01-analisis.md:13`). La propuesta sólo establece que debe mostrarse evidencia y deja el formato `[CONFIRMAR]` (`ronda-5-b1.md:29,49`). Registrar commits/timestamps o el mecanismo que la organización acepte; sin ello, riesgo de perder prototipo/factibilidad aunque la demo funcione.

## Prueba de no ratificación
No ratificar aún si cualquiera de estas condiciones persiste:

1. Organización no confirma significado y cumplimiento de R2–R4.
2. No existe fixture sintético propio o permiso/licencia documentada por mensaje.
3. No se demuestra memoria/no persistencia, o se aceptan entradas reales sin consentimiento y borrado verificable.
4. No se muestra flujo IA reproducible (entrada → campos/clustering → abstención), baseline, etiquetas y errores.
5. No existe moderadora para la decisión manual, o el flujo publica/prioriza automáticamente.
6. No se puede entregar evidencia de desarrollo durante el evento en el formato exigido.

Estos puntos derivan directamente de la tabla de evidencia final (`ronda-5-b1.md:20-29`) y de responsabilidades contractuales (`01-analisis.md:15,26,36`).

## Conclusión adversarial
**Estado recomendado: APTO CONDICIONES, no “aprobado sin bloqueantes”.** La idea final es la más defendible porque minimiza datos, opera offline, abstiene y exige moderación; sin embargo, los bloqueantes contractuales y de evidencia anteriores siguen abiertos. Si se confirman R2–R4, se usa fixture propio sintético en memoria, se prueba no persistencia y se documenta el trabajo del evento, no queda un bloqueante técnico/ético demostrado en el alcance descrito. Si falla cualquiera, debe detenerse el alcance afectado o no ratificar la propuesta.

## Cierre
- **Qué hice:** audité adversarialmente la propuesta final frente a R2–R4, IA, datos, licencias, privacidad, ética, evento y demo.
- **Qué entrego y dónde:** `hackathon/ideas/ronda-5-b3.md`.
- **Evidencia:** hallazgos anclados a `ronda-5-b1.md` y `01-analisis.md`, sin inventar requisitos.
- **[CONFIRMAR]:** significado R2–R4, aceptación de fixtures, permisos/licencias, borrado/memoria, moderación, horario/conectividad y formato de evidencia de desarrollo.

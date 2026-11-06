# Ronda 5 — veredicto final A2 para A0

## Propuesta evaluada

**Voluntad Visible — Buzón efímero auditado.** Esta es la única propuesta consolidada en R5. Mi evaluación es independiente: no trato como evidencia las afirmaciones de “cero riesgo”, borrado garantizado, demo infalible o precisión de campo. Las métricas del fixture sólo prueban el fixture.

## Puntuación oficial (100 puntos)

| Criterio | Puntaje | Justificación y límite |
|---|---:|---|
| Innovación y creatividad | **18/20** | Integra extracción, deduplicación, abstención y moderación bajo mínimo dato; la innovación es de arquitectura responsable, no novedad algorítmica absoluta. |
| Uso pertinente de IA | **23/25** | NLP estructurado, clustering temporal-espacial y abstención son funciones concretas, comparadas con baseline de palabras clave. Resto 2: fixture pequeño y etiquetas/umbral deben mostrarse, sin extrapolar a campo. |
| Impacto y relevancia | **17/20** | Atiende la sobrecarga de una mesa que revisa reportes durante lluvias/desbordes; no prueba adopción, vidas salvadas ni mejora operativa real **[CONFIRMAR]**. |
| Prototipo y funcionamiento | **14/15** | Flujo offline de cinco mensajes, duplicados, ambigüedad, baseline, abstención, moderación y borrado. Resto 1 por la cantidad de pasos en tres minutos y porque el borrado debe demostrarse. |
| Factibilidad y escalabilidad | **9/10** | Alcance acotado, sin GIS ni APIs externas, con ejecución en memoria prevista; retención, persistencia y evidencia de construcción durante el evento siguen **[CONFIRMAR]**. |
| Presentación y pitch | **9/10** | Narrativa ruido → incidente trazable → revisión humana → borrado es clara; advertencia fija debe impedir interpretar “revisado” como verdad oficial. |
| **Total** | **90/100** | **Supera el umbral de 85.** |

## Comprobación de decisión

- **Umbral:** cumplido, 90/100.
- **Ventaja:** en R4 obtuvo 5 puntos sobre AlertaBarrio (85), la reserva; esa ventaja se mantiene como base documentada de selección.
- **Construibilidad:** apta para alcance de hackathon si se ejecuta offline con fixture propio sintético y moderación humana.
- **Bloqueantes:** no puedo certificar “sin bloqueantes” todavía. B3 identifica como condiciones abiertas: definición oficial R2–R4, aceptación/licencia del fixture, demostración real de memoria/borrado/consentimiento y formato de evidencia del trabajo realizado durante el evento. Estas no son incumplimientos probados, pero sí bloquean una ratificación incondicional.

## Recomendación al capitán A0

**Recomiendo ratificar Voluntad Visible como idea ganadora, con estado “APTA CONDICIONES”.** La ratificación debe quedar condicionada a estos controles antes de presentarla como libre de bloqueantes:

1. Confirmar R2–R4 y que no exijan operación real, datos reales o prohíban fixtures.
2. Usar cinco mensajes creados por el equipo, rotulados sintéticos; no usar datos personales ni fuentes sin licencia confirmada.
3. Ejecutar en memoria sin persistencia; si no puede demostrarse borrado/no persistencia, aceptar sólo fixture precargado sin entradas.
4. Mostrar entrada → extracción/clustering → abstención, baseline, etiquetas y errores; no presentar precision/recall como desempeño de campo.
5. Mantener moderación humana, estado “revisado por moderadora” y ninguna publicación, alerta o asignación automática.
6. Registrar la función central construida durante el evento en el formato que acepte la organización.

Si cualquiera de los puntos 1–4 falla, no debe declararse cumplimiento pleno; se detiene el alcance afectado o se consulta a la organización.

## Reporte obligatorio

- **Qué hice:** evalué la propuesta final con los seis criterios oficiales, comprobé umbral, ventaja, construibilidad y condiciones de no ratificación; separé controles descritos de evidencia aún no verificable.
- **Qué entrego y dónde:** `hackathon/ideas/ronda-5-a2.md`.
- **Supuestos:** la rúbrica de `hackathon/01-analisis.md` sigue vigente; un fixture propio sintético y demo offline son admisibles salvo confirmación contraria.
- **[CONFIRMAR]:** R2–R4, aceptación de fixtures, licencias/consentimiento, memoria/borrado, privacidad/retención, moderación disponible, horario/conectividad, formato de entrega y evidencia de desarrollo durante el evento.

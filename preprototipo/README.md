# Demostrador offline — Voluntad Visible (NO OFICIAL)

Este demostrador técnico está separado de F4 y no representa aprobación, entrega oficial ni operación de campo. Usa exclusivamente cinco mensajes propios marcados `SINTÉTICO:` y procesa todo en memoria efímera.

## Garantías y límites

- No acepta ni solicita datos reales o personales.
- No usa red, APIs, telemetría ni estado persistente.
- La extracción y baseline son reglas deterministas, no un modelo de IA.
- Muestra posible duplicado, abstención por baja confianza y moderación simulada.
- No genera alertas oficiales, publicaciones, notificaciones ni despacho/asignación de recursos.

## Ejecución reproducible

Desde la raíz del workspace:

```powershell
node hackathon/preprototipo/run-demo.mjs
```

La salida debe incluir `STATUS=DEMOSTRADOR NO OFICIAL`, `DATA=SINTÉTICA`, `MODE=memory-only`, `NETWORK=none`, la advertencia visible y `CHECKS` con todos sus valores `true`. El proceso termina con código 0 si los checks pasan.

Para evidencia reproducible, ejecutar dos veces y comparar las salidas; cualquier diferencia o escritura de estado invalida la prueba. La salida sólo evidencia este fixture local y no certifica privacidad completa, exactitud operacional ni autorización institucional.

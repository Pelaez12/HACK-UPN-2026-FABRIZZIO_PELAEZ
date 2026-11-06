# Prompt para Google Stitch — Voluntad Visible

Copia y pega todo este bloque en Google Stitch.

---

Diseña una aplicación web responsive llamada **Voluntad Visible**: un buzón efímero y auditado que ayuda a una moderadora humana a ordenar reportes comunitarios sobre lluvias, aniegos, desbordes y vías bloqueadas.

## Objetivo del producto

La interfaz recibe mensajes comunitarios y usa IA asistida con fallback determinista para extraer únicamente información prudente:

- tipo de incidente;
- zona aproximada o sector, nunca ubicación exacta;
- nivel de confianza;
- información faltante;
- posibles mensajes duplicados;
- abstención cuando la evidencia es insuficiente;
- decisión final de una persona moderadora.

La aplicación **no verifica la verdad del reporte, no publica alertas, no asigna recursos, no realiza despachos y no reemplaza canales oficiales**.

## Dirección visual

Crea una interfaz de producto cívico y confiable, sobria pero cálida: sensación de centro de revisión humana, no de aplicación militar ni dashboard genérico de analítica. Debe transmitir calma, transparencia y responsabilidad.

- Densidad: equilibrada, 5/10.
- Variación: asimétrica y editorial, 7/10.
- Movimiento: discreto y funcional, 4/10.
- Usa mucho espacio negativo, jerarquía tipográfica clara y superficies planas.
- No uses estética de IA futurista, neón, cyberpunk ni gradientes brillantes.
- No uses fotografías de desastres ni imágenes que exploten emocionalmente una emergencia.
- Si necesitas una textura visual, usa líneas topográficas abstractas muy sutiles en SVG, sin mapas reales ni coordenadas.

## Paleta exacta

Usa una sola familia cromática coherente:

- Fondo principal papel: `#F5F7F3`.
- Superficie: `#FFFFFF`.
- Tinta principal: `#18231F`.
- Texto secundario: `#5E6D67`.
- Borde estructural: `#DCE4DD`.
- Verde hoja, único acento: `#177A57`.
- Verde oscuro para hover: `#0E563E`.
- Ámbar de advertencia: `#A56A16`, únicamente para abstención o revisión pendiente.
- Rojo sobrio: `#A33C38`, únicamente para duplicado o rechazo.

No uses morado, azul neón, sombras luminosas, negro puro ni gradientes decorativos.

## Tipografía

- Usa `Satoshi` o `Geist` para todo el producto.
- Usa `Geist Mono` solo para IDs, timestamps, estados técnicos y valores de confianza.
- Titulares compactos, con peso y contraste, nunca enormes al punto de dominar la pantalla.
- Cuerpo de texto legible, máximo 65 caracteres por línea cuando sea posible.
- No uses Inter, serif genérica ni tipografías futuristas.

## Arquitectura de pantallas

Genera un sistema coherente de estas pantallas y estados:

### 1. Inicio / panel de revisión

Desktop: barra superior minimalista con el logotipo tipográfico “Voluntad Visible”, indicador “Modo seguro activo” y botón de ayuda.

Hero asimétrico, alineado a la izquierda:

- etiqueta: `BUZÓN EFÍMERO AUDITADO`;
- titular: `Del ruido a una revisión humana.`;
- descripción: `Ordena reportes comunitarios sin convertir una inferencia en una alerta oficial.`;
- una única acción principal: `Cargar mensajes de prueba`;
- bloque lateral de confianza con tres garantías: `Solo datos sintéticos`, `Memoria temporal`, `Decisión humana`.

Debajo, un espacio de trabajo dividido en dos columnas:

**Columna izquierda — Entrada de prueba**

- título `Entrada de mensajes`;
- chip visible `SINTÉTICOS`;
- textarea grande con un mensaje por línea;
- helper: `Los mensajes se procesan en memoria y se descartan al cerrar la sesión.`;
- botones `Cargar fixture`, `Limpiar` y botón primario `Analizar mensajes`;
- contador de mensajes;
- aviso visible: `No introduzcas datos personales ni ubicaciones exactas.`

**Columna derecha — Revisión de moderación**

- título `Revisión de moderación`;
- estado `Listo`, `Analizando` o `Análisis completado`;
- resumen de cuatro métricas: mensajes, estructurados, posibles duplicados y abstenciones;
- banner verde: `Simulación local, no oficial`;
- feed vertical de tarjetas de resultados.

### 2. Tarjeta de reporte

Cada tarjeta debe mostrar claramente:

- ID corto como `S1`, `S2` en tipografía monoespaciada;
- etiqueta de estado: `REVISAR`, `ABSTENCIÓN`, `POSIBLE DUPLICADO` o `CONFIRMADO POR MODERACIÓN`;
- texto original con etiqueta `Mensaje sintético`;
- campos extraídos: `Tipo`, `Zona aproximada`, `Confianza`;
- información faltante, si aplica;
- fila de evidencia: `IA asistida` o `Fallback de reglas`;
- indicador discreto de modelo no disponible si se usa fallback;
- acciones humanas: `Confirmar`, `Corregir`, `Rechazar`;
- confirmación accesible después de pulsar una acción, sin modal invasivo.

Para abstenciones, prioriza el color ámbar y explica: `No hay evidencia suficiente. La IA se abstuvo para evitar inventar datos.`

Para duplicados, muestra una relación sutil: `Posible coincidencia con S1`, nunca afirmes que son el mismo incidente.

### 3. Estado de procesamiento IA

Diseña un estado de carga no bloqueante con skeletons de las tarjetas, no un spinner genérico. Muestra una línea de estado:

`Analizando con IA asistida · si no hay respuesta verificable, se usa fallback seguro.`

Si la IA falla, presenta un banner claro:

`IA no disponible. Se ejecutó el fallback RULES-ONLY. Revisa antes de confirmar.`

Nunca ocultes el fallback ni simules que se usó un modelo cuando no está disponible.

### 4. Panel de auditoría / límites

Incluye una sección o drawer denominado `Cómo funciona` con:

- flujo `Mensaje → extracción → comparación → abstención → revisión humana`;
- explicación de que todo es temporal y se elimina al reiniciar;
- lista de acciones prohibidas: no publica, no alerta, no despacha, no asigna recursos;
- etiqueta `Versión de demostración`;
- proveedor, modelo, versión y retención mostrados como campos configurables, nunca inventados;
- enlace `Ver límites del prototipo`.

### 5. Estados vacíos y errores

Diseña estados para:

- sin mensajes: `Carga un fixture para iniciar la revisión`;
- entrada vacía: `Escribe o carga al menos un mensaje sintético`;
- error de conexión con IA: fallback visible;
- mensaje incompleto: abstención visible;
- lista procesada sin resultados confirmables.

Los errores deben aparecer cerca del campo afectado, con lenguaje humano y acción de recuperación.

## Interacciones

- Botones con feedback táctil sutil al pulsar.
- Aparición escalonada de tarjetas, solo con transform y opacity.
- Transiciones de 150–220 ms, easing suave, sin rebotes exagerados.
- Respeta `prefers-reduced-motion`.
- Confirmar, corregir y rechazar actualizan la tarjeta en el mismo lugar.
- Deshacer una moderación durante unos segundos mediante una acción textual discreta.
- No uses tooltips indispensables para entender la interfaz.

## Responsive

Mobile-first:

- debajo de 768px, una sola columna;
- barra superior compacta;
- entrada antes que resultados;
- tarjetas a ancho completo;
- botones con mínimo 44px de área táctil;
- nunca permitir scroll horizontal;
- métricas en cuadrícula de 2 columnas;
- textarea y feed con separación generosa;
- el aviso de seguridad permanece visible sin tapar contenido.

## Accesibilidad

- Contraste WCAG AA como mínimo.
- HTML semántico y landmarks claros.
- Todos los botones con texto, no solo iconos.
- Foco visible en teclado.
- `aria-live` para estados de análisis, errores y moderación.
- No comunicar estados únicamente mediante color.
- Labels siempre visibles encima de inputs.

## Datos de demostración

Incluye un fixture claramente marcado como sintético con cinco mensajes:

1. `SINTÉTICO: aniego visible cerca del parque central, sector Norte.`
2. El mismo mensaje para demostrar posible duplicado.
3. `SINTÉTICO: vía bloqueada por barro en sector Sur.`
4. `SINTÉTICO: se ve complicado por ahí, no sé exactamente dónde.` para demostrar abstención.
5. `SINTÉTICO: desborde de canal junto al mercado, sector Este.`

Usa los IDs S1–S5. No agregues nombres de personas, teléfonos, direcciones, coordenadas ni datos reales.

## Entregable visual

Genera primero la pantalla principal completa en desktop y su adaptación mobile. Después genera los estados de carga, error de IA/fallback, abstención, duplicado, moderación confirmada y panel de auditoría.

El resultado debe parecer un prototipo real listo para una demo de hackathon: claro en menos de 10 segundos, honesto sobre sus límites y visualmente distintivo. No escribas copy de marketing genérico. No inventes métricas de precisión ni afirmes que la IA verificó la verdad de los reportes.

NO HAGAS:

- emojis;
- tarjetas genéricas en tres columnas iguales;
- gradientes morados o azules;
- neón o glow;
- mapas reales;
- datos personales;
- botones “Publicar alerta”, “Enviar ayuda” o equivalentes;
- textos como “100% preciso”, “revolucionario”, “next-gen” o “sin fricciones”;
- nombres ficticios de usuarios;
- modelo o proveedor inventado;
- interfaz oscura tipo terminal;
- elementos superpuestos o texto ilegible.

---

## Nota técnica para la implementación posterior

La UI debe poder conectarse al repositorio `https://github.com/Pelaez12/HACK-UPN-2026-FABRIZZIO_PELAEZ.git` mediante un contrato estructurado de extracción. Si no existe una respuesta válida del proveedor de IA, la interfaz debe degradar a `RULES-ONLY` y mostrarlo explícitamente al usuario.

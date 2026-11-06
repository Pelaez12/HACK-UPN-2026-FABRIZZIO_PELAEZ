# Prompt para Google Stitch — Voluntad Visible IA conversacional y notificaciones

Copia y pega todo este bloque en Google Stitch. Diseña la experiencia visual, no expongas ni solicites claves API.

---

## Nuevo enfoque del producto

Evoluciona **Voluntad Visible** de un buzón auditado a un **asistente conversacional de revisión comunitaria**.

El asistente recibe mensajes sintéticos o autorizados, resume lo que las personas están reportando y ayuda a una moderadora humana a decidir si corresponde crear una **alerta interna de revisión**. Las notificaciones push solo se envían después de una aprobación humana explícita y a suscripciones que dieron consentimiento.

La IA nunca debe presentarse como autoridad oficial, verificar por sí sola la verdad de un reporte ni enviar ayuda automáticamente.

## Nombre y mensaje central

- Producto: `Voluntad Visible`
- Módulo: `Asistente de señales comunitarias`
- Mensaje: `Escucha patrones. Conserva el criterio humano.`
- Estado permanente visible: `No oficial · Revisión humana obligatoria`

## Dirección visual

Diseña una interfaz cívica, clara y confiable. Debe parecer una herramienta de coordinación responsable, no una aplicación de vigilancia, un chatbot genérico ni un dashboard militar.

- Sensación: calma operativa, transparencia y control humano.
- Densidad: equilibrada, 6/10.
- Variación: editorial y asimétrica, 6/10.
- Movimiento: discreto, 4/10.
- Usa superficies blancas sobre fondo papel verdoso muy claro.
- Usa líneas topográficas abstractas y muy sutiles como recurso visual opcional.
- No uses fotos dramáticas, mapas reales, coordenadas ni imágenes de desastres.

## Paleta

- Fondo papel: `#F5F7F3`.
- Superficie: `#FFFFFF`.
- Tinta: `#18231F`.
- Texto secundario: `#5E6D67`.
- Bordes: `#DCE4DD`.
- Acento único verde: `#177A57`.
- Verde oscuro hover: `#0E563E`.
- Advertencia: `#A56A16`.
- Riesgo o rechazo: `#A33C38`.
- Azul informativo muy desaturado permitido solo para estados técnicos, nunca como color dominante.

No uses morado, neón, glow, gradientes brillantes ni negro puro.

## Tipografía

Usa `Satoshi` o `Geist` para la interfaz y `Geist Mono` para IDs, confianza, estados técnicos y timestamps. No uses Inter ni serifas genéricas.

## Pantalla principal: centro de señales

Crea una pantalla desktop y una adaptación mobile.

### Barra superior

- Logotipo: `Voluntad Visible`.
- Navegación: `Señales`, `Conversación`, `Notificaciones`, `Auditoría`.
- Indicador: `IA asistida · control humano`.
- Avatar o menú de `Moderación` sin nombres personales.
- Estado persistente: `No oficial`.

### Encabezado

- Etiqueta: `ASISTENTE DE SEÑALES COMUNITARIAS`.
- Titular: `Entender el patrón antes de actuar.`
- Texto: `La IA agrupa señales y explica su incertidumbre. Una persona decide qué merece revisión.`
- CTA principal: `Analizar mensajes`.
- CTA secundario textual: `Ver límites y auditoría`.

### Resumen operativo

Muestra cuatro métricas, sin números falsos ni porcentajes inventados:

- `Mensajes recibidos`;
- `Patrones detectados`;
- `Pendientes de moderación`;
- `Notificaciones en borrador`.

Cada métrica debe poder mostrar estado vacío con `—`.

## Vista de conversación con el agente IA

Diseña una conversación tipo panel de trabajo, no un chat de entretenimiento.

### Mensaje inicial del agente

> Puedo resumir señales comunitarias, señalar información faltante y preparar una alerta para revisión. No puedo verificar la verdad del reporte ni enviarlo sin aprobación humana.

### Funciones conversacionales

Incluye ejemplos de preguntas rápidas:

- `¿Qué están reportando las personas?`
- `¿Hay mensajes que podrían describir el mismo incidente?`
- `¿Qué información falta?`
- `Prepara un borrador de alerta para revisar`
- `¿Por qué te abstuviste?`

Cada respuesta del agente debe incluir visualmente:

- resumen breve;
- evidencia utilizada, con IDs de mensajes como `S1`, `S2`;
- nivel de confianza;
- incertidumbres y datos faltantes;
- etiqueta `IA asistida` o `Fallback RULES-ONLY`;
- botón `Ver mensajes fuente`;
- botón `Solicitar revisión humana`.

Nunca muestres una respuesta que parezca una orden oficial o una certeza absoluta.

### Estado de abstención

Cuando la evidencia sea insuficiente, muestra una tarjeta ámbar:

`Me abstengo de concluir. Los mensajes no contienen suficiente información verificable.`

Acciones: `Pedir aclaración`, `Ver mensajes`, `Cerrar`.

## Panel de señales agrupadas

Cada señal debe presentarse como una tarjeta revisable:

- ID de señal: `SIG-001`;
- tipo aproximado: `Posible aniego`, `Vía bloqueada`, `Desborde` o `Sin clasificar`;
- zona general o sector, nunca dirección exacta;
- número de mensajes fuente;
- primera y última hora relativa, sin exponer datos personales;
- confianza de extracción;
- posible duplicado;
- estado: `Nueva`, `En revisión`, `Aprobada para notificación`, `Descartada`;
- evidencia desplegable;
- acciones `Confirmar`, `Corregir`, `Abstenerse`, `Descartar`.

El texto `Aprobada para notificación` solo puede aparecer después de una acción humana.

## Flujo de alerta y notificaciones

Diseña un módulo de **borradores de notificación**, no un sistema que envía alertas automáticamente.

### Paso 1: Borrador

Formulario con:

- título;
- resumen en lenguaje prudente;
- zona general;
- nivel de prioridad: `Informativa`, `Revisión pronta`, `Alta prioridad`;
- audiencia o suscripción seleccionada;
- mensajes fuente;
- caducidad obligatoria;
- campo `Qué aún no sabemos`.

Muestra un aviso fijo:

`Este borrador no se ha enviado. Requiere aprobación humana.`

### Paso 2: Revisión

Presenta una vista previa exacta de la notificación push:

- título corto;
- cuerpo máximo de 140 caracteres;
- hora de caducidad;
- audiencia;
- evidencia fuente;
- IA utilizada y fallback;
- moderadora que aprueba;
- botón primario `Aprobar y programar`;
- botón secundario `Guardar como borrador`;
- enlace peligroso separado `Rechazar`.

Incluye una segunda confirmación accesible antes de aprobar.

### Paso 3: Historial

Lista de notificaciones con estados:

- `Borrador`;
- `Programada`;
- `Enviada`;
- `Caducada`;
- `Cancelada`.

Cada fila debe mostrar `creada`, `aprobada`, `caduca`, audiencia general y actor de moderación. No mostrar tokens, claves ni datos personales.

## Suscripciones push

Crea una pantalla de preferencias con consentimiento explícito:

- selector de tipos de notificación;
- selector de sectores generales;
- frecuencia máxima;
- botón `Activar notificaciones`;
- botón `Pausar todas`;
- botón `Eliminar suscripción`;
- explicación de que no se recopila ubicación precisa.

El consentimiento debe ser opt-in, nunca preseleccionado. Muestra estado `No suscrito`, `Suscripción activa` o `Pausada`.

## Auditoría y seguridad visible

Crea un drawer o pantalla `Auditoría` con una línea temporal:

`Mensaje recibido → extracción IA → comparación → abstención o agrupación → revisión humana → borrador → aprobación → notificación → caducidad`

Cada evento debe incluir:

- timestamp;
- ID técnico;
- actor o sistema;
- acción;
- resultado;
- evidencia relacionada.

Incluye una tarjeta `Privacidad por diseño`:

- datos temporales por defecto;
- minimización de contenido;
- sin ubicación exacta;
- sin nombres ni teléfonos en la demo;
- retención configurable y visible;
- eliminación disponible;
- secretos solo en servidor, nunca en el navegador.

## Estados de error y fallback

Diseña estos estados:

1. `IA disponible`: etiqueta `IA asistida`.
2. `IA no disponible`: banner `No se pudo consultar la IA. Se ejecutó fallback RULES-ONLY.`
3. `Respuesta inválida`: `La respuesta no cumple el formato esperado. No se usó para crear una alerta.`
4. `Abstención`: evidencia insuficiente, sin inventar tipo o zona.
5. `Sin conexión push`: `El borrador se conserva localmente y no se envió.`
6. `Sin suscriptores`: estado vacío con acción `Configurar suscripciones`.
7. `Sesión expirada`: pedir reautenticación antes de aprobar.

Usa skeleton loaders que respeten la forma real de las tarjetas. No uses spinners genéricos como único indicador.

## Modelo conceptual que debe reflejar la UI

Representa visualmente estas entidades, sin implementar detalles de backend en Stitch:

- `messages`: contenido mínimo, origen sintético/autorizado, timestamp temporal.
- `signals`: extracción, confianza, evidencia, estado y abstención.
- `conversations`: mensajes del usuario y respuestas del agente.
- `notification_drafts`: borrador, audiencia, caducidad y evidencia.
- `subscriptions`: consentimiento, sectores generales, estado y preferencias.
- `audit_events`: acción, actor, timestamp y resultado.

Nunca mostrar claves API, tokens push, secretos, hashes de autenticación ni credenciales.

## Microinteracciones

- Transiciones de 150–220 ms usando solo opacity y transform.
- Aparición escalonada de señales.
- Feedback táctil en botones.
- Confirmación inline después de moderar.
- `aria-live` para respuestas del agente, fallbacks y estados de notificación.
- Soporte completo para `prefers-reduced-motion`.
- Todos los targets táctiles mínimo 44px.

## Responsive y accesibilidad

- Mobile-first, sin scroll horizontal.
- Debajo de 768px, una sola columna.
- Conversación y señales se apilan.
- Las acciones principales permanecen accesibles sin barra flotante invasiva.
- Contraste WCAG AA.
- Labels visibles y foco de teclado.
- No depender solo del color para comunicar estados.
- Las confirmaciones de envío deben ser explícitas y legibles por lector de pantalla.

## Datos de demostración

Usa únicamente cinco mensajes marcados `SINTÉTICO`, con IDs `S1` a `S5`. Incluye un duplicado posible y un mensaje ambiguo que provoque abstención. No uses nombres, teléfonos, domicilios, coordenadas ni datos reales.

## Reglas críticas de producto

- La palabra `alerta` debe acompañarse de `borrador`, `interna` o `no oficial` hasta que una persona la apruebe.
- Nunca diseñes un botón `Enviar alerta` sin una etapa intermedia de aprobación.
- Nunca envíes push automáticamente por una respuesta de IA.
- No presentes la IA como verificador de hechos.
- No inventes proveedor, modelo, versión, precisión, costo o disponibilidad.
- Si falla la IA, muestra el fallback de forma visible.
- El proveedor DeepSeek debe configurarse en servidor mediante variable de entorno; jamás debe aparecer en el cliente ni en la base de datos.
- La base de datos debe almacenar solo lo mínimo necesario para borradores, consentimiento e historial auditable.

## Entregable visual solicitado

Genera estas pantallas coherentes:

1. Centro de señales desktop.
2. Centro de señales mobile.
3. Conversación IA con respuesta explicable.
4. Abstención y fallback RULES-ONLY.
5. Detalle de señal con evidencia.
6. Crear borrador de notificación.
7. Vista previa y aprobación humana.
8. Historial de notificaciones.
9. Preferencias de suscripción push.
10. Auditoría y privacidad.
11. Estados vacíos, error y sesión expirada.

El resultado debe ser un prototipo de hackathon entendible en menos de diez segundos, visualmente distintivo, prudente y listo para conectar posteriormente a una API de IA y una base de datos.

---

## Nota para implementación posterior

Usar la API DeepSeek únicamente desde un backend seguro con `DEEPSEEK_API_KEY` en variables de entorno. El navegador nunca debe recibir la clave. Toda salida del modelo debe validarse contra un esquema estructurado, aplicar umbral de abstención y caer a `RULES-ONLY` si falla. Las notificaciones push deben ser opt-in, guardar consentimiento auditable y requerir aprobación humana antes del envío.

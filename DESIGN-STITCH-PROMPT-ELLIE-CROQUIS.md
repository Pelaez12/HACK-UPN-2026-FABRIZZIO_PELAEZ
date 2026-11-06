# Prompt para Google Stitch — Ellie Life Enterprise / Croquis de Evacuación

Usa la primera imagen adjunta, **“Plano de Zonificación Urbana Detallado”**, como referencia visual para el croquis. Usa la segunda imagen como referencia de identidad de marca: símbolo floral abstracto blanco y morado, junto al nombre **Ellie Life Enterprise**.

Diseña un prototipo móvil llamado **Ellie Life Enterprise — Croquis Seguro**, una herramienta de preparación familiar y evacuación ante inundaciones y emergencias del Fenómeno El Niño.

## Objetivo

La aplicación ayuda a una familia a:

- consultar un croquis simplificado de evacuación;
- identificar ríos, quebradas, vías principales y zonas de reunión;
- llamar rápidamente a contactos de emergencia;
- guardar contactos importantes de seguridad;
- guardar contactos familiares para una emergencia;
- compartir su ubicación solo si la persona lo autoriza;
- consultar instrucciones aun con conectividad limitada.

La aplicación no reemplaza a Defensa Civil, la Policía, Bomberos, municipalidades ni canales oficiales. Las zonas seguras deben mostrarse como `Verificadas`, `Por confirmar` o `Demostración`.

## Marca y estilo visual

Marca principal: **Ellie Life Enterprise**.

- Usa el símbolo floral abstracto de la imagen como inspiración para el isotipo.
- Mantén una versión simple, legible y adaptable a ícono de app.
- No copies literalmente la imagen ni uses marcas registradas de terceros.
- Paleta de marca: morado intenso `#4B36F2`, lavanda `#8E82FF`, blanco `#FFFFFF`, tinta `#171528` y fondo lavanda muy claro `#F5F3FF`.
- Usa morado para identidad y acciones principales, pero no uses neón ni glow.
- Para seguridad usa colores semánticos sobrios: verde `#258A5A`, ámbar `#B97918`, rojo `#B04440`.
- Tipografía: `Satoshi` o `Geist`, con `Geist Mono` para números telefónicos, códigos y timestamps.
- Interfaz premium, clara, accesible y familiar; no debe parecer una app militar ni un mapa técnico complejo.

## Navegación móvil

Usa una barra inferior de cuatro secciones:

1. `Inicio`;
2. `Croquis`;
3. `Contactos`;
4. `Perfil familiar`.

Incluye un botón de emergencia persistente, pero evita que cubra contenido o se active accidentalmente.

## Pantalla de inicio

Diseña una pantalla mobile-first con:

- saludo breve: `Tu red de seguridad, lista`;
- estado de preparación: `3 de 5 pasos completados`;
- tarjeta principal `Ver croquis de evacuación`;
- acceso rápido `Llamar emergencia`;
- tarjeta `Mis contactos de confianza`;
- aviso de seguridad: `Consulta siempre las indicaciones oficiales locales`;
- estado de conectividad: `Disponible sin conexión` o `Conectado`.

No uses frases alarmistas. El tono debe ser preventivo y tranquilizador.

## Pantalla principal: croquis de evacuación

Usa la primera imagen como referencia de composición cartográfica, pero crea una versión móvil simplificada, legible y no saturada.

### Elementos del croquis

- orientación Norte;
- río o quebrada en azul;
- vías principales en rojo;
- vías secundarias en gris o rojo tenue;
- zonas de reunión seguras en verde;
- zonas de riesgo potencial en ámbar o rojo tenue;
- sectores y distritos con etiquetas legibles;
- punto de ubicación del usuario únicamente con permiso;
- rutas de evacuación con flechas verdes;
- leyenda colapsable;
- escala aproximada;
- fecha de actualización;
- fuente de validación.

No afirmes que una zona es segura solo por estar alejada visualmente del río. Cada punto debe tener un estado:

- `Zona verificada por autoridad`;
- `Punto recomendado para revisión`;
- `Demostración — no usar en emergencia`.

### Acciones del croquis

- `Ver ruta a zona segura`;
- `Compartir croquis`;
- `Descargar para usar sin conexión`;
- `Reportar información desactualizada`;
- `Ver fuente y fecha`.

Si no existen datos oficiales, mostrar claramente:

`No hay una zona segura verificada en esta vista. Sigue las indicaciones de las autoridades locales.`

## Vista de detalle de zona segura

Al tocar una zona, abrir una hoja inferior con:

- nombre del punto de reunión;
- distrito o sector general;
- estado de validación;
- fecha de actualización;
- capacidad, solo si está confirmada;
- accesibilidad para niños, adultos mayores y personas con discapacidad, solo si está confirmada;
- ruta recomendada;
- riesgos cercanos;
- botón `Iniciar evacuación`;
- botón `Compartir`.

No mostrar coordenadas exactas a menos que sean datos públicos verificados y necesarios.

## Contactos de emergencia

Crea una pantalla de acceso rápido con tarjetas grandes y botones de llamada.

Incluye exactamente estos números proporcionados por el usuario:

- `105` — Emergencias;
- `110` — Emergencias;
- `116` — Emergencias.

No inventes instituciones ni etiquetas oficiales si no han sido confirmadas. Puedes mostrar temporalmente la etiqueta neutral `Línea de emergencia` y permitir que la autoridad o administradora configure el nombre correcto.

Cada tarjeta debe tener:

- número grande;
- descripción breve;
- botón `Llamar`;
- confirmación antes de marcar;
- alternativa `Copiar número`;
- estado de disponibilidad desconocido o configurable.

Incluye una advertencia visible:

`Verifica los números de emergencia de tu país y localidad antes de usar esta aplicación.`

## Contactos importantes de seguridad

Crea una sección llamada `Red de seguridad` para guardar contactos como:

- municipalidad;
- Defensa Civil;
- centro de salud;
- colegio o institución cercana;
- responsable de edificio o comunidad;
- transporte o refugio;
- otro contacto configurado por la familia.

Cada contacto tendrá:

- nombre;
- relación o institución;
- teléfono;
- horario, si se conoce;
- notas breves;
- botón `Llamar`;
- botón `Editar`;
- botón `Eliminar`.

No precargues instituciones reales sin fuente confirmada.

## Contactos familiares

Crea una sección separada: `Mi familia`.

Permite guardar voluntariamente:

- nombre o apodo;
- relación familiar;
- teléfono;
- contacto alternativo;
- necesidades especiales, solo si la familia decide registrarlas;
- punto de encuentro familiar;
- mensaje de emergencia predeterminado.

Ejemplo de mensaje configurable:

`Estoy a salvo. Me dirijo al punto de encuentro acordado.`

Privacidad:

- explicar qué se guarda;
- permitir editar y eliminar;
- no compartir contactos automáticamente;
- no mostrar contactos familiares en el croquis público;
- bloquear acceso con PIN o biometría si el dispositivo lo permite.

## Botón de emergencia

Diseña un botón accesible llamado `Necesito ayuda` con doble confirmación para evitar activaciones accidentales.

El flujo debe mostrar:

1. `¿Quieres llamar a una línea de emergencia?`;
2. opciones 105, 110 y 116;
3. `¿Quieres compartir tu ubicación?`;
4. explicación clara de que compartir ubicación es opcional;
5. confirmación final antes de abrir la llamada o compartir.

No realices llamadas ni envíos automáticos en el prototipo visual.

## Modo sin conexión

Diseña un estado offline:

- banner `Modo sin conexión`;
- croquis previamente descargado;
- contactos guardados disponibles;
- última actualización visible;
- advertencia `La información puede estar desactualizada`;
- botón `Actualizar cuando haya conexión`.

No simules que los datos están en tiempo real.

## Preparación familiar

Incluye una pantalla de checklist:

- definir punto de encuentro;
- guardar contactos;
- descargar croquis;
- preparar mochila de emergencia;
- registrar necesidades familiares;
- revisar fecha de actualización.

Mostrar progreso sin inventar porcentajes de seguridad.

## Centro de seguridad y notificaciones

Crea una sección principal llamada `Seguridad` accesible desde Inicio y desde la barra inferior. Debe reunir incidentes, alertas, contactos y acciones de prevención en una sola vista.

### Panel de seguridad

Muestra:

- estado general: `Normal`, `Atención` o `Emergencia en revisión`;
- última actualización y fuente;
- nivel de conectividad;
- incidentes cercanos, solo con ubicación autorizada;
- botón destacado `Reportar incidente`;
- botón `Ver notificaciones`;
- botón `Llamar a emergencias`;
- advertencia permanente: `Esta aplicación no reemplaza a las autoridades.`

### Iconografía y emojis de peligro

Usa iconos visuales grandes, comprensibles y accesibles para representar peligro, pero no dependas únicamente de emojis. Puedes acompañar cada estado con un emoji sobrio y una etiqueta textual:

- `⚠️` `Precaución` — información preventiva;
- `🌊` `Inundación` — agua o desborde reportado;
- `🚧` `Vía bloqueada` — tránsito comprometido;
- `🏠` `Viviendas afectadas` — reporte comunitario;
- `📍` `Punto de reunión` — lugar de encuentro;
- `✅` `Verificado` — confirmado por fuente autorizada;
- `❓` `Por confirmar` — requiere revisión;
- `🆘` `Necesito ayuda` — solicitud urgente del usuario.

Acompaña siempre el emoji con texto, color, forma y estado para garantizar accesibilidad. No uses emojis como sustituto del botón ni como única señal de peligro.

## Reportar un incidente

Diseña un flujo móvil de reporte rápido de máximo tres pasos, llamado `Reportar incidente`.

### Paso 1 — Tipo de incidente

Presenta botones grandes con icono, texto y selección única:

- `Inundación o aniego`;
- `Desborde de río o quebrada`;
- `Vía bloqueada`;
- `Vivienda afectada`;
- `Persona necesita ayuda`;
- `Otro`.

### Paso 2 — Información del reporte

Permite agregar voluntariamente:

- descripción breve;
- fotografía o audio, con vista previa;
- distrito o sector general;
- fecha y hora del hecho;
- cantidad aproximada de personas afectadas, solo si se conoce;
- si el usuario está seguro ahora.

No solicitar dirección exacta por defecto. No pedir nombres, DNI ni teléfonos para poder enviar un reporte básico.

### Paso 3 — Revisión y envío

Antes de enviar, muestra una tarjeta de resumen:

- tipo;
- texto;
- zona general;
- adjuntos;
- permiso de ubicación;
- aviso `Este reporte será revisado y no genera una alerta automática`.

Botones:

- `Enviar reporte`;
- `Guardar como borrador`;
- `Cancelar`.

Después del envío, muestra un ID como `REP-0042`, fecha, estado `Recibido — pendiente de revisión` y botón `Ver seguimiento`.

### Estados del reporte

- `Borrador`;
- `Enviado`;
- `En revisión humana`;
- `Requiere más información`;
- `Relacionado con otro reporte`;
- `Verificado por fuente autorizada`;
- `Descartado`.

Nunca mostrar `Verificado` únicamente porque la IA lo clasificó.

## Apartado de IA conversacional

Crea una sección de navegación llamada `Asistente IA`, con una interfaz de chat orientada a seguridad y revisión, no de entretenimiento.

### Encabezado del chat

- nombre: `Ellie Asistente`;
- estado: `IA asistida · revisión humana obligatoria`;
- botón `Cómo funciona`;
- botón `Nueva conversación`;
- etiqueta visible `No es una autoridad oficial`.

### Mensaje inicial

> Puedo ayudarte a entender reportes, encontrar información faltante y preparar un resumen para revisión. No puedo confirmar la verdad de un incidente ni enviar alertas por mi cuenta.

### Preguntas rápidas

- `¿Qué incidentes fueron reportados?`;
- `¿Hay reportes duplicados?`;
- `¿Qué información falta?`;
- `¿Qué zonas requieren revisión?`;
- `Prepara un borrador de notificación`;
- `¿Por qué te abstuviste?`;
- `Muéstrame los reportes que sustentan esta conclusión`.

### Respuesta explicable de IA

Cada respuesta debe incluir:

- resumen en lenguaje sencillo;
- mensajes fuente como `REP-0042`;
- nivel de confianza;
- datos faltantes;
- posibles contradicciones;
- etiqueta `IA DeepSeek` solo si realmente se ejecutó;
- etiqueta `Fallback RULES-ONLY` si la IA no está disponible;
- botón `Ver evidencia`;
- botón `Solicitar revisión humana`.

Si no existe evidencia suficiente, mostrar:

`No puedo concluirlo con seguridad. Me abstengo para evitar inventar información.`

### Acciones que la IA nunca debe tener

No diseñes botones para:

- enviar alertas automáticamente;
- llamar a emergencias automáticamente;
- asignar recursos;
- declarar una zona segura por cuenta propia;
- publicar en redes sociales;
- compartir ubicación sin confirmación.

## Notificaciones y agenda de casos

Crea una sección `Notificaciones` con dos pestañas: `Recibidas` y `Mis casos`.

### Notificaciones recibidas

Cada notificación muestra:

- icono de riesgo;
- título prudente;
- distrito o sector general;
- fuente;
- fecha y hora;
- estado `Oficial`, `Comunitaria`, `En revisión` o `Demostración`;
- caducidad;
- botón `Ver croquis`;
- botón `Marcar como leída`.

No uses frases alarmistas como `¡Corre ahora!` salvo que exista contenido oficial validado.

### Agendar un caso

Permite que una persona moderadora cree un caso de seguimiento con:

- título;
- tipo de incidente;
- zona general;
- prioridad `Baja`, `Media` o `Alta`;
- fecha y hora de seguimiento;
- responsable o equipo;
- reportes relacionados;
- notas;
- fecha de caducidad;
- recordatorio.

Estados del caso:

- `Nuevo`;
- `En investigación`;
- `Pendiente de información`;
- `Listo para aprobar notificación`;
- `Cerrado`;
- `Caducado`.

La agenda debe funcionar como seguimiento interno. No debe interpretarse como despacho de ayuda ni asignación automática de recursos.

### Crear una notificación push

Flujo de cuatro pasos:

1. `Crear borrador`.
2. `Seleccionar audiencia con consentimiento`.
3. `Revisar evidencia y texto`.
4. `Aprobar y programar`.

La pantalla de confirmación debe mostrar:

- texto exacto que recibirá la persona;
- fuente y fecha;
- reportes relacionados;
- zona general;
- caducidad;
- responsable que aprueba;
- doble confirmación `Aprobar notificación`.

Nunca mostrar un botón directo `Enviar alerta` desde el chat de IA.

## Centro de seguridad y privacidad

Añade una pantalla `Seguridad y privacidad` con:

- permisos de ubicación, cámara, micrófono y notificaciones;
- interruptores independientes para activar o revocar cada permiso;
- botón `Eliminar mis reportes`;
- botón `Eliminar contactos familiares`;
- explicación de retención temporal;
- historial de accesos y acciones;
- aviso `La clave de IA nunca se guarda en este dispositivo`;
- bloqueo con PIN o biometría para contactos familiares y moderación.

## Estados y errores

Diseña estados para:

- permiso de ubicación rechazado;
- croquis sin datos verificados;
- contacto incompleto;
- llamada cancelada;
- mapa offline;
- información desactualizada;
- error de carga;
- usuario sin contactos familiares;
- punto seguro pendiente de validación.

Los errores deben explicar cómo recuperarse y aparecer cerca del elemento afectado.

## Accesibilidad

- Contraste WCAG AA.
- Botones táctiles mínimo 44px.
- Números grandes y legibles.
- No depender solo del color.
- Labels visibles.
- Lectura compatible con lector de pantalla.
- Soporte para texto grande.
- Vibración solo si el dispositivo y la persona lo autorizan.
- Respeta `prefers-reduced-motion`.

## Pantallas a generar en Stitch

Genera estas pantallas coherentes para móvil:

1. Inicio y nivel de preparación.
2. Centro de seguridad con estados `Normal`, `Atención` y `Emergencia en revisión`.
3. Croquis de evacuación inspirado en el plano adjunto.
4. Detalle de zona segura.
5. Ruta de evacuación.
6. Reportar incidente en tres pasos.
7. Seguimiento de reporte con ID y estados.
8. Chat conversacional `Ellie Asistente`.
9. Respuesta IA explicable con evidencia y abstención.
10. Fallback `RULES-ONLY` cuando la IA no esté disponible.
11. Centro de notificaciones recibidas.
12. Agenda y detalle de casos.
13. Crear borrador de notificación push.
14. Revisión y aprobación humana de notificación.
15. Contactos de emergencia 105, 110 y 116.
16. Red de seguridad.
17. Contactos familiares.
18. Botón `Necesito ayuda` con confirmación.
19. Seguridad y privacidad.
20. Modo sin conexión.
21. Checklist de preparación familiar.
22. Estados de error y datos no verificados.

## Restricciones críticas

- No presentar zonas no verificadas como seguras.
- No convertir el croquis en una alerta oficial.
- No incluir direcciones personales reales.
- No mostrar información histórica como situación actual.
- No compartir ubicación sin consentimiento.
- No inventar números o instituciones.
- No usar un botón de llamada sin confirmación.
- No usar mapas recargados ni texto ilegible.
- No usar emojis como iconos principales.
- No usar estética de emergencia alarmista.

El resultado debe parecer una aplicación móvil real de preparación familiar, con identidad **Ellie Life Enterprise**, basada visualmente en el plano adjunto pero adaptada para lectura rápida, seguridad, privacidad y uso con conectividad limitada.

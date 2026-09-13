# Auditoría y dirección — marca personal de Alex Ariza

Fecha: 2026-09-11  
Rama de trabajo: `codex/personal-brand-homepage`

## Decisión de producto

La web deja de organizarse como portfolio para recruiters y pasa a funcionar como una homepage comercial de marca personal. Su trabajo es ayudar a un comprador a responder, en orden:

1. ¿Esto es para un problema como el mío?
2. ¿Qué resultado propone Alex y mediante qué enfoque?
3. ¿Qué puedo contratar?
4. ¿Hay evidencia suficiente para confiar?
5. ¿Cómo trabaja y qué riesgo asumo?
6. ¿Cuál es el próximo paso real?

No se publicarán marcas, testimonios, cifras, precios, duraciones ni garantías sin evidencia o decisión explícita de Alex.

## Objetivos — tres iteraciones

### Iteración 1: claridad comercial

- Definir audiencia, problema, resultado y mecanismo en el hero.
- Limitar la oferta a tres próximos pasos comprables.
- Reordenar la narrativa: fit → servicios → evidencia → proceso → autoridad → FAQ → contacto.
- Mantener sólo 2–3 casos relevantes en la home.
- Convertir contacto en una expectativa honesta; si no existe calendario, usar email.
- Separar contenido de presentación para facilitar reemplazos.
- Corregir jerarquía, navegación, accesibilidad, metadata y densidad mobile.

**Criterio de éxito:** un visitante puede explicar para quién es la página, qué puede contratar y cómo iniciar una conversación sin interpretar una lista de tecnologías.

### Iteración 2: confianza demostrable

- Incorporar únicamente logos con autorización de publicación.
- Añadir testimonios completos con nombre, rol, empresa y cita aprobada.
- Reescribir casos en lenguaje comprador: contexto, fricción, intervención, resultado y evidencia.
- Revisar cada claim y clasificarlo como real, benchmark, estimado o pendiente.
- Incorporar objeciones reales surgidas de conversaciones comerciales.
- Evaluar una agenda o formulario calificador según el volumen y tipo de prospecto.

**Criterio de éxito:** las afirmaciones importantes tienen una fuente o contexto visible y la confianza no depende sólo de autoafirmaciones.

### Iteración 3: optimización y diferenciación

- Probar jerarquía y copy con usuarios del perfil objetivo.
- Medir clicks de CTA, profundidad, contactos y origen, sin instrumentación invasiva.
- Refinar la identidad editorial con activos propios y dirección fotográfica consistente.
- Validar performance de producción, Core Web Vitals, accesibilidad WCAG y SEO técnico.
- Decidir si servicios o casos necesitan páginas de conversión dedicadas.
- Ajustar CTA y calificación con evidencia de comportamiento, no por gusto.

**Criterio de éxito:** la página genera conversaciones relevantes y permite saber qué mensaje, evidencia y servicio contribuyeron.

## Auditoría base verificada

Se inspeccionó código, respuesta HTTP y preview en desktop y 390 px mobile, sin ejecutar build.

### Fortalezas

- Cinco case studies con estructura, imágenes y decisiones técnicas.
- Fotografía personal y presencia profesional real.
- Dominio, canonical, robots, sitemap, Open Graph y JSON-LD existentes.
- Sistema visual coherente y componentes responsive sin overflow horizontal.
- Experiencia end-to-end visible: producto, frontend, backend, IA y cloud.

### Problemas encontrados

- Arquitectura de portfolio: `Projects`, `Skills`, `About`, catálogo amplio y contacto.
- H1 sin tamaño tipográfico; medía 16 px en mobile.
- CTA “Schedule a call” sin agenda: sólo desplazaba a email/redes.
- Mobile de aproximadamente 14.397 px; proyectos consumían 4.866 px.
- Sin cliente ideal, oferta empaquetada, proceso visible, FAQ ni reducción explícita de incertidumbre.
- Sin logos o testimonios; varias afirmaciones requieren evidencia/contexto.
- Menú mobile sin nombre, `aria-expanded` o `aria-controls`; links de iconos sin nombre; sin skip link.
- Salto de headings desde H1 a H3 en proyectos.
- Vanta/Three dependían de dos CDNs y agregaban ruido y trabajo gráfico.
- Gran parte de la home se hidrataba como client components aunque era contenido estático.
- Metadata centrada en stack/portfolio y copyright fijo en 2025.

## Qué cambió en la Iteración 1

- Nueva narrativa comercial y editorial.
- Navegación: Services, Results, Process, About, FAQ y CTA.
- Hero centrado en audiencia, fricción, resultado y enfoque.
- Tres servicios sin precios o duraciones inventadas:
  - AI Opportunity Sprint
  - Grounded AI Pilot
  - Productionization & Optimization
- Tres casos existentes seleccionados como evidencia.
- Proceso de cuatro fases.
- About enfocado en relevancia y criterio, no en una lista de skills.
- FAQ y CTA final con expectativa del siguiente paso.
- Contacto por email mientras `calendarUrl` esté vacío.
- Logos y testimonios ocultos mientras sus arrays estén vacíos.
- Eliminación del Vanta hero en la ruta principal.
- H1 responsive, headings semánticos, skip link, navegación accesible y reduced motion global.
- Metadata y schema ajustados al servicio sin inventar entidad empresarial.
- Footer con año dinámico.

## Correcciones de la Iteración 2

La segunda auditoría confirmó que la arquitectura comercial ya era más clara, pero detectó que algunas decisiones todavía podían inducir una lectura más fuerte que la evidencia disponible. Se corrigió lo siguiente:

- El ICP ahora nombra explícitamente a líderes de producto y operaciones con flujos intensivos en documentos.
- Se agregó una sección `notAFit` para excluir programas de agencia, iniciativas sin acceso al flujo real y expectativas de resultados garantizados sin evidencia.
- `proof` se renombró a `capabilities`: no se presentan capacidades como si fueran prueba social.
- Cada caso de home tiene un `homeEvidence` propio con tipo de evidencia, contexto, rol y puntos demostrables.
- Se eliminaron de la home las métricas crudas del registry; una cifra ya no aparece fuera del contexto que explica si es resultado, objetivo, benchmark o estimación.
- Cada oferta define boundary, inputs del cliente, exclusiones y señal de finalización. Precio y duración siguen ocultos mientras no estén confirmados para un alcance real.
- Todos los CTA primarios se derivan del canal configurado: `Email Alex Ariza` cuando no hay calendario y `Book a fit call` cuando existe una URL real.
- El mailto incluye una plantilla para workflow, current friction, desired change y constraints.
- Logos y testimonios requieren `permissionConfirmed`, `source` y `context`; si faltan, no se publican aunque exista el objeto.
- El About aclara que Alex es un especialista independiente y no una agencia con squads paralelos o soporte 24/7.
- El FAQ ahora cubre privacidad/datos e IP/código sin prometer condiciones universales.
- El hero sólo conserva `min-height` en desktop y se mejoraron padding y tamaño de labels en mobile.

## Correcciones finales de la Iteración 3

- `Selected evidence` pasó a `Selected work` y el título aclara que se trata de technical proof of work, no de endorsements comerciales.
- Los estados genéricos `Production system` y `Production-grade implementation` fueron reemplazados por `Documented implementation` o `Documented internal workflow`.
- Cada caso publica un estado de evidencia, fuente navegable y lista de artifacts reales.
- Clinic HC usa `public/projects/clinic-hc/thumbnail.png`; la home ya no usa una foto stock para representarlo.
- Los enlaces de imagen tienen nombre accesible con título + acción y los links internos usan flecha interna, no icono de enlace externo.
- JSON-LD sólo agrega `Offer` cuando el servicio tiene `offerApproved: true`.
- El hero expresa la secuencia definitiva: decide → validate → ship only when justified.
- El email dejó de asumir documentos: acepta `knowledge-heavy or AI-enabled workflows`.
- La metadata ya no promete `production-ready` de forma universal.
- Servicios y resultados usan progressive disclosure en mobile; desktop mantiene la información visible para comparación.
- El menú mobile bloquea scroll, contiene el foco, cierra con Escape y restaura foco al trigger.
- El hero fue compactado para mantener el CTA visible en un viewport desktop de 1280 × 720.

### Lo que sigue pendiente para lanzamiento

La estructura está lista, pero la estrategia comercial NO debe considerarse completa hasta que Alex aporte y apruebe:

- Perfil final de ICP, incluyendo industrias, madurez, tamaño de equipo, geografía y decisor.
- Logos con permiso verificable y sus fuentes.
- Testimonios con permiso, fuente y contexto.
- Modelo comercial final: modalidad, precio, duración, términos y ofertas aprobadas.
- Resultados comerciales externos o referencias de clientes que permitan pasar de technical proof of work a customer proof.
- URL de calendario o decisión definitiva de mantener email como canal.

Hasta entonces, la web oculta esos datos y evita fingir una oferta o prueba que todavía no existe.

## Materiales activos

| Material | Ubicación | Estado |
|---|---|---|
| Foto principal | `public/profile2.jpg` | Activo |
| Foto alternativa | `public/profile.png` | Activo |
| Clinic HC | `src/content/projects/clinic-hc/` | Caso destacado |
| SGR/MGA | `src/content/projects/sgr-mga/` | Caso destacado |
| Legal Copilot | `src/content/projects/legal-copilot/` | Caso destacado |
| Local RAG | `src/content/projects/local-rag/` | Disponible fuera de home |
| Caloric Estimator | `src/content/projects/caloric-estimator/` | Disponible fuera de home |
| Diagramas/videos | `public/projects/` | Activos por revisar |
| CV | `public/Alex_CV.pdf` | Disponible, no promovido en la home comercial |
| GitHub/LinkedIn/email | `src/content/personal-brand.ts` | Activos |

## Materiales que Alex debe preparar

### Prioridad alta

- Definición final del perfil de cliente: cargo, empresa, industria, madurez y geografía.
- Entre 3 y 8 logos con permiso de publicación y archivos SVG/PNG consistentes.
- Entre 2 y 5 testimonios aprobados con nombre, rol y empresa.
- Evidencia de cada métrica publicada: captura, reporte, benchmark o explicación del método.
- Una frase clara sobre disponibilidad y modalidad comercial, si desea publicarla.
- Decisión de CTA: email, enlace de calendario o formulario calificador.

### Prioridad media

- Retrato editorial de mayor resolución y variantes horizontal/vertical.
- Breve historia personal que conecte experiencia, punto de vista y tipo de trabajo elegido.
- Objeciones frecuentes recogidas de prospectos reales.
- Alcances típicos, exclusiones y criterios de fit por servicio.
- Política sobre confidencialidad y anonimización de casos.

### Futuro

- Apariciones, charlas, publicaciones o certificaciones relevantes.
- Lead magnet sólo si responde a una necesidad real de la audiencia.
- Newsletter o contenido editorial cuando exista una cadencia sostenible.

## Guía de reemplazo

La información comercial central vive en:

`src/content/personal-brand.ts`

### Cambiar textos y oferta

- `hero`: promesa, descripción y CTAs.
- `idealClient`: problemas y resultados.
- `services`: nombres, fit, outcome y entregables.
- `process`: fases.
- `about`: narrativa y principios.
- `faq`: preguntas y respuestas.
- `contact`: expectativa y asunto de email.

Cada servicio incluye `commercials`. Duración y precio sólo se renderizan cuando `confirmed` es `true` y el valor correspondiente no está vacío.

### Cambiar los casos de home

Editar `homeEvidence`. Cada objeto debe incluir:

- `slug`: debe existir en `src/content/projects/`.
- `evidenceType`: estado verificable del trabajo.
- `evidenceStatus`: disponibilidad de la evidencia.
- `context`: entorno y problema donde se produjo.
- `role`: responsabilidad concreta de Alex.
- `source`: label y link al case study.
- `artifacts`: links a diagramas, demos u otros activos reales.
- `proofPoints`: hechos demostrables sin descontextualizar métricas.

Las cifras permanecen en el case study completo hasta que tengan tipo de evidencia, fuente y contexto suficientes para promoverlas en la home.

### Agregar logos reales

1. Guardar los archivos en `public/brands/`.
2. Agregar objetos a `brandLogos` con `name`, `image`, `source: { label, href }`, `context`, `permissionConfirmed` y, opcionalmente, `href` para el sitio de la marca.
3. Usar `permissionConfirmed: true` sólo después de confirmar permiso y conservar una referencia navegable en `source`.
4. Un objeto incompleto/no autorizado se filtra; mientras no haya logos publicables, la sección no se renderiza.

### Agregar testimonios reales

Agregar objetos a `testimonials` con `quote`, `name`, `role`, `source: { label, href }`, `context`, `permissionConfirmed` y `company` opcional. No usar texto de ejemplo en producción. Sólo se renderizan testimonios con permiso, fuente y contexto, y la fuente se muestra como link.

### Activar calendario

Completar `calendarUrl` con una URL real. Todos los CTA primarios cambian automáticamente a “Book a fit call” y el CTA final abre el calendario en una pestaña nueva. Si queda vacío, todos dicen “Email Alex Ariza” y abren un email con asunto y preguntas de contexto precompletadas.

### Cambiar fotografía

Reemplazar `public/profile2.jpg` manteniendo la ruta o actualizar `portrait` en `src/content/personal-brand.ts`. Validar encuadre mobile y desktop.

## Reglas para las siguientes auditorías

- No evaluar “premium” sólo por efectos visuales: revisar claridad, ritmo, prueba, tipografía, contraste y especificidad de marca.
- No inventar confianza. Un placeholder oculto es mejor que un logo o testimonio falso.
- No optimizar conversiones sin definir qué contacto es relevante.
- No sumar secciones por costumbre. Cada bloque debe reducir una duda concreta.
- Verificar desktop, tablet, mobile, teclado, reduced motion, headings, enlaces, recursos y mensajes de error.

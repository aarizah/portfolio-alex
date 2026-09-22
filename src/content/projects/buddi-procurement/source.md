# Buddi Procurement Intelligence Platform

## Documento de definición funcional y técnica

**Tipo de proyecto:** Plataforma interna de consolidación de compras, automatización documental y asistencia con inteligencia artificial
**Duración objetivo:** 6 meses
**Modalidad:** Aplicación web privada en AWS
**Arquitectura:** Serverless / scale-to-zero cuando sea razonable
**Usuarios:** Personal interno de Buddi Limited
**Objetivo central:** Centralizar información dispersa de compras y convertirla en una fuente única consultable, automatizada e inteligente.

---

# 1. Resumen ejecutivo

Buddi realiza compras a diferentes proveedores mediante múltiples canales.

Algunos proveedores disponen de sus propias plataformas digitales, donde Buddi puede consultar órdenes, cantidades, precios y estados.

Otras operaciones pueden realizarse mediante:

* llamadas;
* negociación directa;
* cotizaciones;
* facturas;
* documentos enviados posteriormente;
* registro manual.

Como resultado, la información relacionada con las compras no necesariamente se encuentra disponible desde un único lugar.

El proyecto propone construir una plataforma interna que funcione como una **capa de consolidación e inteligencia sobre los sistemas que la compañía ya utiliza**.

La plataforma no busca reemplazar las plataformas de los proveedores, sino reunir su información.

La solución tendrá cuatro capacidades principales:

1. **Consolidación de pedidos** provenientes de distintas plataformas y canales.
2. **Registro inteligente de compras realizadas por fuera de las plataformas**, utilizando parsing de facturas y otros documentos para reducir digitación manual.
3. **Asistente de inteligencia artificial** capaz de consultar tanto los datos reales de las operaciones como documentos internos de la compañía.
4. **Sincronizaciones, procesamiento y exportaciones automáticas**, ejecutadas periódicamente sin necesidad de mantener servidores permanentemente activos.

El sistema se desplegará principalmente sobre servicios serverless de AWS, buscando que la capacidad computacional se ejecute bajo demanda.

---

# 2. Problema actual

## 2.1. Información distribuida

Buddi puede trabajar con varios proveedores y cada proveedor puede disponer de su propia plataforma.

Ejemplo conceptual:

Proveedor A:

* 24 órdenes;
* estados propios;
* interfaz propia;
* estructura propia.

Proveedor B:

* 11 órdenes;
* nombres de estados diferentes;
* información presentada de otra manera.

Proveedor C:

* 18 órdenes;
* otro sistema independiente.

Adicionalmente existen operaciones negociadas por llamada o fuera de esas plataformas.

Por tanto, para obtener una visión completa de las compras puede ser necesario consultar varios lugares.

El problema no es necesariamente que las plataformas individuales funcionen mal.

El problema es que **cada una conoce solamente su parte de la operación**.

---

# 3. Problemas específicos

## 3.1. Falta de una visión consolidada

Actualmente puede ser difícil responder inmediatamente preguntas como:

* ¿Cuántos pedidos tenemos abiertos en total?
* ¿Cuánto dinero tenemos comprometido actualmente?
* ¿Cuáles pedidos están retrasados?
* ¿Cuánto hemos comprado a cada proveedor?
* ¿Qué productos estamos comprando con mayor frecuencia?
* ¿Cuál fue el último precio pagado por determinado producto?
* ¿Qué compras fueron realizadas mediante llamada?
* ¿Qué operaciones cambiaron recientemente?
* ¿Qué documentos corresponden a cada operación?

La información existe, pero está fragmentada.

---

## 3.2. Compras realizadas mediante llamadas

Una compra puede acordarse por teléfono.

Por ejemplo:

> 500 unidades del producto X a USD 8,20 por unidad.

Si ninguna plataforma conoce esa negociación, el sistema interno tampoco puede conocerla automáticamente.

Posteriormente puede llegar una:

* factura;
* cotización;
* confirmación;
* orden;
* packing list;
* documento comercial.

Actualmente un empleado podría tener que leer el documento y volver a introducir sus datos manualmente.

Esto genera duplicación de trabajo.

---

## 3.3. Documentos desaprovechados como fuente de datos

Una factura puede contener automáticamente gran parte de la información necesaria:

* proveedor;
* número de factura;
* productos;
* SKU;
* cantidades;
* precio unitario;
* moneda;
* total;
* fecha;
* impuestos;
* referencias;
* número de pedido.

Si el empleado ya dispone de ese documento, obligarlo a escribir nuevamente esos datos es innecesario.

---

## 3.4. Datos y documentación interna están separados

Los datos operacionales responden preguntas como:

> ¿Qué pedidos están retrasados?

La documentación interna responde preguntas como:

> ¿Qué procedimiento debemos seguir cuando un proveedor incumple una entrega?

Una plataforma convencional normalmente no combina ambos conocimientos.

Este proyecto sí lo hará.

---

# 4. Objetivo general

Crear una aplicación web privada que centralice las compras realizadas mediante diferentes proveedores y canales, automatice la incorporación y consolidación de información, y permita consultar datos y documentación empresarial mediante un asistente de inteligencia artificial.

---

# 5. Objetivos específicos

La plataforma deberá permitir:

1. Integrar información proveniente de varias plataformas de proveedores.
2. Normalizar diferentes estructuras de datos bajo un modelo común.
3. Incorporar compras realizadas mediante llamadas.
4. Extraer automáticamente información desde facturas y otros documentos.
5. Permitir revisión humana antes de registrar información extraída por IA.
6. Mantener histórico de operaciones.
7. Asociar documentos a pedidos y proveedores.
8. Consultar información consolidada desde una única aplicación.
9. Generar exportaciones consolidadas.
10. Ejecutar sincronizaciones automáticamente cada determinado intervalo.
11. Consultar información mediante lenguaje natural.
12. Consultar documentación interna mediante RAG.
13. Combinar información operacional y documental dentro de una misma respuesta.
14. Mantener trazabilidad de las operaciones relevantes.

---

# 6. Principio fundamental del proyecto

La plataforma **no reemplaza sistemas existentes que ya funcionan**.

La arquitectura debe seguir este principio:

> Integrar antes que reconstruir.

Si el proveedor A ya permite consultar perfectamente:

* órdenes;
* productos;
* estados;
* cantidades;

Buddi no necesita desarrollar su propia versión de la plataforma A.

Lo que necesita es poder incorporar esa información dentro de una visión consolidada.

Conceptualmente:

Proveedor A
Proveedor B
Proveedor C
Compras por llamada
Compras manuales

↓

**Buddi Procurement Intelligence Platform**

---

# 7. Componentes principales

El producto estará dividido conceptualmente en cuatro módulos principales.

## Módulo A — Consolidación operacional

Responsable de centralizar pedidos.

## Módulo B — Document Intelligence

Responsable de interpretar facturas y otros documentos.

## Módulo C — AI Operations Assistant

Responsable de consultas en lenguaje natural sobre datos y documentación.

## Módulo D — Automation Engine

Responsable de sincronizaciones, procesamiento periódico y exportaciones.

---

# 8. Módulo A — Consolidación operacional

## 8.1. Objetivo

Crear una representación común de todos los pedidos independientemente de su origen.

Ejemplo:

Proveedor A podría representar una orden así:

> Order #A19381
> Status: Processing

Proveedor B:

> PO-B821
> Status: Production

Proveedor C:

> Order C-9281
> Status: Being Prepared

Internamente, Buddi podría normalizar los tres estados como:

> EN PREPARACIÓN

Sin perder necesariamente el estado original.

---

# 9. Modelo unificado de pedido

Un pedido consolidado podría contener:

### Identificación

* ID interno;
* ID externo;
* fuente;
* proveedor.

### Compra

* fecha;
* moneda;
* subtotal;
* impuestos;
* total.

### Productos

* SKU;
* descripción;
* cantidad;
* precio unitario.

### Estado

* estado original del proveedor;
* estado normalizado;
* fecha de última actualización.

### Logística

Cuando esté disponible:

* fecha estimada;
* fecha real;
* tracking;
* estado logístico.

### Documentación

* factura;
* cotización;
* orden;
* packing list;
* otros documentos.

### Auditoría

* fecha de creación;
* última modificación;
* origen del dato;
* usuario responsable cuando corresponda.

---

# 10. Métodos de integración

No se debe asumir que todos los proveedores ofrecen la misma capacidad técnica.

Por eso se contemplarán varios mecanismos.

## Nivel 1 — API

Es la opción preferida.

La plataforma consulta directamente la API del proveedor.

Ejemplo:

Proveedor A API → Pedidos nuevos → Transformación → Modelo Buddi → Base consolidada

---

## Nivel 2 — Exportación estructurada

Si no existe API pero la plataforma permite descargar:

* CSV;
* XLSX;
* JSON;

Buddi puede procesar periódicamente esos archivos.

Puede ser parcialmente automatizado o requerir que un empleado cargue la exportación.

---

## Nivel 3 — Documentos

Si solamente existe información mediante:

* facturas;
* PDFs;
* cotizaciones;

la plataforma utiliza Document Intelligence para extraerla.

---

## Nivel 4 — Entrada manual

Último recurso.

Se utilizará cuando la información solamente exista en conocimiento humano.

Por ejemplo:

> Se acordó telefónicamente una compra y todavía no existe documento.

La persona crea una operación manual.

---

# 11. Compras realizadas por llamada

Este flujo tendrá dos variantes.

## 11.1. Compra con documento disponible

Empleado habla con proveedor.

↓

Proveedor envía factura.

↓

Empleado arrastra `invoice.pdf`.

↓

Sistema analiza documento.

↓

Presenta:

**Proveedor:** ABC Manufacturing
**Factura:** INV-87121
**Producto:** X21
**Cantidad:** 500
**Precio unitario:** USD 8.20
**Total:** USD 4,100

↓

Empleado revisa.

↓

**Confirmar**

↓

Se crea la operación.

---

# 12. Compra sin documento

Si todavía no existe factura:

Empleado selecciona:

**Nueva compra manual**

Y registra solamente los campos esenciales.

Posteriormente puede adjuntar la factura.

La plataforma intenta asociar el nuevo documento al pedido existente.

---

# 13. Por qué mantener human-in-the-loop

La inteligencia artificial no debe escribir ciegamente en la base de datos operacional cuando interpreta documentos importantes.

Supongamos que una factura dice:

> USD 8.70

pero el modelo interpreta:

> USD 8.10

Registrar automáticamente ese dato podría contaminar el histórico.

Por eso la arquitectura seguirá:

Documento → Extracción automática → Validación técnica → Presentación al humano → Confirmación → Persistencia definitiva

La IA reduce el trabajo.

No elimina el control.

---

# 14. Módulo B — Document Intelligence

## Objetivo

Transformar documentos no estructurados en información utilizable por el sistema.

Inicialmente se contemplan:

* facturas;
* cotizaciones;
* purchase orders;
* packing lists;
* PDFs comerciales;
* documentos internos.

---

# 15. Pipeline documental

Flujo general:

Documento → Carga a almacenamiento → Identificación del tipo → Parsing → Extracción → Normalización → Validación → Revisión humana → Persistencia

---

# 16. Parsing tradicional antes que LLM

No todo documento debe enviarse inmediatamente a un modelo de lenguaje.

Primero se intenta obtener:

* texto;
* tablas;
* metadata;
* estructura.

Después se utiliza inteligencia artificial cuando aporta valor para interpretar esa información.

Esta separación reduce:

* costo;
* latencia;
* dependencia del modelo;
* errores.

---

# 17. Validaciones determinísticas

El LLM puede extraer:

> quantity = 500

Pero operaciones matemáticas críticas deben ejecutarse con código convencional.

Por ejemplo:

Cantidad: 500
Precio: USD 8.20
Total esperado: USD 4,100

Si la factura reporta USD 4,350, la aplicación puede generar:

> ⚠ Total inconsistente con cantidad × precio unitario.

El modelo interpreta.

El software valida.

---

# 18. Almacenamiento documental

Los documentos originales deben conservarse independientemente de los datos extraídos.

Ejemplo conceptual:

Pedido 7812

* invoice_original.pdf
* parsed_invoice.json
* datos confirmados
* fecha de procesamiento
* versión del extractor
* usuario que confirmó

Esto proporciona trazabilidad.

---

# 19. Módulo C — Asistente inteligente

El asistente será una de las principales diferencias del producto.

Sin embargo, técnicamente **no debe ser simplemente un RAG**.

Tendrá dos fuentes principales.

## Fuente 1 — Datos operacionales

Base estructurada de:

* pedidos;
* proveedores;
* productos;
* cantidades;
* precios;
* fechas;
* estados;
* históricos.

## Fuente 2 — Documentación

RAG sobre:

* políticas;
* procedimientos;
* manuales;
* contratos autorizados;
* documentación interna;
* documentación de proveedores.

---

# 20. Router inteligente de consultas

Cuando el usuario pregunta:

> ¿Cuántos pedidos están abiertos?

No tiene sentido buscar documentos semánticamente.

Debe consultar datos.

Cuando pregunta:

> ¿Cuál es nuestro procedimiento para mercancía incompleta?

Debe consultar el RAG.

Cuando pregunta:

> ¿Qué pedidos están retrasados y qué procedimiento debemos seguir?

Debe utilizar ambos.

Conceptualmente:

Pregunta → Clasificación / razonamiento → Datos / Documentos / Ambos → Herramientas autorizadas → Resultados → LLM → Respuesta

---

# 21. Consultas sobre datos estructurados

No daría al modelo acceso irrestricto a ejecutar cualquier SQL arbitrario.

Preferiría herramientas controladas.

Ejemplos:

`get_open_orders()`
`get_orders_by_supplier()`
`get_delayed_orders()`
`get_product_purchase_history()`
`get_supplier_spend()`
`get_order_details()`

El modelo decide cuál utilizar.

El backend controla realmente qué información puede consultarse.

Esto mejora:

* seguridad;
* predictibilidad;
* permisos;
* observabilidad;
* pruebas.

---

# 22. RAG documental

El pipeline conceptual sería:

Documento → Parsing → Fragmentación → Embeddings → Índice vectorial → Usuario pregunta → Retrieval → Reranking si es necesario → Contexto seleccionado → Modelo generativo → Respuesta + referencias

---

# 23. Política de no evidencia

Una característica obligatoria será evitar que el sistema finja conocer información empresarial que no posee.

Si un usuario pregunta:

> ¿Cuál es nuestra política de devoluciones para proveedor ABC?

y no existe evidencia suficiente:

La respuesta correcta deberá ser similar a:

> No encontré información suficiente en la documentación disponible para responder esta pregunta.

No deberá inventar una política plausible.

---

# 24. Citación documental

Las respuestas basadas en documentos deberán, cuando sea viable, indicar:

* documento;
* sección;
* página;
* fragmento relevante.

El empleado podrá verificar la respuesta.

---

# 25. Ejemplos del asistente

### Datos

> ¿Cuánto compramos al proveedor X durante los últimos tres meses?

### Datos

> Dame los diez pedidos abiertos de mayor valor.

### Datos

> ¿Cuál fue el último precio pagado por SKU ABC-10?

### RAG

> ¿Cuál es el procedimiento para aprobar un proveedor nuevo?

### RAG

> ¿Qué establece este contrato sobre tiempos de entrega?

### Datos + RAG

> Tenemos cuatro pedidos retrasados. ¿Qué procedimiento corresponde seguir según nuestra documentación?

### Datos + RAG

> Identifica pedidos que superaron la fecha prevista y resume las reglas internas relacionadas.

---

# 26. Módulo D — Automatizaciones

El sistema deberá seguir funcionando aunque ningún usuario tenga abierta la aplicación.

La aplicación interactiva y las automatizaciones serán independientes.

---

# 27. Sincronización periódica

Cada X horas:

EventBridge Scheduler → Proceso de sincronización → Proveedor A / B / C → Datos nuevos/cambiados → Normalización → Validación → Persistencia → Actualización de plataforma

Amazon EventBridge Scheduler está diseñado precisamente para invocaciones programadas y puede disparar directamente Lambda, ECS RunTask y otros servicios.

---

# 28. Frecuencia

No se define todavía una frecuencia fija.

Podría ser:

* cada hora;
* cada 6 horas;
* dos veces al día;
* diariamente.

La frecuencia debe depender de cuánto cambien realmente los pedidos.

No existe beneficio en consultar una plataforma cada minuto si sus estados solamente cambian algunas veces al día.

---

# 29. Exportaciones automáticas

La plataforma permitirá producir una vista consolidada descargable.

Ejemplo:

`buddi_orders_2026-09-18.xlsx`

Campos:

* proveedor;
* pedido;
* producto;
* cantidad;
* precio;
* total;
* moneda;
* fecha;
* estado;
* fuente;
* última actualización.

Podrá generarse:

### Manualmente

Usuario: **Exportar ahora**

### Automáticamente

Por ejemplo: todos los lunes a las 07:00.

EventBridge → Generador → XLSX → S3 → Disponible en plataforma

---

# 30. Procesamiento asíncrono

Algunos trabajos no deben bloquear al usuario.

Ejemplo: empleado carga 50 facturas.

No queremos:

> “Mantenga esta ventana abierta durante tres minutos.”

Preferimos:

50 documentos → S3 → SQS → Workers → Procesamiento → Resultados

La interfaz puede mostrar:

**47 procesados**
**2 en procesamiento**
**1 requiere revisión**

Amazon SQS puede utilizarse directamente como fuente de eventos para Lambda; Lambda consume los mensajes por lotes y escala los workers según el volumen. También permite controlar la concurrencia para evitar saturar otros recursos.

---

# 31. Jobs cortos y jobs largos

No todo proceso debe ejecutarse de la misma forma.

## Jobs cortos

Ejemplos:

* importar 50 cambios;
* procesar una factura;
* generar un Excel pequeño;
* actualizar métricas;
* realizar limpieza sencilla.

Pueden ejecutarse en **AWS Lambda**.

## Jobs largos

Ejemplos:

* reprocesar 50.000 documentos;
* recalcular todos los embeddings;
* importación histórica masiva;
* procesamiento pesado de grandes cantidades de archivos.

Estos pueden exceder el modelo normal de Lambda.

AWS Lambda permite configurar ejecuciones convencionales hasta 900 segundos, es decir, 15 minutos.

Para trabajos más largos: **ECS Fargate Task**

El task:

1. arranca;
2. procesa;
3. almacena resultado;
4. termina.

No es necesario mantener un servidor Fargate funcionando permanentemente.

---

# 32. Arquitectura general AWS

La arquitectura propuesta será mayoritariamente serverless.

```text
                          EMPLEADOS
                              │
                              ▼
                       Aplicación web
                              │
                    CloudFront / Frontend
                              │
                              ▼
                         API Gateway
                              │
                              ▼
                   Lambda + FastAPI
                              │
          ┌───────────────────┼───────────────────────┐
          │                   │                       │
          ▼                   ▼                       ▼
       Aurora                 S3                    Bedrock
     PostgreSQL            Documentos                 AI
          │                   │                       │
          │                   ▼                       │
          │                  SQS                      │
          │                   │                       │
          │                   ▼                       │
          │                Workers ───────────────────┘
          │
          ▲
   Sincronizaciones
          ▲
 EventBridge Scheduler
          │
      ┌───┴────┐
      ▼        ▼
   Lambda    Fargate
   corto      pesado
```

---

# 33. Filosofía scale-to-zero

Uno de los objetivos de arquitectura es no pagar permanentemente por servidores que pasan gran parte del día esperando.

En lugar de:

EC2 → servidor activo 24/7

se plantea:

Usuario hace request → Lambda ejecuta → responde → compute queda disponible para reutilización o desaparece posteriormente

---

# 34. Backend serverless

El backend se desarrollará principalmente con FastAPI.

No es necesario abandonar FastAPI para utilizar Lambda.

AWS Lambda Web Adapter permite ejecutar aplicaciones HTTP convencionales dentro del entorno Lambda, reduciendo la necesidad de reescribir una aplicación web alrededor del formato de eventos específico de Lambda. AWS documenta explícitamente este patrón para frameworks HTTP y contenedores.

Conceptualmente:

FastAPI → Docker → Lambda Web Adapter → AWS Lambda

Esto permite conservar una arquitectura de aplicación familiar.

---

# 35. Base de datos

Se propone:

**Aurora PostgreSQL Serverless v2**

La base contendrá:

* pedidos;
* proveedores;
* productos;
* documentos;
* estados;
* usuarios;
* eventos;
* metadata;
* registros normalizados;
* datos del asistente cuando corresponda.

Las versiones compatibles de Aurora Serverless v2 permiten actualmente configurar una capacidad mínima de `0 ACU`, pausando automáticamente la capacidad de cómputo después de un período sin conexiones y reanudándola cuando vuelve una conexión. AWS menciona explícitamente aplicaciones internas que pueden tolerar una breve demora de reanudación como caso de uso apropiado.

---

# 36. Consideración del cold start de la base

Scale-to-zero tiene un trade-off.

Si la aplicación lleva mucho tiempo sin utilizarse:

Usuario entra → Lambda despierta → Aurora está pausada → Aurora reanuda → respuesta

El primer request podría tardar más.

Para una aplicación interna de uso esporádico esto puede ser aceptable.

Si posteriormente el sistema tiene uso constante durante toda la jornada, se puede mantener una capacidad mínima superior a cero.

La arquitectura no obliga a utilizar siempre auto-pause.

---

# 37. Amazon S3

S3 será utilizado para objetos como:

* facturas originales;
* cotizaciones;
* documentos internos;
* exportaciones;
* archivos procesados;
* archivos temporales cuando corresponda.

La base de datos guardará metadata.

El archivo físico permanecerá en object storage.

Ejemplo:

Database:

`document_id = 9281`
`order_id = 812`
`type = invoice`
`storage_key = invoices/2026/9281.pdf`

S3:

`invoices/2026/9281.pdf`

---

# 38. Amazon Bedrock

Bedrock será la capa principal para acceder a modelos generativos y modelos de embeddings cuando se decida utilizar servicios administrados de AWS.

Se utilizará para funciones como:

* interpretación documental;
* generación;
* clasificación;
* embeddings;
* reasoning del asistente.

El modelo específico no será una dependencia rígida del sistema.

Se establecerá una interfaz interna que permita cambiar de modelo.

Conceptualmente:

Application → AI Service → Bedrock → Modelo seleccionado

Esto evita acoplar toda la aplicación a un modelo específico.

---

# 39. Vector database

Inicialmente evitaría introducir una base vectorial especializada si no existe necesidad.

Primera alternativa:

**Aurora PostgreSQL + pgvector**

Esto permite mantener:

* datos operacionales;
* metadata;
* embeddings;

dentro del mismo ecosistema PostgreSQL.

Si posteriormente:

* aumenta enormemente el corpus;
* retrieval requiere características adicionales;
* latencia se convierte en problema;

se puede evaluar una solución específica.

La V1 no debe optimizar para una escala que todavía no existe.

---

# 40. API Gateway

API Gateway actuará como entrada pública/controlada para el backend.

Flujo:

Browser → API Gateway → Lambda → FastAPI

Permite desacoplar el dominio HTTP del compute que ejecuta la aplicación.

---

# 41. Frontend

Se propone:

**React / Next.js**

Dependiendo de necesidades de SSR y arquitectura final.

Para una herramienta empresarial interna, gran parte del frontend podría funcionar como SPA.

Si el frontend es predominantemente estático:

Build → S3 → CloudFront

Esto resulta especialmente eficiente porque no necesita servidor frontend permanentemente activo.

---

# 42. Autenticación

La aplicación será privada.

No basta con conocer:

`operations.buddi.com`

Se requerirá autenticación.

Posibles opciones:

* Amazon Cognito;
* integración con identidad corporativa existente;
* SSO mediante proveedor empresarial.

La selección dependerá de cómo Buddi gestione actualmente sus usuarios.

---

# 43. Autorización

No todos los usuarios necesariamente necesitan los mismos permisos.

Ejemplo:

### Compras

Puede:

* crear operación;
* modificar ciertos datos;
* subir documentos.

### Analista

Puede:

* consultar;
* exportar;
* usar asistente.

### Administrador

Puede:

* gestionar usuarios;
* configurar integraciones;
* revisar errores.

### Solo lectura

Puede:

* consultar.

Esto puede resolverse mediante RBAC.

---

# 44. AWS Secrets Manager

Credenciales como:

* claves de APIs;
* passwords;
* tokens;
* secretos de integraciones;

no deben estar hardcoded dentro del repositorio.

Se almacenarán mediante AWS Secrets Manager o mecanismo equivalente.

---

# 45. Observabilidad

Un sistema empresarial debe permitir responder:

> ¿Qué falló?

No solamente:

> Está fallando.

Se utilizará observabilidad para registrar:

* requests;
* errores;
* sincronizaciones;
* documentos procesados;
* jobs ejecutados;
* duración;
* errores de Bedrock;
* fallos de proveedor;
* colas;
* retries.

Principalmente mediante:

**CloudWatch**

---

# 46. Auditoría funcional

Además de logs técnicos, habrá determinados eventos de negocio que deben quedar registrados.

Ejemplo:

`09:32 — factura subida por Maria`
`09:32 — extracción automática completada`
`09:33 — precio corregido manualmente`
`09:34 — factura confirmada`

Esto es diferente de un log técnico.

Es historial funcional.

---

# 47. Manejo de errores de integraciones

Los proveedores son sistemas externos.

Pueden:

* estar caídos;
* responder lento;
* cambiar API;
* devolver errores;
* revocar credenciales.

La sincronización no debe destruir datos anteriores porque un proveedor falle temporalmente.

Ejemplo:

Proveedor B API unavailable → Registrar fallo → Mantener información existente → Retry → Alerta si persiste

---

# 48. Idempotencia

Las sincronizaciones deben poder repetirse sin duplicar información.

Supongamos que:

Pedido A-8291 se importa a las 08:00.

A las 14:00 vuelve a aparecer.

No se crea otro pedido.

Se actualiza el existente.

Esto exige claves e identificadores claros por fuente.

---

# 49. Normalización

Cada proveedor tendrá un adapter.

Ejemplo:

Proveedor A:

```text
provider_order_status = "PROCESSING"
```

Proveedor B:

```text
order_state = "PREPARING"
```

Ambos pueden convertirse internamente en:

```text
normalized_status = "IN_PREPARATION"
```

La lógica específica de cada proveedor queda separada del resto del sistema.

---

# 50. Arquitectura de adapters

Conceptualmente:

```text
Supplier A Adapter
       │
Supplier B Adapter
       │
Supplier C Adapter
       │
       ▼
Normalized Order Model
       │
       ▼
Application
```

Si proveedor B cambia su API, se modifica:

`SupplierBAdapter`

No toda la plataforma.

---

# 51. Stack propuesto

## Backend

* Python
* FastAPI
* Pydantic
* SQLAlchemy
* Alembic

## Frontend

* TypeScript
* React / Next.js

## Database

* PostgreSQL
* Aurora PostgreSQL Serverless v2
* pgvector

## AI

* Amazon Bedrock
* embeddings mediante Bedrock
* RAG propio/controlado
* tool calling para consultas operacionales

## Document processing

* Python
* parsing PDF
* OCR cuando sea necesario
* extracción estructurada con schemas
* Bedrock cuando se requiera interpretación semántica

## Files

* Amazon S3

## API

* Amazon API Gateway

## Serverless compute

* AWS Lambda
* Lambda Web Adapter

## Long-running compute

* ECS Fargate Tasks

## Scheduling

* Amazon EventBridge Scheduler

## Async processing

* Amazon SQS

## Authentication

* Cognito o identidad corporativa existente

## Secrets

* AWS Secrets Manager

## Observability

* CloudWatch

## Delivery

* Docker
* ECR
* GitHub Actions

## Infrastructure as Code

Idealmente:

* AWS CDK;
* Terraform;
* o AWS SAM según componente.

---

# 52. Qué NO incluir inicialmente

Es crítico mantener este alcance.

No construiría inicialmente:

### ERP

No estamos reemplazando SAP/Odoo/etc.

### Contabilidad

No vamos a manejar toda la contabilidad empresarial.

### Inventario completo

Puede integrarse posteriormente si surge necesidad.

### Forecasting

No entra en V1.

### Machine learning predictivo

No entra en V1.

### WhatsApp automation

No entra inicialmente.

### Agente autónomo que realiza compras

No.

### Pagos automáticos

No.

### Negociación automática con proveedores

No.

### CRM

No.

### Marketplace

No.

### Reemplazo de plataformas de proveedores

Definitivamente no.

---

# 53. Alcance funcional definitivo

La versión de seis meses comprende:

1. Consolidación
2. Normalización
3. Compras manuales
4. Parsing documental
5. Confirmación humana
6. Repositorio documental
7. Histórico
8. Asistente operacional
9. RAG empresarial
10. Asistente híbrido
11. Sincronización automática
12. Exportaciones
13. Autenticación
14. Roles básicos
15. Observabilidad
16. Deployment

---

# 54. Roadmap de seis meses

## Mes 1 — Discovery, arquitectura y núcleo

Entender exactamente cómo compra Buddi, cuáles son los tres proveedores, qué plataformas utilizan, qué ofrecen sus APIs, qué archivos pueden exportarse, qué información es crítica, qué usuarios usarán la plataforma.

Desarrollo: repositorios, infraestructura inicial, autenticación, frontend base, backend, base de datos, modelo de pedidos, proveedores, productos, entrada manual básica.

Resultado: primera versión donde ya pueden crearse y consultar operaciones.

---

# 55. Mes 2 — Integraciones y consolidación

Construcción de adapters para las fuentes disponibles.

Adicional: sincronización, estados, deduplicación, idempotencia, manejo de errores, historical updates.

Resultado: vista consolidada funcional.

---

# 56. Mes 3 — Document Intelligence

Carga de facturas, almacenamiento, parsing, clasificación, extracción, schemas, validaciones, pantalla de revisión, confirmación humana, asociación a pedidos, manejo de errores.

Resultado: compras realizadas mediante llamada pueden incorporarse principalmente cargando el documento correspondiente.

---

# 57. Mes 4 — RAG documental

Ingestión, parsing, chunking, embeddings, vector search, metadata, citations, retrieval, no-evidence policy, evaluación.

Resultado: los empleados pueden hacer preguntas sobre documentos internos.

---

# 58. Mes 5 — Asistente operacional

Tools: buscar pedido, obtener pedidos retrasados, calcular compras, consultar histórico, buscar proveedor, recuperar documentos.

Router: Structured Data / RAG / Both.

Resultado: el usuario puede conversar con los datos reales de la compañía.

---

# 59. Mes 6 — Automatización y producción

EventBridge Scheduler, jobs, exportaciones, SQS, retries, DLQ, monitorización, permisos, auditoría, backups, seguridad, optimización, UX, pruebas finales, documentación, deployment estable.

Resultado: producto preparado para operación normal.

---

# 60. Estrategia de testing

El proyecto requiere varias capas: unit tests, integration tests, API tests, document tests, RAG evaluation, assistant tests, end-to-end.

---

# 61. Evaluación del parsing documental

Debe existir un dataset de documentos de prueba. Por ejemplo: 100 facturas reales anonimizadas/autorizadas.

Medir: proveedor correcto, número de factura, moneda, cantidad, precio, total, producto.

No basta con: “Parece funcionar.”

---

# 62. Evaluación del RAG

Crear preguntas con respuesta conocida.

Medir: retrieval correcto, respuesta correcta, cita correcta, abstención cuando no existe evidencia.

---

# 63. Métricas de producto

### Consolidación

* porcentaje de pedidos incorporados automáticamente;
* sincronizaciones exitosas;
* fallos por proveedor.

### Document Intelligence

* documentos procesados;
* porcentaje de campos aceptados sin corrección;
* tiempo promedio;
* porcentaje que requiere revisión.

### Asistente

* preguntas;
* respuestas exitosas;
* no-evidence;
* latencia;
* errores.

### Operación

* usuarios activos;
* exportaciones;
* pedidos consultados.

---

# 64. Métricas de negocio

Más importantes que las métricas técnicas:

Antes: registrar factura = 5 minutos.
Después: revisar extracción = 30 segundos.

Antes: consolidado semanal = 2 horas.
Después: automático.

Antes: responder cuánto se compró al proveedor X = revisar tres plataformas.
Después: una consulta.

Estas métricas convertirían el proyecto de “implementamos IA” en “redujimos trabajo operacional medible”.

---

# 65. Seguridad

El proyecto contiene información comercialmente sensible.

Se aplicarán principios como:

* mínimo privilegio;
* usuarios autenticados;
* HTTPS;
* secrets fuera del código;
* cifrado en almacenamiento;
* permisos de S3;
* IAM por servicio;
* separación dev/staging/prod;
* backups;
* logs de acceso;
* validación de uploads.

---

# 66. Prompt injection y documentos

El RAG empresarial introduce un riesgo adicional.

Un documento podría contener texto como:

> Ignore previous instructions.

El sistema no debe interpretar los documentos recuperados como instrucciones privilegiadas.

Se tratarán como **datos**, no como **system instructions**.

---

# 67. AI guardrails

El asistente:

Puede: consultar, resumir, buscar, comparar, analizar.

Inicialmente no puede: eliminar pedidos, realizar compras, pagar, modificar información crítica sin confirmación, enviar órdenes a proveedores.

Esto limita blast radius.

---

# 68. Escalabilidad

No se diseñará para millones de usuarios.

Es una aplicación empresarial interna.

Sin embargo, su arquitectura permite escalar horizontalmente.

Lambda: más requests → más ejecuciones.
SQS: más documentos → cola → más workers.
Fargate: jobs pesados puntuales.
Aurora Serverless: capacidad variable.

---

# 69. Por qué no EC2 inicialmente

EC2 sería perfectamente posible.

Sin embargo, para este workload interno probablemente existirán períodos largos de baja actividad.

Con EC2: servidor activo 24 horas aunque nadie use Buddi.

La arquitectura serverless permite asociar una parte mayor del costo a uso real.

Además reduce trabajo operacional alrededor de: servidor, procesos, autoscaling, disponibilidad, patching del host.

---

# 70. Por qué no Kubernetes

No existe inicialmente una necesidad clara.

Kubernetes agregaría: clusters, networking adicional, deployment complexity, observabilidad adicional, costos, DevOps.

Sin beneficio proporcional para una aplicación interna pequeña.

---

# 71. Por qué AWS

La elección no se basa en que el proyecto necesite AWS específicamente.

Se basa en que AWS ofrece de manera administrada todos los componentes necesarios:

* Lambda;
* API Gateway;
* Aurora;
* S3;
* Bedrock;
* SQS;
* EventBridge;
* Fargate;
* CloudWatch;
* Secrets Manager.

Además permite implementar el patrón serverless buscado sin mantener un servidor general permanentemente encendido.

---

# 72. Riesgos técnicos

## API de proveedores inexistente

Mitigación: CSV/documentos/manual.

## API cambia

Mitigación: adapter aislado.

## Facturas muy heterogéneas

Mitigación: dataset real + fallback humano.

## RAG inventa respuestas

Mitigación: retrieval evaluation + citations + abstention.

## LLM interpreta números mal

Mitigación: schemas + código determinístico + validación humana.

## Aurora cold start

Mitigación: medición real y capacidad mínima > 0 si fuera necesario.

## Integraciones caídas

Mitigación: retry + logs + alertas + idempotencia.

## Procesamiento masivo

Mitigación: SQS + Fargate.

---

# 73. Principal riesgo de producto

El riesgo más importante no es tecnológico.

Es construir algo que replique funcionalidades que los proveedores ya ofrecen.

Por eso la fase inicial de discovery es obligatoria.

Cada funcionalidad debe responder:

> ¿Qué problema actual de Buddi elimina o reduce?

Si la respuesta es:

> “La plataforma del proveedor ya hace exactamente eso.”

No se construye.

---

# 74. Criterio de éxito del proyecto

Después de seis meses, debería poder realizarse este escenario:

Un empleado entra a:

`operations.buddi.com`

Ve:

> 57 pedidos abiertos
> 4 proveedores
> 8 operaciones retrasadas
> USD X comprometidos

Puede filtrar **Proveedor B** y ver todos los pedidos independientemente de su plataforma original.

---

# 75. Escenario de compra telefónica

Empleado acuerda compra por llamada.

Recibe `invoice.pdf`.

La sube.

El sistema responde:

> Proveedor: ABC
> Producto: X21
> Cantidad: 500
> Precio: USD 8.20
> Total: USD 4,100

Empleado: **Confirmar**

El pedido pasa a formar parte del consolidado.

---

# 76. Escenario de automatización

A las 02:00: EventBridge → sincronización → los proveedores tienen 11 cambios → la plataforma actualiza esos pedidos.

Ningún empleado tuvo que abrir la aplicación.

---

# 77. Escenario de asistente

Empleado pregunta: ¿Qué pedidos están retrasados?

Asistente consulta datos: Hay siete.

Después pregunta: ¿Qué procedimiento corresponde seguir?

El sistema consulta los documentos internos.

Entrega: respuesta, procedimiento relevante, referencias.

---

# 78. Escenario de exportación

Todos los lunes: EventBridge → job → genera consolidado → S3 → Disponible en Exportaciones `buddi_orders_2026_week_38.xlsx`

---

# 79. Entregable final

Al terminar los seis meses, Buddi no recibirá simplemente un RAG ni una app CRUD.

Recibirá una plataforma con:

### Capa operacional

Consolidación de compras.

### Capa documental

Procesamiento inteligente.

### Capa de datos

Histórico normalizado.

### Capa AI

Asistente empresarial.

### Capa de automatización

Sincronizaciones y procesamiento programado.

### Capa cloud

Infraestructura serverless desplegada en AWS.

---

# 80. Descripción simple del proyecto

Si un gerente pregunta: ¿Qué construyeron?

La respuesta es:

**Construimos una plataforma interna que centraliza las compras realizadas mediante diferentes proveedores, incorpora compras realizadas por llamada mediante lectura automática de facturas, mantiene un histórico consolidado y permite consultar tanto los pedidos como la documentación interna mediante un asistente de inteligencia artificial. Las sincronizaciones, procesamiento y exportaciones se realizan automáticamente sobre una arquitectura serverless en AWS.**

---

# 81. Descripción técnica resumida

Desde ingeniería:

**Full-stack serverless procurement intelligence platform with multi-source order normalization, AI-assisted document ingestion, asynchronous processing, scheduled synchronization, structured-data tool calling and enterprise RAG.**

Arquitectura principal:

**React/Next.js + FastAPI + Lambda + API Gateway + Aurora PostgreSQL Serverless + pgvector + S3 + Bedrock + SQS + EventBridge + ECS Fargate + CloudWatch.**

---

# 82. Qué demuestra profesionalmente

El proyecto permite demostrar simultáneamente varias competencias.

## Full-Stack Engineering

* frontend;
* backend;
* APIs;
* authentication;
* database;
* UX;
* deployments.

## Backend Engineering

* integrations;
* adapters;
* async processing;
* queues;
* idempotency;
* scheduling;
* validation.

## AI Engineering

* RAG;
* embeddings;
* retrieval;
* document extraction;
* tool calling;
* evaluation;
* guardrails.

## Cloud Engineering

* AWS;
* serverless;
* event-driven architecture;
* storage;
* observability;
* secrets;
* IAM.

## Data Engineering

Sin necesidad de inventar un proyecto de Big Data:

* ingestion;
* normalization;
* data quality;
* schemas;
* transformations;
* historical data;
* consolidated datasets;
* scheduled processing.

---

# 83. Frontera del proyecto

La frase que debería gobernar todo el desarrollo es:

> **Buddi Procurement Intelligence no pretende reemplazar las herramientas que ya funcionan. Su función es consolidar su información, incorporar los procesos que quedan por fuera de ellas, automatizar trabajo repetitivo y proporcionar una capa inteligente de consulta sobre el conjunto de la operación.**

Esa es la columna vertebral del producto.

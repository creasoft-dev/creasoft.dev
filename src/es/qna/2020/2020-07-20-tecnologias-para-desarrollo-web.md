---
title: Para desarrollar una aplicación web ERP desde cero. ¿Qué tecnologías me recomendaría utilizar?

author: Young-Suk Ahn Park
date: 2020-07-20
tags: ["qna", "programacion"]

description: Tecnologías para desarrollo de aplicaciones web tipo ERP.
keywords: python, django
---

## Más detalle de la pregunta
Estoy migrando mi aplicación desarrollado en VisualBasic para Windows a aplicación web más moderno.
¿Qué  tecnologías me recomienda?

He visto que hay varias alternativas:
1. Django Rest framework. Con frontend en VueJS. 
2. Django con su sistema de plantillas. (Yo empecé utilizando jQuery, pero luego de avanzar un poco veo que no es la mejor decisión.)
3. Django plantillas con VueJS. He visto alguna documentación sobre esto. No lo he intentado aún. 

Y por último, ¿si desarrollo un frontend debería optar por SPA, PWA o SSR?

\- Desarrollador de ERP en plataforma de Windows en Panamá.

## Respuesta:
La pregunta es bastante abarcadora. Si la respuesta no le es suficiente o tiene preguntas adicionales, 
puede dejar comentarios y les daremos seguimiento.

### Desarrollo de aplicaciones web 
Empecemos con la primera pregunta. Existen muchas otras alternativas de combinacion de lenguaje
y framework: Python+Flask, Ruby on Rails, JS+express, JS+Koa, Java/Kotlin+Spring, Scala+Play, y la lista sigue.

Los factores que hay que tomar en cuenta para la decisión incluye desde conocimiento previo del 
lenguaje/framework, el ecosistema  de las librerías, el soporte de la plataforma donde se instalará
entre otros.

Pero entiendo que Python y Django son decisiones ya tomadas, que 
por cierto son buenas decisiones. Así que basaremos en esa decision.

Para una aplicación ERP Web, **Python+Django** es una buena opción.
Python tiene una comunidad activa con muchas librerias.

### ¿SPA, PWA o SSR?
Existen varios modelos de desarrollo para la parte de client (front-end): 

- **Single Page Application (SPA)** - Aplicación de Página Única

    En este modelo de aplicación, el front-end, es una sóla página HTML con JavaScript, que interactua 
    con el servidor para generar contenidos dinámicos.
    
    La **ventaja** es que la experiencia del usuario se asemeja a la de una aplicación de desktop.
    Gmail es un buen ejemplo. Muchas  de las partes de las aplicaciones son cargados dinámicamente,
    sin hacer una recarga / redirección entre página.

    La **desventaja** es que el motor de búsqueda como Google no va a poder registar la pagina, pues no
    puede analizar el contenido dinámico generadod por JS. En pocas palabras, no es optimizado 
    para motores de búsqueda (No SEO). También el desarrollo es más complejo, en la parte de integracion 
    por API y seguridad. 

    **Technologias** utilizadas en SPA include los frameworks de interfaz de usuario (IU) como 
    [React](https://reactjs.org/), [Angular](https://angular.io/), [Vue](https://vuejs.org/), o
    [Svelte](https://svelte.dev/) en la parte del cliente,
    y en la parte de servidor los frameworks para desarrollo basado en API, ya sea REST o
    [GraphQL](https://graphql.org/).

- **Server Side Rendering (SSR)** - Rendereo en el Servidor

    El SSR es básicamente el metodo tradicional de uso de plantillas. Los  Server Pages como 
    los Active Server Pages (ASP) o Java Server Pages (JSP). También son SSR.
    
    La **ventaja** de este modelo es que es amigable a los motores de búsqueda. 
    Y la implmentacion es mas sencilla, no necesita API, y seguridad es menos compleja.

    Existe un tipo de SSR que se ha popularizado recientemente con Nodejs. El SSR **isomórfico** (en inglés: isomorphic).
    es el modelo en donde el motor de pantilla es uno de los framewors IU usado en SPA como React, Vue, Angular, etc.

    La **ventaja** de este modelo es que el desarrollador dispone de gran ecosistema de librerías 
    y componentes del framework. 
    
- **Progressive Web Application (PWA)** - Aplicación Progresiva de Web

    Este modelo es más bien un patrón que consiste en utilizar 
    (a) **HTTPS** para conexión segura, 
    (b) JS **Service Workers** para funcionamiento en línea y fuera de línea, y 
    (c) **archivo de manifiesto** para empaquetamiento y descubrimiento de la aplicación.

    Este modelo es muy reciente y aún no son tantos los casos de uso.

    Una de las **ventajas** es carga rápida y ejecución aun cuando la aplicación está fuera de línea. 
    Los app moviles serian los mmas benficiados.

Tambien existe el [WebAssembly](https://webassembly.org/) que permite cargar archivos binarios ejecutables in el navegador. Es una tecnología reciente.

Para hacer más interesante, otro plano es el desarrollo de la aplicación móvil:
- **Nativo**, e.j. Java o Kotlin en Andriod, y Swift en iOS, NativeScript, ReactNative.
- **Hibrido**, e.j. Ionic, Cordova
- **Plataformas de abstracción**, e.j. Xamarin

### La recommendación
En fin, si su plan es seguir creciendo su aplicación ERP para que en un futuro sea provisto como 
servicio (Software as a Service) y con múltiples aplicaciones clientes, e.j. Web y móvil, le recomiendo que desarrolle de manera desacoplada:

- Implemente el servidor (backend) con interface API, utilizando 
Django REST Framework o Flask.
- Implemente el cliente (frontend) como SPA utilizando el framework UI, e.j. Vuejs (es uno de los mas simpmles en aprender).
- Implemente seguridad, e.j. utilizando mecanismo de Bearer token.
- No hace falta usar SSR, pues los contenidos del ERP deben estar protejidos y no ser encontrado por Google o por otros motores de búsqueda.
- Tampoco hace falta usar PWA, pues el enfoque por mientras no es en aplicación móvil.

Si necesita desarrollo rápido, el modelo tradicional utilizacion de la plantilla - e.j. Django template, 
pues no necesita implementar API, y la implementación de seguridad es más sencilla.

La otra posibilidad es empezar con una fase intermedio, utilizando framework IU como Vuejs con 
la plantilla Django. Los datos, en vez de traer por API del servidor, simplemente puede generar con la plantilla en formato JSON utilizando el filtro [json_script](https://docs.djangoproject.com/en/3.0/ref/templates/builtins/#json-script) de Django.
Lo que también tendrá que hacer es evitar el conflicto del sintaxis `{{ variable }}` que es igual 
en las dos plantillas - Django y Vuejs. No he averiguado, pero dbe haber configución para cambiar los caracteres. 


Es mejor empezar con algo sencillo que provee funcionalidad al usuario en corto plazo y poder 
validar dicha funcionalidad, en vez de tratar de implementar algo con las últimas tecnologías y técnicas
que toma demasiado tiempo cual podria perder oportunidades en el mercado.

Uso de herramientas como git y aplicación de prácticas de CI-CD son d mucha ayuda en la evolución del diseño de su sistema.

Espero que le haya servido la respuesta.
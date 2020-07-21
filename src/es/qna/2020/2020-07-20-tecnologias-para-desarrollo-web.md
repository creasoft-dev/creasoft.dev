---
title: Para desarrollar una aplicación web ERP desde cero. ¿Qué tecnologías me recomendaría utilizar?

author: Young-Suk Ahn Park
date: 2020-07-20
tags: ["pyr", "programacion"]

description: Tecnologías para desarrollo de aplicaciones web tipo ERP.
keywords: python, django
---

## Más detalle de la pregunta
Estoy migando mi applicación desarrollado en VisualBasic para Windows a applicación web más moderno.
Que tecnología e recomienda

He visto que hay varias alternativas:
1. Django Rest framework. Con frontend en VueJS. 
2. Django con su sistema de plantillas. (Yo empecé utilizando jQuery, pero luego de avanzar un poco veo que no es la mejor decisión.)
3. Django plantillas con VueJS. He visto alguna documentación sobre esto. No lo he intentado aún. 

Y por último, ¿si desarrollo un frontend debería optar por SPA, PWA o SSR?

## Respuesta:
La pregunta es bastante abarcadora. Si la respuesta no es suficiente o tiene pregunas adicionales, 
puede dejar comentarios y les daremos seguimento.

### Desarrollo de aplicaciones web 
Empecemos con la primera pregunta. Entiendo que Python y Django son decisiones ya tomadas, que 
por cierto son buenas decisiones. Existien muchas otras alternativas de commbinacion de lenguaje
y framework: Python+Flask, Ruby on Rails, JS+express, JS+Koa, Java/Kotlin+Spring, Scala+Play, 
y la lista sigue.

Los factores que hay que tomar en cuenta para la decision estaria desde conocimiento previo del 
lenguage/framework, el ecosystema de las librerias, el soporte de la plataforma donde se instalará
entre otros.

Para una aplicación ERP Web, **Python+Django** es una buena opción.

### ¿SPA, PWA o SSR?
Existen varios modelos de desarrollo de la parte de client (front-end): 
- **Single Page Application (SPA)** - Aplicación de Pagina Única

    En este modelo de aplicacién el front-end es una sóla página HTML y el JavaScripot interactua 
    con el servidor para genera contenidos dinamicos.
    
    La **ventaja** es que la experiencia del usuario se asemeja a la de una aplicación de desktop.
    Gmail es un buen ejemplo. Muchas  de las partes de las aplicaciones son cargados dinámicamente,
    sin hacer una redireccion de página.

    La **desventaja** es que el motor de busqueda como Google no va poder registar la pagina, pues no
    puede analizar el contenido dinámico. En pocas palabras, no es optimiado para motores de
    búsqueda (No SEO). También el desarrollo es mas complejo, en la parte de integracion por API
    y seguridad. 

    **Technologias** utilizadas en SPA include los UI frameworks como 
    [React](https://reactjs.org/), [Angular](https://angular.io/), [Vue](https://vuejs.org/), o
    [Svelte](https://svelte.dev/) en la parte del cliente,
    y en la parte de servidor todos los framewos para desarrollo basado oen API, ya sea REST o
    [GraphQL](https://graphql.org/).


- **Server Side Rendering (SSR)** - Rendereo en Servidor

    El SSR es muy similar al técnica de plantillas o las tecnologías de Server Pages como 
    los Active Server Pages (ASP) o Java ServerePages (JSP). La diferencia está en que utiliza la 
    misma tecnologia de renderizacion del interface de usuario usado en SPA: React, Vue, Angular, etc.
    
    La **ventaja** de este modelo es que se puede (re)utilizar el mismo conocimiendo para 
    desarrollo IU Web SPA cual dispone de gran ecosistema de librarias y components. Y a la vez es 
    amigable a los motores de búsqueda.

    Los SSR por lo general se basan en Nodejs para renderizar en el servidor y retornar HTML 
    al navegador.
    
- **Progressive Web Application (PWA)** - Aplicación Progresiva de Web

    Este modelo es mas bien un patrón que consiste en utilizar 
    (a) **HTTPS** para conexion segura, 
    (b) JS **Service Workers** para funcionamiento en linea y fuera de linea, y 
    (c) **archivo de manifiesto** para empaquetamiento y descubrimiento de la aplicacion.

    Este modelo es muy reciente y aun no son tantos los casos de uso.

Tambien existe el [WebAssembly](https://webassembly.org/) que permite cargar archivos binarios ejecutables in el navegador. Es una tecnologia reciente.

Para hacer mas intersante, otro plano es el desarrollo de la aplicacion movil:
- **Nativo**, e.j. Java o Kotlin en Andriod, y Swift en iOS, NativeScript, ReactNative.
- **Hibrido**, e.j. Ionic, Cordova
- **Plataformas de abstracción**, e.j. Xamarin

### La recommendación
En fin, si piensa en seguir creciendo su aplicacion ERP para que en un futuro sea provisto como 
servicio (Software as a Service) y con multiples aplicaciones clientes, e.g. Web y movil, le recomiendo que desarrolle de manesa desacoplada.

- Diseñe el servidor (backend) como servicio con interface API. Podria utilizar 
Django REST Framework o Flask.
- Diseñe el client (frontend) como SPA utilizando el frameowkr que mas le facilite. 
El Vuejs es uno de los mas sencillos en aprender.
- Implemente seguridad, minimo utilizando mecanismo de Bearer token
- Como los contenidos del ERP no necesita ser encontrado por Google o otros motores de búsquda, no hace falta poner esfuerzo en SSR.
- Como el enfoque no es en aplicacion movil aun, tampoco hace falta poner esfuerzo en PWA.


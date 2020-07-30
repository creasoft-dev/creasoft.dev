---
title: Aumente su productividad con técnicas y herramientas de desarrollo de software

author: Young-Suk Ahn Park
date: 2020-07-26

description: Lista de tecnicas y herramientas para desarrollar software de manera más productiva
keywords: ["desarrollo", "tecnica", "herramienta", "general"]

imageUrl: https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg
---


> También explore el [Radar de Tecnología](http://localhost:8080/es/radar/) que es una guía de las tecnologias que es de relevancia en actualidad.

Nosotros los desarrolladores siempre estamos contratiempo, tenemos tanto que  aprender, tanto que producir en tan poco tiempo. Y las tecnologias estan cambiando constantemente.

Anteriormente dedicaba un gran parte de mi tiempo luchando con problemas secundarios como tratando de averiguar la diferencia entre códigos, ejecutando pruebas manualmente, organizando y comunicando mis tareas, etc.

Hoy dia, mi vida como ingeniero/arquitecto de software es más divertida e interesante gracias a las innumerables herramientas que me permite enfocar en resolver problemas importantes de dominio.

Esta es la lista de herramientas que nosotros utilizamos y que hemos incrementado significativamente nuestra productividad y calidad de productos.


## Técnicas Esenciales

Si no tiene un proceso de mejora constante, con solo las herramientas el incremento en productividad es limitada.  Con unas cuantas técnicas, usted disfrutará de mejor rendimiento y producirá productos de mejor calidad.


### 1. Metodología Ágil

No es fácil definir Ágil en el contexto de proceso de desarrollo. Este movimiento empezó con el [manifiesto Ágil](https://agilemanifesto.org/iso/es/manifesto.html). Yo lo defino más bien como la filosofía de gestión en donde el enfoque es el valor producido, no de acuerdo a los planes sino de acuerdo a la utilidad producida en el momento adecuado. Para lograr esto existen prácticas como iteración y validación con el cliente. En el meollo está el aprendizaje constante de lo que significa valor y de cómo podemos producir dicho valor más eficiente y eficazmente.

**¿Por qué se necesita?**

* El mundo cambia constantemente, lo que en unos meses se pensaba que era necesario, ahora el requerimiento es distinto. Y muchas  veces ni siquiera los clientes saben con certeza lo que quieren.

**¿Cómo empezar?**

* Cortas iteraciones con reflexiones, automatizaciones de procesos manuales, constante validación con el cliente (demostraciones).


### 2. Pruebas Automatizadas

Existen muchos tipos y categorías de pruebas: unitaria, integración, funcionamiento, humo, caos, y más. Cada tipo tiene su propósito. No se necesita hacer todos los tipos de pruebas pero que los lógicas complejas si están cubierto por pruebas.

**¿Por qué se necesita?**

* Para que cada cambio al sistema, usted no tenga que pasar por el estrés del incertidumbre si no a quebrantado otra parte de su aplicación. 

**¿Cómo empezar?**

* Adoptar las diferentes prácticas de pruebas, e implementar diferentes tipos de pruebas cuales consideren necesarias.


### 3. Integracion Continua (CI), Despliegue Continuo (CD)

El CI/CD se refiere a la automatización de los procesos de compilación, prueba, empaque y despliegue. La idea es que esos pasos no los tenga que hacer manualmente por una persona.

**¿Por qué se necesita?**

* ¿Sabrá que los equipos sin el CI/CD pasan (pierden) mucho tiempo en actividades manuales? Corriendo pruebas, tratando de sincronizar los parámetros para compilar, verificando los entornos, etc.

* La automatización le permite correr estos actividades más frecuentemente permitiendo más agilidad.

**¿Cómo empezar?**

* Creando scripts de ejecución, y utilizando gitops y las plataformas de Git SaaS como GitHub o GitLab.


## Herramientas Esenciales

Ahora entremos a la lista de herramientas. Independientemente del lenguaje y tipo de software que esté desarrollando, estas herramientas permitirá ciclo de desarrollo más controlado. 


### 1. Git - sistema de control de versiones distribuido.

El [Git](https://git-scm.com/) es sistema de control de versiones, similar a cvs or subversion, pero nativamente distribuido. El git no es solamente una herramienta sino habilitador de plataforma. Hoy día existe un ecosistema y una cultura basado en git.

**¿Por qué se necesita?**

* Para que cuando el cambio que ha introducido fue defectuoso, usted pueda identificar el cambio. Para que cuando tenga nueva idea pueda implementar en una rama (branch) sin que afecte otras partes del código. Para que el equipo pueda trabajar de manera colaborativa con el mismo código fuente. Para que pueda aprovechar del inmenso beneficio del ecosistema en torno al git.
No empiece un proyecto sin git.

**¿Cómo empezar?**

* Lease un poco sobre concepto, pero no quede enganchado con mero concepto. Crease una cuenta en GitLab (el CI es más sencillo que en GitHub). Descargue git, y haga git init, git add., git commit -am “Inicio”. Y luego aprenda cómo subir a GitLab.
Segurísimo el tiempo que invierta en aprender git valdrá mucho.


### 2. Git SaaS: GitHub, GitLab, BitBucket

Existen varios proveedores de hosting de git, las más populares son [GitHub](https://github.com/), [GitLab](https://gitlab.com/), [BitBucket](https://bitbucket.org)

**¿Por qué se necesita?**

* El Git Software as a Service (SaaS) no sólo hospeda los repositorios sino que también provee muchos otros features como: gestión de tareas, revisión de códigos, CI/CD, escaneo de dependencias con vulnerabilidad, Wiki, hosting de páginas, y más.

**¿Cómo empezar?**

* Crease cuenta en cualquiera de los servicios mencionados. Si es primera vez, le recomiendo [GitLab](https://gitlab.com/), pues el CI es más sencillo. Pero si quiere ser participar en la comunidad de proyectos de fuente abierta, familiaricese con GitHub.


### 3. Docker 

Los contenedores es un tipo de virtualización ligera permitiendo aislamiento del entorno para mayor predictibilidad al momento de desplegar en producción. También permite orquestación de proceso para escalamiento. [Docker](https://www.docker.com/) es el estándar de facto para contenedores.

**¿Por qué se necesita?**

* Para mayor predictibilidad y portabilidad al instalar su aplicación en diferentes plataformas. Para crear fácilmente entornos de prueba similar al entorno de producción.

**¿Cómo empezar?**

* Descargue Docker y apréndase Dockerfile. Pruebe localmente. También crease una cuenta en Heroku y pruebe docker en ella. Para el Sistema operativo Windows se necesita Windows Pro.


## Herramientas de Desarrollo General

### 1. IntelliJ 

Si desarrolla en Java, definitivamente IntelliJ es el editor.[ La edición comunidad](https://www.jetbrains.com/idea/) es gratuita. Anteriormente utilicé Eclipse, pero al pasar el tiempo se puso muy pesada. IntelliJ se mantuvo ligero enfocado en proveer la mejor experiencia al desarrollador.


### 2. Visual Studio Code

Si desarrolla en JavaScript, el [Visual Studio Code](https://code.visualstudio.com/) ha puesto pies firme en el mercado. Satya Nadella ha llevado a Microsoft a una buena posición amigable con otras plataformas fuera de Windows.


### 3. Silver searcher

[Silver Searcher](https://github.com/ggreer/the_silver_searcher) es una herramienta de búsqueda de código. Por ejemplo si el comando ag toString, encontrará en par de segundos toda la ocurrencia de toString en el proyecto. Se podría utilizar IntelliJ o Visual Studio Code para lograr el mismo objetivo, pero muchas veces es muy conveniente ejecutar el comando desde el terminal.


### 4. Repl.it

REPL significa read–eval–print loop o ciclo de lectura, evaluación, e impresión. Básicamente, le permite ejecutar un trozo de código de manera rápida, para probar conceptos.

El [https://repl.it](https://repl.it) ofrece REPL para multitud de lenguajes que usted puede correr en línea, 


## Herramienta de Desarrollo Web

### 1. Chrome Dev Tools

Estando en Chrome, si presiona F12, habilitará el DevTools que permite analizar el modelo DOM de la página, ver el código fuente de JavaScript, ver los logs de JavaScript, la los conexiones y datos transmitidos por red, el uso de la memoria, los cookies, almacenamiento de datos, y mucho más. 


### 2. CodePen.io

El [CodePen](https://codepen.io/) is análogo al repl.it, en el mundo web. Usted puede probar HTML, CSS y JavaScript en linea. Facilita probar códigos UI sin tener que provisionar un servidor.


### 3. Playwright

El [Playwright](https://github.com/microsoft/playwright) es una automatizador de navegador. Con esta herramienta usted puede navegar páginas y ejecutar acciones programáticamente. Es muy útil para realizar pruebas.  Provee la misma funcionalidad que Selenium pero si necesidad de tener que correr un Selenium server (WebDriver). Además el API es más abarcador y como usa modelo basado en evento, puede producir pruebas más fiables.


### 4. Cypress

También es automatizador de navegador, pero [Cypress](https://www.cypress.io/) solamente  funciona para Chrome (soporte de Firefox en beta). Lo que trajo a esta lista es la simplicidad y la visualización de la automatización. 


### 5. Postman

Si desarrolla aplicaciones que expone API ya sea REST o GraphQL, usted al completar el desarrollo de cada API, querrá probar haciendo llamadas. Justamente es el uso de de [Postman](https://www.postman.com/), realizar llamadas HTTP parametrizando encabezado (headers) y contenido (payload).


### 6. Jest

Es casi imposible desarrollar en web sin el lenguaje JavaScript. Al menos que utilice WebAssembly, el desarrollo web Web necesitará de una  u otra forma el uso de JS. El [Jest](https://jestjs.io/) es  un framework de prueba para JavaScript. Incluir librería de verificación (assertion), mocking, y cobertura,  


## Herramientas de Gestión


### 1. Trello

Si trabaja en proceso Kanban, [Trello](http://trello.com/) le será muy útil, ayudando a administrar las tareas moviendo de columna a columna, por ejemplo de columna “Pendiente” a columna “En Progreso”. Este servicio SaaS es tiene edición gratuita que es suficiente para casos comunes.


### 2. Pivotal Tracker

Si necesita una herramienta de gestión de tareas SaaS más enfocado en metodología Ágil, [PivotalTracker ](https://www.pivotaltracker.com/)es una buena opción. Esta herramienta mantiene un buen balance de riqueza de características y simplicidad. Este servicio tiene un plan gratuito para equipo de menos de 5 personas.


### 3. Google Docs

Supongo que ya utiliza Google Docs. Aunque me parece que Microsoft Office es una buena alternativa. El asunto es, si tiene una conexión decente a internet, es más confiable crear y modificar documentos en la nube que utilizar aplicación local. La preocupación que mi disco se corrompa y pierda mi trabajo es cosa del pasado.  Documento, presentación, hoja de calculo, todo se puede hacer en la nube.
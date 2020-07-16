---
title: Publica un sitio web al GitLab pages, sin costo

author: Young-Suk Ahn Park
date: 2020-04-23
tags: ["post", "despliegue"]

description: Publica un sitio web en GitLab Pages
keywords: website, gitlab
---

<img href="/images/posts/gitlab-logo-white-rgb.png" />

> NOTA antes de empezar: Los servicios utilizados en este ejercicio - excepto el nombre de dominio - 
no conlleva costo, así que tome ventaja de los servicios!

Existen varias opciones para publicar sitios web en internet. En el principio, la publicación del
sitio web consistía en crear páginas estáticas HTML y copiar los archivos a un servidor 
accesible por internet.  Luego con la venida de lenguajes como perl y python, con facilidad de 
procesar plantillas, y luego con lenguajes que procesan hipertextos como PHP, ASP y JSP, la
tendencia era de alquilar un hosting y publicar los sitios web con páginas dinámicas en un lugar 
provisto por el proveedor de hosting.

Hoy día, se está popularizando nuevamente el despliegue (deployment) de páginas estáticas, o
más bien pre-renderizadas, a una plataforma CDN (Content Delivery Network). Este nuevo 
paradigma es llamado [JAMstack](https://jamstack.org/) por las siglas de JavaScript, APIs, 
y Markup.

Existen varios proveedores de CDN como Netlify, Vercel entre otros. La publicación en plan básico
es gratuito en ambas plataformas. La otra alternativa es de publicar en el git hosting como
GitLab o GitHub.  

En este artículo mostraremos cómo publicar una sitio en GitLab Pages.
Al final del ejercicio, usted tendrá una página accesible en el internet por el url
`https://<su-cuenta>.gitlab.io/<su-proyecto>`.  Si tiene su propio dominio, enlazaremos el dominio 
a la página.


## Requisitos
- Conocimiento básico de git
- Cuenta en [GitLab](https://gitlab.com/)
- git instalado en su computadora
- editor de texto, si no tiene una, sugerimos [VS Code](https://code.visualstudio.com/)

## Preparando proyecto en GitLab
Lo primero que haremos es crear un proyecto en GitLab.

1. Diríjase el [gitlab.com](gitlab.com) y presione el botón *New Project* 
2. Seleccione "Create Blank Project"
3. Introduzca los datos en el formulario. Le pondremos el nombre "ejemplo-página". Abajo, seleccione "Initialize repository with README"
4. Presione el botón "Create Project"

> Nota: Si no tiene git instalado en su máquina, usted puede realizar este ejercicio utilizando 
> el editor (Web IDE) del GitLab. 

Ahora clonearemos el repositorio en el directorio local, y dirigiremos al directorio creado:
```bash
$ git clone git@gitlab.com:creasoft.dev/ejemplos/ejemplo-página.git
$ cd ejemplo-página
```
Si usted le puso un nombre diferente al proyecto, reemplace `ejemplo-página` por el nombre que le puso.

Con un editor de texto, crea un directorio llamado `public` y dentro de ella crea un archivo 
llamado `index.html`.

```html
<html>
<head>
  <title>Ejemplo GitLab Pages</title>
</head>
<body>
  <h1>Hola Mi Mundo!</h1>
</body>
</html>
```

Ahora en directori raíz, crea un el archivo `.gitlab-ci.yml` con el siguiente contenido.
```yaml
pages:
  script:
  - echo "Despliegue, sin operacion."
  # Si necesita, aqui se podra ejecutar comandos shell para instalar su
  # sitio web. En el caso de; website de CreaSoft.dev, instalamos eleventy. 

  artifacts:
    paths:
    - public

  only:
  - master
```

Ahora en el terminal agregaremos los cambios al git cometeremos los cambios.
```
$ git add .
$ git commit -am "Primer cometido"
$ git push
```

Lo agradable del GitLab es que incluye CI (Integración Contínua). Tan sólo agregar un archivo en 
el directorio raíz el archivo `.gitlab-ci.yml` GitLab ejecutará automáticamente el CI worker.

Así es como su página se instalará en el sitio de GitLab pages.

Si quiere ver los ejemplos, explore el repositorio
[https://gitlab.com/creasoft-dev/ejemplos/ejemplo-página](https://gitlab.com/creasoft-dev/ejemplos/ejemplo-página)

También podrá visitar la página [https://creasoft-dev.gitlab.io/ejemplos/ejemplo-página/](https://creasoft-dev.gitlab.io/ejemplos/ejemplo-página/)

## Pasos siguientes: mejoras
Hay un montón de mejoras que se puede hacer al sitio:
1. Utilizar un motor de [SSG (Static Site Generator)](https://www.staticgen.com/) para generar páginas desde códigos en Markdown. 
2. Utilizar CSS framework como Bootstrap, Material UI, Tailwind, etc. 
3. Agregar comentarios

Para los curiosos, el sitio web de CreaSoft.dev utiliza:
1. Eleventy como SSG
     eleventy-plugin-syntaxhighlight para formatear códigos fuentes
2. Tailwind como CSS framework

## Enlazando su nombre de domino a la página de GitLab
Esta sección mostrará cómo enlazar su dominio, ej. `mi-super-dominio.com` a la página recién publicada.

### Preparando GitLab Pages para aceptar mi propio dominio.
1. Diríjase s su proyecto en Gitlab.com, vaya al menú lateral: *Setting* > *Pages* y presione el botón *New Domain*
2. Aparecerá el formulario titulado "New Pages Domain", en el campo *Domain* introduzca el nombre de su dominio, por ejemplo: `mi-super-domain.com`. Cerciórese de mantener la opción de *Certificate*  habilitado a `Let's Encrypt` para que genere certificado SSL gratuito.
3. Presione el botón *Create New Domain*
4. Cuando muestre la página *Pages Domain*, copie en la memoria (Control-V) el dato que muestra en la sección de *Verification status*

### Configurando el registro de dominio para asociar en GitLab
1. Diríjase a su registro de dominio. En mi caso utilizo `domains.google.com`.
2. Vaya a la página de configuración del DNS.
3. En el "custom resource records" introduzca 
    - Name: -vacio-
    - Type: `A`
    - TTL: `1H`
    - Data: `35.185.44.232` --> este es el IP como indicado en el [documento de GitLab](https://docs.gitlab.com/ee/user/project/pages/custom_domains_ssl_tls_certification/index.html#for-both-root-and-subdomains) 
4. En el "custom resource records" introduzca 
    - Name: -vacio-
    - Type: `TXT`
    - TTL: `1m`
    - Data: <La copia del 'Verification status'>
5. Vaya a la página de GitLab *Setting* > *Pages* y en la sección de *Verification status* presione el botón circular a la derecha de la etiqueta roja *Unverified*. Si los pasos anteriores fueron correctos, la etiqueta cambiará a color verde.

Dependiendo del tiempo de sincronización de los DNS, puede tardar entre una a varias horas para que el 
nombre del dominio apunte al GitLab y que el certificado se instale correctamente.

Espere que el URL del nuevo domain muestre `https` (nótese la letra `s` de seguridad).

¡Disfrute de su nueva presencia (sin costo) en el internet!

---
title: Como crear sitio à la SSG con Fundamenty y Eleventy en 15 minutos

author: Young-Suk Ahn Park
date: 2020-07-22
tags: ["post", "despliegue"]

description: Instrucciones para crear sitio web y publicar en Internet en menos de 10 minutos.
keywords: website, gitlab

imageUrl: https://fundamenty.netlify.app/images/background.jpg
---

En el artículo anterior tocamos el tema de JAMStack (Java, API, Markup), Static Site Generator (SSG) y sus ventajas. 

En este artículo explicaremos como crear un sitio web utilizando [Fundamenty](https://creasoft-dev.github.io/fundamenty/en/), el proyecto de generación de sitio estático (SSG) web basado en una herramienta llamada [Eleventy](https://www.11ty.dev/).

Fundamenty es un proyecto creado por nosotros que provee las siguientes características:



1. Soporte de multilenguas 
2. Integración con motor de busqueda Algolia (autocomplete).
3. Google Analytics.
4. Funcionalidad de editar en GitLab/GitHub.
5. Generación de los archivos robots.txt y sitemap.xml para SEO.
6. GitHub Actions script para instalar en GitHub Pages de manera automatizada.
7. GitLab-CI script para instalar on GitLab Pages de manera automatizada.
8. Integración con servicio de comentario Disqus


## Pre-requisitos

Asumiendo que  si usted tiene acceso al internet, pues está leyendo esta página web, el único  requisito es tener instalado [nodejs](https://nodejs.org/en/) en su computadora. 

Si desea publicar el sitio en internet, GitLab Pages, también es necesario [git](https://git-scm.com/).


## Instalación de Fundamenty

Lo primero que haremos es [descargar el proyecto Fundamenty del GitHub](https://github.com/creasoft-dev/fundamenty/archive/master.zip). (Si tiene git, puede descargar fácilmente clonar el proyecto y eliminar el directorio .git)

Mueva el archivo descargado a la carpeta deseada, descomprima el archivo y modifique el nombre de la carpeta con el nombre que usted desee.

Abra una la ventana de comando (también llamado terminal) y diríjase al directorio donde descomprimió el proyecto.

Ejecute el siguiente comando para instalar las librerías. Esto tomará algo de tiempo para descargar librerias de internet. Y ocupará aproximadamente 100MB de disco:

```shell
npm install
```

Una vez completado la instalación proceda a ejecutar el comando para correr el servidor:


```shell
npm run build_and_serve
```


Si la instalación fue exitosa, usted verá un mensaje similar a lo siguiente:


```shell
...
[Browsersync] Access URLs:
 --------------------------------------
       Local: http://localhost:8080
    External: http://192.168.0.102:8080
 --------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 --------------------------------------
[Browsersync] Serving files from: _site
```


Esto significa que el servidor esta corriendo y la sitio web está listo para ser accedido localmente.

Abra con su navegador la dirección: [http://localhost:8080/](http://localhost:8080/) 

Si puede ver una página como siguiente, estamos en buen camino.

![snapshot](/images/posts/2020/fundamenty_es_s.jpg)


## Personalizando el sitio.

Lo primero que haremos es cambiar el las configuraciones del proyecto del nodejs.

Abra con un editor el archivo package.json, y modifique los siguientes valores:


```json
{
    "name": "NOMBRE_DEL_PROJECTO",
    "description": "DESCRIPCION_DEL_SITIO",
    "homepage": "URL_DEL_SITIO",
    "version": "0.0.2",
    "author": "SU_NOMBRE",
    "repository": "",
… 
El resto lo deja intacto
}
```


> Nota: `NOMBRE_DEL_PROJECTO` no debe de tener espacios ni caracteres especiales.

Ejecute `npm run build_and_serve` nuevamente para asegurar que `package.json` no tenga errores, y verifique que [http://localhost:8080](http://localhost:8080) despliegue correctamente. Presione Ctrl+c para parar el servicio.

Ahora modificaremos la configuración del sitio, abra con su editor el archivo `.fundamenty.yml` y cambie los valores debidamente


```yaml
# Once you complete modifying this file, run
# $ yarn fundamenty:tool init
name: Mi Super Sitio
repoUrl: https://github.com/micuenta/mi-super-sitio
rootUrl: https://mi-super-sitio.netlify.app
defaultLang: es
langs:
  - id: es
    name: Español
  - id: ko
    name: Korean

ALGOLIA_APP_ID: 
ALGOLIA_INDEX_NAME: 
ALGOLIA_SEARCH_API_KEY: 
ALGOLIA_ADMIN_API_KEY: 
GOOGLE_TAG_ID: 
DISQUS_SITE_NAME: 
```


Si no sabe los valores de los variables en mayúsculas, no se preocupe, déjelos en blanco.

Ahora ejecute el siguiente comando:

```shell
npm run fundamenty:tool init
```

El comando habrá generado dos archivos: `./src/_data/site.json.gen` y `./.env.gen`.

Cambie los nombres de los archivos removiendo la extensión `.gen`, por ejemplo `./.env.gen` a `./.env`. Tendrá que remover el archivo original `./src/_data/site.json`

Al ejecutar `npm run build_and_serve`, y abrir la página, notará los cambios realizados, como el nombre.

Ahora estamos listos para agregar contenidos!


## Agregando Contenidos

En el directorio `./src/{lenguaje}`, existen dos sub-directorios: `pages` y `posts`. El sub-directorio `pages` es para paginas de secciones que generalmente no cambia a menudo. Mientras que el sub-directorio `posts` es para contenidos que va creciendo, por ejemplo artículos de blogs. Cada artículo es representado en un archivo independiente.

Los dos sub-directorios son convenciones cuales usted puede cambiar si desea. Lo que si importa es el archivo dentro del subdirectorio con el mismo nombre pero en extensión .json que incluye metadata. Por ejemplo el archivo `es/posts/posts.json` es


```json
{
    "layout": "layouts/post.njk",
    "tags": ["post"]
}
```


Indicando que los archivos en este directorio y subdirectorios utiliza el layout definido y es de tipo “post”.

Cada pagina o articulo es un archivo tipo Markdown (`.md`). Un ejemplo de una página:


```markdown
---
title: A Cerca
date: 2020-07-27
---

# Esta es una página Markdown

Usted podrá encontrar más detalle sobre el sintaxis 
de Mardown en [este enlace](https://markdown.es/sintaxis-markdown/)
```


Abajo es un ejemplo de de un artículo (post)

`./es/posts/mi-primer-articulo.md`


```markdown
---
title: Mi primer artículo

author: Young-Suk Ahn
date: 2020-07-27

keywords: ["general"]

imageUrl: /images/posts/books-1617327_1920-poixabay.jpg
---

## Mi Artículo

Hurra! Mi primer artículo en Fundamenty!

```


Nótese los datos envueltos entre `---`. Esa sección en el archivo se llama front-matter e incluye datos utilizados por el procesador de contenidos.

Por ejemplo, el `title` es utilizado para desplegar título de la página, el `date` es utilizado para ordenar la lista de artículos, etc.


## Personalizando el diseño

> Para personalizar el diseño, es necesario conocimiento básico de HTML y CSS, plantilla [Nunjucks](https://mozilla.github.io/nunjucks/), aunque si prefiere, puede cambiar el motor de plantilla a otro.

El diseño de la página viene de las plantillas ubicadas en `./src/_includes/layouts`.

La plantilla base es el `base.njk`.

Eleventy básicamente funciona de la siguiente manera: Al hacer `build`,  Eleventy atraviesa cada carpeta recursivamente exceptuando las carpetas especiales como `_data` y `_includes` y por cada archivo que encuentra, procesa con el motor de plantilla basado en la extensión del archivo y va incluyendo el `layout` definido en el front-matter o en el dato de la carpeta.

Por ejemplo, `es/posts/mi-primer-articulo.md` ejecuta el procesador de Markdown para generar el HTML

```html
<h2>Mi Articulo</h2>

<p>Hurra! Mi primer artículo en Fundamenty!</p>
```

Pero como en `es/posts/posts.json` está indicando que use el layout `layouts/post.njk` ejecutará el motor de plantilla en ella y unirá con el HTML generado del `mi-primer-articulo.md`

Asi el Eleventy genera archivos HTML para cada uno de los archivos fuentes y los deposita en el directorio `./_site`.

En fin, para cambiar el diseño, lo que hay que hacer es modificar los archivos dentro del `./src/_includes/layouts/`. La plantilla base es `base.njk`


## Instalando en GitLab

El proyecto ya incluye el GiLab-CI script (`.gitlab-ci.yml`) para instalar en GitLab Pages. Para más detalle siga las instrucciones en el artículo anterior. /es/posts/2020/2020-07-03-publicar-gitlabpages/

Si es la primera vez usando **git** y **[GitLab](https://gitlab.com/)**, he aquí una guía rápida:

Para crear repositorio en **GitLab**:

1. Ingrese a [GitLab.com](https://gitlab.com/),
2. En la página principal, presione el boton verde *New Project*
3. Seleccione *Create Blank Project*
4. Llene el formulario del proyecto
    1. Project name: &lt;El nombre del proyecto>, 
    2. Project URL: 
    3. Project slug: &lt;al introducir el nombre, automaticamente se llenará esta parte>
    4. Seleccione Public para el **Visibility Level** 
    5. NO chequee la opción **Initialize repository with a README**
    6. Y luego presione el botón **Create Project**
5. Cuando muestre la pantalla, seguiremos la instrucción del **Push an existing folder** para inicializar y subir el sitio

Si  no ha configurado git local con su identificación aun, siga las instrucciones que muestra en la página **Git global setup**


```shell
git config --global user.name "<SU-NOMBRE>"
git config --global user.email "<SU-EMAIL>"
```


Para inicializar y subir el sitio a GitLab

1. Desde el directorio raíz del proyecto, ejecute los comandos que se muestra

```shell
git init
git remote add origin git@gitlab.com:<SU-PROYECTO>
git add .
git commit -m "Initial commit"
git push -u origin master
```

GitLab, al encontrar el archivo `.gitlab-ci.yml` automáticamente intentará instalar la el sitio a GitLab Pages. En este momento habrá instalado accesible a la direccion `https://<su-cuenta>.gitlab.io/<nombre-proyecto>`, pero cuando se navega a la direccion el sitio mostrara error 404 (Pagina No Encontrada). Esto se debe a que Fundamenty está redireccionando a la la ruta raíz en vez de `<nombre-proyecto>`

Para arreglar esto:

1. En GitLab, diríjase a la página principal de su  proyecto.
2. En el menú izquierda, seleccione **Settings** que esta en el fondo.
3. Seleccione sl sub-menu **CI / CD**
4. En la session titulado **Variables**, presione **Expand**
    1. Presione **Add Variables**
    2. En el Key introduzca el valor `WEB_PATH_PREFIX`
    3. En el Value introduzca como valor el nombre de su proyecto (tal como lo muestra la última parte del URL del projecto en GitLab, por ejemplo en mi caso el URL del proyeccto es [https://gitlab.com/ysahnpark/mi-prueba](https://gitlab.com/ysahnpark/mi-prueba), el nombre el projecto es `mi-prueba`

Por cada cambio que realice y que haya verificado que el cambio fue correcto, comita los cambios al git:

```shell
$git add .
$git commit -am “Agregado una pagina nueva”
```

Y cuando esté listo para subir, ejecute el siguiente comando:

$git push origin

Posiblemente necesite crear llaves ssh para el acceso a GitLab.

Siga las instrucciones aqui: [https://docs.gitlab.com/ee/ssh/#ed25519-ssh-keys](https://docs.gitlab.com/ee/ssh/#ed25519-ssh-keys) y aqui [https://docs.gitlab.com/ee/ssh/#ed25519-ssh-keys](https://docs.gitlab.com/ee/ssh/#ed25519-ssh-keys)


### De aquí en adelante, le dejo a su imaginación para que produzca sitios maravillosos!


## Problemas Comunes

*   Después de cambiar `.fundamenty.yml`, la pagina se redirecciona y muestra una pagina en blanco.
    *   Posiblemente el lenguaje de defecto (`defaultLang`) no sea un lenguaje que es parte del lenguaje activo.
*   Despues de subir a GitLab, la pagina no me muestra
    *   Toma aproximadamente 30 mins para que GitLab configure el DNS interno para mappear la pagina.
*   Aun despues de 30 mins, GitLab me muestra error 404 (Pagina No Encontrada).
    *   Verifique que el valor del `WEB_PATH_PREFIX` en el Setting de CI/CD este correcto. 
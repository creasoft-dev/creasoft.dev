---
title: Publicando una pagina a GitLab pages con dominio propio

date: 2020-04-23
tags: ["post", "despliegue"]
---

# Publicando una pagina a GitLab pages con dominio propio

Existen varias opciones para publicar paginas en internet. En el principio, la publicacion de la
paginna web consistia en crear paginas estaticas HTML y copiar los archivos a un servidor 
accessible por internet.  Luego con la venida de lenguajes como perl y python, con facilidad de 
procesar plantillas, y luego con lenguajes que procesan hipertextos como PHP, ASP y JSP, la
tendencia era de suscribir a un hosting y publicar las paginas dinamicas en el lugar provisto 
por el hosting.

Hoy dia, se esta popularizando nuevamente el despliegue (deployment) de paginas estaticas, o
mas bien pre-renderizadas, al una platatorma CDN (Content Delivery Network). Este nuevo 
paradigma es llamado [JAMstack](https://jamstack.org/) por las siglas de JavaScript, APIs, 
y Markup.

En este articulo mostraremos como publicar una pagina utilizando  

## Requisitos
- Conocimiento basico de git
- Cuenta en [GitLab](https://gitlab.com/)
- git instalado en su computadora

## Preparando projecto en GitLab
Lo primero que haremos es crear un projecto en GitLab.

1. Dirijase el [gitlab.com](gitlab.com) y presione el boton "New Project" 
2. Seleccione "Create Blank Project"
3. Introduzca los datos en el formulario, le pondremos el nombre "ejemplo-pagina" seleccione "Initialize repository with README"
4. Presione el boton "Create Project"

Ahora clonearemos el repositorio en el directorio local, y dirigiremos al directorio creado:
```bash
$ git clone git@gitlab.com:creasoft.dev/ejemplos/ejemplo-pagina.git
$ cd ejemplo-pagina
```
Si usted le puso un nombre diferente al projeceto, reemplace `ejemplo-pagina` por el nombre que le puso.


## Enlazando su nombre de domino a la pagina de GitLab


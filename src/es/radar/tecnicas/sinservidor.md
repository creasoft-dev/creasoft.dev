---
title: Sin-servidor (Serverless)

date: 2020-07-25
dateRemoved:
ring: "probar"

description:
keywords: ["arquitectura", "diseño"]
homepage:

author: Young-Suk Ahn Park
---

## 2020-07-30 Probar

Sin-servidor (Serverless) es el modelo en donde el proveeder mantiene y maneja la parte del servidor, el desarrollador (o el equipo desarrollador) solamenete hay que deplorar la logica.

Las responsabilidades operativas es delegado al proveedor.

También es conocido como Lambda o Funcion as a Service (FaaS)

El modelo es util en caso de que su computo no necesita un servidor constantemente, el proceso es eventual. Un ejemplo es porceso por temporada.

Como el proveedor cobra por tiempo de ejecución, puede haber ahorro en costo operativo.

Como el modelo es novedoso, aunque la teoría parezca interesante, no hay mucha literatura de práctica.

Si su caso es proceso simple por temporada, entoces puede resultar buen modelo, de no ser el caso, es mejor hacer mas evaluación.

Las pruebas y manjo de excepciones puede resultar mas complejo.

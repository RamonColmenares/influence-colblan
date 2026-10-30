# Desarrollo y despliegue

El sitio es estático: `public/index.html` contiene la página, `public/styles.css` sus estilos y `public/app.js` su comportamiento. Los recursos visuales están en `public/assets/`. `robots.txt` y `sitemap.xml` hacen referencia al dominio público.

Para probarlo localmente, ejecuta desde la raíz `python3 -m http.server 8000 --directory public` y visita `http://localhost:8000/`.

## Despliegue registrado

La información local existente identifica Cloudflare Workers Static Assets como proveedor, `colblan-influence` como nombre del Worker y `https://influence.colblan.com/` como dominio público. La carpeta fuente registrada era `v2`, copiada aquí como `public/`.

Este repositorio no incluye configuración de despliegue ni una conexión automática a Cloudflare. Antes de publicar cambios, confirma la configuración vigente en Cloudflare y los permisos necesarios. No guardes credenciales ni datos privados de la cuenta en el repositorio.

El archivo `public/_headers` contiene cabeceras incluidas en los archivos originales; verifica que el método de despliegue elegido las aplique como se espera.

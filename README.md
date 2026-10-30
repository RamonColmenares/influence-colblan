# Influence Colblan

Sitio de presentación de **Colblan**, un estudio de avatares de IA en desarrollo. La propuesta es crear personajes virtuales con identidad propia, generar contenido y organizar su publicación y gestión.

Sitio: [influence.colblan.com](https://influence.colblan.com/)

## Estado

Este repositorio comienza con los archivos locales de la versión `v2` registrados como fuente del despliegue en Cloudflare Workers Static Assets. Es una página estática de presentación; las capacidades descritas en ella son la visión del producto y no deben interpretarse como funciones ya implementadas.

## Estructura

- `public/`: HTML, CSS, JavaScript, imágenes, cabeceras y archivos para buscadores.
- `docs/producto.md`: visión, público y capacidades propuestas.
- `docs/desarrollo.md`: ejecución local y notas del despliegue conocido.

## Vista local

Desde la raíz del repositorio ejecuta:

```sh
python3 -m http.server 8000 --directory public
```

Abre [localhost:8000](http://localhost:8000/). No se requiere instalar dependencias para visualizar el sitio.

## Licencia

Todavía no se ha especificado una licencia para el código y los recursos de este repositorio. Consulta al titular de los derechos antes de reutilizarlos.

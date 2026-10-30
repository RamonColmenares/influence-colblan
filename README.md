# Influence Colblan

The presentation website for **Colblan**, an AI avatar studio in development. The product vision is to create virtual characters with their own identities, generate content, and organize publishing and management.

Website: [influence.colblan.com](https://influence.colblan.com/)

## Status

This repository starts with the local `v2` files recorded as the source of the Cloudflare Workers Static Assets deployment. It is a static presentation website; the capabilities described are the product vision and should not be assumed to be implemented.

## Structure

- `public/`: HTML, CSS, JavaScript, images, headers, and search engine files.
- `docs/product.md`: product vision, audience, and proposed capabilities.
- `docs/development.md`: local preview and known deployment details.

## Local preview

From the repository root, run:

```sh
python3 -m http.server 8000 --directory public
```

Open [localhost:8000](http://localhost:8000/). No dependencies are required to preview the site.

## License

A license has not yet been specified for this repository's code and assets. Consult the rights holder before reusing them.

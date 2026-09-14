# KHipster Website ⚡️

Official website for **KHipster** ([khipster.dev](https://khipster.dev)) — Kotlin-based JHipster generator.

Built with [Eleventy (11ty)](https://www.11ty.dev/) and [Tailwind CSS](https://tailwindcss.com/).

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (>= 18)
- npm

### Installation

```shell
npm install
```

### Development

Start the Eleventy development server with live reload:

```shell
npm start
# or
npm run dev
```

This starts the local web server at `http://localhost:8080/`.

### Production Build

Build the static site for production to the `_site/` directory:

```shell
npm run build
```

### Formatting

Check and format code with Prettier:

```shell
npm run fmt
npm run fmt.check
```

---

## Project Structure

```
├── eleventy.config.js    # Eleventy configuration & Tailwind CSS compilation
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── public/               # Static assets (favicons, images, manifest, robots.txt)
└── src/
    ├── _data/            # Global site data (site metadata, social links)
    ├── _includes/        # Layouts and component partials (Nunjucks)
    │   ├── components/   # Header, footer, logos (SVG)
    │   └── layouts/      # Base HTML shell layout
    ├── css/              # Global styles & Tailwind entry
    ├── index.njk         # Home page template
    └── 404.njk           # 404 error page template
```

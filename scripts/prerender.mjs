import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

const root = fileURLToPath(new URL('../', import.meta.url))
const output = resolve(root, 'dist/index.html')
const html = await readFile(output, 'utf8')
const mount = '<div id="root"></div>'
if (!html.includes(mount)) throw new Error('No se encontró el contenedor de React en dist/index.html')

const escapeHtml = value => value.replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[character])

function withMetadata(template, page, pathname) {
  const title = escapeHtml(page.metadataTitle)
  const description = escapeHtml(page.description)
  const url = `https://saraviasoftware.com${pathname}`
  return template
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta (?:name|property)="(?:og:title|twitter:title)" content=")[^"]*(")/g, `$1${title}$2`)
    .replace(/(<meta (?:name|property)="(?:description|og:description|twitter:description)" content=")[^"]*(")/g, `$1${description}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
}

const vite = await createServer({
  root,
  appType: 'custom',
  server: { middlewareMode: true, ws: false, watch: null },
})

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.tsx')
  const { legalPages } = await vite.ssrLoadModule('/src/legal.tsx')
  for (const pathname of ['/', ...Object.keys(legalPages)]) {
    const markup = renderToString(createElement(App, { pathname }))
    const template = pathname === '/' ? html : withMetadata(html, legalPages[pathname], pathname)
    const filename = pathname === '/' ? 'index.html' : `${pathname.slice(1)}.html`
    await writeFile(resolve(root, 'dist', filename), template.replace(mount, `<div id="root">${markup}</div>`))
  }
} finally {
  await vite.close()
}

import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

const root = fileURLToPath(new URL('../', import.meta.url))
const output = resolve(root, 'dist/index.html')
const vite = await createServer({
  root,
  appType: 'custom',
  server: { middlewareMode: true, ws: false, watch: null },
})

let markup
try {
  const { default: App } = await vite.ssrLoadModule('/src/App.tsx')
  markup = renderToString(createElement(App))
} finally {
  await vite.close()
}

const html = await readFile(output, 'utf8')
const mount = '<div id="root"></div>'
if (!html.includes(mount)) throw new Error('No se encontró el contenedor de React en dist/index.html')
await writeFile(output, html.replace(mount, `<div id="root">${markup}</div>`))

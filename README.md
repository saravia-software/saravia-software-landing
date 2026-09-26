# Saravia Software

Landing oficial de Saravia Software, desarrollada con React, TypeScript, Vite y Tailwind CSS. La URL pública principal es `https://saraviasoftware.com/`.

## Desarrollo

Requiere Node.js 22.12 o superior. Si usás nvm, ejecutá `nvm use` antes de instalar las dependencias.

```bash
npm install
npm run dev
npm run lint
npm run build
```

El build genera `dist/index.html` con las secciones principales ya renderizadas como HTML. React se conecta a ese contenido para conservar el menú, el cambio de idioma y las demás interacciones. El idioma inicial del HTML publicado es español; la selección en inglés se aplica en el navegador si la persona ya la había guardado.

## SEO y recursos de marca

- `index.html` contiene el título, la descripción, la URL canónica, Open Graph, Twitter/X Card y los datos estructurados `Organization` sin depender de JavaScript.
- `public/robots.txt` permite rastrear la landing e indica `https://saraviasoftware.com/sitemap.xml`.
- `public/sitemap.xml` incluye solamente `https://saraviasoftware.com/`.
- `public/favicon.svg` usa el símbolo de la marca; `public/apple-touch-icon.png` reutiliza el logo real suministrado.
- **Pendiente antes de compartir la web:** crear `public/og-image.jpg` con una composición oficial de Saravia Software de 1200 × 630 píxeles. La metadata ya apunta a `https://saraviasoftware.com/og-image.jpg`; hasta que se publique ese archivo, la vista previa social no tendrá imagen.

Las ilustraciones del hero y los ejemplos están dibujadas con HTML, SVG y CSS. Las fuentes DM Sans, Manrope y Geist Mono se cargan desde Google Fonts. WhatsApp e Instagram están enlazados con sus direcciones oficiales en `src/config.ts`.

## Vercel

Importá este directorio como proyecto Vite. El comando de compilación es `npm run build` y el directorio de salida es `dist`.

## Google Search Console Setup

1. Desplegá la aplicación en Vercel.
2. Conectá `saraviasoftware.com` al proyecto.
3. Verificá que `https://saraviasoftware.com/` abra correctamente con HTTPS y muestre la versión final.
4. Agregá la propiedad de dominio `saraviasoftware.com` en Google Search Console.
5. Verificá la propiedad, preferentemente mediante DNS si Google lo solicita. No hay un código de verificación preconfigurado.
6. Abrí **Sitemaps** y enviá `https://saraviasoftware.com/sitemap.xml`.
7. Usá **URL Inspection** con `https://saraviasoftware.com/` y solicitá la indexación de la home una vez publicada la versión final.
8. Validá en producción los datos estructurados `Organization` con **Google Rich Results Test**.

## Checklist manual después del deploy

- [ ] Publicar la imagen oficial `public/og-image.jpg` de 1200 × 630 píxeles.
- [ ] Conectar `saraviasoftware.com` en Vercel y comprobar HTTPS.
- [ ] Registrar y verificar el dominio en Google Search Console.
- [ ] Enviar `/sitemap.xml` y solicitar la indexación de la home.
- [ ] Validar `Organization` en Google Rich Results Test y revisar la vista previa social.
# saravia-software-landing

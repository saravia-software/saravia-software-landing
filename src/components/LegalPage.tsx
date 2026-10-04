import { legalPages } from '../legal'

type Props = { page: (typeof legalPages)[string] }

export function LegalPage({ page }: Props) {
  return (
    <main className="legal-page section" lang="es">
      <article className="page-container legal-document">
        <header className="legal-heading">
          <a className="text-link" href="/">Volver al inicio</a>
          <h1 className="section-title">{page.title}</h1>
          <p className="legal-updated">Última actualización: Octubre 2026</p>
          <p className="legal-intro">{page.intro}</p>
        </header>
        {page.sections.map(section => (
          <section className="legal-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.content}
          </section>
        ))}
        <p className="legal-note">Este documento ofrece información general de base. No constituye asesoramiento legal ni sustituye una política revisada por un profesional del derecho para la jurisdicción aplicable.</p>
      </article>
    </main>
  )
}

import type { ReactNode } from 'react'
import type { Copy } from '../content'
import { SectionHeader } from './SectionHeader'

type Props = { copy: Copy }

const services = [
  {
    title: 'serviceWebTitle',
    description: 'serviceWeb',
    icon: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18M8 7h.01M11 7h.01" /></>,
  },
  {
    title: 'serviceCustomTitle',
    description: 'serviceCustom',
    icon: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-6 2 2-16" />,
  },
  {
    title: 'serviceAiTitle',
    description: 'serviceAi',
    icon: <path d="m12 2 1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2Zm7 13 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" />,
  },
  {
    title: 'serviceSaasTitle',
    description: 'serviceSaas',
    icon: <><rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" /><rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" /></>,
  },
  {
    title: 'serviceDataTitle',
    description: 'serviceData',
    icon: <path d="M4 19V5m0 14h17M8 15l4-5 3 2 5-7" />,
  },
  {
    title: 'serviceDesignTitle',
    description: 'serviceDesign',
    icon: <path d="M4 20 20 4M15 4h5v5M4 9V4h5M20 15v5h-5M4 15v5h5" />,
  },
] as const satisfies ReadonlyArray<{ title: keyof Copy; description: keyof Copy; icon: ReactNode }>

export function Services({ copy }: Props) {
  return (
    <section className="section services bg-soft" id="services" aria-labelledby="services-title">
      <div className="page-container">
        <SectionHeader eyebrow={copy.servicesLabel} title={copy.servicesTitle} description={copy.servicesIntro} titleId="services-title" />
        <div className="services-grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <article className="service rounded-2xl border border-line bg-white" key={service.title}>
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">{service.icon}</svg>
              </div>
              <h3>{copy[service.title]}</h3>
              <p>{copy[service.description]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import type { ReactNode } from 'react'

type LegalDocument = {
  title: string
  metadataTitle: string
  description: string
  intro: string
  sections: { title: string; content: ReactNode }[]
}

const contactEmail = 'social@saraviasoftware.com'
const emailLink = <a href={`mailto:${contactEmail}`}>{contactEmail}</a>

export const legalPages: Record<string, LegalDocument> = {
  '/privacy': {
    title: 'Política de Privacidad',
    metadataTitle: 'Política de Privacidad | Saravia Software',
    description: 'Información sobre el uso, conservación y protección de datos en los servicios de Saravia Software y cómo ejercer tus derechos.',
    intro: 'Conocé cómo tratamos la información relacionada con nuestros sitios web, servicios e integraciones.',
    sections: [
      {
        title: 'Introducción',
        content: <>
          <p>Saravia Software ofrece software a medida, sitios web, sistemas digitales, integraciones y soluciones basadas en inteligencia artificial para negocios y empresas.</p>
          <p>Esta Política de Privacidad explica cómo se puede recopilar, utilizar, almacenar y procesar información cuando las personas interactúan con nuestros sitios web, servicios, aplicaciones o integraciones.</p>
        </>,
      },
      {
        title: 'Información que podemos recopilar',
        content: <>
          <p>La información tratada depende del servicio utilizado y de los datos que se proporcionen. Cuando corresponda al funcionamiento del servicio, puede incluir:</p>
          <ul>
            <li>Nombre, dirección de correo electrónico y número de teléfono.</li>
            <li>Información del negocio o empresa.</li>
            <li>Información proporcionada voluntariamente en formularios, cuando estén disponibles, o en comunicaciones con nosotros.</li>
            <li>Información técnica necesaria para el funcionamiento de aplicaciones web.</li>
            <li>Información generada mediante el uso de los servicios de Saravia Software.</li>
            <li>Información intercambiada mediante integraciones, como mensajes y datos de contacto de WhatsApp, cuando se utilicen.</li>
          </ul>
          <p>Estas categorías describen posibles datos según cada servicio; no implican que todos se recopilen en este sitio web o en todas nuestras aplicaciones.</p>
        </>,
      },
      {
        title: 'Uso de la información',
        content: <>
          <p>Según el servicio y la interacción, la información puede utilizarse para:</p>
          <ul>
            <li>Prestar y operar nuestros servicios y las aplicaciones de clientes.</li>
            <li>Responder consultas y brindar soporte al cliente.</li>
            <li>Enviar comunicaciones transaccionales o relacionadas con el servicio.</li>
            <li>Mejorar los servicios y mantener su seguridad.</li>
            <li>Cumplir las obligaciones legales aplicables.</li>
          </ul>
        </>,
      },
      {
        title: 'WhatsApp e integraciones con terceros',
        content: <>
          <p>Algunos productos de Saravia Software pueden utilizar servicios de terceros, como Meta / WhatsApp y Twilio, para habilitar comunicaciones e integraciones.</p>
          <p>Cuando se utilizan estas integraciones, ciertos datos necesarios para su funcionamiento pueden ser procesados por esos proveedores de acuerdo con sus propias políticas de privacidad y términos. Meta, WhatsApp y Twilio son servicios de terceros independientes; Saravia Software no es propietaria de estas plataformas ni controla sus políticas.</p>
        </>,
      },
      {
        title: 'Conservación de los datos',
        content: <p>La información se conserva únicamente durante el tiempo razonablemente necesario para prestar el servicio, cumplir obligaciones legales, resolver disputas o mantener la seguridad. El período puede variar según el servicio y las obligaciones aplicables.</p>,
      },
      {
        title: 'Seguridad de los datos',
        content: <p>Aplicamos medidas técnicas y organizativas razonables para proteger la información frente al acceso, uso, modificación o divulgación no autorizados. Ningún sistema en línea puede garantizar una seguridad absoluta.</p>,
      },
      {
        title: 'Derechos de las personas usuarias',
        content: <>
          <p>Podés solicitar acceso a tus datos, su corrección o eliminación, e información sobre cómo se utilizan, de acuerdo con la normativa aplicable.</p>
          <p>Para realizar una solicitud, escribí a {emailLink}. También podés consultar las instrucciones en nuestra página de <a href="/data-deletion">solicitud de eliminación de datos</a>.</p>
        </>,
      },
      {
        title: 'Cambios en esta política',
        content: <p>Esta política puede actualizarse periódicamente para reflejar cambios en los servicios o en las obligaciones aplicables. La versión más reciente permanecerá disponible en esta página, junto con su fecha de actualización.</p>,
      },
      {
        title: 'Contacto',
        content: <p>Saravia Software<br />Sitio web: <a href="https://saraviasoftware.com">saraviasoftware.com</a><br />Correo electrónico: {emailLink}</p>,
      },
    ],
  },
  '/terms': {
    title: 'Términos y Condiciones',
    metadataTitle: 'Términos y Condiciones | Saravia Software',
    description: 'Condiciones generales de acceso y uso del sitio web y los servicios digitales de Saravia Software.',
    intro: 'Estas condiciones describen las pautas generales de acceso y uso de nuestro sitio web y nuestros servicios digitales.',
    sections: [
      {
        title: 'General',
        content: <p>Estos términos regulan el acceso y uso del sitio web y los servicios digitales de Saravia Software. Al utilizarlos, debés respetar estas condiciones y la normativa aplicable.</p>,
      },
      {
        title: 'Servicios',
        content: <>
          <p>Saravia Software ofrece sitios web, aplicaciones web a medida, software de gestión para negocios, integraciones, automatización y soluciones de inteligencia artificial.</p>
          <p>Los proyectos de cada cliente pueden estar sujetos a propuestas, acuerdos o contratos específicos que establezcan su alcance, condiciones y responsabilidades.</p>
        </>,
      },
      {
        title: 'Uso aceptable',
        content: <>
          <p>Los servicios deben utilizarse de manera lícita y responsable. No está permitido utilizarlos para:</p>
          <ul>
            <li>Realizar actividades ilegales.</li>
            <li>Acceder sin autorización a sistemas, cuentas o datos.</li>
            <li>Abusar de los sistemas o interferir con su funcionamiento.</li>
            <li>Distribuir software malicioso.</li>
            <li>Vulnerar derechos de terceros.</li>
          </ul>
        </>,
      },
      {
        title: 'Disponibilidad',
        content: <p>Realizamos esfuerzos razonables para mantener la disponibilidad de los servicios. Sin embargo, no podemos garantizar un funcionamiento ininterrumpido o libre de errores. Las condiciones específicas de disponibilidad de un proyecto pueden establecerse en el acuerdo correspondiente.</p>,
      },
      {
        title: 'Servicios de terceros',
        content: <>
          <p>Algunas soluciones pueden depender de proveedores de alojamiento, APIs u otras plataformas tecnológicas, como Meta, WhatsApp o Twilio. El uso de esos servicios puede estar sujeto a los términos y políticas de cada proveedor.</p>
          <p>Sujeto a la legislación aplicable y al acuerdo correspondiente, Saravia Software no es responsable por interrupciones, cambios de políticas, restricciones o fallas causados exclusivamente por esas plataformas de terceros.</p>
        </>,
      },
      {
        title: 'Propiedad intelectual',
        content: <p>Saravia Software conserva la titularidad de sus propias marcas, elementos de identidad visual, componentes de software reutilizables y demás propiedad intelectual propia, salvo acuerdo escrito en contrario. La titularidad y los derechos de uso de los desarrollos específicos para un cliente se rigen por el acuerdo correspondiente.</p>,
      },
      {
        title: 'Limitación de responsabilidad',
        content: <p>En la medida permitida por la legislación aplicable, Saravia Software no es responsable por daños indirectos derivados del uso indebido de los servicios, interrupciones de terceros o circunstancias fuera de su control razonable. Esta disposición no excluye ni limita responsabilidades o derechos que no puedan excluirse o limitarse legalmente.</p>,
      },
      {
        title: 'Cambios en estos términos',
        content: <p>Estos términos pueden actualizarse periódicamente. La versión vigente permanecerá disponible en esta página, junto con su fecha de actualización.</p>,
      },
      {
        title: 'Contacto',
        content: <p>Para consultas sobre estos términos, escribí a {emailLink}.</p>,
      },
    ],
  },
  '/data-deletion': {
    title: 'Solicitud de Eliminación de Datos',
    metadataTitle: 'Eliminación de Datos | Saravia Software',
    description: 'Cómo solicitar la eliminación de información personal asociada con los servicios y aplicaciones de Saravia Software.',
    intro: 'Podés solicitar la eliminación de información personal asociada con los servicios de Saravia Software.',
    sections: [
      {
        title: 'Cómo solicitar la eliminación',
        content: <>
          <p>Enviá un correo electrónico a {emailLink} con el asunto sugerido <strong>Solicitud de eliminación de datos</strong>.</p>
          <p>Incluí información suficiente para identificar la cuenta, interacción o servicio correspondiente. Por ejemplo:</p>
          <ul>
            <li>Tu nombre.</li>
            <li>El correo electrónico o número de teléfono que utilizaste.</li>
            <li>El servicio o la aplicación involucrada.</li>
          </ul>
          <p>No envíes contraseñas, tokens de autenticación, números de tarjetas de pago ni otros datos secretos.</p>
        </>,
      },
      {
        title: 'Qué sucede después de la solicitud',
        content: <p>Al recibir una solicitud válida, Saravia Software la revisará y eliminará o anonimizará los datos correspondientes cuando sea razonablemente posible. Es posible que debamos conservar cierta información por motivos legales, de seguridad, contables, de prevención de fraude o contractuales. Si necesitamos aclaraciones para identificar los datos o verificar que la solicitud corresponde a su titular, te contactaremos por correo electrónico.</p>,
      },
      {
        title: 'Información almacenada por terceros',
        content: <p>La información almacenada directamente por servicios de terceros, como Meta, WhatsApp o Twilio, puede estar sujeta a sus propios procesos y políticas de eliminación. Para esos datos, puede ser necesario gestionar una solicitud directamente con el proveedor correspondiente.</p>,
      },
      {
        title: 'Más información',
        content: <p>Para conocer cómo puede utilizarse y protegerse tu información, consultá nuestra <a href="/privacy">Política de Privacidad</a>.</p>,
      },
    ],
  },
}

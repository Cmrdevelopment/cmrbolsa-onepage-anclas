const URL_BASE =
  'https://cmrbolsa.com'

const REDES_CMRBOLSA = [
  'https://x.com/cmrbolsa',
  'https://www.instagram.com/cmrbolsa',
  'https://www.tiktok.com/@cmrbolsa',
  'https://www.youtube.com/@cmrbolsa',
  'https://www.facebook.com/cmrbolsa',
  'https://cmrbolsa.substack.com/',
]

export const datosEstructuradosBase = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id':
        `${URL_BASE}/#organization`,
      name: 'CMRBolsa',
      alternateName:
        'CMRBolsa · Método PEV',
      url: `${URL_BASE}/`,
      description:
        'Formación en trading basada en el método PEV: precio, estructura y volumen.',
      email:
        'cmrbolsa@cmrbolsa.com',
      founder: {
        '@id':
          `${URL_BASE}/#person`,
      },
      sameAs:
        REDES_CMRBOLSA,
    },
    {
      '@type': 'Person',
      '@id':
        `${URL_BASE}/#person`,
      name:
        'Carlos Martín Rodríguez',
      url:
        `${URL_BASE}/cmrbolsa`,
      image:
        'https://res.cloudinary.com/dwbxywvdw/image/upload/f_auto/q_auto/c_limit,w_900/v1784797904/cmrbolsa/cmrbolsa-sobre-mi-principal_reduced_mwvept.png',
      jobTitle:
        'Trader y formador en trading',
      description:
        'Creador de CMRBolsa y del método PEV para trabajar el precio, la estructura y el volumen.',
      worksFor: {
        '@id':
          `${URL_BASE}/#organization`,
      },
      sameAs:
        REDES_CMRBOLSA,
    },
    {
      '@type': 'WebSite',
      '@id':
        `${URL_BASE}/#website`,
      url: `${URL_BASE}/`,
      name: 'CMRBolsa',
      description:
        'Formación, Comunidad PEV, Mentoría, sala escrita, eventos y contenidos sobre trading.',
      inLanguage: 'es-ES',
      publisher: {
        '@id':
          `${URL_BASE}/#organization`,
      },
    },
  ],
}
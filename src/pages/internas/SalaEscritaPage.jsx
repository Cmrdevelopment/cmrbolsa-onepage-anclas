import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Eye,
  Images,
  MessageSquareText,
} from 'lucide-react'

import PageHero from '../../components/PageHero'
import Placeholder from '../../components/Placeholder'

const ventajasSala = [
  {
    titulo: 'Mercado explicado por escrito',
    texto:
      'Zonas, escenarios, imágenes y comentarios para entender qué estamos mirando y por qué puede ser importante.',
    icono: MessageSquareText,
  },
  {
    titulo: 'Imágenes y gráficos reales',
    texto:
      'No se trata solo de decir qué ocurre. Se muestran gráficos para que puedas seguir el razonamiento.',
    icono: Images,
  },
  {
    titulo: 'Puedes revisarlo después',
    texto:
      'Si no puedes seguir el mercado en ese momento, puedes volver más tarde y revisar cómo se desarrolló.',
    icono: Clock,
  },
]

const puntosSala = [
  'Comentarios escritos durante el mercado',
  'Imágenes y gráficos con contexto',
  'Escenarios antes de que ocurra el movimiento',
  'Entradas cuando realmente aparecen',
  'Stops, errores y operaciones que no funcionan',
  'Participación y preguntas de los alumnos',
]

export default function SalaEscritaPage() {
  return (
    <div className="bg-cmr-light text-cmr-ink">
      <PageHero
        eyebrow="Sala escrita"
        title="Mercado en directo, pero por escrito y con contexto"
        text="No es una sala para copiar señales. Es un espacio para seguir el razonamiento: zonas, escenarios, imágenes, entradas cuando aparecen y errores cuando toca."
        primaryLabel="Ver Comunidad PEV"
        primaryTo="/comunidad-pev"
        secondaryLabel="Volver al inicio"
        secondaryTo="/"
      />

      <section className="py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <Placeholder
              label="SALA_VIDEO_URL"
              type="video"
              dark={false}
              className="min-h-[420px] bg-white"
            />

            <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-cmr-line bg-white/92 p-5 shadow-soft backdrop-blur">
              <div className="flex items-start gap-3">
                <Eye className="mt-1 h-5 w-5 shrink-0 text-cmr-green" />

                <p className="text-sm font-semibold leading-6 text-cmr-muted">
                  No vengas a copiar entradas. Ven a entender el motivo.
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow">
              Cómo funciona
            </span>

            <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-cmr-ink sm:text-5xl">
              Lo importante no es saber dónde entro yo, sino entender qué estoy viendo
            </h2>

            <p className="mt-5 text-lg leading-8 text-cmr-muted">
              Durante el mercado comparto zonas, imágenes, posibilidades y
              razonamientos. Algunas veces habrá operación y otras veces lo
              correcto será no tocar nada.
            </p>

            <p className="mt-5 text-lg leading-8 text-cmr-muted">
              También se muestran errores, stops y operaciones que no salen
              bien. Porque aprender mercado no consiste en enseñar únicamente
              lo bonito.
            </p>

            <div className="mt-8 grid gap-3">
              {puntosSala.map((punto) => (
                <div
                  key={punto}
                  className="flex items-center gap-3 rounded-2xl border border-cmr-line bg-white p-4 shadow-soft"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cmr-green" />

                  <span className="font-semibold leading-6 text-cmr-ink">
                    {punto}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cmr-paper py-20">
        <div className="section-shell">
          <div className="max-w-3xl">
            <span className="eyebrow">
              Una sala diferente
            </span>

            <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-cmr-ink sm:text-5xl">
              Menos ruido, más contexto
            </h2>

            <p className="mt-5 text-lg leading-8 text-cmr-muted">
              La sala está pensada para acompañar la formación. No sustituye el
              estudio, los ejercicios ni el trabajo personal.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {ventajasSala.map((ventaja) => {
              const Icono = ventaja.icono

              return (
                <article
                  key={ventaja.titulo}
                  className="card-light p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cmr-greenSoft text-cmr-green">
                    <Icono className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink">
                    {ventaja.titulo}
                  </h3>

                  <p className="mt-3 leading-7 text-cmr-muted">
                    {ventaja.texto}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-cmr-dark py-20 text-white">
        <div className="section-shell">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/6 p-7 shadow-darkGlow sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="eyebrow-dark">
                Comunidad PEV
              </span>

              <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-white sm:text-5xl">
                La sala forma parte de un proceso más amplio
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                Dentro de la Comunidad también tienes formación, reuniones,
                ejercicios, calendario y el resto de herramientas necesarias
                para aprender progresivamente.
              </p>
            </div>

            <Link
              to="/comunidad-pev"
              className="btn-primary"
            >
              Ver Comunidad PEV
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Monitor,
  UsersRound,
} from 'lucide-react'
import PageHero from '../../components/PageHero'
import Placeholder from '../../components/Placeholder'

const tiposEvento = [
  {
    titulo: 'Encuentros presenciales',
    texto:
      'Jornadas y encuentros para trabajar mercado, resolver dudas y conocer a otros alumnos fuera de la pantalla.',
    icono: MapPin,
  },
  {
    titulo: 'Sesiones online',
    texto:
      'Talleres y sesiones especiales para profundizar en partes concretas del método PEV.',
    icono: Monitor,
  },
  {
    titulo: 'Eventos con alumnos',
    texto:
      'Espacios para compartir experiencias, operativa, errores y aprendizaje con personas que recorren un camino parecido.',
    icono: UsersRound,
  },
]

export default function EventosPage() {
  return (
    <div className="bg-cmr-light text-cmr-ink">
      <PageHero
        eyebrow="Eventos CMRBolsa"
        title="También hemos salido del gráfico"
        text="Talleres, encuentros y sesiones online para trabajar el mercado, resolver dudas y compartir experiencias con otros alumnos."
        primaryLabel="Ver eventos realizados"
        primaryTo="#eventos-realizados"
        secondaryLabel="Volver al inicio"
        secondaryTo="/"
      />

      <section className="py-20">
        <div className="section-shell">
          <div className="max-w-3xl">
            <span className="eyebrow">
              Mucho más que una pantalla
            </span>

            <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-cmr-ink sm:text-5xl">
              El trading también se aprende hablando, preguntando y compartiendo
            </h2>

            <p className="mt-5 text-lg leading-8 text-cmr-muted">
              No todos los eventos serán iguales. Algunos serán presenciales,
              otros online y otros estarán pensados específicamente para los
              alumnos de la Comunidad y la Mentoría PEV.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {tiposEvento.map((evento) => {
              const Icono = evento.icono

              return (
                <article
                  key={evento.titulo}
                  className="card-light p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cmr-greenSoft text-cmr-green">
                    <Icono className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink">
                    {evento.titulo}
                  </h3>

                  <p className="mt-3 leading-7 text-cmr-muted">
                    {evento.texto}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="eventos-realizados"
        className="bg-cmr-paper py-20"
      >
        <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <Placeholder
            label="EVENTO_IMAGE_URL_01"
            dark={false}
            className="min-h-[420px] bg-white"
          />

          <div>
            <span className="eyebrow">
              Eventos realizados
            </span>

            <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-cmr-ink sm:text-5xl">
              Mercado, aprendizaje y comunidad en el mismo sitio
            </h2>

            <p className="mt-5 text-lg leading-8 text-cmr-muted">
              Aquí iremos reuniendo fotografías, vídeos y recuerdos de los
              encuentros realizados por CMRBolsa.
            </p>

            <p className="mt-5 leading-7 text-cmr-muted">
              No se trata únicamente de escuchar una explicación. La idea es
              trabajar situaciones reales, plantear dudas y compartir el
              proceso con otras personas.
            </p>
          </div>
        </div>
      </section>

      <section
        id="avisarme"
        className="bg-cmr-dark py-20 text-white"
      >
        <div className="section-shell">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/6 p-7 shadow-darkGlow sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <CalendarDays className="h-7 w-7 text-cmr-green" />

                <span className="eyebrow-dark">
                  Próximos eventos
                </span>
              </div>

              <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-white sm:text-5xl">
                Cuando haya una nueva fecha, aparecerá aquí
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                También compartiré las novedades en Substack y dentro de la
                Comunidad PEV.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                to="/substack"
                className="btn-primary"
              >
                Ver Substack
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/comunidad-pev"
                className="btn-secondary-dark"
              >
                Ver Comunidad PEV
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
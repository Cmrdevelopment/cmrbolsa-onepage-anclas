import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Eye,
  Layers3,
  Maximize2,
  ShoppingBag,
  Sparkles,
  UsersRound,
} from 'lucide-react'

import TestimoniosCarousel from '../../components/testimonios/TestimoniosCarousel'
import TestimonioModal from '../../components/testimonios/TestimonioModal'
import { testimoniosActivos } from '../../data/testimonios'


const COMPRA_LIBRO_URL =
  'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LPLDA4WQ7EE9J'

const contenidosLibro = [
  {
    titulo: 'Precio y volumen',
    texto:
      'Aprender a observar qué está haciendo el precio y qué información aporta realmente el volumen.',
    icono: Eye,
  },
  {
    titulo: 'Estructura del mercado',
    texto:
      'Entender cómo se forman los impulsos, las correcciones, las zonas y los movimientos que se repiten.',
    icono: Layers3,
  },
  {
    titulo: 'Profesionales y masa',
    texto:
      'Comprender los engaños, maniobras y comportamientos que aparecen una y otra vez en los gráficos.',
    icono: UsersRound,
  },
]

const puntosLibro = [
  '264 páginas de contenido',
  'Más de 100 gráficos explicativos',
  'Precio, volumen y estructura',
  'Ejemplos aplicados al mercado',
  'Errores frecuentes del trader',
  'Experiencias personales y aprendizajes',
]

const testimoniosLibro = testimoniosActivos.filter(
  (testimonio) =>
    testimonio.categoria === 'libro'
)

export default function LibroPage() {
  const [imagenAmpliada, setImagenAmpliada] =
    useState(null)

  return (
    <div className="bg-cmr-light text-cmr-ink">
      <section className="noise relative overflow-hidden bg-cmr-dark bg-cmr-radial py-20 text-white">
        <div className="section-shell grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <span className="eyebrow-dark">
              Mi libro
            </span>

            <h1 className="mt-6 max-w-4xl font-display text-5xl font-black leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl">
              Desgranando la esencia del mercado
            </h1>

            <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-cmr-green">
              Una forma diferente de empezar a entender qué está haciendo realmente el precio.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              No es un libro para memorizar una estrategia ni para buscar una
              entrada mágica. Es una introducción profunda a la lectura del
              mercado mediante el precio, el volumen y la estructura.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-extrabold text-white/78">
              <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2">
                264 páginas
              </span>

              <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2">
                Más de 100 gráficos
              </span>

              <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2">
                Publicado en 2019
              </span>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={COMPRA_LIBRO_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Comprar el libro
                <ShoppingBag className="h-4 w-4" />
              </a>

              <Link
                to="/substack"
                className="btn-secondary-dark"
              >
                Empezar leyendo en Substack
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 max-w-2xl rounded-2xl border border-cmr-gold/30 bg-cmr-gold/10 p-4">
              <p className="text-sm font-bold leading-6 text-white/82">
                La 1.ª y la 2.ª edición en papel están agotadas.
                Actualmente no hay una fecha prevista para la publicación
                de una 3.ª edición. Disponible SOLO en ebook.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-[4rem] bg-cmr-green/20 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-white/12 bg-white/8 p-5 shadow-darkGlow backdrop-blur">
              <div className="flex min-h-[560px] items-center justify-center overflow-hidden rounded-[2rem] bg-cmr-dark2 p-5">
            <video
                src="https://res.cloudinary.com/dwbxywvdw/video/upload/v1706827352/cmrbolsa/Desgranando_SOLO_portada_animation_kuc2zu.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Portada animada del libro Desgranando la esencia del mercado"
                className="max-h-[520px] w-full object-contain"
            />
            </div>
            </div>

            <div className="absolute -bottom-6 -left-5 hidden rounded-3xl border border-cmr-line bg-cmr-paper p-5 shadow-soft lg:block">
              <BookOpen className="h-6 w-6 text-cmr-green" />

              <p className="mt-3 font-display text-xl font-black text-cmr-ink">
                Un libro de trabajo
              </p>

              <p className="mt-1 max-w-[220px] text-sm leading-6 text-cmr-muted">
                Para leer, revisar gráficos y volver a consultar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cmr-light py-20">
        <div className="section-shell">
          <div className="max-w-3xl">
            <span className="eyebrow">
              Qué encontrarás dentro
            </span>

            <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-cmr-ink sm:text-5xl">
              No se trata de ver más velas. Se trata de empezar a entenderlas.
            </h2>

            <p className="mt-5 text-lg leading-8 text-cmr-muted">
              El objetivo del libro es ayudarte a construir una forma más
              ordenada de observar el mercado, independientemente de la
              estrategia o del plazo en el que operes.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {contenidosLibro.map((contenido) => {
              const Icono = contenido.icono

              return (
                <article
                  key={contenido.titulo}
                  className="card-light p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cmr-greenSoft text-cmr-green">
                    <Icono className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-black tracking-[-0.02em] text-cmr-ink">
                    {contenido.titulo}
                  </h3>

                  <p className="mt-3 leading-7 text-cmr-muted">
                    {contenido.texto}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-cmr-paper py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[1.5rem] border border-cmr-line bg-white shadow-soft sm:row-span-2">
              <img
                src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1784735869/cmrbolsa/cmrbolsa-libro-desgranando.reduced_bxydqw.png"
                alt="Carlos Martín sosteniendo el libro Desgranando la esencia del mercado"
                loading="lazy"
                className="h-full min-h-[560px] w-full object-cover object-center"
              />
            </div>

            <button
              type="button"
              onClick={() =>
                setImagenAmpliada({
                  src: 'https://res.cloudinary.com/dwbxywvdw/image/upload/v1707243633/cmrbolsa/Indice_Desgranando_la_esencia_del_mercado_reduced_i6pq0d.png',
                  alt: 'Índice del libro Desgranando la esencia del mercado',
                  titulo: 'Índice del libro',
                })
              }
              aria-label="Ampliar índice del libro"
              className="group relative flex min-h-[270px] cursor-zoom-in items-center justify-center overflow-hidden rounded-[1.5rem] border border-cmr-line bg-white p-4 shadow-soft"
            >
              <img
                src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1707243633/cmrbolsa/Indice_Desgranando_la_esencia_del_mercado_reduced_i6pq0d.png"
                alt="Índice del libro Desgranando la esencia del mercado"
                loading="lazy"
                className="max-h-[270px] w-full object-contain transition duration-300 group-hover:scale-[1.03]"
              />

              <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-cmr-dark/78 text-white shadow-lg backdrop-blur transition group-hover:scale-110 group-hover:bg-cmr-dark">
                <Maximize2 className="h-4 w-4" />
              </span>
            </button>

            <button
              type="button"
              onClick={() =>
                setImagenAmpliada({
                  src: 'https://res.cloudinary.com/dwbxywvdw/image/upload/v1707243625/cmrbolsa/Portada_y_contraportada_2024_reduced_igw2zu.png',
                  alt: 'Portada y contraportada del libro Desgranando la esencia del mercado',
                  titulo: 'Portada y contraportada',
                })
              }
              aria-label="Ampliar portada y contraportada del libro"
              className="group relative flex min-h-[270px] cursor-zoom-in items-center justify-center overflow-hidden rounded-[1.5rem] border border-cmr-line bg-white p-4 shadow-soft"
            >
              <img
                src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1707243625/cmrbolsa/Portada_y_contraportada_2024_reduced_igw2zu.png"
                alt="Portada y contraportada del libro Desgranando la esencia del mercado"
                loading="lazy"
                className="max-h-[270px] w-full object-contain transition duration-300 group-hover:scale-[1.03]"
              />

              <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-cmr-dark/78 text-white shadow-lg backdrop-blur transition group-hover:scale-110 group-hover:bg-cmr-dark">
                <Maximize2 className="h-4 w-4" />
              </span>
            </button>
          </div>

          <div>
            <span className="eyebrow">
              De dónde nace
            </span>

            <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-cmr-ink sm:text-5xl">
              Después de sistemas, señales, gurús y muchas horas de mercado
            </h2>

            <p className="mt-5 text-lg leading-8 text-cmr-muted">
              El libro recoge parte del recorrido que me llevó a dejar de
              buscar sistemas perfectos y empezar a centrarme en cómo se mueve
              realmente el precio.
            </p>

            <p className="mt-5 text-lg leading-8 text-cmr-muted">
              Está escrito desde la experiencia de alguien que también empezó
              buscando atajos, probando herramientas y creyendo que la
              solución estaba siempre en el siguiente sistema.
            </p>

            <div className="mt-8 grid gap-3">
              {puntosLibro.map((punto) => (
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

      <section className="bg-cmr-light2 py-20">
        <div className="section-shell">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card-light p-7 sm:p-9">
              <span className="eyebrow">
                Si estás empezando
              </span>

              <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-cmr-ink">
                Empieza entendiendo antes de llenar el gráfico de cosas
              </h2>

              <p className="mt-5 text-lg leading-8 text-cmr-muted">
                Te ayudará a conocer conceptos esenciales y a evitar parte del
                camino de sistemas milagro, indicadores mágicos y promesas
                demasiado bonitas.
              </p>
            </div>

            <div className="card-light p-7 sm:p-9">
              <span className="eyebrow">
                Si ya tienes experiencia
              </span>

              <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-cmr-ink">
                Amplía tu forma de interpretar lo que ya estás viendo
              </h2>

              <p className="mt-5 text-lg leading-8 text-cmr-muted">
                El libro puede complementar tu forma actual de operar,
                aportándote otra visión sobre el precio, el volumen, las zonas
                y la estructura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {testimoniosLibro.length > 0 && (
        <section className="bg-cmr-light py-20">
          <div className="section-shell">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <span className="eyebrow">
                  Opiniones de lectores
                </span>

                <h2 className="mt-5 font-display text-3xl font-black leading-tight tracking-[-0.025em] text-cmr-ink sm:text-5xl">
                  Lo que cuentan quienes ya lo han leído
                </h2>

                <p className="mt-5 text-lg leading-8 text-cmr-muted">
                  Experiencias reales de lectores que utilizaron el libro para
                  ordenar y ampliar su forma de mirar el mercado.
                </p>
              </div>

              <Link
                to="/testimonios"
                className="btn-secondary-light shrink-0"
              >
                Ver todos los testimonios
              </Link>
            </div>

            <div className="mt-10">
              <TestimoniosCarousel
                testimonios={testimoniosLibro}
                intervalo={8000}
              />
            </div>
          </div>
        </section>
      )}

      <section className="noise bg-cmr-dark bg-cmr-radial py-20 text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Sparkles className="h-9 w-9 text-cmr-green" />

            <h2 className="mt-6 max-w-4xl font-display text-4xl font-black leading-tight tracking-[-0.025em] text-white sm:text-5xl">
              Puedes empezar por el libro y decidir después hasta dónde quieres llegar
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              Lee, revisa los gráficos y conoce mi forma de entender el
              mercado. Después podrás continuar con Substack, la Comunidad PEV
              o la Mentoría.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={COMPRA_LIBRO_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Comprar el libro
              <ShoppingBag className="h-4 w-4" />
            </a>

            <Link
              to="/comunidad-pev"
              className="btn-secondary-dark"
            >
              Ver Comunidad PEV
            </Link>
          </div>
        </div>
      </section>

      <TestimonioModal
        abierto={Boolean(imagenAmpliada)}
        etiqueta="Vista ampliada"
        titulo={
          imagenAmpliada?.titulo ||
          'Desgranando la esencia del mercado'
        }
        textoCerrar="Cerrar imagen ampliada"
        onCerrar={() =>
          setImagenAmpliada(null)
        }
      >
        {imagenAmpliada && (
          <div className="flex min-h-[60vh] items-center justify-center rounded-[1.5rem] bg-white p-3 sm:p-6">
            <img
              src={imagenAmpliada.src}
              alt={imagenAmpliada.alt}
              className="max-h-[76vh] max-w-full object-contain"
            />
          </div>
        )}
      </TestimonioModal>
    </div>
  )
}
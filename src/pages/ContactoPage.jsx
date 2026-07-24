import {
  Clock3,
  Mail,
  MessageSquareText,
  ShieldCheck,
} from 'lucide-react'

import FormularioContacto from '../components/forms/FormularioContacto'
import PageHero from '../components/PageHero'

const informacionContacto = [
  {
    title: 'Consulta bien dirigida',
    text: 'Selecciona el motivo adecuado para que pueda identificar rápidamente de qué se trata.',
    icon: MessageSquareText,
  },
  {
    title: 'Respuesta por correo',
    text: 'La respuesta se enviará al correo electrónico que indiques en el formulario.',
    icon: Mail,
  },
  {
    title: 'Respuesta personal',
    text: 'No recibirás una contestación automática genérica. Revisaré personalmente tu consulta.',
    icon: Clock3,
  },
  {
    title: 'Datos protegidos',
    text: 'Tus datos se utilizarán únicamente para responder a tu mensaje.',
    icon: ShieldCheck,
  },
]

export default function ContactoPage() {
  return (
    <div className="bg-cmr-page text-cmr-text transition-colors duration-300">
      <PageHero
        eyebrow="Contacto"
        title="Cuéntame en qué puedo ayudarte."
        text="Utiliza este formulario para consultas sobre Comunidad PEV, Mentoría, eventos, colaboraciones, el libro, contenidos o cualquier otra cuestión relacionada con CMRBolsa."
      />

      <section className="relative overflow-hidden bg-cmr-page py-20 transition-colors duration-300">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cmr-green/[0.07] blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cmr-gold/[0.06] blur-3xl" />

        <div className="section-shell relative grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">
              Antes de escribir
            </span>

            <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-[-0.025em] text-cmr-text sm:text-5xl">
              Elige el motivo y cuéntame lo necesario.
            </h2>

            <p className="mt-6 text-lg leading-8 text-cmr-textMuted">
              Cuanto más clara sea la consulta, más fácil será darte una
              respuesta útil y concreta.
            </p>

            <div className="mt-9 grid gap-4">
              {informacionContacto.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.75rem] border border-cmr-border bg-cmr-surface p-5 shadow-soft"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cmr-green/25 bg-cmr-green/10 text-cmr-green dark:text-[#79CFC4]">
                        <Icon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <h3 className="font-display text-xl font-black text-cmr-text">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-cmr-textMuted">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <FormularioContacto />
        </div>
      </section>
    </div>
  )
}
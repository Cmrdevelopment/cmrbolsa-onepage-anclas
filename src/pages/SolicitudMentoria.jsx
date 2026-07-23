import { Link } from 'react-router-dom'
import CampoFormulario from '../components/forms/CampoFormulario'
import PageHero from '../components/PageHero'

export default function SolicitudMentoria() {
  function enviarSolicitud(event) {
    event.preventDefault()
  }

  return (
    <div className="bg-cmr-light text-cmr-ink">
      <PageHero
        eyebrow="Solicitud"
        title="Solicitud para Mentoría PEV"
        text="No es una compra directa. La idea es entender dónde estás, si tiene sentido y si encaja por ambas partes."
        primaryLabel="Volver a inicio"
        primaryTo="/"
      />

      <section className="py-20">
        <div className="section-shell max-w-3xl">
          <form
            className="card-light grid gap-6 p-6 sm:p-8"
            onSubmit={enviarSolicitud}
          >
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-cmr-green">
                Cuéntame tu situación
              </p>

              <h2 className="mt-3 font-display text-3xl font-black tracking-[-0.025em] text-cmr-ink">
                Antes de hablar, necesito conocerte un poco
              </h2>

              <p className="mt-3 leading-7 text-cmr-muted">
                No necesitas escribir una novela, pero sí contarme con claridad
                dónde estás, qué has probado y qué esperas conseguir.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <CampoFormulario
                id="nombre"
                name="nombre"
                label="Nombre y apellidos"
                placeholder="Tu nombre completo"
                autoComplete="name"
                required
              />

              <CampoFormulario
                id="email"
                name="email"
                label="Correo electrónico"
                type="email"
                placeholder="nombre@correo.com"
                autoComplete="email"
                required
              />
            </div>

            <CampoFormulario
              id="telefono"
              name="telefono"
              label="Teléfono"
              type="tel"
              placeholder="+34 600 000 000"
              autoComplete="tel"
              required
            />

            <CampoFormulario
              id="experienciaTrading"
              name="experienciaTrading"
              label="¿Qué experiencia tienes en trading?"
              formato="textarea"
              rows={4}
              placeholder="Cuánto tiempo llevas, qué mercados trabajas y si operas actualmente."
              required
            />

            <CampoFormulario
              id="queHasProbado"
              name="queHasProbado"
              label="¿Qué has probado anteriormente?"
              formato="textarea"
              rows={4}
              placeholder="Cursos, formaciones, señales, cuentas de fondeo, estrategias..."
              required
            />

            <CampoFormulario
              id="problemaResolver"
              name="problemaResolver"
              label="¿Qué problema quieres resolver?"
              formato="textarea"
              rows={4}
              placeholder="Cuéntame qué es lo que más te bloquea ahora mismo."
              required
            />

            <CampoFormulario
              id="tiempoDisponible"
              name="tiempoDisponible"
              label="¿Cuánto tiempo real puedes dedicar cada semana?"
              formato="textarea"
              rows={3}
              placeholder="Indica las horas aproximadas y cómo podrías repartirlas."
              required
            />

            <CampoFormulario
              id="porQueEntrar"
              name="porQueEntrar"
              label="¿Por qué quieres entrar en la Mentoría PEV?"
              formato="textarea"
              rows={4}
              placeholder="Explícame qué buscas y por qué consideras que este proceso puede encajarte."
              required
            />

            <div className="rounded-3xl border border-cmr-line bg-cmr-light p-5">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="aceptaPrivacidad"
                  required
                  className="mt-1 h-5 w-5 shrink-0 accent-cmr-green"
                />

                <span className="text-sm font-normal leading-7 text-cmr-muted">
                  He leído y acepto la{' '}
                  <Link
                    to="/politica-privacidad"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-cmr-green underline decoration-cmr-green/30 underline-offset-4"
                  >
                    Política de privacidad
                  </Link>
                  . Mis datos se utilizarán para revisar la solicitud y contactar
                  conmigo en relación con la Mentoría PEV.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="btn-primary w-full sm:w-auto"
            >
              Enviar solicitud
            </button>

            <p className="text-xs leading-6 text-cmr-muted">
              El formulario todavía no realiza un envío real. En el siguiente
              bloque técnico lo conectaremos con el sistema definitivo.
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}
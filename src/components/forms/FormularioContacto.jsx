import {
  useState,
} from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle2,
  LoaderCircle,
  Send,
} from 'lucide-react'

import CampoFormulario from './CampoFormulario'
import { motivosContacto } from '../../data/motivosContacto'

const estadoInicial = {
  nombre: '',
  email: '',
  motivo: '',
  otroMotivo: '',
  mensaje: '',
  privacidad: false,
  website: '',
}

export default function FormularioContacto() {
  const [formulario, setFormulario] =
    useState(estadoInicial)

  const [estadoEnvio, setEstadoEnvio] =
    useState('inicial')

  const [mensajeEstado, setMensajeEstado] =
    useState('')

  const actualizarCampo = (event) => {
    const {
      name,
      value,
      type,
      checked,
    } = event.target

    setFormulario((actual) => ({
      ...actual,
      [name]:
        type === 'checkbox'
          ? checked
          : value,
    }))

    if (estadoEnvio !== 'inicial') {
      setEstadoEnvio('inicial')
      setMensajeEstado('')
    }
  }

  const enviarFormulario = async (event) => {
    event.preventDefault()

    if (!formulario.privacidad) {
      setEstadoEnvio('error')
      setMensajeEstado(
        'Debes aceptar la Política de privacidad para enviar la consulta.'
      )

      return
    }

    if (
      formulario.motivo === 'otro' &&
      !formulario.otroMotivo.trim()
    ) {
      setEstadoEnvio('error')
      setMensajeEstado(
        'Indica brevemente el motivo de la consulta.'
      )

      return
    }

    setEstadoEnvio('enviando')
    setMensajeEstado('')

    try {
      const respuesta = await fetch(
        '/api/contacto',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formulario),
        }
      )

      const resultado = await respuesta.json()

      if (!respuesta.ok) {
        throw new Error(
          resultado?.message ||
          'No se pudo enviar la consulta.'
        )
      }

      setFormulario(estadoInicial)
      setEstadoEnvio('enviado')
      setMensajeEstado(
        'Consulta enviada correctamente. Te responderé lo antes posible.'
      )
    } catch (error) {
      setEstadoEnvio('error')
      setMensajeEstado(
        error.message ||
        'Ha ocurrido un error al enviar la consulta. Inténtalo de nuevo.'
      )
    }
  }

  return (
    <form
      onSubmit={enviarFormulario}
      className="rounded-[2rem] border border-cmr-border bg-cmr-surface p-6 shadow-soft sm:p-8"
    >
      <div
        className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="website">
          No rellenar este campo
        </label>

        <input
          id="website"
          name="website"
          type="text"
          tabIndex="-1"
          autoComplete="off"
          value={formulario.website}
          onChange={actualizarCampo}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <CampoFormulario
          id="nombre"
          name="nombre"
          label="Nombre"
          required
          autoComplete="name"
          placeholder="Tu nombre"
          value={formulario.nombre}
          onChange={actualizarCampo}
        />

        <CampoFormulario
          id="email"
          name="email"
          label="Correo electrónico"
          type="email"
          required
          autoComplete="email"
          placeholder="nombre@correo.com"
          value={formulario.email}
          onChange={actualizarCampo}
        />
      </div>

      <div className="mt-6">
        <CampoFormulario
          id="motivo"
          name="motivo"
          label="Motivo de la consulta"
          formato="select"
          required
          placeholder="Selecciona una opción"
          options={motivosContacto}
          value={formulario.motivo}
          onChange={actualizarCampo}
        />
      </div>

      {formulario.motivo === 'otro' && (
        <div className="mt-6">
          <CampoFormulario
            id="otroMotivo"
            name="otroMotivo"
            label="Indica brevemente el motivo"
            required
            placeholder="Por ejemplo: propuesta concreta"
            value={formulario.otroMotivo}
            onChange={actualizarCampo}
          />
        </div>
      )}

      <div className="mt-6">
        <CampoFormulario
          id="mensaje"
          name="mensaje"
          label="Mensaje"
          formato="textarea"
          rows={7}
          required
          placeholder="Cuéntame en qué puedo ayudarte"
          value={formulario.mensaje}
          onChange={actualizarCampo}
        />
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-2xl border border-cmr-border bg-cmr-surfaceAlt p-4">
        <input
          type="checkbox"
          name="privacidad"
          checked={formulario.privacidad}
          onChange={actualizarCampo}
          required
          className="mt-1 h-4 w-4 shrink-0 accent-cmr-green"
        />

        <span className="text-sm leading-6 text-cmr-textMuted">
          He leído y acepto la{' '}

          <Link
            to="/politica-privacidad"
            className="font-bold text-cmr-green underline decoration-cmr-green/30 underline-offset-4"
          >
            Política de privacidad
          </Link>
          .
        </span>
      </label>

      {mensajeEstado && (
        <div
          role="status"
          className={`mt-6 rounded-2xl border p-4 text-sm font-semibold leading-6 ${
            estadoEnvio === 'enviado'
              ? 'border-cmr-green/30 bg-cmr-green/10 text-cmr-green dark:text-[#79CFC4]'
              : 'border-red-500/25 bg-red-500/10 text-red-700 dark:text-red-300'
          }`}
        >
          <div className="flex items-start gap-3">
            {estadoEnvio === 'enviado' && (
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
            )}

            <p>
              {mensajeEstado}
            </p>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={estadoEnvio === 'enviando'}
        className="btn-primary mt-7 w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
      >
        {estadoEnvio === 'enviando' ? (
          <>
            Enviando consulta

            <LoaderCircle
              className="h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          </>
        ) : (
          <>
            Enviar consulta

            <Send
              className="h-4 w-4"
              aria-hidden="true"
            />
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs leading-5 text-cmr-textMuted">
        Tus datos se utilizarán únicamente para atender esta consulta.
      </p>
    </form>
  )
}
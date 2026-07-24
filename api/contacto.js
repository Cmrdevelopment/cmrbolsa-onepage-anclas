import {
  createHash,
} from 'node:crypto'

import {
  motivosContacto,
} from '../src/data/motivosContacto.js'

const CORREO_CMRBOLSA =
  'cmrbolsa@cmrbolsa.com'

const REMITENTE_CMRBOLSA =
  `CMRBolsa <${CORREO_CMRBOLSA}>`

const LIMITE_SOLICITUDES = 5
const VENTANA_LIMITE_MS =
  15 * 60 * 1000

const limitesPorIp =
  globalThis.__cmrbolsaContactoLimites ??
  new Map()

globalThis.__cmrbolsaContactoLimites =
  limitesPorIp

const motivosPermitidos = new Map(
  motivosContacto.map((motivo) => [
    motivo.value,
    motivo.label,
  ])
)

function responder(
  response,
  status,
  body
) {
  response.status(status).json(body)
}

function obtenerBody(request) {
  if (!request.body) {
    return {}
  }

  if (
    typeof request.body === 'string'
  ) {
    return JSON.parse(request.body)
  }

  return request.body
}

function obtenerTexto(valor) {
  if (typeof valor !== 'string') {
    return ''
  }

  return valor.trim()
}

function limpiarCabecera(valor) {
  return valor.replace(
    /[\r\n]+/g,
    ' '
  )
}

function correoValido(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    correo
  )
}

function escaparHtml(valor) {
  return String(valor).replace(
    /[&<>"']/g,
    (caracter) => {
      const reemplazos = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      }

      return reemplazos[caracter]
    }
  )
}

function convertirSaltosHtml(valor) {
  return escaparHtml(valor).replace(
    /\n/g,
    '<br />'
  )
}

function obtenerIp(request) {
  const forwardedFor =
    request.headers[
      'x-forwarded-for'
    ]

  if (
    typeof forwardedFor === 'string'
  ) {
    return forwardedFor
      .split(',')[0]
      .trim()
  }

  return (
    request.socket?.remoteAddress ??
    ''
  )
}

function superaLimite(ip) {
  if (!ip) {
    return false
  }

  const ahora = Date.now()

  for (
    const [
      ipGuardada,
      datos,
    ] of limitesPorIp.entries()
  ) {
    if (
      ahora - datos.inicio >
      VENTANA_LIMITE_MS
    ) {
      limitesPorIp.delete(
        ipGuardada
      )
    }
  }

  const datosActuales =
    limitesPorIp.get(ip)

  if (!datosActuales) {
    limitesPorIp.set(ip, {
      inicio: ahora,
      total: 1,
    })

    return false
  }

  if (
    ahora - datosActuales.inicio >
    VENTANA_LIMITE_MS
  ) {
    limitesPorIp.set(ip, {
      inicio: ahora,
      total: 1,
    })

    return false
  }

  datosActuales.total += 1

  return (
    datosActuales.total >
    LIMITE_SOLICITUDES
  )
}

function crearClaveIdempotencia({
  email,
  motivo,
  mensaje,
}) {
  const bloqueCincoMinutos =
    Math.floor(
      Date.now() /
        (5 * 60 * 1000)
    )

  const contenido = [
    email.toLowerCase(),
    motivo,
    mensaje,
    bloqueCincoMinutos,
  ].join('|')

  const hash = createHash('sha256')
    .update(contenido)
    .digest('hex')

  return `contacto-${hash}`
}

export default async function handler(
  request,
  response
) {
  if (request.method !== 'POST') {
    response.setHeader(
      'Allow',
      'POST'
    )

    return responder(
      response,
      405,
      {
        ok: false,
        message:
          'Método no permitido.',
      }
    )
  }

  let body

  try {
    body = obtenerBody(request)
  } catch {
    return responder(
      response,
      400,
      {
        ok: false,
        message:
          'La solicitud no es válida.',
      }
    )
  }

  const website = obtenerTexto(
    body.website
  )

  /*
   * Honeypot:
   * si un bot completa este campo,
   * respondemos como si todo hubiese
   * ido bien, pero no enviamos nada.
   */
  if (website) {
    return responder(
      response,
      200,
      {
        ok: true,
      }
    )
  }

  const ip = obtenerIp(request)

  if (superaLimite(ip)) {
    return responder(
      response,
      429,
      {
        ok: false,
        message:
          'Has realizado demasiados intentos. Espera unos minutos antes de volver a intentarlo.',
      }
    )
  }

  const nombre = obtenerTexto(
    body.nombre
  )

  const email = obtenerTexto(
    body.email
  ).toLowerCase()

  const motivo = obtenerTexto(
    body.motivo
  )

  const otroMotivo = obtenerTexto(
    body.otroMotivo
  )

  const mensaje = obtenerTexto(
    body.mensaje
  )

  const privacidad =
    body.privacidad === true

  if (
    nombre.length < 2 ||
    nombre.length > 100
  ) {
    return responder(
      response,
      400,
      {
        ok: false,
        message:
          'Introduce un nombre válido.',
      }
    )
  }

  if (
    email.length > 254 ||
    !correoValido(email)
  ) {
    return responder(
      response,
      400,
      {
        ok: false,
        message:
          'Introduce un correo electrónico válido.',
      }
    )
  }

  if (
    !motivosPermitidos.has(
      motivo
    )
  ) {
    return responder(
      response,
      400,
      {
        ok: false,
        message:
          'Selecciona un motivo válido.',
      }
    )
  }

  if (
    motivo === 'otro' &&
    (
      otroMotivo.length < 2 ||
      otroMotivo.length > 120
    )
  ) {
    return responder(
      response,
      400,
      {
        ok: false,
        message:
          'Indica brevemente el motivo de la consulta.',
      }
    )
  }

  if (
    mensaje.length < 10 ||
    mensaje.length > 5000
  ) {
    return responder(
      response,
      400,
      {
        ok: false,
        message:
          'El mensaje debe tener entre 10 y 5.000 caracteres.',
      }
    )
  }

  if (!privacidad) {
    return responder(
      response,
      400,
      {
        ok: false,
        message:
          'Debes aceptar la Política de privacidad.',
      }
    )
  }

  const apiKey =
    process.env.RESEND_API_KEY

  if (!apiKey) {
    console.error(
      'Falta la variable RESEND_API_KEY.'
    )

    return responder(
      response,
      500,
      {
        ok: false,
        message:
          'El servicio de contacto no está disponible en este momento.',
      }
    )
  }

  const nombreSeguro =
    limpiarCabecera(nombre)

  const motivoVisible =
    motivo === 'otro'
      ? otroMotivo
      : motivosPermitidos.get(
          motivo
        )

  const asunto =
    `Nueva consulta web: ${limpiarCabecera(
      motivoVisible
    )}`

  const texto = [
    'Nueva consulta desde la web de CMRBolsa',
    '',
    `Nombre: ${nombreSeguro}`,
    `Correo: ${email}`,
    `Motivo: ${motivoVisible}`,
    '',
    'Mensaje:',
    mensaje,
  ].join('\n')

  const html = `
    <div
      style="
        margin: 0;
        padding: 32px;
        background: #f4f7f6;
        font-family: Arial, Helvetica, sans-serif;
        color: #172321;
      "
    >
      <div
        style="
          max-width: 680px;
          margin: 0 auto;
          overflow: hidden;
          border: 1px solid #d9e3e1;
          border-radius: 20px;
          background: #ffffff;
        "
      >
        <div
          style="
            padding: 24px 28px;
            background: #173a36;
            color: #ffffff;
          "
        >
          <p
            style="
              margin: 0;
              font-size: 12px;
              font-weight: 700;
              letter-spacing: 0.16em;
              text-transform: uppercase;
              color: #7fd2c5;
            "
          >
            CMRBolsa
          </p>

          <h1
            style="
              margin: 10px 0 0;
              font-size: 24px;
              line-height: 1.25;
            "
          >
            Nueva consulta desde la web
          </h1>
        </div>

        <div
          style="
            padding: 28px;
          "
        >
          <p
            style="
              margin: 0 0 12px;
              line-height: 1.6;
            "
          >
            <strong>Nombre:</strong>
            ${escaparHtml(nombreSeguro)}
          </p>

          <p
            style="
              margin: 0 0 12px;
              line-height: 1.6;
            "
          >
            <strong>Correo:</strong>
            ${escaparHtml(email)}
          </p>

          <p
            style="
              margin: 0 0 24px;
              line-height: 1.6;
            "
          >
            <strong>Motivo:</strong>
            ${escaparHtml(motivoVisible)}
          </p>

          <div
            style="
              padding: 20px;
              border-radius: 14px;
              background: #f4f7f6;
              line-height: 1.7;
            "
          >
            ${convertirSaltosHtml(
              mensaje
            )}
          </div>

          <p
            style="
              margin: 24px 0 0;
              font-size: 13px;
              line-height: 1.6;
              color: #64716f;
            "
          >
            Pulsa «Responder» para contestar directamente a
            ${escaparHtml(email)}.
          </p>
        </div>
      </div>
    </div>
  `

  const controller =
    new AbortController()

  const timeout = setTimeout(
    () => controller.abort(),
    10000
  )

  try {
    const resendResponse =
      await fetch(
        'https://api.resend.com/emails',
        {
          method: 'POST',
          headers: {
            Authorization:
              `Bearer ${apiKey}`,
            'Content-Type':
              'application/json',
            'User-Agent':
              'CMRBolsa-Contacto/1.0',
            'Idempotency-Key':
              crearClaveIdempotencia({
                email,
                motivo,
                mensaje,
              }),
          },
          body: JSON.stringify({
            from:
              REMITENTE_CMRBOLSA,
            to: [
              CORREO_CMRBOLSA,
            ],
            reply_to: email,
            subject: asunto,
            text: texto,
            html,
          }),
          signal:
            controller.signal,
        }
      )

    const resultado =
      await resendResponse.json()

    if (!resendResponse.ok) {
      console.error(
        'Error de Resend:',
        resendResponse.status,
        resultado
      )

      return responder(
        response,
        502,
        {
          ok: false,
          message:
            'No se ha podido enviar la consulta. Inténtalo de nuevo en unos minutos.',
        }
      )
    }

    return responder(
      response,
      200,
      {
        ok: true,
      }
    )
  } catch (error) {
    console.error(
      'Error enviando el formulario:',
      error
    )

    return responder(
      response,
      502,
      {
        ok: false,
        message:
          'No se ha podido enviar la consulta. Inténtalo de nuevo en unos minutos.',
      }
    )
  } finally {
    clearTimeout(timeout)
  }
}
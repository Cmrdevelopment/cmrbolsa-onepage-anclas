import {
  useEffect,
  useRef,
  useState,
} from 'react'

let promesaPlayerJs = null

function cargarPlayerJs() {
  if (typeof window === 'undefined') {
    return Promise.resolve()
  }

  if (window.playerjs) {
    return Promise.resolve()
  }

  if (!promesaPlayerJs) {
    promesaPlayerJs = new Promise(
      (resolve, reject) => {
        const scriptExistente =
          document.querySelector(
            'script[data-bunny-playerjs="true"]'
          )

        if (scriptExistente) {
          if (window.playerjs) {
            resolve()
            return
          }

          scriptExistente.addEventListener(
            'load',
            resolve,
            { once: true }
          )

          scriptExistente.addEventListener(
            'error',
            reject,
            { once: true }
          )

          return
        }

        const script =
          document.createElement('script')

        script.src =
          'https://assets.mediadelivery.net/playerjs/playerjs-latest.min.js'

        script.async = true
        script.dataset.bunnyPlayerjs = 'true'

        script.addEventListener(
          'load',
          resolve,
          { once: true }
        )

        script.addEventListener(
          'error',
          reject,
          { once: true }
        )

        document.head.appendChild(script)
      }
    )
  }

  return promesaPlayerJs
}

export default function BunnyVideo({
  libraryId,
  videoId,
  title,
  className = '',
}) {
  const iframeRef = useRef(null)

  const [reinicio, setReinicio] =
    useState(0)

  const src =
    `https://player.mediadelivery.net/embed/${libraryId}/${videoId}` +
    '?autoplay=false' +
    '&preload=false' +
    '&loop=false' +
    '&muted=false' +
    '&playsinline=true' +
    '&rememberPosition=false' +
    '&compactControls=true' +
    '&showSpeed=false' +
    '&chromecast=false' +
    '&disableAirplay=true' +
    '&disableIosPlayer=true' +
    `&playerInstance=${reinicio}`

  useEffect(() => {
    let efectoActivo = true
    let reinicioSolicitado = false
    let temporizador = null

    function volverALaCaratula() {
      if (
        !efectoActivo ||
        reinicioSolicitado
      ) {
        return
      }

      reinicioSolicitado = true

      temporizador = window.setTimeout(
        () => {
          if (!efectoActivo) return

          setReinicio(
            (valorActual) =>
              valorActual + 1
          )
        },
        200
      )
    }

    function comprobarFinal(datos) {
      const informacion =
        datos?.data || datos

      const segundos = Number(
        informacion?.seconds
      )

      const duracion = Number(
        informacion?.duration
      )

      if (
        Number.isFinite(segundos) &&
        Number.isFinite(duracion) &&
        duracion > 0 &&
        segundos >= duracion - 0.3
      ) {
        volverALaCaratula()
      }
    }

    cargarPlayerJs()
      .then(() => {
        if (
          !efectoActivo ||
          !iframeRef.current ||
          !window.playerjs
        ) {
          return
        }

        const player =
          new window.playerjs.Player(
            iframeRef.current
          )

        player.on('ready', () => {
          if (!efectoActivo) return

          player.on(
            'ended',
            volverALaCaratula
          )

          player.on(
            'timeupdate',
            comprobarFinal
          )
        })
      })
      .catch((error) => {
        console.error(
          'No se pudo conectar con el reproductor de Bunny:',
          error
        )
      })

    return () => {
      efectoActivo = false

      if (temporizador) {
        window.clearTimeout(
          temporizador
        )
      }

      /*
       * No usamos player.off().
       * Al cambiar la key, React elimina el iframe anterior
       * y PlayerJS falla si intenta comunicarse con él.
       */
    }
  }, [reinicio])

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-[1.5rem] bg-black ${className}`}
    >
      <iframe
        key={reinicio}
        ref={iframeRef}
        src={src}
        title={title}
        loading="lazy"
        allow="encrypted-media"
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  )
}
import {
  useEffect,
  useState,
} from 'react'
import { ArrowUp } from 'lucide-react'

export default function BotonSubir() {
  const [visible, setVisible] =
    useState(false)

  useEffect(() => {
    const actualizarVisibilidad = () => {
      setVisible(window.scrollY > 500)
    }

    actualizarVisibilidad()

    window.addEventListener(
      'scroll',
      actualizarVisibilidad,
      {
        passive: true,
      }
    )

    return () => {
      window.removeEventListener(
        'scroll',
        actualizarVisibilidad
      )
    }
  }, [])

  const subirArriba = () => {
    const reducirMovimiento =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reducirMovimiento
        ? 'auto'
        : 'smooth',
    })
  }

  return (
    <div
      className={`pointer-events-none fixed bottom-24 right-4 z-[60] transition-all duration-300 sm:bottom-8 sm:right-8 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-3 opacity-0'
      }`}
      aria-hidden={!visible}
    >
      <button
        type="button"
        onClick={subirArriba}
        tabIndex={visible ? 0 : -1}
        aria-label="Volver al inicio de la página"
        title="Volver arriba"
        className="pointer-events-auto group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-cmr-green/35 bg-cmr-surface/95 text-cmr-green shadow-[0_18px_50px_rgba(20,50,46,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cmr-green hover:bg-cmr-green hover:text-white hover:shadow-[0_22px_60px_rgba(50,128,119,0.34)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cmr-green/25 sm:h-14 sm:w-14"
      >
        <span className="absolute inset-1 rounded-full border border-cmr-green/10 transition group-hover:border-white/20" />

        <ArrowUp
          className="relative h-5 w-5 transition duration-300 group-hover:-translate-y-0.5 sm:h-6 sm:w-6"
          strokeWidth={2.4}
          aria-hidden="true"
        />

        <span className="sr-only">
          Volver arriba
        </span>
      </button>
    </div>
  )
}
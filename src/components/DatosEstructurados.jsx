import { useEffect } from 'react'

import {
  datosEstructuradosBase,
} from '../data/datosEstructurados'

const SCRIPT_ID =
  'cmrbolsa-datos-estructurados'

export default function DatosEstructurados() {
  useEffect(() => {
    let script =
      document.getElementById(
        SCRIPT_ID
      )

    if (!script) {
      script =
        document.createElement(
          'script'
        )

      script.id = SCRIPT_ID
      script.type =
        'application/ld+json'

      document.head.appendChild(
        script
      )
    }

    script.textContent =
      JSON.stringify(
        datosEstructuradosBase
      )

    return () => {
      script?.remove()
    }
  }, [])

  return null
}
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import LegalPage from './pages/LegalPage'
import PorDondeEmpezar from './pages/PorDondeEmpezar'
import SolicitudMentoria from './pages/SolicitudMentoria'
import TestimoniosPage from './pages/TestimoniosPage'

import CmrbolsaPage from './pages/internas/CmrbolsaPage'
import ComunidadPage from './pages/internas/ComunidadPage'
import MentoriaPage from './pages/internas/MentoriaPage'
import SubstackPage from './pages/internas/SubstackPage'
import EventosPage from './pages/internas/EventosPage'
import SalaEscritaPage from './pages/internas/SalaEscritaPage'
import LibroPage from './pages/internas/LibroPage'

export default function App() {
  return (
    <Layout>
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/cmrbolsa"
          element={<CmrbolsaPage />}
        />

        <Route
          path="/comunidad-pev"
          element={<ComunidadPage />}
        />

        <Route
          path="/mentoria-pev"
          element={<MentoriaPage />}
        />

        <Route
          path="/substack"
          element={<SubstackPage />}
        />

        <Route
          path="/sala-escrita"
          element={<SalaEscritaPage />}
        />

        <Route
          path="/eventos"
          element={<EventosPage />}
        />

        <Route
          path="/testimonios"
          element={<TestimoniosPage />}
        />

        <Route
          path="/desgranando-la-esencia-del-mercado"
          element={<LibroPage />}
        />

        <Route
          path="/mi-libro"
          element={
            <Navigate
              to="/desgranando-la-esencia-del-mercado"
              replace
            />
          }
        />

        <Route
          path="/por-donde-empezar"
          element={<PorDondeEmpezar />}
        />

        <Route
          path="/solicitud-mentoria"
          element={<SolicitudMentoria />}
        />

        <Route
          path="/aviso-legal"
          element={<LegalPage type="aviso" />}
        />

        <Route
          path="/politica-privacidad"
          element={<LegalPage type="privacidad" />}
        />

        <Route
          path="/politica_de_cookies"
          element={<LegalPage type="cookies" />}
        />

        <Route
          path="/terminos_y_condiciones"
          element={<LegalPage type="terminos" />}
        />

        <Route
          path="/privacidad"
          element={
            <Navigate
              to="/politica-privacidad"
              replace
            />
          }
        />

        <Route
          path="/cookies"
          element={
            <Navigate
              to="/politica_de_cookies"
              replace
            />
          }
        />

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />
      </Routes>
    </Layout>
  )
}
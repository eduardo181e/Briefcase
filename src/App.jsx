import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home"
import AdminIns from "./components/InstructionsAdmin_es"
import AdminCaja from './components/InstructionsCaja_es';
import ReflexsEn from './components/InstructionsReflex';
import Reflexs from './components/InstructionsReflex_es';
import AdminInsEn from './components/InstructionsAdmin';
import AdminCajaEn from './components/InstructionsCaja';
function App() {
  return (
    <>
    
      <Router>
      <Routes>
        <Route path="/Briefcase" element={<Home />} />
        <Route path="/Briefcase/admin" element={<AdminIns />} />
        <Route path="/Briefcase/adminEn" element={<AdminInsEn />} />
        <Route path="/Briefcase/caja" element={<AdminCaja />} />
        <Route path="/Briefcase/cajaEn" element={<AdminCajaEn />} />
        <Route path="/Briefcase/reflexs" element={<Reflexs />} />
        <Route path="/Briefcase/reflexsEn" element={<ReflexsEn />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

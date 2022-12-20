import { BrowserRouter, Routes ,Route} from "react-router-dom"
import Home from "../pages/Home"
import PageCalculadora from "../pages/Calculadora"
import PageCofre from "../pages/Cofre"

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculadora" element={<PageCalculadora/>} />
        <Route path="/cofre" element={<PageCofre />} />
      </Routes>
    </BrowserRouter>
  )
}
import { BrowserRouter, Routes ,Route} from "react-router-dom"
import  PageHome from "../pages/Home"
import PageCalculadora from "../pages/Calculadora"
import PageCofre from "../pages/Cofre"

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/calculadora" element={<PageCalculadora/>} />
        <Route path="/cofre" element={<PageCofre />} />
      </Routes>
    </BrowserRouter>
  )
}
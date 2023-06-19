import { BrowserRouter, Routes ,Route} from "react-router-dom"
import  PageHome from "../pages/Home"
import PageCalculadora from "../pages/Calculadora"

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/calculadora" element={<PageCalculadora/>} />
      </Routes>
    </BrowserRouter>
  )
}
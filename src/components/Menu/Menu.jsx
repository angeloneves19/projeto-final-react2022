import "./Menu.css"
import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <nav>
       <a>
         <Link to="/" className="logo">Página inicial</Link>
           </a>
              <ul className="nav-list">
                <li>
              <a>
             <Link to="/calculadora" className="logo"> Calculadora </Link>
          </a>
       </li>
      <li>
         <a>
         <Link to="/cofre" className="logo"> Cofre </Link>
           </a>
        </li>
    </ul>
</nav>
  )
}

export default Menu
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <a>
        <Link to="/" className="logo">Ângelo Codes</Link>
      </a>
      <ul className="nav-list">
        <li>
          <Link to="/calculadora" className="logo">Calculadora</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
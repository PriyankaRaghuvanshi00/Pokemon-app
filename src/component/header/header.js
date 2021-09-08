import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return( <header>
      <nav className="nav">
         <ul>
            <NavLink to="/"><li>PokeMon</li></NavLink>
         </ul>
      </nav>
   </header>)
}

export default Header;
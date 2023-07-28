
import { Link } from "react-router-dom"
import Hamburguer from "../MenuHamb/Hamburguer"


const Header = () => {
  
  return (
    <header className="custom-header fixed shadow-sm">
      <Link className="custom-logo-link-header" to="/Home">Cine Flix </Link>
      <Link className="custom-menu-link-header" to="/favoritos">Meus Filmes</Link>
      <Hamburguer  />
      
      {/* menu-haburguer */}
      
    </header>
  )
}

export default Header
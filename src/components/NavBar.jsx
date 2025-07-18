import { NavLink } from "react-router-dom"
import "./NavBar.css"

function NavBar() {

  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link" 
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      {/* Add a button with the logout function to handle the onClick event */}
      <button onClick={logout}>Logout</button>
    </nav>
  )
}

export default NavBar

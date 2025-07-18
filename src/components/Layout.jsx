import { useState } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

function Layout() {
// Add code to mock user authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = () => {
    setIsLoggedIn(true)
  }

  const logout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className="layout">
      <NavBar logout={logout} />
      <Outlet context={login} />
    </div>
  )
}

export default Layout

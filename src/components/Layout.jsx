import { useState, useEffect } from "react"
import { Outlet, Navigate, useNavigate } from "react-router-dom"
import NavBar from "./NavBar"

function Layout() {
// Add code to mock user authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false)
// call useNavigate and define navigate function
  const navigate = useNavigate()

  const login = () => {
    setIsLoggedIn(true)
  }

  const logout = () => {
    setIsLoggedIn(false)
  }
  // Add programmatic navigation for login and logout
  useEffect(() => {
    if (isLoggedIn) {
      // navigates to Home route if user is logged in
      navigate("/")
    } else {
      // navigates to Login route if user is logged out
      navigate("/login")
    }
  }, [isLoggedIn])

  return (
    <div className="layout">
{/* Add conditional rendering so users have to be logged in to see pages on the site */}
      {isLoggedIn ? <NavBar logout={logout}  /> : <Navigate to="/login" />}
      <Outlet context={login}/>
    </div>
  )
}

export default Layout

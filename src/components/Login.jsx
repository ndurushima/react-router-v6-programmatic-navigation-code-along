import { useState } from "react"
// import useOutletContext
import { useOutletContext } from "react-router-dom"

function Login() {
  // Access the login function passed as context
  const login = useOutletContext()
  const [username, setUsername] = useState("")

  function handleChange(e) {
    setUsername(e.target.value)
  }

  function handleLogin(e) {
    e.preventDefault()
    // Call the login function when the form is submitted
    login()
  }

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Username</label>
      <div>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default Login

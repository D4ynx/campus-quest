import { useState } from 'react'
import api from '../services/api'

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      const res = await api.post("/auth/login", formData)
      localStorage.setItem("token", res.data.token)
      console.log("Logged in, token stored")
    } catch (err) {
      console.error("Login failed", err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Log In</button>
    </form>
  )
}

export default Login
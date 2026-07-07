import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import api from '../services/api'

function Register(){
    const [formData, setFormData] = useState({ email: "", password: "", name: "", username: ""})
    const navigate = useNavigate()

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        try{
            const res = await api.post("/auth/register", formData)
            navigate("/login")
        } catch (err) {
            console.error("Registration failed", err)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
            />
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
            <button type="submit">Register</button>
            <p> Already have an account? <Link to="/login"> Login </Link></p>
        </form>
    )
}

export default Register
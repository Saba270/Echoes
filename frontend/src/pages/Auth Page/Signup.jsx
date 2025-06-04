import "./signup.scss"
import { useFormik } from "formik"
import { Link,useNavigate } from "react-router"
import { signUpValidationSchema } from "./ValidationSchemas"
import axios from "axios"
import { useState, useContext } from "react"
import { UserContext } from "../../shared/UserContext"

export const Signup = () => {
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const form = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            passwordMatched: true
        },
        validationSchema: signUpValidationSchema,
        onSubmit: async (values) => {
            if (values.password !== values.confirmPassword) {
                form.setFieldValue("passwordMatched", false)
            } else {
                form.setFieldValue("passwordMatched", true)
            }

            console.log("submitting")

            axios.post("http://localhost:3000/signup", {
                username: form.values.username,
                email: form.values.email,
                password: form.values.password,
                memories: [1]
            }).then((response) => {
                if (response.data.keyValue) {
                    setDatabaseError(Object.keys(response.data.keyValue)[0])
                } else {
                    setDatabaseError("")
                    setUser({
                        username: form.values.username,
                        email: form.values.email,
                        password: form.values.password,
                        memories: [1]
                    })
                    navigate("/")
                }
            })
        }
    })
    ///continue with displaying error of duplicate email and username
    const [databaseError, setDatabaseError] = useState("")

    return (
        <div className="signup-wrapper">
            <figure className="logo-wrapper">
                <img src="src\assets\Logo.jpg" alt="logo" />
                <p>Echoes</p>
            </figure>
            <h2>Begin Your Journey</h2>
            <p>Create your account to start preserving memories</p>

            <form onSubmit={form.handleSubmit}>
                <label htmlFor="fullName">
                    <p>Username</p>
                    <input type="text" value={form.values.username} onChange={form.handleChange} onBlur={form.handleBlur} name="username" id="username" placeholder="Username" />
                    {form.errors.username && form.touched.username && <span className="error-msg">{form.errors.username}</span>}
                </label>

                <label htmlFor="email">
                    <p>Email</p>
                    <input type="text" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} name="email" placeholder="you@example.com" />
                    {form.errors.email && form.touched.email && <span className="error-msg">{form.errors.email}</span>}
                </label>

                <label htmlFor="password">
                    <p>Password</p>
                    <input type="password" value={form.values.password} onChange={form.handleChange} onBlur={form.handleBlur} name="password" placeholder="Password" />
                    {form.errors.password && form.touched.password && <span className="error-msg">{form.errors.password}</span>}
                </label>

                <label htmlFor="confirmPassword">
                    <p>Confirm Password</p>
                    <input type="password" value={form.values.confirmPassword} onChange={form.handleChange} onBlur={form.handleBlur} name="confirmPassword" placeholder="Password" />
                    {form.errors.confirmPassword && form.touched.confirmPassword && <span className="error-msg">{form.errors.confirmPassword}</span>}
                    {!form.values.passwordMatched && <span className="error-msg">Passwords do not match</span>}
                </label>

                <div>
                    <button className="gradient-btn" type="submit">Create Account</button>
                    {databaseError && <span className="error-msg">Account with the same {databaseError} already exists</span>}
                </div>
            </form>

            <p>Already have an account?<span><Link to={"/login"} id="signin">Sign in</Link></span> </p>
        </div>
    )
}
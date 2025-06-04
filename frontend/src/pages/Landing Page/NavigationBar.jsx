import {useNavigate} from "react-router"

export const NavigationBar = () => {
    const navigate = useNavigate()

    return (
        <nav>
            <figure className="logo-wrapper">
                <img src="src\assets\Logo.jpg" alt="logo" />
                <p>Echoes</p>
            </figure>

            <ul className="nav-links">
                <li><a href="">Dashboard</a></li>
                <li><a href="">Concept</a></li>
                <li><a href="">Experience</a></li>
                <li><a href="">Features</a></li>
            </ul>

            <div>
                <button onClick={() => {navigate("/login")}} id="login-btn">Log in</button>
                <button onClick={() => {navigate("/signup")}} className="gradient-btn" id="signup-btn">Begin your journey</button>
            </div>
        </nav>
    )
}
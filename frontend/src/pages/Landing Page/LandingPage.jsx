import "./LandingPage.scss"
import { NavigationBar } from "./NavigationBar"
import { HeroSection } from "./HeroSection"
import { useContext } from "react";
import { UserContext } from "../../shared/UserContext";

export const LandingPage = () => {
    const { user, setUser } = useContext(UserContext)
    console.log(user)
    return (
        <>
            <div className="background-div">
                <div className="orb"></div>
            </div>

            <header>
                <NavigationBar />
            </header>
            <HeroSection />
        </>
    )
}
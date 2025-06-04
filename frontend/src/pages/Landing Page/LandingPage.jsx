import "./LandingPage.scss"
import { NavigationBar } from "./NavigationBar"
import { HeroSection } from "./HeroSection"

export const LandingPage = () => {
    return (
        <>
            <div className="background-div">
                <div className="orb"></div>
            </div>

            <header>
                <NavigationBar />
                <HeroSection />
            </header>
        </>
    )
}
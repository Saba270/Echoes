import {Routes, Route } from "react-router";
import './App.scss'
import { LandingPage } from './pages/Landing Page/LandingPage.jsx'
import { Signup } from "./pages/Auth Page/Signup.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
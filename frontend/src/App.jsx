import { Routes, Route } from "react-router";
import './App.scss'
import { LandingPage } from './pages/Landing Page/LandingPage.jsx'
import { Signup } from "./pages/Auth Page/Signup.jsx";
import { UserContext } from "./shared/UserContext.jsx";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("")

  return (
    <>
      <UserContext.Provider value={{user,setUser}}>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserContext.Provider>
    </>
  )
}

export default App
import "./globalCss.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/landingPage.tsx";
import ContactPage from "./pages/contactPage.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

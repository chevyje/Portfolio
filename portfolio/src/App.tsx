import "./globalCss.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/landingPage.tsx";
import ContactPage from "./pages/contactPage.tsx";
import ProjectsPage from "./pages/projectsPage.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path={"/projects"} element={<ProjectsPage />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

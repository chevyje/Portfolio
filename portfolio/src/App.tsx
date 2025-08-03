import "./globalCss.css"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import LandingPage from "./pages/landingPage.tsx";
import ContactPage from "./pages/contactPage.tsx";
import ProjectsPage from "./pages/projectsPage.tsx";
import ProjectPage from "./pages/projectPage.tsx";
import ErrorPage from "./pages/404Page.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Navigate to={"/en"} replace/>} />

                <Route path={"/:lang"}>
                    <Route index element={<LandingPage />} />
                    <Route path={"contact"} element={<ContactPage />} />
                    <Route path={"projects"} element={<ProjectsPage />} />
                    <Route path={"project/:id"} element={<ProjectPage />} />
                </Route>

                <Route path={"/*"} element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

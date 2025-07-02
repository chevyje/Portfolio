import "./globalCss.css"
import {BrowserRouter} from "react-router-dom";
import LandingPage from "./pages/landingPage.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <LandingPage />
        </BrowserRouter>
    </>
  )
}

export default App

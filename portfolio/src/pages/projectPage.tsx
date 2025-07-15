import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
import lang from "../lang/en.json"

import { useParams, useNavigate } from "react-router";


function projectPage() {
    const { id } = useParams();
    let navigate = useNavigate();
    const project = [...lang.projectsObjects].find((project) => project.id === id);
    if (!project) { return navigate("/projects"); }
    return (
        <>
            <Navbar />
            <h1>{project.title}</h1>
            <Footer />
        </>
    )
}

export default projectPage;
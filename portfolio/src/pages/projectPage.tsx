import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
import lang from "../lang/en.json"
import Style from "./projectPage.module.css"

import { useParams, useNavigate } from "react-router";

function projectPage() {
    const { id } = useParams();
    let navigate = useNavigate();
    const project = [...lang.projectsObjects].find((project) => project.id === id);
    if (!project) { navigate("/projects"); return null; }
    return (
        <>
            <div className={Style.wrapper}>
                <Navbar />
                <h1 className={Style.title}>{project.title}</h1>
                <p className={Style.description}><img src={`/pictures/${project.image}`} alt={project.image} className={Style.image}/>{project.description}</p>
                {project.url != "" && <a className={Style.button} style={{ backgroundColor: '#0BB7F6', color: 'white', }} href={project.url} target={"_blank"} rel={"noopener noreferrer"}>{lang.moreButton}</a>}
                <Footer style={{ margin: "auto 0 0 0" }}/>
            </div>
        </>
    )
}

export default projectPage;
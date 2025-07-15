import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
import lang from "../lang/en.json";
import Style from "./projectsPage.module.css";

import { useNavigate } from "react-router";

function projectsPage() {
    const latestProjects = [...lang.projectsObjects].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
    let navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className={Style.projectsContainer}>
                <div className={Style.projectContainer}>
                    {latestProjects.map((project, index) => (
                        <div className={Style.project} key={index} onClick={() => navigate(`/project/${project.id}`)}>
                            <div className={Style.projectImage}></div>
                            <div className={Style.projectInfo}>{project.title}</div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}
export default projectsPage;

function parseDate(str: string) {
    const [day, month, year] = str.split("-");
    return new Date(`${year}-${month}-${day}`);
}
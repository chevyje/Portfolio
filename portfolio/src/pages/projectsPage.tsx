import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
import Style from "./projectsPage.module.css";

import { useNavigate } from "react-router";
import {useEffect, useState} from "react";
import {loadLanguage, useLanguage} from "../scripts/language.ts";

function projectsPage() {
    let navigate = useNavigate();
    const [lang, setLang] = useState<any>(null);
    const [latestProjects, setLatestProjects] = useState<any>(null);
    const language = useLanguage();

    useEffect(() => {
        if (!language) return;
        void (async () => {
            const langData = await loadLanguage(language);
            const latestProjects = [...langData.projectsObjects].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
            setLang(langData);
            setLatestProjects(latestProjects);
        })();
    }, [language]);
    return (
        <>
            {lang &&<div className={Style.wrapper}>
                <Navbar />
                <h1 className={Style.title}>{lang.projects}</h1>
                <div className={Style.projectsContainer}>
                    <div className={Style.projectContainer}>
                        {latestProjects.map((project: any, index: number) => (
                            <div className={Style.project} key={index} onClick={() => navigate(`/${language}/project/${project.id}`)}>
                                <img src={`/pictures/${project.image}`} alt={project.image} className={Style.projectImage}/>
                                <div className={Style.projectInfo}>{project.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer style={{ margin: "auto 0 0 0" }}/>
            </div>}
        </>
    )
}
export default projectsPage;

function parseDate(str: string) {
    const [day, month, year] = str.split("-");
    return new Date(`${year}-${month}-${day}`);
}
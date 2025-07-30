import Style from "./landingPage.module.css"
import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
import lang from "../lang/en.json";

// React imports
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function LandingPage() {
    const latestProjects = [...lang.projectsObjects].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()).slice(0,3);
    const { hash } = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        if (hash) {
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    }, [hash]);

    return (
        <>
            <div className={Style.wrapper}>
                <Navbar/>
                {/*background top*/}
                <div className={`${Style.background} ${Style.large}`}>`
                    <svg width="1920" height="1074" viewBox="0 0 1920 1074" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M171.5 890.5C76.5 886.5 0 932 0 932V0H1920V1073.5C1830 1073.5 1663 871 1431.5 871C1170.5 871 1089 1014.5 723 1018.5C498.881 1020.95 400 900.121 171.5 890.5Z" fill="#0BB7F6"/>
                    </svg>
                </div>
                <div className={`${Style.background} ${Style.midLarge}`}>
                    <svg width="769" height="987" viewBox="0 0 769 987" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M103.5 900C67.5771 908.926 0 932.412 0 932.412V0H769V986.5C732.953 986.5 655 932.412 596 932.412C530 932.412 447.269 986.5 353 965C279 948.123 186 879.5 103.5 900Z" fill="#0BB7F6"/>
                    </svg>
                </div>
                <div className={`${Style.background} ${Style.mid}`}>
                    <svg width="481" height="711" viewBox="0 0 481 711" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M481 0H0V711C41.4269 703.428 59.8417 674.945 106.5 676.5C153.158 678.055 204 707.406 247 707C290 706.594 342.902 681.975 400 681.5C457.098 681.025 481 693 481 693V0Z" fill="#0BB7F6"/>
                    </svg>
                </div>
                <div className={`${Style.background} ${Style.small}`}>
                    <svg width="320" height="518" viewBox="0 0 320 518" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M320 0H0V513C27.5605 507.462 39.8115 493.63 70.8524 494.768C101.893 495.905 135.717 517.371 164.324 517.075C192.931 516.778 228.126 498.772 266.112 498.425C304.099 498.077 320 506.835 320 506.835V0Z" fill="#0BB7F6"/>
                    </svg>
                </div>

                {/*Intro with picture and socials*/}
                <div className={Style.homeContainer}>
                    <div className={Style.intro}>
                        <h6>{lang.landingPage.hey}</h6>
                        <h1>{lang.landingPage.Jurre}</h1>
                        <h2>{lang.landingPage.function}</h2>
                            <div>
                                <a className={Style.button} style={{ backgroundColor: '#0040FF', color: 'white'}} href={"/#about"}>{lang.landingPage.moreButton}</a>
                                <NavLink className={Style.button} style={{ backgroundColor: 'white', color: '#0040FF', border: '2px solid #0040FF'}} to={"/contact"}>{lang.landingPage.contactMe}</NavLink>
                            </div>
                        </div>
                    <div className={Style.picture}></div>
                </div>
                <div className={Style.socials}>
                    <a className={Style.social} href={"https://www.linkedin.com/in/jurre-blankers-34a5562ab/?trk=public-profile-join-page"} target={"_blank"} rel={"noopener noreferrer"}><img src={"/icons/linked-in.svg"} alt={"linked in"} /></a>
                    <a className={Style.social} href={"https://github.com/chevyje"} target={"_blank"} rel={"noopener noreferrer"}><img src={"/icons/github.svg"} alt={"github"} /></a>
                    <a className={Style.social} href={"https://discord.gg/dC4BYJ7sAe"} target={"_blank"} rel={"noopener noreferrer"}><img src={"/icons/discord.svg"} alt={"discord"} /></a>
                </div>

                {/*About section*/}
                <div className={Style.about} id={"about"}>
                    <h1>{lang.landingPage.aboutMe}</h1>
                    <p>{lang.landingPage.paragraph1}</p>
                    <p>{lang.landingPage.paragraph2}</p>
                    <p>{lang.landingPage.paragraph3}</p>
                    <p>{lang.landingPage.paragraph4}</p>
                </div>

                {/*education section*/}
                <div className={Style.education} id={"education"}>
                    <h2 className={Style.timelineTitle}>{lang.education}</h2>
                    <div className={Style.timelineLine}>
                        {lang.educationPoints.map((item, index) => (
                            <div className={Style.timelineEntry} key={index}>
                                <div className={`${Style.timelineCard} ${index % 2 === 0 ? Style.left : Style.right}`} >
                                    <h3 className={Style.educationTitle}>{item.title}</h3>
                                    <p className={Style.years}>{item.years}</p>
                                    <p className={Style.educationSubtitle}>{item.subtitle}</p>
                                </div>
                                <div className={Style.dot}></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/*Latest Projects*/}
                <div className={Style.projects}>
                    <h2>{lang.latestProjects}</h2>
                    <div className={Style.projectContainer}>
                        {latestProjects.map((project, index) => (
                            <div className={Style.project} key={index} onClick={() => navigate(`/project/${project.id}`)}>
                                <img src={`/pictures/${project.image}`} alt={project.image} className={Style.projectImage}/>
                                <div className={Style.projectInfo}>{project.title}</div>
                            </div>
                        ))}
                    </div>
                    <NavLink className={Style.button} style={{border: '1px solid black', margin: '10px', color: "black"}} to={"/projects"}>More Projects</NavLink>
                </div>

                <Footer />
            </div>
        </>
    )
}
export default LandingPage;

function parseDate(str: string) {
    const [day, month, year] = str.split("-");
    return new Date(`${year}-${month}-${day}`);
}
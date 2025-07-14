import Style from "./landingPage.module.css"
import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
import lang from "../lang/en.json";

// React imports
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function LandingPage() {
    const latestProjects = [...lang.projectsObjects].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()).slice(0,3);
    const { hash } = useLocation();

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
                        <h6>{lang.hey}</h6>
                        <h1>Jurre Blankers</h1>
                        <h2>{lang.function}</h2>
                            <div>
                                <a className={Style.button} style={{ backgroundColor: '#0040FF', color: 'white'}} href={"/#about"}>{lang.moreButton}</a>
                                <NavLink className={Style.button} style={{ backgroundColor: 'white', color: '#0040FF', border: '2px solid #0040FF'}} to={"/contact"}>{lang.contactMe}</NavLink>
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
                    <h1>{lang.aboutMe}</h1>
                    <p>{lang.paragraph1}</p>
                    <p>{lang.paragraph2}</p>
                    <p>{lang.paragraph3}</p>
                    <p>{lang.paragraph4}</p>
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
                            <div className={Style.project} key={index}>
                                <div className={Style.projectImage}></div>
                                <div className={Style.projectInfo}>{project.title}</div>
                            </div>
                        ))}
                    </div>
                    <NavLink className={Style.button} style={{border: '1px solid black', margin: '10px', color: "black"}} to={"/projects"}>More Projects</NavLink>
                </div>

                <Footer />
                {/*Background footer*/}
                <div className={`${Style.backgroundFooter} ${Style.large}`}>
                    <svg width="1920" height="268" viewBox="0 0 1920 268" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1107.5 91.0003C1002.17 97.5154 671 0.00146484 451 0.00146484C306 0.00146484 54 108.998 0 141.998V267.998H1920V83.5021C1822.5 26.5 1706 1.5 1643.5 3C1477.05 6.99485 1253 82 1107.5 91.0003Z" fill="#0BB7F6"/>
                    </svg>
                </div>
                <div className={`${Style.backgroundFooter} ${Style.midLarge}`}>
                    <svg width="769" height="231" viewBox="0 0 769 231" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M443.163 46.5023C392.932 54.2601 242.595 13.5002 169.5 13.5002C96.4049 13.5002 23.7083 50.5002 0 82.0002V231.001H769V46.5023C769 46.5023 701 7.27178e-05 657.5 0C614 -7.27176e-05 493.393 38.7445 443.163 46.5023Z" fill="#0BB7F6"/>
                    </svg>
                </div>
                <div className={`${Style.backgroundFooter} ${Style.mid}`}>
                    <svg width="481" height="229" viewBox="0 0 481 229" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M87 12.2786C39.909 12.2786 2.4 34.2999 0 37.4999V229H481V2C481 2 478 1.27145 473.5 0.778709C405 -6.72187 348.567 42.4138 270.5 42.7784C197.116 43.1212 153.5 12.2786 87 12.2786Z" fill="#0BB7F6"/>
                    </svg>
                </div>
                <div className={`${Style.backgroundFooter} ${Style.small}`}>
                    <svg width="320" height="201" viewBox="0 0 320 201" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M57.8794 10.7773C26.5507 10.7773 1.59667 30.106 0 32.9148V201H320V1.75546C320 1.75546 318.004 1.11599 315.01 0.683496C269.439 -5.89999 231.895 37.2279 179.958 37.5479C131.138 37.8487 102.121 10.7773 57.8794 10.7773Z" fill="#0BB7F6"/>
                    </svg>
                </div>
            </div>
        </>
    )
}
export default LandingPage;

function parseDate(str: string) {
    const [day, month, year] = str.split("-");
    return new Date(`${year}-${month}-${day}`);
}
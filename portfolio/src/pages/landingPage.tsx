import Style from "./landingPage.module.css"
import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
import lang from "../lang/en.json";

function LandingPage() {
    const latestProjects = [...lang.projects1].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()).slice(0,3);

    return (
        <>
            <div className={Style.wrapper}>
            <Navbar/>
            <div className={Style.background}>
                <svg width="1920" height="1074" viewBox="0 0 1920 1074" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M171.5 890.5C76.5 886.5 0 932 0 932V0H1920V1073.5C1830 1073.5 1663 871 1431.5 871C1170.5 871 1089 1014.5 723 1018.5C498.881 1020.95 400 900.121 171.5 890.5Z" fill="#0BB7F6"/>
                </svg>
            </div>
            <div className={Style.homeContainer}>
              <div className={Style.intro}>
                  <h6>{lang.hey}</h6>
                  <h1>Jurre Blankers</h1>
                  <h2>{lang.function}</h2>
                  <div>
                      <div className={Style.button} style={{ backgroundColor: '#0040FF', color: 'white'}}>{lang.moreButton} </div>
                      <div className={Style.button} style={{ backgroundColor: 'white', color: '#0040FF', border: '2px solid #0040FF'}}>{lang.contactButton}</div>
                  </div>
              </div>
              <div className={Style.picture}></div>
          </div>
            <div className={Style.socials}>
                <div><img src={"/icons/linked-in.svg"} alt={"linked in"} /></div>
                <div><img src={"/icons/github.svg"} alt={"github"} /></div>
                <div><img src={"/icons/discord.svg"} alt={"discord"} /></div>
            </div>
            <div className={Style.about} id={"about"}>
                <h1>{lang.aboutMe}</h1>
                <p>{lang.paragraph1}</p>
                <p>{lang.paragraph2}</p>
                <p>{lang.paragraph3}</p>
                <p>{lang.paragraph4}</p>
            </div>

            <div className={Style.educationBackgroundTop}>
                <svg width="1920" height="242" viewBox="0 0 1920 242" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M444.5 166.5C275.177 146.58 125 57.5001 0 0.324219V241.5H1920V43C1880 58.5 1804 226 1584.5 229C1362.52 232.034 1141.5 65.0001 898.5 67.5001C717.976 69.3574 614.5 186.5 444.5 166.5Z" fill="#0BB7F6"/>
                </svg>
            </div>
            <div className={Style.education} id={"education"}>
                <h2 className={Style.timelineTitle}>{lang.education}</h2>
                <div className={Style.timelineLine}>
                    {lang.educationPoints.map((item, index) => (
                        <div className={Style.timelineEntry} key={index}>
                            <div className={`${Style.timelineCard} ${index % 2 === 0 ? Style.left : Style.right}`} >
                                <h3>{item.title}</h3>
                                <p className={Style.years}>{item.years}</p>
                                <p>{item.subtitle}</p>
                            </div>
                            <div className={Style.dot}></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={Style.educationBackgroundBottom}>
                <svg width="1920" height="155" viewBox="0 0 1920 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1734.5 154.5C1819.59 150.04 1866.5 135 1920 108V0.5H0V127C105 101.5 311.5 50.0004 441 52.5004C601.847 55.6056 704 121.063 845.5 124.5C941 126.82 1142.74 83.5165 1334.5 77.0004C1437.5 73.5004 1610.5 161 1734.5 154.5Z" fill="#0BB7F6"/>
                </svg>
            </div>

            <div className={Style.projects}>
                <h2>Latest Projects</h2>
                <div className={Style.projectContainer}>
                    {latestProjects.map((project, index) => (
                        <div className={Style.project} key={index}>
                            <div className={Style.projectImage}></div>
                            <div className={Style.projectInfo}>{project.title}</div>
                        </div>
                    ))}
                </div>
                <div className={Style.button} style={{border: '1px solid black', margin: '10px'}}>More Projects</div>
            </div>
            <Footer />
            <div className={Style.backgroundFooter}>
                <svg width="1920" height="268" viewBox="0 0 1920 268" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1107.5 91.0003C1002.17 97.5154 671 0.00146484 451 0.00146484C306 0.00146484 54 108.998 0 141.998V267.998H1920V83.5021C1822.5 26.5 1706 1.5 1643.5 3C1477.05 6.99485 1253 82 1107.5 91.0003Z" fill="#0BB7F6"/>
                </svg>
            </div>
            </div>
        </>
    )
}

function parseDate(str: string) {
    const [day, month, year] = str.split("-");
    return new Date(`${year}-${month}-${day}`);
}
export default LandingPage;
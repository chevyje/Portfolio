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

                {/*About section*/}
                <div className={Style.about} id={"about"}>
                    <h1>{lang.aboutMe}</h1>
                    <p>{lang.paragraph1}</p>
                    <p>{lang.paragraph2}</p>
                    <p>{lang.paragraph3}</p>
                    <p>{lang.paragraph4}</p>
                </div>

                {/*Education background top*/}
                <div className={`${Style.educationBackgroundTop} ${Style.large}`}>
                    <svg width="1920" height="242" viewBox="0 0 1920 242" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M444.5 166.5C275.177 146.58 125 57.5001 0 0.324219V241.5H1920V43C1880 58.5 1804 226 1584.5 229C1362.52 232.034 1141.5 65.0001 898.5 67.5001C717.976 69.3574 614.5 186.5 444.5 166.5Z" fill="#0BB7F6"/>
                    </svg>
                </div>
                <div className={`${Style.educationBackgroundTop} ${Style.midLarge}`}>
                    <svg width="769" height="88" viewBox="0 0 769 88" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M198.5 47.5C139 40 58.5 12.5 0 47.5V87.5H769V12.5C752.979 28.0087 719.414 50.4982 631.5 53.5C542.593 56.5358 512.827 -2.2316 415.5 0.269813C343.196 2.12811 272.415 56.8171 198.5 47.5Z" fill="#0BB7F6"/>
                    </svg>
                </div>
                <div className={`${Style.educationBackgroundTop} ${Style.mid}`}>
                    <svg width="481" height="51" viewBox="0 0 481 51" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M80 1.00015C43.5 3.00565 6.5 22.5002 0 25.5002V51H481V25C459.608 25.9416 454.61 34.9453 427 34.5C365 33.5 345 1 294 1C246.5 1 229 25.5002 185 25.5002C151.5 25.5002 125.5 -1.49985 80 1.00015Z" fill="#0BB7F6"/>
                    </svg>
                </div>
                <div className={`${Style.educationBackgroundTop} ${Style.small}`}>
                    <svg width="320" height="53" viewBox="0 0 320 53" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M53.4998 0.230535C29.217 2.23703 4.32432 13.9985 0 17V52.5H320V15.9468C305.769 16.8889 303.443 25.8562 285.074 25.4106C243.827 24.4101 231.429 0.23053 197.5 0.23053C165.899 0.23053 153.349 16.4063 124.077 16.4063C101.79 16.4063 83.77 -2.27071 53.4998 0.230535Z" fill="#0BB7F6"/>
                    </svg>
                </div>

                {/*Education section*/}
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

                {/*Education background bottom*/}
                <div className={`${Style.educationBackgroundBottom} ${Style.large}`}>
                    <svg width="1920" height="155" viewBox="0 0 1920 155" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1734.5 154.5C1819.59 150.04 1866.5 135 1920 108V0.5H0V127C105 101.5 311.5 50.0004 441 52.5004C601.847 55.6056 704 121.063 845.5 124.5C941 126.82 1142.74 83.5165 1334.5 77.0004C1437.5 73.5004 1610.5 161 1734.5 154.5Z" fill="#0BB7F6"/>
                    </svg>
                </div>
                <div className={`${Style.educationBackgroundBottom} ${Style.midLarge}`}>
                    <svg width="769" height="108" viewBox="0 0 769 108" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M769 97.1282V0H0V82.4999C42.0547 56.9855 124.762 39.0955 176.63 41.5969C241.052 44.7038 284.326 75.5608 341 78.9999C379.25 81.3211 454.92 46.5 532 46.5C588.5 46.5 663.5 99.9113 700.5 106C737.5 112.089 769 97.1282 769 97.1282Z" fill="#0BB7F6"/>
                    </svg>
                </div>
                <div className={`${Style.educationBackgroundBottom} ${Style.mid}`}>
                    <svg width="481" height="68" viewBox="0 0 481 68" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M481 42V0H0V45.5C0 45.5 34.5 21.3767 69.5 18.5C135.731 13.0564 166.596 64.9262 233 67.5C297.5 70 329 39 396.5 35.5C423.538 34.098 481 42 481 42Z" fill="#0BB7F6"/>
                    </svg>
                </div>
                <div className={`${Style.educationBackgroundBottom} ${Style.small}`}>
                    <svg width="320" height="42" viewBox="0 0 320 42" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M320 27.0746V-3.62396e-05L0 3.62396e-05V30.5764C0 30.5764 22.7152 19.6088 46 16.7307C90.062 11.2843 112.823 38.6555 157 41.2306C199.911 43.7319 218.094 27.2324 263 23.7306C280.988 22.328 320 27.0746 320 27.0746Z" fill="#0BB7F6"/>
                    </svg>
                </div>

                {/*Latest Projects*/}
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

function parseDate(str: string) {
    const [day, month, year] = str.split("-");
    return new Date(`${year}-${month}-${day}`);
}
export default LandingPage;
import Style from "./navbar.module.css";
import lang from "../lang/en.json"

function navbar() {
    return (
        <>
            <div className={Style.container}>
                <div className={Style.logo}></div>
                <div className={Style.navigations}>
                    <a href="/">{lang.home}</a>
                    <a href="/#about">{lang.about}</a>
                    <a href="/#education">{lang.education}</a>
                    <a href="/projects">{lang.projects}</a>
                    <a href="/contact">{lang.contact}</a>
                </div>
                <div className={Style.hamburger}><img src={"/icons/hamburger.svg"} alt={"hamburger"} width="30px" height="auto" /></div>
            </div>
        </>
    )
}

export default navbar;
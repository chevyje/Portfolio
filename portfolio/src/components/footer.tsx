import Style from "./footer.module.css"
import lang from "../lang/en.json"
import * as React from "react";

function footer ({ style }: { style?: React.CSSProperties }) {
    return (
        <>
            <div className={Style.container} style={style}>
                <div className={Style.socials}>
                    <a className={Style.social} href={"https://www.linkedin.com/in/jurre-blankers-34a5562ab/?trk=public-profile-join-page"} target={"_blank"} rel={"noopener noreferrer"}><img src={"/icons/linked-in.svg"} alt={"linked in"} /></a>
                    <a className={Style.social} href={"https://github.com/chevyje"} target={"_blank"} rel={"noopener noreferrer"}><img src={"/icons/github.svg"} alt={"github"} /></a>
                    <a className={Style.social} href={"https://discord.gg/dC4BYJ7sAe"} target={"_blank"} rel={"noopener noreferrer"}><img src={"/icons/discord.svg"} alt={"discord"} /></a>
                </div>
                <div className={Style.navigations}>
                    <a href="/">{lang.navigations.home}</a>
                    <a href="/#about">{lang.navigations.about}</a>
                    <a href="/#education">{lang.navigations.education}</a>
                    <a href="/projects">{lang.navigations.projects}</a>
                    <a href="/contact">{lang.navigations.contact}</a>
                </div>
                <div className={Style.copyRight}>
                    &#169; {lang.copyRights}
                </div>
            </div>
        </>)
}

export default footer
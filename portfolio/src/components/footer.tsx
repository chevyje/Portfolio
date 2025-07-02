import Style from "./footer.module.css"
import lang from "../lang/en.json"

function footer (){
    return (
        <>
            <div className={Style.container}>
                <div className={Style.socials}>
                    <a className={Style.social} href={"https://www.linkedin.com/in/jurre-blankers-34a5562ab/?trk=public-profile-join-page"} target={"_blank"} rel={"noopener noreferrer"}><img src={"/icons/linked-in.svg"} alt={"linked in"} /></a>
                    <a className={Style.social} href={"https://github.com/chevyje"} target={"_blank"} rel={"noopener noreferrer"}><img src={"/icons/github.svg"} alt={"github"} /></a>
                    <a className={Style.social} href={"https://discord.gg/dC4BYJ7sAe"} target={"_blank"} rel={"noopener noreferrer"}><img src={"/icons/discord.svg"} alt={"discord"} /></a>
                </div>
                <div className={Style.navigations}>
                    <a href="/">{lang.home}</a>
                    <a href="/#about">{lang.about}</a>
                    <a href="/#education">{lang.education}</a>
                    <a href="/projects">{lang.projects}</a>
                    <a href="/contact">{lang.contact}</a>
                </div>
                <div className={Style.copyRight}>
                    &#169; {lang.copyRights}
                </div>
            </div>
        </>)
}

export default footer
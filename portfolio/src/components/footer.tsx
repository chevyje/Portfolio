import Style from "./footer.module.css"

function footer (){
    return (
        <>
            <div className={Style.container}>
                <div className={Style.socials}>
                    <div><img src={"/icons/linked-in.svg"} alt={"linked in"} /></div>
                    <div><img src={"/icons/github.svg"} alt={"github"} /></div>
                    <div><img src={"/icons/discord.svg"} alt={"discord"} /></div>
                </div>
                <div className={Style.navigations}>
                    <a href="/">Home</a>
                    <a href="/#about">About</a>
                    <a href="/#education">Education</a>
                    <a href="/">Projects</a>
                    <a href="/">Contact</a>
                </div>
                <div className={Style.copyRight}>
                    &#169; Sinds 2025 - Jurre Blankers
                </div>
            </div>
        </>)
}

export default footer
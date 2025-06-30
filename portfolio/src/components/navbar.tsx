import Style from "./navbar.module.css";

function navbar() {
    return (
        <>
            <div className={Style.container}>
                <div className={Style.logo}></div>
                <div className={Style.navigations}>
                    <a href="/">Home</a>
                    <a href="/#about">About</a>
                    <a href="/#education">Education</a>
                    <a href="/">Projects</a>
                    <a href="/">Contact</a>
                </div>
            </div>
        </>
    )
}

export default navbar;
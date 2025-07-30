import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";

import Style from "./404Page.module.css"
import lang from "../lang/en.json"

function ErrorPage() {
    return (
        <>
            <div className={Style.wrapper}>
                <Navbar />
                <h1>{lang["404Page"].title}</h1>
                <p>{lang["404Page"].subtitle}</p>
                <p>{lang["404Page"].message}</p>
                <div>{lang["404Page"].button}</div>
                <Footer style={{ margin: "auto 0 0 0" }}/>
            </div>
        </>)
}

export default ErrorPage;
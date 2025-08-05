import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";

import Style from "./404Page.module.css"
import {useEffect, useState} from "react";
import {loadLanguage, useLanguage} from "../scripts/language.ts";
import {useNavigate} from "react-router";

function ErrorPage() {
    const [lang, setLang] = useState<any>(null);
    const language = useLanguage();
    const navigate = useNavigate();

    useEffect(() => {
        if (!language) return;
        void (async () => {
            const langData = await loadLanguage(language);
            setLang(langData);
        })();
    }, [language]);

    const toHomePage = () => {
        navigate(`/${language}`);
    }

    return (
        <>
            {lang && <div className={Style.wrapper}>
                <Navbar />
                <h1 className={Style.title}>{lang.errorPage.title}</h1>
                <h2 className={Style.subtitle}>{lang.errorPage.subtitle}</h2>
                <p className={Style.message}>{lang.errorPage.message.split('\n').map((line: any, index: number) => (
                    <span key={index}>{line}<br/></span>
                ))}</p>
                <div className={Style.button} onClick={toHomePage}>{lang.errorPage.button}</div>
                <Footer style={{ margin: "auto 0 0 0" }}/>
            </div>}
        </>)
}

export default ErrorPage;
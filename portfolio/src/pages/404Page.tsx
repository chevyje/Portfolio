import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";

import Style from "./404Page.module.css"
import {useEffect, useState} from "react";
import {loadLanguage, useLanguage} from "../scripts/language.ts";

function ErrorPage() {
    const [lang, setLang] = useState<any>(null);
    const language = useLanguage();

    useEffect(() => {
        if (!language) return;
        void (async () => {
            const langData = await loadLanguage(language);
            setLang(langData);
        })();
    }, [language]);
    return (
        <>
            {lang && <div className={Style.wrapper}>
                <Navbar />
                <h1>{lang.errorPage.title}</h1>
                <p>{lang.errorPage.subtitle}</p>
                <p>{lang.errorPage.message}</p>
                <div>{lang.errorPage.button}</div>
                <Footer style={{ margin: "auto 0 0 0" }}/>
            </div>}
        </>)
}

export default ErrorPage;
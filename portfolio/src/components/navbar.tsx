import Style from "./navbar.module.css";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router";
import {useLanguage, loadLanguage} from "../scripts/language.ts";

function navbar() {
    const navigate = useNavigate();
    const [dropDown, setDropDown] = useState<boolean>(false)
    const [lang, setLang] = useState<any>(null);

    const toggleDropDown = () => {
        setDropDown(!dropDown);
    }

    useEffect(() => {
        if(dropDown) {
            document.body.style.overflowY = "hidden";
        } else{
            document.body.style.overflowY = "auto";
        }
    }, [dropDown]);

    const navigateHome = () => {
        navigate(`/${language}`);
    }

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
        {lang && <div className={Style.container}>
                <div className={Style.logo} onClick={navigateHome}><img src={"/icons/logo.svg"} alt={"logo"}/></div>
                <div className={Style.navigations}>
                    <a href={`/${language}`}>{lang.navigations.home}</a>
                    <a href={`/${language}#about`}>{lang.navigations.about}</a>
                    <a href={`/${language}#education`}>{lang.navigations.education}</a>
                    <a href={`/${language}/projects`}>{lang.navigations.projects}</a>
                    <a href={`/${language}/contact`}>{lang.navigations.contact}</a>
                </div>
                <div className={Style.hamburger}><img src={"/icons/hamburger.svg"} alt={"hamburger"} width="30px" height="auto" onClick={toggleDropDown}/></div>
            </div>}
            {dropDown && lang && <div className={Style.dropDownContainer}>
                <div className={Style.cross}><img src={"/icons/cross.svg"} alt={"hamburger"} width="30px" height="auto" onClick={toggleDropDown}/></div>
                <div className={Style.dropDownNavigations}>
                    <a href={`/${language}`} onClick={toggleDropDown}>{lang.navigations.home}</a>
                    <a href={`/${language}#about`} onClick={toggleDropDown}>{lang.navigations.about}</a>
                    <a href={`/${language}#education`} onClick={toggleDropDown}>{lang.navigations.education}</a>
                    <a href={`/${language}/projects`} onClick={toggleDropDown}>{lang.navigations.projects}</a>
                    <a href={`/${language}/contact`} onClick={toggleDropDown}>{lang.navigations.contact}</a>
                </div>
            </div>}
        </>
    )
}


export default navbar;
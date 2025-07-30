import Style from "./navbar.module.css";
import lang from "../lang/en.json"
import { useState, useEffect } from "react";
import {useNavigate} from "react-router";

function navbar() {
    const navigate = useNavigate();
    const [dropDown, setDropDown] = useState<boolean>(false)
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
        navigate("/");
    }

    return (
        <>
            <div className={Style.container}>
                <div className={Style.logo} onClick={navigateHome}><img src={"/icons/logo.svg"} alt={"logo"}/></div>
                <div className={Style.navigations}>
                    <a href="/">{lang.navigations.home}</a>
                    <a href="/#about">{lang.navigations.about}</a>
                    <a href="/#education">{lang.navigations.education}</a>
                    <a href="/projects">{lang.navigations.projects}</a>
                    <a href="/contact">{lang.navigations.contact}</a>
                </div>
                <div className={Style.hamburger}><img src={"/icons/hamburger.svg"} alt={"hamburger"} width="30px" height="auto" onClick={toggleDropDown}/></div>
            </div>
            {dropDown && <div className={Style.dropDownContainer}>
                <div className={Style.cross}><img src={"/icons/cross.svg"} alt={"hamburger"} width="30px" height="auto" onClick={toggleDropDown}/></div>
                <div className={Style.dropDownNavigations}>
                    <a href="/" onClick={toggleDropDown}>{lang.navigations.home}</a>
                    <a href="/#about" onClick={toggleDropDown}>{lang.navigations.about}</a>
                    <a href="/#education" onClick={toggleDropDown}>{lang.navigations.education}</a>
                    <a href="/projects" onClick={toggleDropDown}>{lang.navigations.projects}</a>
                    <a href="/contact" onClick={toggleDropDown}>{lang.navigations.contact}</a>
                </div>
            </div>}
        </>
    )
}


export default navbar;
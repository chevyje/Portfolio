import Style from "./contactPage.module.css"
import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
import lang from "../lang/en.json"

function ContactPage() {
    return (
        <>
            <div className={Style.wrapper}>
                <Navbar />
                <div className={Style.contactFormContainer}>
                    <h1>{lang.contactMe}</h1>
                    <h2>{lang.contactMessage}</h2>
                    <form className={Style.contactForm} noValidate>
                        <label>{lang.Name}</label>
                        <input type={"text"} />
                        <label>{lang.Email}</label>
                        <input type={"email"} />
                        <label>{lang.Message}</label>
                        <textarea rows={4} cols={50}></textarea>
                        <input type="submit" value={lang.Submit} />
                    </form>
                </div>
                <div className={Style.contactInfoContainer}>
                    <div className={Style.contactPoint}>
                        <div className={Style.icon}><img src={"/icons/phone.svg"} alt={"Phone"} /></div>
                        <p>+31 625581200</p>
                    </div>
                    <div className={Style.contactPoint}>
                        <div className={Style.icon}><img src={"/icons/mail.svg"} alt={"Mail"} /></div>
                        <p>jurre.blankers@gmail.com</p>
                    </div>
                </div>
                <div className={Style.footer}>
                    <Footer />
                </div>
                <div className={`${Style.backgroundFooter} ${Style.large}`}>
                    <svg width="1280" height="253" viewBox="0 0 1280 253" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M738.333 76.0002C603.667 76.0002 404.167 13.9998 282.5 13.9998C160.833 13.9998 0 126.998 0 126.998V252.998H1280V68.502C1280 68.502 1212 -0.000418752 1112 -0.000244141C1012 -6.95288e-05 873 76.0002 738.333 76.0002Z" fill="#0BB7F6"/>
                    </svg>

                </div>
            </div>
        </>
    )
}

export default ContactPage;
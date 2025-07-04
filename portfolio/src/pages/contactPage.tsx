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
                <div className={`${Style.backgroundFooter} ${Style.midLarge}`}>
                    <svg width="769" height="231" viewBox="0 0 769 231" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M443.163 46.5023C392.932 54.2601 242.595 13.5002 169.5 13.5002C96.4049 13.5002 23.7083 50.5002 0 82.0002V231.001H769V46.5023C769 46.5023 701 7.27178e-05 657.5 0C614 -7.27176e-05 493.393 38.7445 443.163 46.5023Z" fill="#0BB7F6"/>
                    </svg>
                </div>
                <div className={`${Style.backgroundFooter} ${Style.mid}`}>
                    <svg width="481" height="229" viewBox="0 0 481 229" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M87 12.2786C39.909 12.2786 2.4 34.2999 0 37.4999V229H481V2C481 2 478 1.27145 473.5 0.778709C405 -6.72187 348.567 42.4138 270.5 42.7784C197.116 43.1212 153.5 12.2786 87 12.2786Z" fill="#0BB7F6"/>
                    </svg>
                </div>
                <div className={`${Style.backgroundFooter} ${Style.small}`}>
                    <svg width="320" height="201" viewBox="0 0 320 201" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M57.8794 10.7773C26.5507 10.7773 1.59667 30.106 0 32.9148V201H320V1.75546C320 1.75546 318.004 1.11599 315.01 0.683496C269.439 -5.89999 231.895 37.2279 179.958 37.5479C131.138 37.8487 102.121 10.7773 57.8794 10.7773Z" fill="#0BB7F6"/>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default ContactPage;
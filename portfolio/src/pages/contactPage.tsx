import Style from "./contactPage.module.css"
import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
import lang from "../lang/en.json"

import * as React from "react";
import {sendContactEmail} from "../scripts/emailjs.ts";
import * as validator from 'email-validator';

function ContactPage() {
    const [errorName, setErrorName] = React.useState<string>("");
    const [errorEmail, setErrorEmail] = React.useState<string>("");
    const [errorMessage, setErrorMessage] = React.useState<string>("");

    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.currentTarget as HTMLFormElement;
        const nameInput = form.elements.namedItem("name") as HTMLInputElement;
        const name = nameInput.value.trim();
        const emailInput = form.elements.namedItem("email") as HTMLInputElement;
        const email = emailInput.value.trim();
        const messageInput = form.elements.namedItem("message") as HTMLTextAreaElement;
        const message = messageInput.value;

        let invalidCount = 0;
        if(name.trim().length <= 1){
            nameInput.style.border = "1px solid red";
            setErrorName(`* ${lang.ErrorMessages.Invalid.Name}`);
            invalidCount++;
        } else{
            nameInput.style.border = "none";
            setErrorName(``);
        }
        if(!validator.validate(email)) {
            emailInput.style.border = "1px solid red";
            setErrorEmail(`* ${lang.ErrorMessages.Invalid.Email}`);
            invalidCount++;
        } else{
            emailInput.style.border = "none";
            setErrorEmail(``);
        }
        if(message.trim().length <= 10){
            messageInput.style.border = "1px solid red";
            setErrorMessage(`* ${lang.ErrorMessages.Invalid.Message}`);
            invalidCount++;
        } else{
            messageInput.style.border = "none";
            setErrorMessage(``);
        }

        const formValues = {
            name: name,
            email: email,
            message: message,
        }

        if(invalidCount <= 0){
            sendContactEmail(formValues);
        }
    }
    return (
        <>
            <div className={Style.wrapper}>
                <Navbar />
                <div className={Style.contactFormContainer}>
                    <h1>{lang.contactPage.contactMe}</h1>
                    <h2>{lang.contactPage.contactMessage}</h2>
                    <form className={Style.contactForm} onSubmit={sendEmail} noValidate>
                        <label>{lang.contactPage.name}</label>
                        <input name={"name"} type={"text"} />
                        <p>{errorName}</p>
                        <label>{lang.contactPage.email}</label>
                        <input name={"email"} type={"email"} />
                        <p>{errorEmail}</p>
                        <label>{lang.contactPage.message}</label>
                        <textarea name={"message"} rows={4} cols={50}></textarea>
                        <p>{errorMessage}</p>
                        <input type="submit" value={lang.contactPage.submit} />
                    </form>
                </div>
                <div className={Style.contactInfoContainer}>
                    <div className={Style.contactPoint}>
                        <div className={Style.icon}><img src={"/icons/phone.svg"} alt={"Phone"} /></div>
                        <p>{lang.contactPage["phone number"]}</p>
                    </div>
                    <div className={Style.contactPoint}>
                        <div className={Style.icon}><img src={"/icons/mail.svg"} alt={"Mail"} /></div>
                        <p>{lang.contactPage.mail}</p>
                    </div>
                </div>
                <Footer style={{ margin: "auto 0 0 0" }} />
            </div>
        </>
    )
}

export default ContactPage;
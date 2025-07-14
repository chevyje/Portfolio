import emailjs from '@emailjs/browser';

let emailjsInit = false;

function initEmailjs(){
    if (!emailjsInit){
        emailjs.init("EZ829bUMmNlUKxDYA");
        emailjsInit = true;
    }
}

type contactParams = {
    name: string,
    email: string,
    message: string,
}

export function sendContactEmail(templateParams: contactParams){
    initEmailjs();
    console.log(templateParams);
    // emailjs.send('service_bg33r24', 'template_jcshckg', templateParams).then(
    //     (response) => {
    //         console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //         console.log('FAILED...', error);
    //     },
    // );
}
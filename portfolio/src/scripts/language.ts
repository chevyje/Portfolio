import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function useLanguage(): string {
    const supportedLanguages = ["en"]
    const { lang } = useParams<{ lang: string }>();
    const [language, setLanguage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const cookieLang = getCookie('lang');
        const browserLang = navigator.language.split('-')[0];
        let finalLang = lang || cookieLang || browserLang || 'en';
        if(!supportedLanguages.includes(finalLang)) {
            finalLang = "en";
            const currentPath = location.pathname.split('/').slice(2).join('/');
            navigate(`/${finalLang}${currentPath}`);
        }

        document.cookie = `lang=${finalLang}; path=/`;
        setLanguage(finalLang);
    }, [lang]);

    return language;
}

export async function loadLanguage(language: string) {
    try {
        return await import(`../lang/${language}.json`);
    } catch {
        return await import(`../lang/en.json`);
    }
}


function getCookie(name: string): string | undefined {
    const match = document.cookie
        .split('; ')
        .find(row => row.startsWith(name + '='));
    return match?.split('=')[1];
}
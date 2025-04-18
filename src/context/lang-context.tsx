import React, { createContext, useContext, useState } from "react";

type TypeLangContext = {
    currentLang: string;
    setLanguage: (lang: string) => void;
};

const LangContext = createContext<TypeLangContext | undefined>({
    currentLang: 'en',
    setLanguage: () => { }
});

export const useLang = () => {
    const context = useContext(LangContext);
    console.log('localStorage', localStorage.getItem('preferredLanguage'))
    if (!context) {
        console.error("Error on LangContext");
        throw new Error("Error on LangContext");
    }
    return context;
};

export const LangProvider = ({ children, defaultLang }: { children: React.ReactNode, defaultLang: string }) => {
    const [currentLang, setCurrentLang] = useState(defaultLang);
    const setLanguage = (lang: string) => {
        setCurrentLang(lang);
        localStorage.setItem('preferredLanguage', lang);
    };

    return (
        <LangContext.Provider value={{ currentLang, setLanguage }}>
            {children}
        </LangContext.Provider>
    );
};



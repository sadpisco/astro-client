import React, { createContext, useContext, useState } from "react";

type TypeLangContext = {
    lang: string;
    setLang: (lang: string) => void;
};

const LangContext = createContext<TypeLangContext | undefined>(undefined);

export const LangContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLang] = useState("en");
    console.log('LangContext', lang);
    return (
        <LangContext.Provider value={{ lang, setLang }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLangContext = () => {
    const context = useContext(LangContext);
    if (!context) {
        throw new Error("Error on LangContext");
    }
    return context;
};

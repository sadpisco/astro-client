// import React, { createContext, useContext } from "react";

// type TypeLangContext = {
//     lang: string;
// };

// const LangContext = createContext<TypeLangContext | undefined>(undefined);

// export const LangContextProvider = ({ children }: { children: React.ReactNode }) => {
//     const lang = "en";
//     console.log('LangContext', lang);
//     return (
//         <LangContext.Provider value={{ lang }}>
//             {children}
//         </LangContext.Provider>
//     );
// };

// export const useLangContext = () => {
//     const context = useContext(LangContext);
//     if (!context) {
//         throw new Error("Error on LangContext");
//     }
//     return context;
// };

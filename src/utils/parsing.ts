export function getLocalesCode(locales: []) {
    return locales.map(((lang: any) => lang.code));
};

//Parse lang from browser
export function parseLangCode(lang: string | undefined): any {
    if (!lang) {
        return 'en'
    }
    if (lang.includes('es')) {
        return 'es'
    }
    if (lang.includes('en')) {
        return 'en'
    }

}
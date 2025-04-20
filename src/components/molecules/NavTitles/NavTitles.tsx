
interface NavTitlesProps {
    titles: any;
}


export default function NavTitles({ titles }: NavTitlesProps) {
    let titleToRender = titles.name;

    function getTranslation(lang: string, translations: any) {
        return translations[lang];
    };
    let lang = localStorage?.getItem('lang') || titles.defaultLocale;
    if (lang === null) {
        localStorage?.setItem('lang', titles.defaultLocale)
    };
    if (lang !== titles.defaultLocale) {
        titleToRender = getTranslation(lang, titles.locales);
    };
    if (lang === titles.defaultLocale) {
        titleToRender = titles.name;
    };


    return <>
        {titleToRender}
    </>
};
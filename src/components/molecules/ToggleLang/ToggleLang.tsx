import Switch from "@/components/atoms/Switch";
import Typography from "@/components/atoms/Typography";
import { parseLangCode } from '@/utils/parsing';

export default function ToggleLang() {
    //Users language and fallback to en
    console.log(navigator.language);
    let firstLang = localStorage?.getItem('lang');
    if (firstLang === null) {
        if (!navigator.language) {
            localStorage?.setItem('lang', 'en')
            firstLang = 'en'
        };
        localStorage?.setItem('lang', parseLangCode(navigator.language))
        firstLang = parseLangCode(navigator.language)
    };

    //Toggle handler
    const toggleLang = () => {
        const defaultLang = localStorage?.getItem('lang');
        if (defaultLang === 'en') {
            localStorage?.setItem('lang', 'es')
        }
        if (defaultLang === 'es') {
            localStorage?.setItem('lang', 'en')
        }
        window.location.reload();
    };
    return (
        <section className="flex flex-row gap-2 items-center">
            <Typography className="dark:text-white text-light-400">EN</Typography>
            <Switch
                className="dark:bg-gray-700 bg-slate-200 rounded-2xl shadow-sm text-green-400" onChange={toggleLang}
                defaultChecked={firstLang === "es"}
            />
            <Typography className="dark:text-white text-light-400">ES</Typography>
        </section>
    );
};
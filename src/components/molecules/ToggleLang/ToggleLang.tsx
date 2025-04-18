import Switch from "@/components/atoms/Switch";
import Typography from "@/components/atoms/Typography";

export default function ToggleLang() {
    const firstLang = localStorage?.getItem('lang');
    const toggleLang = () => {
        const defaultLang = localStorage?.getItem('lang');
        if (defaultLang === 'en') {
            localStorage?.setItem('lang', 'es')
        }
        if (defaultLang === 'es') {
            localStorage?.setItem('lang', 'en')
        }
    }
    return (
        <section className="flex flex-row gap-2 items-center">
            <Typography className="dark:text-white text-light-400">EN</Typography>
            <Switch
                className="dark:bg-gray-700 bg-slate-200 rounded-2xl shadow-sm text-green-400" onChange={toggleLang}
                defaultChecked={firstLang === "es"}
            />
            <Typography className="dark:text-white text-light-400">ES</Typography>
        </section>
    )
}
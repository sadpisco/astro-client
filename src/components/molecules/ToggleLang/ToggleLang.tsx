import Switch from "@/components/atoms/Switch";
import Typography from "@/components/atoms/Typography";
import { useLang } from "@/context/lang-context";

export default function ToggleLang() {
    const { currentLang } = useLang();
    console.log('currentLang', currentLang)
    return (
        <section className="flex flex-row gap-2 items-center">
            <Typography className="dark:text-white text-light-400">EN</Typography>
            <Switch className="dark:bg-slate-700 bg-slate-200 rounded-2xl shadow-sm text-green-400" />
            <Typography className="dark:text-white text-light-400">ES</Typography>
        </section>
    )
}
// import Switch from "@/components/atoms/Switch";
import Typography from "@/components/atoms/Typography";
import { useLangContext } from "@/context/lang-context";

export default function ToggleLang() {
    const { lang, setLang } = useLangContext()
    console.log('ToggleLang', lang)
    // function handleLang(bool: boolean) {
    //     if (bool) return setLang("en");
    //     return setLang("es");
    // };

    return (
        <section className="flex items-center gap-3">
            <Typography>EN</Typography>
            {/* <Switch className="dark:bg-slate-700 bg-slate-200 rounded-2xl shadow-sm text-green-400" onChange={handleLang} /> */}
            <button onClick={() => setLang("en")}>Inglés</button>
            <button onClick={() => setLang("es")}>Español</button>
            <Typography>ES</Typography>
        </section>
    )
}
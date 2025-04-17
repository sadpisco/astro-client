import Switch from "@/components/atoms/Switch";
import Typography from "@/components/atoms/Typography";

export default function ToggleLang() {
    console.log('ToggleLang');
    return (
        <section>
            <Typography>EN</Typography>
            <Switch className="dark:bg-slate-700 bg-slate-200 rounded-2xl shadow-sm text-green-400" />
            <Typography>ES</Typography>
        </section>
    )
}
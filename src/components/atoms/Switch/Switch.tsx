import { Switch as MuiSwitch } from '@mui/material';

export interface SwitchProps {
    className?: string;
    onChange?: any;
}

const Switch: React.FC<SwitchProps> = ({ className = "", onChange }) => {
    return (
        <MuiSwitch
            className={className}
            color="default"
            onChange={(_, checked) => onChange(checked)}

        />
    )
};

export default Switch;
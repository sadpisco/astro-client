import { Switch as MuiSwitch } from '@mui/material';

export interface SwitchProps {
    className?: string;
    onChange?: any;
    defaultChecked?: boolean;
}

const Switch: React.FC<SwitchProps> = ({ className = "", onChange, defaultChecked }) => {
    return (
        <MuiSwitch
            className={className}
            defaultChecked={defaultChecked}
            color="default"
            onChange={(_, checked) => onChange(checked)}

        />
    )
};

export default Switch;
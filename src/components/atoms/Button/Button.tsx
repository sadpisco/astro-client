import { Button as MuiButton } from '@mui/material';
import type { ButtonOwnProps } from '@mui/material/Button';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
    '',
    {
        variants: {
            variant: {
                simple_white:
                    'bg-slate-200 text-black',
                special_blue:
                    '',
                secondary_blue:
                    '',
                special_orange:
                    '',
                gray: '',
                table_blue:
                    '',
                gradient_modal:
                    ''
            },
            size: {
                default: 'h-14 px-5 py-3',
                sm: 'h-9 px-3',
                lg: 'h-11 px-8',
                icon: 'h-10 w-10'
            }
        },
        defaultVariants: {
            variant: 'simple_white',
            size: 'default'
        }
    }
);

export type UiButtonProps = ButtonOwnProps &
    VariantProps<typeof buttonVariants> & {
        className?: string;
        onClick?: () => void;
        loading?: boolean;
        size?: string;
    }

const Button: React.FC<UiButtonProps> = ({ className, children, onClick, loading, size, ...props }) => {
    return (
        <MuiButton
            onClick={onClick}
            loading={loading}
            className={twMerge(
                buttonVariants({ variant: props.variant, size: size }),
                className
            )}
            {...props}
        >
            {!loading ? children : null}
        </MuiButton>
    );
};

export default Button;

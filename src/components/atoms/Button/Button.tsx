import { Button as MuiButton } from '@mui/material';
import type { ButtonPropsSizeOverrides, ButtonPropsVariantOverrides } from '@mui/material/Button';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

// Notes
// Button which will use loading prop, must use an specified wight, otherwise will shrink once loading is true.

const buttonVariants = cva(
    'relative shadow-md rounded-lg normal-case transition-all duration-200 inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 text-xs sm:text-md md:text-lg focus-visible:ring-green-500 focus-visible:ring-offset-2 font-main hover:scale-105 hover:shadow-xl',
    {
        variants: {
            variant: {
                light_green:
                    'bg-gradient-to-l from-light-100 to-light-150 text-black',
                morning_green:
                    'bg-gradient-to-r from-light-100 to-light-400 text-black dark:text-white',
                neon_white:
                    'bg-light-0 text-light-400',
                night_green:
                    'bg-gradient-to-r from-dark-0 via-light-400 to-light-200 text-white',
                neon_black:
                    'bg-black text-light-150',
                icon:
                    'text-black bg-white hover:text-light-400 shadow-lg ',
                link:
                    'bg-transparent text-light-400 shadow-none hover:scale-110 hover:shadow-none'
            },
            size: {
                default: 'h-12 px-6',
                sm: 'h-9 px-3',
                lg: 'h-16 px-12',
                icon: 'min-w-12 rounded-full min-h-12'
            }
        },
        defaultVariants: {
            variant: 'light_green',
            size: 'default'
        }
    }
);

export type TypeButtonVariants = VariantProps<typeof buttonVariants>['variant'];

export type TypeButtonSizes = VariantProps<typeof buttonVariants>['size'];

export type UiButtonProps = ButtonPropsVariantOverrides &
    ButtonPropsSizeOverrides &
    VariantProps<typeof buttonVariants> & {
        className?: string;
        onClick?: () => void;
        loading?: boolean;
        buttonSize?: string;
        disabled?: boolean;
        startIcon?: React.ReactNode;
        endIcon?: React.ReactNode;
        variant?: string;
        children?: React.ReactNode;
        id?: string;
    }

const Button: React.FC<UiButtonProps> = ({ id, className, children, onClick, loading, size, variant, disabled, startIcon, endIcon }) => {
    return (
        <MuiButton
            id={id}
            onClick={onClick}
            loading={loading}
            disabled={disabled}
            className={twMerge(
                buttonVariants({ variant: variant, size: size }),
                disabled && 'opacity-50',
                className
            )}
            startIcon={!loading ? startIcon : null}
            endIcon={!loading ? endIcon : null}
        >
            {!loading ? children : null}
        </MuiButton>
    );
};

export default Button;

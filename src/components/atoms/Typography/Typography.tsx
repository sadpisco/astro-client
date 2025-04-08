import { Typography as MuiTypography } from '@mui/material';
import type { TypographyPropsVariantOverrides } from '@mui/material/Typography';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const typographyVariants = cva(
    'font-main text-start text-black dark:text-white',
    {
        variants: {
            variant: {
                heading:
                    'text-[70px] font-bold',
                label_1:
                    'text-[45px] font-medium',
                label_2:
                    'text-[40px] font-medium',
                label_3:
                    'text-[32px] font-light',
                label_4:
                    'text-[22px] font-light',
                label_5:
                    'text-[18px] font-light',
                label_6: 'text-[14px] font-light',
            },
        },
        defaultVariants: {
            variant: 'label_5'
        }
    }
);

export type UiTypographyProps = TypographyPropsVariantOverrides & VariantProps<typeof typographyVariants> & {
    children: React.ReactNode;
    variant?: string;
    className?: string;
}

const Typography: React.FC<UiTypographyProps> = ({ children, variant, className }) => {
    return <MuiTypography
        className={twMerge(
            typographyVariants({ variant: variant }),
            className
        )}
    >{children}</MuiTypography>;
};

export default Typography;
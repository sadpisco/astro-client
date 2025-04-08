import { cn } from '@/utils/cn';
import DinamicPhosphor from '@/utils/dinamicPhosphor';
import { lazy, useEffect, useState } from 'react';

interface ExtendedIntrinsicAttributes
    extends React.HTMLAttributes<HTMLElement> {
    iconname?: string;
    weight?: string;
}

interface IconProps {
    className?: string;
    weight?: string;
}

const LazyComp: React.FC<ExtendedIntrinsicAttributes> = ({ iconname, className, ...rest }) => {

    const [, setActive] = useState(false);

    useEffect(() => {
        setActive(true);
    }, []);

    if (iconname) {
        const IconGenerator: React.FC<IconProps> = lazy(() =>
            DinamicPhosphor(iconname.replace(/\s+/g, ''))
        );
        return <IconGenerator className={cn('', className)} {...rest} />;
    }
    return null;
};

export default LazyComp;
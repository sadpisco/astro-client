
import Button from '@/components/atoms/Button';
import { cn } from '@/utils/cn';
import { MoonStars } from '@phosphor-icons/react';

interface ToggleThemeProps {
  className?: string;
}

export default function ToggleTheme({ className }: ToggleThemeProps) {
  return (
    <Button id="toggle-theme" size='icon' variant='icon' className={cn('dark:text-white dark:bg-black dark:hover:text-light-200 dark:shadow-green-500 dark:shadow-md py-2', className)}>
      <MoonStars size={24} />
    </Button>
  );
};

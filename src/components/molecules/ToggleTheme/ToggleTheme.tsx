
import Button from '@/components/atoms/Button';
import { MoonStars } from '@phosphor-icons/react';

export default function ToggleTheme() {
  return (
    <Button id="toggle-theme" size='icon' variant='icon'>
      <MoonStars size={24} />
    </Button>
  )
}

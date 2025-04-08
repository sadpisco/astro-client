import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import { ClockClockwise, MinusCircle, PlusCircle } from '@phosphor-icons/react';
import { useState } from "react";

const CounterReact: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  function plusCount() {
    setCount(count + 1)
  }

  function minusCount() {
    setCount(count - 1)
  }

  function resetCount() {
    setCount(0)
  }

  return (
    <section>
      <Typography variant='heading'>Contador: {count}</Typography>
      <div className="flex gap-2">
        <Button
          endIcon={<PlusCircle />}
          onClick={plusCount}
          className='w-36'
        >
          Aumentar
        </Button>
        <Button
          endIcon={<MinusCircle />}
          onClick={minusCount}
          variant='morning_green'
        >
          Decrementar
        </Button>
        <Button
          endIcon={<ClockClockwise />}
          onClick={resetCount}
          variant='neon_white'
        >
          Resetear
        </Button>
      </div>
    </section>
  );
};

export default CounterReact;

import Button from '@/components/atoms/Button';
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
    <section className='bg-slate-200'>
      <h1>Contador: {count}</h1>
      <div className="flex gap-2">
        <Button
          endIcon={<PlusCircle />}
          onClick={plusCount}
          className='w-36'
          disabled={count >= 10}
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
        <Button
          endIcon={<ClockClockwise />}
          onClick={resetCount}
          variant='night_green'
        >
          Resetear
        </Button>
        <Button
          endIcon={<ClockClockwise />}
          onClick={resetCount}
          variant='neon_black'
          disabled={false}
        >
          Resetear
        </Button>
      </div>
    </section>
  );
};

export default CounterReact;

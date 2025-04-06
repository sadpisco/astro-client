import Button from '@/components/atoms/Button';
import { Buildings } from '@phosphor-icons/react';
import { useState } from "react";

const CounterReact: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className='shadow-md p-6 border-2 border-gray-300 rounded-lg'>
      <h1 className='text-xl font-bold mb-4'>Contador: {count}</h1>
      <div className="flex gap-2">
        <Button
          onClick={() => {
            setCount(count + 1)
          }}
          startIcon={<Buildings />}
        >
          Incrementar
        </Button>
        <Button
          endIcon={<Buildings />}
          onClick={() => setCount(count - 1)}
        >
          Decrementar
        </Button>
        <Button
          onClick={() => {
            setCount(0)
          }}
        >
          Resetear
        </Button>
      </div>
    </div>
  );
};

export default CounterReact;

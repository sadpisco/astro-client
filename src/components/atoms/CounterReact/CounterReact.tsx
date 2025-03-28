import { useState } from "react";

const CounterReact: React.FC = () => {
  // Definir el estado del contador, inicializado en 0
  const [count, setCount] = useState<number>(0);

  // Función para incrementar el contador
  const increment = (): void => {
    setCount(count + 1);
  };

  // Función para decrementar el contador
  const decrement = (): void => {
    setCount(count - 1);
  };

  // Función para resetear el contador
  const reset = (): void => {
    setCount(0);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Resetear</button>
    </div>
  );
};

export default CounterReact;

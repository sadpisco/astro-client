import React, { useState } from "react";

export default function CounterReact() {
  // Definir el estado del contador, inicializado en 0
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const increment = () => {
    setCount(count + 1);
  };

  // Función para decrementar el contador
  const decrement = () => {
    setCount(count - 1);
  };

  // Función para resetear el contador
  const reset = () => {
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
}

import { useState } from "react";
import "./components.css";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <div>
        <button onClick={() => setCount((c) => c + 1)}>increment</button>
        <h2>{count}</h2>
      </div>
    </div>
  );
}

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Hisob: {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Qo‘shish</button>
      <button onClick={() => setCount(count - 1)}>➖ Ayirish</button>
    </div>
  );
}

export default Counter;

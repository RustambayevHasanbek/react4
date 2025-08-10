import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer); // cleanup
  }, []);

  return <h2>Vaqt: {seconds} soniya</h2>;
}

export default Timer;

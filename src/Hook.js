import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

// Foydalanish
function App() {
  const width = useWindowWidth();
  return <h2>Oyna kengligi: {width}px</h2>;
}


export default useWindowWidth;
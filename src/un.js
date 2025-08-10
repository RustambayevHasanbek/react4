import { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef();

  const yuborish = (e) => {
    e.preventDefault();
    alert(`Ismingiz: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={yuborish}>
      <input ref={inputRef} type="text" placeholder="Ismingiz" />
      <button type="submit">Yuborish</button>
    </form>
  );
}


export default UncontrolledForm
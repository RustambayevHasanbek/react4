import { useState } from "react";

function ControlledForm() {
  const [ism, setIsm] = useState("");

  const yuborish = (e) => {
    e.preventDefault();
    alert(`Salom, ${ism}!`);
  };

  return (
    <form onSubmit={yuborish}>
      <input
        type="text"
        value={ism}
        onChange={(e) => setIsm(e.target.value)}
        placeholder="Ismingiz"
      />
      <button type="submit">Yuborish</button>
    </form>
  );
}

export default ControlledForm
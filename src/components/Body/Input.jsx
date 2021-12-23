import React, { useState } from "react";

export default function Input() {
  const [msg, setMsg] = useState("Procure uma cidade");
  return (
    <div className="div-input">
      <input
        className="input"
        type="text"
        placeholder={'Procure uma cidade'}
        onChange={(e) => setMsg(e.target.value)}
      ></input>
    </div>
  );
}

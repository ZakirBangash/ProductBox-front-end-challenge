import React from "react";

function InputLabel({ name, setItem, title, placeholder }) {
  return (
    <div>
      <label htmlFor="name">{title}</label>
      <input
        type="text"
        id="name"
        placeholder={placeholder}
        value={name}
        required
        onChange={(e) => setItem(e.target.value)}
      ></input>
    </div>
  );
}

export default InputLabel;

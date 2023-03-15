import React from "react";
import { useState } from "react";

const LinkShortner = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    if (value) {
      setInputValue(value);
      setValue("");
    }
    else{
      alert("OOPS ENTER ANY LINK!")
    }
  };
  return (
    <div>
      <input
        className="url"
        type="text"
        placeholder="paste your link here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>SHORTEN</button>
    </div>
  );
};

export default LinkShortner;

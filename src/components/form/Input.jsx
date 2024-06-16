import { useState } from "react";

const Input = ({ title, type }) => {
  const [isfocus, setIsFocus] = useState(false);

  const inputId = `input-${title.replace(/\s+/g, "-").toLowerCase()}`;

  const handleFocus = () => setIsFocus(true);
  const handleBlur = () => setIsFocus(false);

  return (
    <div className="mt-4 relative font-iranSansReg">
      <input
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full p-2 rounded-lg outline-none"
        id={inputId}
      />
      <label
        htmlFor={inputId}
        className={`absolute font-iranSans right-2 top-2 transition-all duration-200 ${
          isfocus ? "-top-[`.7rem] text-sm" : ""
        }`}
        style={{ pointerEvents: "none" }}
      >
        {title}
      </label>
    </div>
  );
};

export default Input;

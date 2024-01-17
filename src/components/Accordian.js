import React, { useState } from "react";
import "./Accordian.css";

function Accordian() {
  const [displayText, setDisplayText] = useState(false);
  return (
    <div className="bg-[green] w-[400px] mx-auto p-2">
      <div className="flex items-center justify-between ">
        <p>Click below to see some text</p>
        <button
          className="bg-[pink]"
          onClick={() => setDisplayText((prevState) => !prevState)}
        >
          Expand
        </button>
      </div>
      <div
        className={`transition-all overflow-hidden duration-700 ${
          displayText ? "max-h-[50px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p>
          hello Im visible becoiz you clicked on tjhat button <br /> so click
          collapse again to rmeove this{" "}
        </p>
      </div>
    </div>
  );
}

export default Accordian;

import React, { useState } from "react";
import { useInput } from "../components/input-hook";

const DropDown = (label, defaultstate, options) => {
  const [state, setState] = useState(defaultstate);


  const Dropdownmaker = () => (
    <label className="dropdown" htmlFor={label}>
      {label}
      <select
        id={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={!options.length}
       
      >
        <option >All</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item} 
          </option>
        ))}
      </select>
    </label>
  );
  //return necesary values
  return[state, Dropdownmaker,setState]

};

export default DropDown

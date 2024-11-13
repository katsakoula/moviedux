import React from "react";
import "../../styles.css";

export default function FilterSlot({
  state,
  setState,
  filterTitle,
  optionsValues,
}) {
  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="filter-slot">
      <label>{filterTitle}</label>
      <select className="filter-dropdown" value={state} onChange={handleChange}>
        {optionsValues.map((value) => {
          return <option>{value}</option>;
        })}
      </select>
    </div>
  );
}

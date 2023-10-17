import React from "react";

const SortSelect = ({ optionsProps, defaultValue, value, onChange }) => {
  return (
    <select>
      <option disabled value="">
        {defaultValue}
      </option>
      {optionsProps.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SortSelect;

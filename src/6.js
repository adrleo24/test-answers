import React, { useState } from "react";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");

  let timeoutId = null;

  const handleOnChange = (event) => {
    const value = event.target.value;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      console.log(`Making ajax call with value: ${value}`);
    }, 500);

    setInputValue(value);
  };

  return (
    <input
      type="search"
      name="p"
      value={inputValue}
      onChange={handleOnChange}
    />
  );
};

export default SearchBox;

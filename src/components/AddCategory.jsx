import { PropTypes } from "prop-types";
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // console.log(inputValue);
    // setCategories((categories) => [inputValue, ...categories]);

    setInputValue("");
    onNewCategory(inputValue.trim());
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};

AddCategory.propTypes = { onNewCategory: PropTypes.func };

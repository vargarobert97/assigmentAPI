import React from "react";

const Form = ({ setInputText, shops, setShops, inputText, setStatus }) => {
  const inputTextHandler = (event) => {
    setInputText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const statusHandler = (event) => {
    setStatus(event.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="">Select</option>
          <option value="shops">Shops</option>
          <option value="categories">Categories</option>
          <option value="lists">Lists</option>
        </select>
      </div>
    </form>
  );
};

export default Form;

import React, { useRef } from "react";
import axios from "axios";
import GetAllCategories from "./GetAllCategories";

const CreateCategory = () => {
  const categoryNameRef = useRef("");
  const categoryDescriptionRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();
    const category = {
      categoryName: categoryNameRef.current.value,
      categoryDescription: categoryDescriptionRef.current.value,
    };

    console.log(category);
    axios
      .post("http://localhost:5500/routes/category", category)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="my-4">
          <input
            placeholder="Category name"
            type="text"
            className="todo-input"
            ref={categoryNameRef}
          />
        </div>

        <div className="my-4">
          <input
            placeholder="Category Description"
            className="todo-input"
            ref={categoryDescriptionRef}
          />
        </div>
        <button className="my-4" type="submit">
          Add
        </button>
      </form>
      <GetAllCategories />
    </div>
  );
};

export default CreateCategory;

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
      .post(
        "https://dj5x51i7ji.execute-api.us-east-2.amazonaws.com/Development/rvarga-third-assigment/categories",
        category
      )
      .then((res) => {
        window.location.reload();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleRefresh = () => {
  //   setTimeout(function () {
  //     window.location.reload();
  //   }, 500);
  // };

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

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import GetAllCategories from "./GetAllCategories";

const CreateCategory = () => {
  //   const [posts, setPosts] = useState([]);

  const categoryNameRef = useRef("");
  const categoryDescriptionRef = useRef("");

  //   useEffect(() => {
  //     axios
  //       .post("http://localhost:27010/routes/category")
  //       .then((res) => {
  //         console.log(res);
  //         setPosts(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

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
            //   value={inputText}
            //   onChange={inputTextHandler}
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

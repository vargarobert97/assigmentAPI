import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import GetAllItems from "./GetAllItems";

const CreateNewItem = () => {
  const itemNameRef = useRef("");
  const categoryRef = useRef("");
  const quantityRef = useRef("");

  const { id } = useParams();

  // useEffect(() => {
  //     getCategories();
  // }, []);

  //   const getCategories = () => {
  //     fetch("http://localhost:5500/routes/category")
  //       .then((response) => response.json())
  //       .then((result) => {
  //         setCategories(result);
  //         setIsLoading(false);
  //       })
  //       .catch((err) => {
  //         setIsLoading(false);
  //         console.log(err);
  //       });
  //   };

  const submitHandler = (event) => {
    event.preventDefault();
    const item = {
      itemName: itemNameRef.current.value,
      itemCategory: categoryRef.current.value,
      itemQuantity: quantityRef.current.value,
    };
    console.log(item);
    axios
      .post(`http://localhost:5500/routes/lists/${id}/items`, item)
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
            placeholder="Item name"
            type="text"
            className="todo-input"
            ref={itemNameRef}
          />
        </div>

        <div className="my-4">
          <input
            className="todo-input"
            placeholder="Item category"
            ref={categoryRef}
          />
        </div>

        <div className="my-4">
          <input
            className="todo-input"
            placeholder="Item quantity"
            ref={quantityRef}
          />
        </div>

        <button className="my-4" type="submit">
          Add
        </button>
      </form>

      {/* <div className='mb-4'>
                    <label
                      className='block text-gray-700 text-sm font-bold mb-2'
                      htmlFor='itemCategory'
                    >
                      Category
                    </label>
                    <select
                      className='block bg-white appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white'
                      id='itemCategory'
                      ref={itemCategoryRef}
                    >
                      {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div> */}

      {/* <GetAllItems /> */}
    </div>
  );
};

export default CreateNewItem;

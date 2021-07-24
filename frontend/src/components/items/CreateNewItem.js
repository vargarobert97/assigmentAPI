import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CreateNewItem = (props) => {
  const [, setItems] = useState([]);

  const itemNameRef = useRef("");
  const categoryRef = useRef("");
  const quantityRef = useRef("");

  const { id } = useParams();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://dj5x51i7ji.execute-api.us-east-2.amazonaws.com/Development/rvarga-third-assigment/categories"
      )
      .then((res) => {
        console.log(res);
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    const item = {
      itemName: itemNameRef.current.value,
      itemCategory: categoryRef.current.value,
      itemQuantity: quantityRef.current.value,
    };
    console.log(item);
    axios
      .post(
        `https://dj5x51i7ji.execute-api.us-east-2.amazonaws.com/Development/rvarga-third-assigment/lists/${id}/items`,
        item
      )
      //`https://dj5x51i7ji.execute-api.us-east-2.amazonaws.com/Development/rvarga-third-assigment/lists/${listid}/items`
      .then((res) => {
        console.log(res);
        setItems(res.data);
        window.location.href = "http://localhost:3000/lists";
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

        <div className="select">
          <select ref={categoryRef} name="todos" className="filter-todo">
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <br />
        <br />

        <div className="my-4">
          <input
            className="todo-input"
            placeholder="Item quantity"
            ref={quantityRef}
            type="number"
          />
        </div>

        <button className="my-4" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateNewItem;

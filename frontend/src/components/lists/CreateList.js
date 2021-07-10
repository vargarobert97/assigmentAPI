import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import GetAllLists from "./GetAllLists";

const CreateList = () => {
  //const [posts, setPosts] = useState([]);
  const listNameRef = useRef("");
  const listShopRef = useRef("");
  const listItemRef = useRef("");

  // useEffect(() =>{
  //     axios.post('http://localhost:27010/routes/lists').then(res => {
  //         console.log(res);
  //         setPosts(res.data)
  //     })
  //     .catch(err => {
  //         console.log(err);
  //     })
  // }, [])

  const submitHandler = (event) => {
    event.preventDefault();
    const list = {
      listName: listNameRef.current.value,
      listShop: listShopRef.current.value,
      listItem: listItemRef.current.value,
    };
    console.log(list);
    axios
      .post("http://localhost:5500/routes/lists", list)
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
            placeholder="List name"
            type="text"
            className="todo-input"
            ref={listNameRef}
          />
        </div>

        <div className="my-4">
          <input
            className="todo-input"
            placeholder="List shop"
            ref={listShopRef}
          />
        </div>

        <div className="my-4">
          <input
            className="todo-input"
            placeholder="List item"
            ref={listItemRef}
          />
        </div>

        {/* <div className="select">
          <select name="todos" className="filter-todo">
            <option value="">Select</option>
            <option value="shops">Shops</option>
            <option value="categories">Categories</option>
            <option value="lists">Lists</option>
          </select>
        </div> */}

        <button className="my-4" type="submit">
          Add
        </button>
      </form>
      <GetAllLists />
    </div>
  );
};

export default CreateList;

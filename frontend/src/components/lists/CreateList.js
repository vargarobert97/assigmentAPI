import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import GetAllLists from "./GetAllLists";

const CreateList = () => {
  //const [posts, setPosts] = useState([]);
  const listNameRef = useRef("");
  const listShopRef = useRef("");
  //const listItemRef = useRef("");

  // useEffect(() =>{
  //     axios.post('http://localhost:5500/routes/lists').then(res => {
  //         console.log(res);
  //         setPosts(res.data)
  //     })
  //     .catch(err => {
  //         console.log(err);
  //     })
  // }, [])

  //Getting shops array for selectBox
  const [shops, setShops] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5500/routes/shops")
      .then((res) => {
        console.log(res);
        setShops(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    const list = {
      listName: listNameRef.current.value,
      listShop: listShopRef.current.value,
      //listItem: listItemRef.current.value,
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

  const filterContent = (posts, searchTerm) => {
    const result = posts.filter(
      (post) =>
        post.name.toLowerCase().includes(searchTerm) ||
        post.shop.toLowerCase().includes(searchTerm) ||
        post.items.toLowerCase().includes(searchTerm)
    );
    this.setState({ posts: result });
  };

  const handleTextSearch = (event) => {
    const searchTerm = event.currentTarget.value;
    axios.get("http://localhost:5500/routes/lists").then((res) => {
      if (res.data.success) {
        filterContent(res.data.posts, searchTerm);
      }
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
          <h4>All Posts</h4>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            name="Searchterm"
            onChange={handleTextSearch}
          />
        </div>
      </div>

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

        {/* <div className="my-4">
          <input
            className="todo-input"
            placeholder="List shop"
            ref={listShopRef}
          />
        </div> */}

        {/* <div className="my-4">
          <input
            className="todo-input"
            placeholder="List item"
            ref={listItemRef}
          />
        </div> */}

        <div className="select">
          <select ref={listShopRef} name="todos" className="filter-todo">
            {shops.map((shop) => (
              <option key={shop._id} value={shop._id}>
                {shop.name}
              </option>
            ))}
          </select>
        </div>

        <button className="my-4" type="submit">
          Add
        </button>
      </form>
      <GetAllLists key={shops._id} />
    </div>
  );
};

export default CreateList;

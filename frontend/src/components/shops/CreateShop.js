import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import GetAllShops from "./GetAllShops";

const CreateShop = () => {
  //   const [shops, setShops] = useState([]);
  const shopNameRef = useRef("");
  const shopCityRef = useRef("");
  const shopAddressRef = useRef("");

  //   useEffect(() => {
  //     axios
  //       .post("http://localhost:5500/routes/shops")
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    const shop = {
      shopName: shopNameRef.current.value,
      shopAddress: shopCityRef.current.value,
      shopCity: shopAddressRef.current.value,
    };
    console.log(shop);
    axios
      .post("http://localhost:5500/routes/shop", shop)
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
            placeholder="Shop name"
            type="text"
            className="todo-input"
            ref={shopNameRef}
          />
        </div>

        <div className="my-4">
          <input
            className="todo-input"
            placeholder="Shop city"
            ref={shopCityRef}
          />
        </div>

        <div className="my-4">
          <input
            className="todo-input"
            placeholder="Shop Address"
            ref={shopAddressRef}
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
      <GetAllShops />
    </div>
  );
};

export default CreateShop;

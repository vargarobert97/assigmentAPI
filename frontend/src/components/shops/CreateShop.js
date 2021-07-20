import React, { useRef } from "react";
import axios from "axios";
import GetAllShops from "./GetAllShops";

const CreateShop = () => {
  const shopNameRef = useRef("");
  const shopCityRef = useRef("");
  const shopAddressRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();
    const shop = {
      shopName: shopNameRef.current.value,
      shopAddress: shopCityRef.current.value,
      shopCity: shopAddressRef.current.value,
    };
    console.log(shop);
    axios
      .post(
        " https://dj5x51i7ji.execute-api.us-east-2.amazonaws.com/Development/rvarga-third-assigment/shops",
        shop
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRefresh = () => {
    setTimeout(function () {
      window.location.reload();
    }, 500);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="my-4">
          <input
            placeholder="Shop name"
            type="text"
            className="todo-input"
            ref={shopNameRef}
          />
        </div>

        <div className="my-4">
          <input
            className="todo-input"
            placeholder="Shop Address"
            ref={shopAddressRef}
          />
        </div>

        <div className="my-4">
          <input
            className="todo-input"
            placeholder="Shop City"
            ref={shopCityRef}
          />
        </div>

        <button onClick={handleRefresh} className="my-4" type="submit">
          Add
        </button>
      </form>
      <GetAllShops />
    </div>
  );
};

export default CreateShop;

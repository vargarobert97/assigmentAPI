import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import List from "./List";

import ShopFilter from "./ShopFilter"; ///////////////////////

const GetAllLists = () => {
  const [lists, setLists] = useState([]);

  const [shopFilter, setshopFilter] = useState(""); //////////////////////////
  const urlShopFilter = shopFilter ? `listShop=${shopFilter}` : ""; /////////////////////////////

  const getLists = useCallback(() => {
    const query = new URLSearchParams(urlShopFilter);
    const params = query.toString();
    const url = params
      ? ` https://dj5x51i7ji.execute-api.us-east-2.amazonaws.com/Development/rvarga-third-assigment/lists?${params}`
      : ` https://dj5x51i7ji.execute-api.us-east-2.amazonaws.com/Development/rvarga-third-assigment/lists`;

    axios
      .get(url)
      .then((res) => {
        setLists(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [urlShopFilter]);

  useEffect(() => {
    getLists();
  }, [getLists, shopFilter]);

  const shopFilterHandler = (shopId) => {
    setshopFilter(shopId);
    console.log(shopId);
  };

  return (
    <div>
      <ShopFilter onShopFilter={shopFilterHandler} />
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">List Name</th>
            <th scope="col">List Shop</th>
            <th scope="col">List Item</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((list) => (
            <List key={list.id} list={list} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllLists;

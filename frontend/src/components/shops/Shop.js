import React, { useState, useEffect } from "react";
import axios from "axios";

const Shop = (props) => {
  const [shops, setShops] = useState([]);

  return (
    <tr>
      <td>{props.shop.name}</td>
      <td> {props.shop.city}</td>
      <td>{props.shop.address}</td>
    </tr>
  );
};

export default Shop;

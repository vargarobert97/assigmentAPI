import React from "react";

const Shop = (props) => {
  return (
    <tr>
      <td>{props.shop.name}</td>
      <td>{props.shop.address}</td>
      <td>{props.shop.city}</td>
    </tr>
  );
};

export default Shop;

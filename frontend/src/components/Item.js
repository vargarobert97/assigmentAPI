import React, { useState, useEffect } from "react";
import axios from "axios";

const Item = (props) => {
  const [items, setItems] = useState([]);

  return (
    <tr>
      <td>{props.item.itemName}</td>
      <td>{props.item.itemCategory}</td>
      <td>{props.item.itemQuantity}</td>
    </tr>
  );
};

// const Item = ({text, shops, setShops, shop}) => {
//     const deleteHandler = () => {
//         setShops(shops.filter((element) => element.id !== shop.id));
//     };
//     return (
//         <div className="todo">
//             <li className="todo-item">{text}</li>
//             {/* <button className="complete-btn">
//                 <i className="fas fa-check"></i>
//             </button> */}
//             <button onClick={deleteHandler} className="trash-btn">
//                 <i className="fas fa-trash"></i>
//             </button>
//         </div>
//     );
// }

export default Item;

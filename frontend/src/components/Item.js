import React, { useState, useEffect } from "react";
import axios from "axios";

const Item = (props) => {
  const [items, setItems] = useState([]);
  const deleteItemHandler = () => {
    props.onDeleteItem(props.item._id);
  };

  return (
    <li>
      {props.item.name}
      <button
        onClick={deleteItemHandler}
        type="button"
        className="btn btn-danger ml-4 py-0 px-2"
      >
        <i className="far fa-trash-alt fa-xs"></i>
      </button>
    </li>

    // <tr>
    //   <td>{props.item.itemName}</td>
    //   <td>{props.item.itemCategory}</td>
    //   <td>{props.item.itemQuantity}</td>
    // </tr>
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

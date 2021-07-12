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
  );
};

export default Item;

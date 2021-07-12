import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Item from "../items/Item";

const List = (props) => {
  const deleteList = () => {
    axios
      .delete(`http://localhost:5500/routes/lists/${props.list._id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteItem = (itemId) => {
    axios
      .delete(
        `http://localhost:5500/routes/lists/${props.list._id}/items/${itemId}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <tr>
      <td>{props.list.name}</td>
      <td>{props.list.shop.name}</td>
      <td>
        <ul>
          {props.list.items.map((item) => (
            <Item item={item} onDeleteItem={deleteItem} key={item._id} />
          ))}
        </ul>
        <NavLink to={`/lists/${props.list._id}/items`}>Add new item</NavLink>
      </td>
      <td>
        <button onClick={deleteList} type="button" className="btn btn-danger">
          <i className="far fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};

export default List;

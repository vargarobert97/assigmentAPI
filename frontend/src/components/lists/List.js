import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Item from "../items/Item";

const List = (props) => {
  const deleteList = () => {
    axios
      .delete(
        `https://dj5x51i7ji.execute-api.us-east-2.amazonaws.com/Development/rvarga-third-assigment/lists/${props.list._id}`
      )
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteItem = (itemId) => {
    axios
      .delete(
        `https://dj5x51i7ji.execute-api.us-east-2.amazonaws.com/Development/rvarga-third-assigment/lists/${props.list._id}/items/${itemId}`
      )
      .then((res) => {
        console.log(res);
        window.location.reload();
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
            <Item item={item} onDeleteItem={deleteItem} key={item.id} />
          ))}
        </ul>
        <NavLink to={`/lists/${props.list._id}/items`}>Add new item</NavLink>
      </td>
      <td>
        <button
          onClick={(event) => {
            deleteList(event);
          }}
          type="button"
          className="btn btn-danger"
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};

export default List;

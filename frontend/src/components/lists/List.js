import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const List = (props) => {
  const [lists, setLists] = useState([]);

  return (
    <tr>
      <td>{props.list.name}</td>
      <td>{props.list.shop.name}</td>
      <td>
        {props.list.items.map((item) => (
          <ul>
            <li>{item.name}</li>
          </ul>
        ))}
        <NavLink to={`/lists/${props.list._id}/items`}>Add new item</NavLink>
      </td>
    </tr>
  );
};

export default List;

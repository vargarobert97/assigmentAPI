import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";

const GetAllLists = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://dj5x51i7ji.execute-api.us-east-2.amazonaws.com/Development/rvarga-third-assigment/lists"
      )
      .then((res) => {
        //console.log(res);
        setLists(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
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
            <List key={list._id} list={list} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllLists;

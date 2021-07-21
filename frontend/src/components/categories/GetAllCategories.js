import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category";

const GetAllCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://dj5x51i7ji.execute-api.us-east-2.amazonaws.com/Development/rvarga-third-assigment/categories"
      )
      .then((res) => {
        //console.log(res);
        setCategories(res.data);
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
            <th scope="col">Category Name</th>
            <th scope="col">Category Description</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <Category key={category._id} category={category} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllCategories;

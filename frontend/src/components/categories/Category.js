import React from "react";

const Category = (props) => {
  return (
    <tr>
      <td>{props.category.name}</td>
      <td>{props.category.description}</td>
    </tr>
  );
};

export default Category;

import React, { useCallback, useEffect, useRef, useState } from "react";

const GetAllItems = useCallback(() => {
  fetch(`http://localhost:5500/routes/lists/${props.listId}/items`)
    .then((response) => response.json())
    .then((result) => {
      setItem(result);
      return fetch("http://localhost:5500/routes/categories");
    })
    .then((response) => response.json())
    .then((result) => {
      setCategories(result);
      // setIsLoading(false);
    })
    .catch((err) => {
      // setIsLoading(false);
      console.log(err);
    });
}, [props.itemId, props.listId]);

const submitHandler = (e) => {
  e.preventDefault();

  const item = {
    itemName: itemNameRef.current.value,
    itemCategory: categoryRef.current.value,
    itemQuantity: quantityRef.current.value,
  };
  fetch(`http://localhost:5500/routes/lists/${props.listId}/items/`, {
    method: "PUT",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      response.json();
      props.onItemUpdate();
      props.onToggleModal();
      GetAllItems();
    })
    .catch((err) => console.log(err));
};

return (
  <div>
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">Item name</th>
          <th scope="col">Item category</th>
          <th scope="col">Item quantity</th>
        </tr>
      </thead>
      <tbody>
        {lists.map((list) => (
          <List key={list.id} list={list} />
        ))}
      </tbody>
    </table>
  </div>
);

export default GetAllItems;

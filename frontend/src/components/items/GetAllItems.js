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
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
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
        {
          // posts.map(post => <li key={post._id}>{post.title}</li>)
          lists.map((list) => (
            <List key={list._id} list={list} />
          ))
        }
      </tbody>
    </table>
  </div>

  //   <div className="my-6 ml-2 py-4 px-6 bg-white shadow-lg rounded-lg w-full">
  //     <div className="relative self-center">
  //       <span className="text-lg">Filter By Category</span>
  //       <div className="mt-1 min-w-max rounded transition delay-75 ease-in-out z-10">
  //         <div className="grid grid-cols-3">
  //           {categories.map((category) => (
  //             <label
  //               key={category._id}
  //               className="flex radio p-2 cursor-pointer items-center mt-3 px-2"
  //             >
  //               <input
  //                 type="radio"
  //                 className="my-auto transform scale-125"
  //                 name="category"
  //                 value={category._id}
  //                 checked={selectedCategory === category._id}
  //                 onChange={categoryFilterHandler}
  //               />
  //               <span className="ml-2 text-gray-700">{category.name}</span>
  //             </label>
  //           ))}
  //         </div>
  //         {isFiltered && (
  //           <div className="w-full text-center">
  //             <span
  //               className="cursor-pointer underline px-4"
  //               onClick={clearFilter}
  //             >
  //               Clear Filter
  //             </span>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   </div>
);

export default GetAllItems;

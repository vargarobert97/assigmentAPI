import React from "react";

const Item = (props) => {
  const deleteItemHandler = () => {
    props.onDeleteItem(props.item._id);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <li>
      {props.item.name}
      <button
        onClick={(event) => {
          deleteItemHandler(event);
          handleRefresh();
        }}
        type="button"
        className="btn btn-danger ml-4 py-0 px-2"
      >
        <i className="far fa-trash-alt fa-xs"></i>
      </button>
    </li>
  );
};

export default Item;

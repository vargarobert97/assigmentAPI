import React from 'react';

const Item = ({text, shops, setShops, shop}) => {
    const deleteHandler = () => {
        setShops(shops.filter((element) => element.id !== shop.id));
    };
    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            {/* <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button> */}
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Item;
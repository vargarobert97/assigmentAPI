import React from 'react';

import Item from './Item';

const FormList = ({shops, setShops}) => {

    return (
    <div className="todo-container">
      <ul className="todo-list">
        {shops.map(shop =>(
          <Item 
            key={shop.id}
            shop={shop} 
            text={shop.text} 
            //id={shop.id} 
            shops={shops} 
            setShops={setShops} />
        ))}
      </ul>
    </div>
    );
}

export default FormList;
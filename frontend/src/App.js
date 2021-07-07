import React, {useState, useEffect} from 'react';
import './App.css';

import Form from './components/Form';
import AssigmentList from './components/AssigmentList';

function App() {
  const [inputText, setInputText] = useState(""); //Input text for the form
  const [shops, setShops] = useState([]); //Items in the form (ovde treba da stavis shop, category i items)
  //const [lists, setLists] = useState([]);
  //const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState('');
  const [loaded, setLoaded] = useState([]);

  // useEffect(() => {
  //   console.log('hey');
  // }, []);

  //Ovo mi je lose
  // const filterHandler = () => {
  //   switch(status){
  //     case 'loaded':
  //       setLoaded(shops.filter(shop => shop.completed ===true))
  //       break;
  //     case 'not loaded':
  //       setLoaded(shops.filter(shop => shop.completed ===false))
  //       break;
  //      default:
  //        setLoaded(shops)
  //        break; 
  //   }
  // }

  return (
    <div className="App">
      <header>
        <h1>Robert Assigment</h1>
      </header>
      <Form 
        inputText={inputText} 
        shops={shops} 
        setShops={setShops} 
        setInputText={setInputText}
        setStatus={setStatus}
        />
      <AssigmentList shops={shops} setShops={setShops} />
    </div>
  );
}

export default App;

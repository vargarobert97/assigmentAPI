import React from 'react';
import './App.css';

import Form from './components/Form';
import AssigmentList from './components/AssigmentList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Robert Assigment</h1>
      </header>
      <Form />
      <AssigmentList />
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import CollectStocks from './CollectStocks.js';

function App() {

  return (
    <div className='container'>
      <div className='logo'>SH Online</div>
      <div className='user'>Andrei Musteata</div>
      
      <CollectStocks />
    </div>
  );
}

export default App;

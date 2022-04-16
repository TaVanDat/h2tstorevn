import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './navigation/RouterConfig';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </div>
  );
}

export default App;

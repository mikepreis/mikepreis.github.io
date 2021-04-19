import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from "../src/app/Calculator/Calculator";
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <div className="calc-container">
      <Calculator />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
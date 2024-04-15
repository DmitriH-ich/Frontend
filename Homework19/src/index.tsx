import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TastyDish from './components/TastyDish/tastyDish';



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <TastyDish />
    </React.StrictMode>
  );
  


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CityPage from './components/CityPage/CityPage';





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CityPage/>
  </React.StrictMode>
);



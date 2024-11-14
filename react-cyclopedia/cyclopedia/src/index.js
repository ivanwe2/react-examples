import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Layout/Header';
import CyclopediaClasspage from './Components/CyclopediaClassPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header></Header>
    <div className="row text-white">
      <div className="col-6">
        <span className="h1 text-warning text-center">Class component</span>
        <CyclopediaClasspage></CyclopediaClasspage>
      </div>
    </div>
  </div>
);

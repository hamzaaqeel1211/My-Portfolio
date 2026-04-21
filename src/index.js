// index.js — Entry point. React mounts the <App /> into the
// <div id="root"> element inside public/index.html.
// You rarely need to edit this file.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

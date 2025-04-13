import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { PersonProvider } from "./context/PersonContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <PersonProvider>
      <App />
    </PersonProvider>
  </HashRouter>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes/AppRouter';
import { HeroContextProvider } from './contexts/HeroeContext';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HeroContextProvider>
    <AppRouter />
  </HeroContextProvider>
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './pages/LoginPages';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
);

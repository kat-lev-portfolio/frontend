import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './i18n';
import App from './App.jsx';
import Router from './config/Router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router >
      <App />
    </Router>
  </StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { WeatherProvider } from './providers/WeatherProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WeatherProvider } from './providers/WeatherProvider';
import { ThemeProvider } from './providers/ThemeProvider';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </WeatherProvider>
  </React.StrictMode>,
);

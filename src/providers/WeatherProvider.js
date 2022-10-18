import { createContext, useContext, useState } from 'react';

const weatherContext = createContext();
const weatherToggleContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({});

  const setWeatherData = (weatherData) => {
    setWeather(weatherData);
  };

  return (
    <weatherToggleContext.Provider value={setWeatherData}>
      <weatherContext.Provider value={weather}>
        {children}
      </weatherContext.Provider>
    </weatherToggleContext.Provider>
  );
};

export const useWeatherContext = () => {
  return useContext(weatherContext);
};

export const useWeatherToggleContext = () => {
  return useContext(weatherToggleContext);
};

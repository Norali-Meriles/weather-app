import { createContext, useContext, useState } from 'react';

const weatherContext = createContext();
const weatherToggleContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  return (
    <weatherToggleContext.Provider value={setWeather}>
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

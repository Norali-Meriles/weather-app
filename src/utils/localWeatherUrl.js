import useGeoLocation from '../hooks/useFetch/useGeoLocation';

export const getLocalWeatherUrl = () => {
  const location = useGeoLocation();
  if (location.loaded) {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=f0adeb1c1ec54a699de201403221510&q=${location.coords.latitude},${location.coords.longitude}&days=5`;
    return url;
  }
  return '';
};

import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import { useWeatherToggleContext } from '../../providers/WeatherProvider';
import { getLocalWeatherUrl } from '../../utils/getLocalWeatherUrl';
import { Aside, WeatherContent } from '../../components/Home';

const Home = () => {
  const setWeather = useWeatherToggleContext();
  const url = getLocalWeatherUrl();
  const weatherData = useFetch(url);

  useEffect(() => {
    setWeather(weatherData?.data);
  }, [weatherData]);

  return (
    <section className='container'>
      <div className='row'>
        <Aside />
        <WeatherContent />
      </div>
    </section >
  );
};

export default Home;

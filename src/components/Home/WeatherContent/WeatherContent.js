import ForecastDayCard from './ForecastDayCard/ForecastDayCard';
import ForecastHighlightCard from './ForecastHighlightCard/ForecastHighlightCard';
import { useWeatherContext } from '../../../providers/WeatherProvider';

const WeatherContent = () => {
  const weather = useWeatherContext();
  console.log(weather);
  return (
    <div className='col-8 bg-danger'>
      <div className='d-flex flex-row justify-content-end my-3'>
        <button className='btn btn-primary me-2'><i className='bi bi-c-circle' /></button>
        <button className='btn btn-primary me-4'>F</button>
      </div>
      <div className='d-flex flex-row justify-content-evenly my-3'>
        <ForecastDayCard />
      </div>
      <ForecastHighlightCard />
    </div>
  );
};

export default WeatherContent;

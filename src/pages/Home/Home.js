import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import { useWeatherToggleContext } from '../../providers/WeatherProvider';
import { getLocalWeatherUrl } from '../../utils/localWeatherUrl';

const Home = () => {
  const setWeatherData = useWeatherToggleContext();

  const url = getLocalWeatherUrl();
  const weatherData = useFetch(url);

  useEffect(() => {
    setWeatherData(weatherData?.data);
  }, [weatherData]);

  return (
    <section className='container'>
      <div className='row'>
        <aside className='col-4 d-flex flex-column bg-secondary'>
          <div className='d-flex flex-row justify-content-between py-3'>
            <button className='btn btn-primary'><i className='bi bi-search-heart pe-2' />Search</button>
            <button className='btn btn-primary'><i className='bi bi-geo' /></button>
          </div>
          <div className='d-flex flex-column justify-content-between h-100 py-3'>
            <img className='w-100' src='https://picsum.photos/200' />
            <div className='d-flex flex-column justify-content-end align-items-center'>
              <p className='fs-1'>16 °C</p>
              <p className="fs-3">Shower</p>
              <p>Today - 14 octu</p>
              <p>Tucuman</p>
            </div>
          </div>
        </aside>
        <div className='col-8 bg-danger'>
          <div className='d-flex flex-row justify-content-end my-3'>
            <button className='btn btn-primary me-2'><i className='bi bi-c-circle' /></button>
            <button className='btn btn-primary me-4'>F</button>
          </div>
          <div className='d-flex flex-row justify-content-evenly my-3'>
            <div className='card w-25'>
              <img src='https://picsum.photos/200' className='card-img-top' alt='...' />
              <div className='card-body'>
                <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the content.</p>
              </div>
            </div>
            <div className='card w-25'>
              <img src='https://picsum.photos/200' className='card-img-top' alt='...' />
              <div className='card-body'>
                <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the content.</p>
              </div>
            </div>
            <div className='card w-25'>
              <img src='https://picsum.photos/200' className='card-img-top' alt='...' />
              <div className='card-body'>
                <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the content.</p>
              </div>
            </div>
          </div>
          <div className="container my-3">
            <h3 className='fs-4'>Todays Hihgthikds </h3>
            <div className="d-flex row justify-content-evenly my-3">
              <div className='card w-25 mx-1'>
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                </div>
              </div>
              <div className='card  w-25 mx-1'>
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                </div>
              </div>
            </div>
            <div className="d-flex row justify-content-evenly my-3">
              <div className='card w-25 mx-1'>
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                </div>
              </div>
              <div className='card  w-25 mx-1'>
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

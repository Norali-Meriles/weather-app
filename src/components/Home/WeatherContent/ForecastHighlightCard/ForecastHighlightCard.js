const ForecastHighlightCard = ({ current }) => {
  return (
    <div className='container my-3'>
      <h3 className='fs-4'>Todays Hihgthikds </h3>
      <div className='d-flex row justify-content-evenly my-3'>
        <div className='card w-25 mx-1 align-items-center justify-content-center'>
          <div className='card-body'>
            <h5 className='card-title'>Wind status</h5>
            <p className='card-text'>{current?.wind_mph}mph</p>
          </div>
        </div>
        <div className='card  w-25 mx-1 align-items-center justify-content-center'>
          <div className='card-body'>
            <h5 className='card-title'>Humidity</h5>
            <p className='card-text text-align-center'>{current?.humidity}%</p>
            <div className='progress'>
              <div className='progress-bar w-75 bg-warning' role='progressbar' aria-label='Basic example'
                aria-valuenow='75' aria-valuemin='0' aria-valuemax='100'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='d-flex row justify-content-evenly my-3'>
        <div className='card w-25 mx-1 align-items-center justify-content-center'>
          <div className='card-body'>
            <h5 className='card-title'>Visibility</h5>
            <p className='card-text text-align-center'>{current?.vis_miles}miles</p>
          </div>
        </div>
        <div className='card  w-25 mx-1 align-items-center justify-content-center'>
          <div className='card-body'>
            <h5 className='card-title'>Air Pressure</h5>
            <p className='card-text text-align-center'>{current?.pressure_mb}mb</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ForecastHighlightCard;

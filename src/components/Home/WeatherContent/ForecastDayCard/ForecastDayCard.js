const ForecastDayCard = ({ forecast }) => {
  return (
    <div className='card w-25'>
      <p className='card-text text-align-center'>{forecast?.date}</p>
      <img src={forecast?.day?.condition?.icon} className='card-img-top' alt={forecast?.day?.condition?.text} />
      <div className='card-body d-flex justify-content-around'>
        <p className='card-text'>{forecast?.day?.maxtemp_c}°C</p>
        <p className='card-text'>{forecast?.day?.mintemp_c}°C</p>
      </div>
    </div>
  );
};

export default ForecastDayCard;

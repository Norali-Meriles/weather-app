const Aside = () => {
  return (
    <aside className='col-4 d-flex flex-column bg-secondary'>
      <div className='d-flex flex-row justify-content-between py-3'>
        <button className='btn btn-primary'><i className='bi bi-search-heart pe-2' />Search</button>
        <button className='btn btn-primary'><i className='bi bi-geo' /></button>
      </div>
      <div className='d-flex flex-column justify-content-between h-100 py-3'>
        <img className='w-100' src='https://picsum.photos/200' />
        <div className='d-flex flex-column justify-content-end align-items-center pb-5'>
          <p className='fs-1'>16 °C</p>
          <p className="fs-3">Shower</p>
          <p>Today - 14 octu</p>
          <p>Tucuman</p>
        </div>
      </div>
    </aside>
  );
};

export default Aside;

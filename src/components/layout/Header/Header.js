const Header = () => {
  return (
    <nav className='navbar navbar-dark navbar-expand-lg bg-dark'>
      <div className='container'>
        <a className='navbar-brand' href='#'><i className='bi bi-cloud-lightning-rain-fill pe-2 text-primary' /> Weather-App</a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse d-flex justify-content-end' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <button className='btn'><i className='bi bi-brightness-low text-light' /></button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

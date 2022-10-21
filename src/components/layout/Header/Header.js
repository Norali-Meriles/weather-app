import classNames from 'classnames';
import { useToggleThemeContext, useThemeContext } from '../../../providers/ThemeProvider';

const Header = () => {
  const setTheme = useToggleThemeContext();
  const theme = useThemeContext();

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <header>
      <nav className={classNames('navbar navbar-expand-lg', {
        'navbar-dark bg-dark': theme === 'dark',
        'navbar-light bg-light': theme === 'light',
      })}>
        <div className='container'>
          <a className='navbar-brand' href='#'><i className='bi bi-cloud-lightning-rain-fill pe-2 text-primary' /> Weather-App</a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <button onClick={handleTheme} className='btn'>
                  <i className={classNames('bi', {
                    'bi-brightness-high': theme === 'light',
                    'bi-moon text-white': theme === 'dark',
                  })} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

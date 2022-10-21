import classNames from 'classnames';
import { useThemeContext } from '../../../providers/ThemeProvider';

const Footer = () => {
  const theme = useThemeContext();

  return (
    <footer className={classNames('d-flex justify-content-center', {
      'bg-dark': theme === 'dark',
      'bg-light': theme === 'light',
    })}>
      <div className='py-3'>
        <p className={classNames('mb-0', {
          'text-light': theme === 'dark',
        })}><i className='bi bi-cloud-lightning-rain-fill pe-2 text-primary' />WeatherApp - 2022</p>
      </div>
    </footer>
  );
};

export default Footer;

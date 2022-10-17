import { Home } from './pages';
import { Header, Footer } from './components/layout';
import useGeoLocation from './hooks/useFetch/useGeoLocation';

const App = () => {
  const location = useGeoLocation();
  console.log(location);
  return (
    <div className="App">
      <Header />
      <main>
        {location?.loaded && <Home location={location?.coords} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;

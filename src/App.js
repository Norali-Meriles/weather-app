import { Home } from './pages';
import { Header, Footer } from './components/layout';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;

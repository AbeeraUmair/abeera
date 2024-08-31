import './App.css';
import Carousel1 from './components/carousel';
import Carousel2 from './components/carousel2';
import Header from './components/header';
import Search from './components/search';

function App() {
  return (
    <div >
    <Header />
    <Search />
    <Carousel1  />
  <Carousel2 />
    </div>
  );
}

export default App;

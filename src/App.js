import "./App.css";
import Carousel1 from "./components/carousel";
import Carousel2 from "./components/carousel2";
import Carousel3 from "./components/carousel3";
import Header from "./components/header";
import Moretoexplore from "./components/moretoexplore";
import Search from "./components/search";
import Trending from "./components/trending";
function App() {
  return (
    <div>
      <Header />
      <Search />
      <Carousel1 />
      <Carousel2 />
      <Carousel3 />
      <Trending />
      <Moretoexplore />
    </div>
  );
}

export default App;

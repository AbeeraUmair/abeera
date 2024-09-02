
import "./App.css";
import Carousel1 from "./components/carousel";
import Carousel2 from "./components/carousel2";
import Carousel3 from "./components/carousel3";
import Footer from "./components/footer";
import Footera from "./components/footera";
import Header from "./components/header";
import Moretoexplore from "./components/moretoexplore";
import Search from "./components/search";
import Stylebyu from "./components/stylebyu";
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
      <Stylebyu />
      <Footer />
      <Footera/>
    </div>
  );
}

export default App;


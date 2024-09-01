import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Carousel2() {
  return (
    <div className="carousel2">
      <div>
         <p className="new">
        WHAT'S
        <br /> NEW
      </p>
      </div>
     <div>
      <Carousel className="caro">

        <Carousel.Item interval={1000}>
          
          <div>
          <img
            className="img-carousel2"
            src="https://pk.sapphireonline.pk/cdn/shop/files/Daily-Unstitched-Intermix.jpg?v=1723717371&width=200"
          />
          <p>Nulla vitae </p>
          </div>
          <div>
          <img
            className="img-carousel2"
            src="https://pk.sapphireonline.pk/cdn/shop/files/Tie-_-Dye-Ready-to-Wear-Intermix.jpg?v=1723717413&width=200"
          />
          <p>Lorem ipsum dolor</p>
          </div>
          <div>
          <img
            className="img-carousel2"
            src="https://pk.sapphireonline.pk/cdn/shop/files/Kids-New-Arrivals.jpg?v=1723717506&width=200"
           
          />
          <p>Praesent commodo</p>
          </div>
          <div>
          <img
            className="img-carousel2"
            src="https://pk.sapphireonline.pk/cdn/shop/files/whats-new-_-west-new-arrivals.jpg?v=1724304199&width=200"
          />
          <p>Praesent commodo</p>
          </div>
          <div>
          <img
            className="img-carousel2"
            src="https://pk.sapphireonline.pk/cdn/shop/files/Ready-to-Wear-Summer-_24.jpg?v=1723717815&width=200"
          />
          <p>Praesent commodo</p>
          </div>
          
          <div>
          <img
            className="img-carousel2"
            src="https://pk.sapphireonline.pk/cdn/shop/files/mens-outfits.jpg?v=1723718485&width=200"
          />
          <p>Praesent commodo .</p>
          </div>
          <div>
          <img
            className="img-carousel2"
            src="https://pk.sapphireonline.pk/cdn/shop/files/fragrance-what_s-new.jpg?v=1719828912&width=200"
          />
          <p>Praesent commodo</p>
          </div>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  );
}

export default Carousel2;

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Carousel3() {
  return (
    <div>
        <h1 className="text-center">SHOP BY CATEGORY</h1>
        <hr />
        <Carousel style={{marginLeft : '2rem'}}>
      <Carousel.Item  className="caro3">
      <div>
          <img
            className="img-bycategory"
            src="https://pk.sapphireonline.pk/cdn/shop/files/sbc-accessories_7ae208fe-1be3-4922-add6-3b7956108ce1.jpg?v=1721296694&width=400"
          />
          <p>Nulla vitae </p>
          </div>
          <div>
      <img
            className="img-bycategory"
            src="https://pk.sapphireonline.pk/cdn/shop/files/sbc-_-us.jpg?v=1723718649&width=400"
          />
          <p>Nulla vitae </p>
         </div>
      
          <div>
      <img
            className="img-bycategory"
            src="https://pk.sapphireonline.pk/cdn/shop/files/sbc-_-rtw.jpg?v=1724304306&width=400"
          />
          <p>Nulla vitae </p>
          </div>
      </Carousel.Item>
      <Carousel.Item  className="caro3">
      <div>
      <img
            className="img-bycategory"
            src="https://pk.sapphireonline.pk/cdn/shop/files/sbc-_-man-2.jpg?v=1723718648&width=400"
          />
          <p>Nulla vitae </p>
          </div>
          <div>
      <img
            className="img-bycategory"
            src="https://pk.sapphireonline.pk/cdn/shop/files/sbc-_-west_5eb36ed9-0a78-4253-99e6-a9d5d63b0eb3.jpg?v=1724304324&width=400"
          />
          <p>Nulla vitae </p>
          </div>
          <div>
      <img
            className="img-bycategory"
            src="https://pk.sapphireonline.pk/cdn/shop/files/sbc-kids_fe3a6287-800c-4e7a-acbf-e2c08776791b.jpg?v=1723112862&width=400"
          />
          <p>Nulla vitae </p>
          </div>
         </Carousel.Item>
         <Carousel.Item  className="caro3">
      <div>
      <img
            className="img-bycategory"
            src="https://pk.sapphireonline.pk/cdn/shop/files/sbc-fragrance.jpg?v=1723112862&width=400"
          />
          <p>Nulla vitae </p>
          </div>
          <div>
      <img
            className="img-bycategory"
            src="https://pk.sapphireonline.pk/cdn/shop/files/sbc-_-modest.jpg?v=1723718648&width=400"
          />
          <p>Nulla vitae </p>
          </div>
          <div>
      <img
            className="img-bycategory"
            src="https://pk.sapphireonline.pk/cdn/shop/files/sbc-home_8532312c-cad4-4121-a657-3206a4af4eae.jpg?v=1723112863&width=400"
          />
          <p>Nulla vitae </p>
          </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carousel3;

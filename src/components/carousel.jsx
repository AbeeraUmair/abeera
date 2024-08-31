import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carousel1() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pk.sapphireonline.pk/cdn/shop/files/Desktop-Banner_53b7efcc-78bf-4207-ae94-845329b79dcc.jpg?v=1724304031&width=1100"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pk.sapphireonline.pk/cdn/shop/files/modest_Slider_Banner.jpg?v=1723715836&width=1200"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pk.sapphireonline.pk/cdn/shop/files/men_s_stitched-Slider-Banner.jpg?v=1723715454&width=1200"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pk.sapphireonline.pk/cdn/shop/files/US-intermix-Slider-Banner.jpg?v=1723726456&width=1200"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Fourth slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;
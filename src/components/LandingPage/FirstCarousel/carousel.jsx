import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import carouselData from '../../../Data/data';

function Carousel1() {
    
  return (
    <div>
    <Carousel >
    {carouselData.map((data, index) => (
      <Carousel.Item key={data.id}>
        <img
          className="d-block w-100"
          src={data.image}
        
        />
        <Carousel.Caption>
          <h5>{data.caption}</h5>
          <p>{data.para}</p>
        </Carousel.Caption>
      </Carousel.Item>
     ))}
     </Carousel>
   </div>
 );
}
export default Carousel1;
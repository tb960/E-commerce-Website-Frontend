import React ,{useState} from 'react';
import logo from '../assets/banner_1_button.png';
import logo1 from '../assets/banner_2_button.png';
import logo2 from '../assets/banner_3_button.png';
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Container fluid className="carousel-size carousel">
      <Carousel className = "carousel" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className=" image-size"
            src={logo}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image-size"
            src={logo1}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image-size"
            src={logo2}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      </Container>
    );
  }
  
export default ControlledCarousel
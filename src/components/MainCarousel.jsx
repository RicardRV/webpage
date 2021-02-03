import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import gitHubImg from '../img/github-logo.png';
import '../scss/index.scss';

class MainCarousel extends React.Component {
  render() {
      return (
      <Carousel>
        <Carousel.Item interval={1000000} className="carouselItem">
          <img
            className="d-block img-fluid carouselImage"
            src={gitHubImg}
            alt="First slide" fluid
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
 {/*       <Carousel.Item interval={5000000}>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000000}>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
      </Carousel.Item>*/}
      </Carousel>
      )
  };
}

  export default MainCarousel;


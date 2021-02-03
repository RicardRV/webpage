import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';
import App from '../App';
import '../scss/index.scss';

class MainCarousel extends React.Component {
  constructor(props) 
  {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback    
    this.handleClick = this.handleClick.bind(this);  
  }

  handleClick()
  {
    ReactDOM.render(<App />, document.getElementById('root'));
  }


  render() {
      return (
      <Carousel>
        
        <Carousel.Item interval={1000000} className="carouselItem" onClick={this.handleClick}>
          <div className="carouselImg"></div>
          <div className="carouselText">Patata Full hd</div>
            {/*<Carousel.Caption className="carouselText">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
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


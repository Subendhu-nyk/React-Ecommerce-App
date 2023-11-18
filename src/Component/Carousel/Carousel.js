import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../../Component/Carousel/CarouselImage';
import classes from './Carousel.module.css'

import image1 from '../../Assets/bg1.jpg';
import image2 from '../../Assets/bg2.jpg';
import image3 from '../../Assets/bg3.jpg';


function CarouselSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <CarouselImage text="First slide" src={image1} />
        <Carousel.Caption className={classes.carousel1}>
          <h3>Discover the Latest Trends</h3>
          <p>Explore top fashion, tech, and home decor in our collection. Stay stylish with our trendsetting and innovative products.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Second slide" src={image2} />        
        <Carousel.Caption className={classes.carousel1}>
          <h3>Exceptional Quality, Unbeatable Prices</h3>
          <p>Enjoy premium products without the premium price tag. Shop our range of high-quality, affordable items from trusted brands.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Third slide" src={image3} />
        <Carousel.Caption className={classes.carousel1}>
          <h3>Fun and Fashion for Kids</h3>
          <p>
          Dive into our vibrant children's fashion collection. Find comfortable, stylish, and durable outfits for all their adventures.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;
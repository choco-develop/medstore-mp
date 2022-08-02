import React from 'react';
import { Carousel } from 'flowbite-react';
import FirstSlide from '../assets/images/are-you-importer.jpg';
import SecondSlide from '../assets/images/buy-medical-equipment.jpg';

export default function slider() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={1000}>
        <img
          src={FirstSlide}
          alt="..."
          className="h-full"
        />
        <img
          src={SecondSlide}
          alt="..."
          className="h-full"
        />
      </Carousel>
    </div>
  );
}

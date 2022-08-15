import React from 'react';
import { Carousel } from 'flowbite-react';
import FirstSlide from '../assets/images/are-you-importer.jpg';
import SecondSlide from '../assets/images/buy-medical-equipment.jpg';
import ThirdSlide from '../assets/images/marketplace-slider/diagnostic.jpg';
import FourthSlide from '../assets/images/marketplace-slider/medical-expo.jpg';
import FifthSlide from '../assets/images/marketplace-slider/qr-code.jpg';

export default function slider() {
  return (
    <div className="h-[120px] sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={1000}>
        <img
          src={FirstSlide}
          alt="..."
          className="object-cover h-full"
        />
        <img
          src={SecondSlide}
          alt="..."
          className="object-cover h-full"
        />
        <img
          src={ThirdSlide}
          alt="..."
          className="object-cover h-full"
        />
        <img
          src={FourthSlide}
          alt="..."
          className="object-cover h-full"
        />
        <img
          src={FifthSlide}
          alt="..."
          className="object-cover h-full"
        />
      </Carousel>
    </div>
  );
}

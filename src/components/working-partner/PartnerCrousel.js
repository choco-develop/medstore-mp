// import React, { useLayoutEffect, useState } from 'react';
import { Carousel } from 'flowbite-react';
import {
  leftIcon, rightIcon,
} from './PartenereFeatures';

export default function PartnerCrousel() {
  // function getWindowDimensions() {
  //   const { innerWidth: width, innerHeight: height } = window;
  //   return {
  //     width,
  //     height,
  //   };
  // }

  // function useWindowDimensions() {
  //   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  //   useLayoutEffect(() => {
  //     function handleResize() {
  //       setWindowDimensions(getWindowDimensions());
  //     }

  //     window.addEventListener('resize', handleResize);
  //     return () => window.removeEventListener('resize', handleResize);
  //   }, []);

  //   return windowDimensions;
  // }

  // const { width } = useWindowDimensions();
  // let isMobile = false;
  // if (width < 800) {
  //   isMobile = true;
  // }

  function importAll(r) {
    const images = {};
    r.keys().map((item) => {
      images[item.replace('./', '')] = r(item);
      return null;
    });
    return images;
  }
  const images = importAll(require.context('../../assets/images/partneres-company', false, /.png/));

  return (
    <div className="bg-white p-5 mb-5">
      <h1 className="text-center text-main font-lato p-5">Trusted Partenres</h1>
      <hr />
      <br />
      <div className="h-40 xs:px-5 sm:h-44 xl:h-44 2xl:h-50">
        <Carousel
          indicators={false}
          leftControl={leftIcon}
          rightControl={rightIcon}
        >
          <div className="flex justify-between items-center lg:p-20">
            <img src={images['most.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
            <img src={images['awash_bank.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
            <img src={images['boa.png']} alt="..." className="object-scale-down xs:max-w-[100px] " />
            <img src={images['digital_ocean.png']} alt="..." className="object-scale-down xs:max-w-[100px] xs:hidden md:flex" />
            <img src={images['most.png']} alt="..." className="object-scale-down xs:max-w-[100px] xs:hidden md:flex" />
          </div>
          <div className="flex justify-between items-center lg:p-20">
            <img src={images['most.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
            <img src={images['awash_bank.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
            <img src={images['boa.png']} alt="..." className="object-scale-down xs:max-w-[100px]" />
            <img src={images['digital_ocean.png']} alt="..." className="object-scale-down xs:max-w-[100px] xs:hidden md:flex" />
            <img src={images['most.png']} alt="..." className="object-scale-down xs:max-w-[100px] xs:hidden md:flex" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

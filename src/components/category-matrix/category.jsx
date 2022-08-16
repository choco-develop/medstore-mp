import React from 'react';
import Slider from 'react-slick';
import { SamplePrevArrow, SampleNextArrow } from './slider-slick';
// import CategoryOne from '../../assets/images/category/aid.png';
// import CategoryTwo from '../../assets/images/category/measure.png';
import CatList from './category-list';

export default function category() {
  const catMax = [];
  for (let i = 0; i < CatList.length; i += 1) {
    catMax.push(
      <div
        className="border flex flex-col
                      hover:shadow-b-md z-0
                      xs:h-40"
        key={i}
      >
        <div className="flex flex-col hover:border-2 xs:h-40">
          <div className="relative xs:h-40 flex justify-center">
            <img src={CatList[i].image_url} alt="catagory name" className="object-scale-down  xs:max-h-36" loading="lazy" />
            <div className="p-1 flex w-full justify-center absolute bottom-5">
              <h3 className="text-[#364954] font-bold font-serif">
                {CatList[i].name}
              </h3>
            </div>
          </div>
        </div>
      </div>,
    );
  }

  const settings = {
    className: 'grid grid-cols-6 grid-rows-2 xs:auto-rows-max mb-2 p-5 xs:hidden bg-white relative',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    rows: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <div className="flex justify-center mt-10">
        <h1 className="font-bold font-italic font-serif text-main">New and Used Medical Equipment</h1>
      </div>
      <Slider {...settings}> {/* eslint-disable-line */}
        { catMax }
      </Slider>
      <div className="flex justify-center mt-1 ml-5 xs:hidden">
        <button type="button" className="px-5 py-3 my-5 border hover:rounded-md hover:bg-gray-200 bg-white">
          See All Category
        </button>
      </div>
    </div>
  );
}

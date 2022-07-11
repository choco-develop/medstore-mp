import React from 'react';
import { Carousel } from 'flowbite-react';

export default function category() {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 mt-5 p-2 border gap-1">
        <div className="border flex flex-col">
          <div>
            <img src="./assets/cat.jpg" alt="catagory name" />
          </div>
          <div className="p-1">
            <p className="font-sans text-sm font-light truncate text-center">Category 1</p>
          </div>
        </div>

        <div className="border flex flex-col">
          <div>
            <img src="./assets/cat.jpg" alt="catagory name" />
          </div>
          <div className="p-1">
            <p className="font-sans text-sm font-light truncate text-center">Category 2</p>
          </div>
        </div>

        <div className="border flex flex-col">
          <div>
            <img src="./assets/cat.jpg" alt="catagory name" />
          </div>
          <div className="p-1">
            <p className="font-sans text-sm font-light truncate text-center">Category 3</p>
          </div>
        </div>

        <div className="border flex flex-col">
          <div>
            <img src="./assets/cat.jpg" alt="catagory name" />
          </div>
          <div className="p-1">
            <p className="font-sans text-sm font-light truncate text-center">Category 4</p>
          </div>
        </div>

        <div className="border flex flex-col">
          <div>
            <img src="./assets/cat.jpg" alt="catagory name" />
          </div>
          <div className="p-1">
            <p className="font-sans text-sm font-light truncate text-center">Category 5</p>
          </div>
        </div>

        <div className="border flex flex-col">
          <div>
            <img src="./assets/cat.jpg" alt="catagory name" />
          </div>
          <div className="p-1">
            <p className="font-sans text-sm font-light truncate text-center">Category 6</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center m-3">
        <button type="button" className="outline-2 outline-blue-500/50">See all category</button>
      </div>

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
    </>
  );
}

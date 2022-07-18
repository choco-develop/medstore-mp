import React from 'react';
import { Button } from 'flowbite-react';

export default function category() {
  const cats = [];
  for (let i = 0; i < 24; i += 1) {
    cats.push(
      <div className="border flex flex-col">
        <div>
          <img src="./assets/cat.jpg" alt="catagory name" />
        </div>
        <div className="p-1">
          <p className="font-sans text-sm font-light truncate text-center">Category 1</p>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-2 mt-10 mx-10 mb-2 p-5 border gap-5">
        { cats }
      </div>
      <div className="flex justify-center mt-1">
      <Button color="gray">
        See All Category
      </Button>
      </div>
    </>
  );
}

import React from 'react';
// import { Button } from 'flowbite-react';

export default function category() {
  const catMax = [];
  for (let i = 0; i < 24; i += 1) {
    catMax.push(
      <div className="border flex flex-col transition ease-in-out delay-250 hover:translate-y-1 hover:border-teal-400 hover:border-2" key={i}>
        <div>
          <img src="./assets/cat.jpg" alt="catagory name" />
        </div>
        <div className="p-1">
          <p className="font-sans text-sm font-light truncate text-center text-teal-900 leading-10 italic">{`category ${i}`}</p>
        </div>
      </div>,
    );
  }
  return (
    <>
      <div className="grid grid-cols-10 grid-rows-2 mt-10 mx-10 mb-2 p-5 border gap-5 bg-stone-400 shadow-md xs:hidden">
        { catMax }
      </div>
      <div className="flex justify-center mt-1 xs:hidden">
        <button type="button" className="px-5 py-3 my-5 border hover:rounded-md hover:bg-gray-200">
          See All Category
        </button>
      </div>
    </>
  );
}

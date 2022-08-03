import React from 'react';
import { LeftSlide, RightSide } from './slider'; // eslint-disable-line

export default function category() {
  const catMax = [];
  for (let i = 0; i < 12; i += 1) {
    catMax.push(
      <div className="border flex flex-col transition ease-in-out delay-250 hover:translate-y-1 hover:border-teal-400 hover:border-2 z-0" key={i}>
        <div className="relative">
          <div className="p-1 absolute bottom-0 flex w-full justify-center">
            <h3 className="text-[#364954]">Category Name</h3>
          </div>
          <img src="./assets/cat.jpg" alt="catagory name" />
        </div>
      </div>,
    );
  }

  return (
    <>
      <div className="grid grid-cols-6 grid-rows-2 mt-10 mx-10 mb-2 p-5 gap-5 bg-stone-400 xs:hidden bg-slate-200 relative">
        <LeftSlide />
        <RightSide />
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

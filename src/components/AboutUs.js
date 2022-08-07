import React from 'react';

export default function AboutUs() {
  return (
    <div id="about-us" className="flex flex-col p-2 border mx-10 xs:mx-1 shadow-sm px-5 py-5 mb-5 bg-white">
      <div className="grid grid-cols-5 mt-5 gap-5">
        <div className="col-span-1 xs:hidden grid grid-rows-3">
          <img src="./assets/logo-2.png" alt="company" className="row-span-2  self-center" />
        </div>
        <div className="col-span-4 xs:col-span-5 ml-10">
          <p className="indent-10 text-justify text-gray-600">
            But I must explain to you how all this mistaken idea of reprobating pleasure
            and extolling pain arose  how all this mistaken idea of reprobating pleasure.
            how all this mistaken idea of reprobating pleasure  how all this mistaken idea
            how all this mistaken idea of reprobating pleasure of reprobating pleasure
          </p>
          <p className="indent-10 mt-6 text-justify text-gray-600">
            But I must explain to you how all this mistaken idea of reprobating pleasure
            and extolling pain arose  how all this mistaken idea of reprobating pleasure.
            how all this mistaken idea of reprobating pleasure  how all this mistaken idea
            how all this mistaken idea of reprobating pleasure of reprobating pleasure
          </p>
          <button type="button" className="px-7 py-2 border mt-5 bg-main text-white">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
}

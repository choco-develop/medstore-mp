import React from 'react';
import CompanyLogo from '../assets/images/Logo-New.png';

export default function AboutUs() {
  return (
    <div id="about-us" className="flex flex-col p-2 border mx-10 xs:mx-1 shadow-sm px-5 py-5 mb-5 bg-white">
      <div className="grid grid-cols-5 mt-5 gap-5">
        <div className="col-span-1 xs:hidden grid grid-rows-3">
          <img src="./assets/logo-2.png" alt="company" className="row-span-2  self-center" />
        </div>
        <div className="col-span-4 ml-10 xs:col-span-5">
          <img
            src={CompanyLogo}
            alt="..."
            className="float-left object-scale-down w-1/2 px-3 sm:w-1/5"
          />
          <p className="text-justify text-gray-600 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec ultricies erat non libero tempor ultrices.
            Mauris consequat a diam ut vehicula.
            Proin lobortis pharetra facilisis. Sed condimentum arcu non massa vehicula vehicula.
            Suspendisse pretium, nunc vitae luctus mattis, nibh libero
            semper ex, in semper elit dui eu nulla. Pellentesque nibh urna,
            fermentum nec pharetra sed, varius et augue. In vehicula lobortis blandit.
            Integer est sapien, fringilla non viverra ac, congue nec ex.
            Sed eget lacus felis. Nulla nec vehicula turpis, eget iaculis nibh.
          </p>
          <button type="button" className="px-7 py-2 border mt-5 bg-main text-white w-[200px]">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
// import CompanyLogo from '../assets/images/Logo-New.png';
import AboutImage from '../assets/images/collection/bimedis-about.png';

export default function AboutUs() {
  return (
    <div id="about-us" className="flex flex-col p-2 border mx-10 xs:mx-1 shadow-sm px-5 py-5 mb-5 bg-white">
      <h1
        className="font-serif font-bold text-main
                  text-2xl uppercase"
      >
        what is medstore?
      </h1>
      <hr className="mb-3" />
      <div className="grid grid-cols-5 mt-5 gap-5 sm:grid-cols-3 lg:gap-0">
        <div className="col-span-1 xs:hidden sm:flex sm:col-span-1 sm:content-center">
          <img src={AboutImage} alt="company" className="object-contain" />
        </div>
        <div className="col-span-4 ml-10 xs:col-span-5 sm:col-span-2">
          <img
            src={AboutImage}
            alt="..."
            className="float-left object-scale-down w-1/2 px-3 sm:hidden"
          />
          <p className="text-justify text-gray-600 mb-3 font-serif indent-5 break-words">
            <strong className="text-xl text-main">Medstore is: </strong>
            a Medical and Hospital Equipment Marketplace for New and Used Medical
            Equipment for sale or Refurbished Medical Equipment. We also offer Medical
            Equipment related Services Directory. You can Buy Sell New and Pre-Owned
            Medical Equipment and Medical Products. Bimedis provides more than, 390 000 Offers.
            You can find the 2nd hand medical equipment, Medical Device Companies, Home Medical
            Devices,Hospital Medical Equipment, Hospital Instruments and more Medical Equipment.
            <p className="xs:hidden pt-2 md:block">
              List your Hospital Equipment and Medical Equipment for sale or wanted. Bimedis is
              a classified ads platform popular with many doctors. A convenient ad search system
              is provided to ensure quick access to necessary Medical Instrument, thats why it
              has become even easier to Buy Cheap Used Medical Equipment. The search results list
              provides the possibility to select the merchandise category, manufacturer name,
              machine model, and its manufacturing date. Besides, it also allows setting the
              price range, specifying equipment condition and the
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

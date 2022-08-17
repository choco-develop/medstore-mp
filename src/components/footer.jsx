import React from 'react';
import {
  BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble,
}
  from 'react-icons/bs';

export default function footer() {
  return (
    <footer className="flex flex-col flex-wrap w-full text-[#e6f4f1]">
      <div className="flex flex-wrap gap-y-3 justify-evenly bg-main p-5">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold">Company</h2>
          <div className="flex flex-col gap-2 text-[#bcd7d2]">
            <span>About</span>
            <span>Careers</span>
            <span>Brand Center</span>
            <span>Blog</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold">Help Center</h2>
          <div className="flex flex-col gap-2  text-[#bcd7d2]">
            <span>Discord Server</span>
            <span>Twitter</span>
            <span>Facebook</span>
            <span>Contact Us</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold">Legal</h2>
          <div className="flex flex-col gap-2  text-[#bcd7d2]">
            <span>Privacy Policy</span>
            <span>Licensing</span>
            <span>Terms & conditions</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold">Download</h2>
          <div className="flex flex-col gap-2  text-[#bcd7d2]">
            <span>IOS</span>
            <span>Android</span>
            <span>Windows</span>
            <span>MacOs</span>
          </div>
        </div>
      </div>
      <div className="border-1 border-white flex items-center justify-center gap-3 bg-[#3d82bc] h-[90px]">
        <span className="text-sm sm:text-center">
          © 2022
          <a href="http://localhost" className="ml-1 hover:underline">Medstore™</a>
        </span>
        <div className="flex gap-2">
          <BsDribbble />
          <BsFacebook />
          <BsGithub />
          <BsInstagram />
          <BsTwitter />
        </div>
      </div>
    </footer>
  );
}

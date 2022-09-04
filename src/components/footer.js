import React from 'react';
import {
  BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble,
}
  from 'react-icons/bs';

export default function footer() {
  return (
    <footer className="flex flex-col flex-wrap w-full text-[#e6f4f1]">
      <div className="flex flex-wrap gap-y-3 justify-between bg-main p-5">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold">Medstore.et</h2>
          <div className="flex flex-col gap-2 text-[#bcd7d2]">
            <span>About us</span>
            <span>News/Article</span>
            <span>Carrers</span>
            <span>Blog</span>
          </div>
          <h2 className="font-semibold">Address</h2>
          <div className="flex flex-col gap-2 text-[#bcd7d2]">
            <address>
              22 Mazoriya, Djibuti street
            </address>
            <span>Abye building, G+1 Office: #109</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold">Quick Links</h2>
          <div className="flex flex-col gap-2  text-[#bcd7d2]">
            <span>Start getting offer</span>
            <span>Start selling</span>
            <span>Get notified tender early</span>
            <span>Discover manufacturer</span>
            <span>Discover Importer</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold">Stay connected</h2>
          <div className="flex flex-col gap-4  text-[#bcd7d2]">
            <div className="flex mt-10">
              <input type="text" className="border-1 rounded-xl" placeholder="Search here..." />
            </div>
            <div className="flex justify-evenly gap-2">
              <BsDribbble size={30} />
              <BsFacebook size={30} />
              <BsGithub size={30} />
              <BsInstagram size={30} />
              <BsTwitter size={30} />
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 py-5 border-1 border-white flex items-center justify-between gap-3 bg-[#3d82bc]">
        <span className="text-sm sm:text-center">
          <a href="http://localhost" className="ml-1 hover:underline">Medstore Trading PLC™</a>
          © 2022
        </span>
        <div className="flex gap-2">
          <p>
            Powered by:
            <a href="www.debolx.com" className="italic"> Debolx</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

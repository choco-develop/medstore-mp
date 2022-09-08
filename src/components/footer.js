import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble,
}
  from 'react-icons/bs';

export default function footer() {
  const [searchKey, setSearchKey] = useState('');

  return (
    <footer className="flex flex-col flex-wrap w-full text-white">
      <div className="flex flex-wrap gap-y-3 justify-between bg-main px-3 py-3 lg:h-[250px] xl:px-16">
        <div className="flex flex-col gap-3 basis-1/2 sm:basis-1/3 lg:basis-1/4">
          <h1
            className="font-serif font-semibold text-xl xl:text-2xl"
          >
            Medstore.et
          </h1>
          <div className="flex flex-col gap-2 text-white font-normal xl:text-lg">
            <Link to="/">About us</Link>
            <Link to="/">News/Article</Link>
            <Link to="/">Carrers</Link>
            <Link to="/">Blog</Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 basis-1/2 sm:basis-1/3 lg:basis-1/4">
          <h1 className="font-semibold font-serif text-xl xl:text-2xl">Quick Links</h1>
          <div className="flex flex-col gap-2 text-white font-normal xl:text-lg">
            <Link to="/">Start getting offer</Link>
            <Link to="/">Start selling</Link>
            <Link to="/">Get notified tender early</Link>
            <Link to="/">Discover manufacturer</Link>
            <Link to="/">Discover Importer</Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 basis-1/2 sm:basis-1/3 lg:basis-1/4">
          <h1 className="font-semibold font-serif text-xl xl:text-2xl">Address</h1>
          <div className="flex flex-col gap-2 text-white font-normal xl:text-lg">
            <address>
              22 Mazoriya, Djibuti street
            </address>
            <span className="flex">Abye building, G+1 Office: #109</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full pb-3 sm:w-3/4 lg:basis-1/4">
          <h1 className="font-semibold font-serif text-xl xl:text-2xl">Stay connected</h1>
          <div className="flex flex-col gap-4 text-white">
            <div className="flex mt-1">
              <input
                type="text"
                name="searchKey"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                className="border-1 rounded-xl w-3/4 sm:w-[60%]
                        md:py-3 md:px-2
                        lg:w-full"
                placeholder="Search here..."
              />
            </div>
            <div
              className="flex justify-evenly gap-2
                      w-3/4 sm:w-[60%] sm:justify-center sm:gap-3
                      md:gap-5
                      lg:w-full"
            >
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

import React, { useState } from 'react';
import { MdSearch, MdLogin } from 'react-icons/md';
import MainLogo from '../../assets/images/colored-logo.png';

export default function Header() {
  const [search, setSearch] = useState('');
  return (
    <nav className="flex flex-col w-full">
      <div className="flex justify-between p-2 mini-nav content-center bg-top">
        <div>
          <p className="customiseFont">Ethiopian Medical Material Portal</p>
        </div>
        <div className="flex items-center">
          <a href="http://localhost:8000" className="customiseFont">Seller Portal</a>
        </div>
      </div>
      <div className="flex p-2 flex-wrap gap-y-2 bg-gradient-to-r from-main via-purple-500 to-temp">
        <div className="flex gap-2">
          <div style={{ width: '125px' }} className="relative">
            <div style={{ height: '100px' }} className="w-full absolute top-0 left-0 z-50 bg-main rounded-full flex justify-center">
              <div className="w-[85%] h-[85%] self-center bg-white rounded-full flex justify-center">
                <img src={MainLogo} alt="..." className="w-3/4 self-center" />
              </div>
            </div>
          </div>
          <h2 className="appName self-center">Medstore.et</h2>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <ul className="flex w-full justify-end gap-x-4 px-3 items-center text-white xs:justify-end">
            <li className="xs:hidden">
              <div
                className="flex"
                style={{ backgroundColor: '#2f6e7021' }}
              >
                <input
                  type="text"
                  placeholder="Search here..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full py-3 pl-5 pr-4 border-none outline-none
                              focus:border-transparent italic
                              placeholder:italic placeholder:text-white
                              bg-transparent border-none focus:ring-0"
                />
                <button type="button" className="rounded-md px-5 text-black sm:hidden">
                  <MdSearch color="white" />
                </button>
              </div>
            </li>
            <li className="xs:hidden navItems">
              <a href="http://localhost:8000" className="hover:text-main">Buy Equipment</a>
            </li>
            <li className="xs:hidden navItems">
              <a href="http://localhost:8000" className="hover:text-main">News/Article</a>
            </li>
            <li className="xs:hidden navItems">
              <a href="http://localhost:8000" className="hover:text-main">Tender</a>
            </li>
            <li className="navItems">
              <a href="http://localhost:8000 " className="flex items-center gap-1 hover:text-main">
                <MdLogin />
                <p>Login</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

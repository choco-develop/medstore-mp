import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

export default function Header() {
  const [search, setSearch] = useState('');
  return (
    <nav className="flex flex-col w-full bg-main">
      <div className="flex justify-between p-2 mini-nav content-center">
        <div>
          <p id="top-header">Ethiopian Medical Material Portal</p>
        </div>
        <div className="flex items-center">
          <a href="http://localhost:8000">Seller Portal</a>
        </div>
      </div>
      <div className="flex p-2 flex-wrap gap-y-2">
        <div className="flex items-center gap-2">
          <img src="./assets/logo.png" alt="company logo" className="nav-logo rounded-full border bg-white" />
          <h2 className="appName">Medstore.et</h2>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <ul className="flex w-full justify-end gap-x-4 px-3 items-center text-white xs:justify-end">
            <li className="xs:hidden">
              <div className="flex bg-white rounded-full">
                <input
                  type="text"
                  placeholder="Search here..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full py-3 pl-5 pr-4 border-none outline-none
                              focus:border-transparent italic text-gray-500
                              placeholder:italic rounded-l-full sm:rounded-full"
                />
                <button type="button" className="rounded-md px-5 text-black sm:hidden">
                  <MdSearch />
                </button>
              </div>
            </li>
            <li className="xs:hidden">
              <a href="http://localhost:8000">Buy Equipment</a>
            </li>
            <li className="xs:hidden">
              <a href="http://localhost:8000">News/Article</a>
            </li>
            <li className="xs:hidden">
              <a href="http://localhost:8000">Tender</a>
            </li>
            <li>
              <a href="http://localhost:8000">Login/Signup</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

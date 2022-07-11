import React from 'react';

export default function Header() {
  return (
    <nav className="flex flex-col w-full bg-main">
      <div className="basis-1/4 flex justify-between p-2 mini-nav">
        <div>
          <p id="top-header">Ethiopian Medical Material Portal</p>
        </div>
        <div>
          <p>Login</p>
        </div>
      </div>
      <div className="basis-auto flex p-2">
        <div className="basis-1/5 flex items-center gap-2">
          <img src="./assets/logo.png" alt="company logo" className="nav-logo rounded-full border border-gray-100" />
          <h2>Medstore.et</h2>
        </div>
        <div className="basis-3/4 flex items-center">
          <ul className="flex w-full justify-between px-3">
            <li>gsd</li>
            <li>Tender</li>
            <li>Seller</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

import React from 'react';

export default function Header() {
  return (
    <nav className="flex flex-col w-full border">
      <div className="basis-1/4 flex justify-between border">
        <div>
          <p>Ethiopian Medical Material Portal</p>
        </div>
        <div>
          <p>Login</p>
        </div>
      </div>
      <div className="basis-auto flex">
        <div className="basis-1/3">
          <img src="./assets/logo.png" alt="company logo" />
        </div>
        <div className="border basis-3/4 flex items-center">
          <ul className="flex w-full justify-between px-3">
            <li><strong>Medstore</strong></li>
            <li>Tender</li>
            <li>Seller</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

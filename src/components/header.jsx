import React from 'react';

export default function Header() {
  return (
    <nav className="flex flex-col w-full border">
      <div className="basis-1/3 flex justify-between border p-3">
        <div>
          <i>Ethiopian Medical Material Portal</i>
        </div>
        <div>
          <i>Login</i>
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

import React from 'react';

export default function Header() {
  return (
    <nav className="flex flex-col w-full border-4">
      <div className="flex flex-auto">
        <div className="basis-1/4 flex items-center border">
          <img src="./assets/logo.png" alt="Company logo" />
        </div>
        <div className="flex-auto flex flex-col border">
          <div className="flex justify-end p-3 border">
            Login
          </div>
          <div>
            <ul className="flex justify-between items-center gap-x-5 p-3">
              <li>Featured</li>
              <li>Topics</li>
              <li className="basis-1/2">
                <input type="text" name="search" id="search" placeholder="Search here..." className="w-full rounded-xl" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="basis-1/4 flex gab-x-5 justify-center p-1">
        <h3>Subscribe to get letters</h3>
      </div>
    </nav>
  );
}

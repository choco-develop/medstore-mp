import React from 'react';

export default function footer() {
  return (
    <>
      <div className="border flex gap-3 p-2 justify-between">
        <div className="logo basis-1/4 place-self-center">
          <img src="./assets/logo.png" alt="logo" />
        </div>
        <div className="flex flex-col">
          <h3>Links</h3>
          <hr />
          <ul className="mt-2">
            <li><a href="./tender">Tender</a></li>
            <li>Seller</li>
          </ul>
        </div>
        <div>
          <h3>Contacts</h3>
          <hr />
          <ul className="mt-2">
            <li>+251928437840</li>
            <li>some@email.com</li>
            <li>www.google.com</li>
          </ul>
        </div>
      </div>

      <div className="text-center p-6 ">
        <span>© 2022 Copyright:</span>
        <a className="text-gray-600 font-semibold" href="https://www.google.com/">MedStore ET</a>
      </div>
    </>
  );
}

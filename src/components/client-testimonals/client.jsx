import React from 'react';

export default function client() {
  return (
    <>
      <div className="relative flex py-5 px-5 justify-center">
        <h2 className="text-gray-700 text-lg font-bold">Clients</h2>
      </div>

      <div className="flex justify-center p-2 border mx-10 xs:mx-2 my-5 shadow-sm px-5 py-5 bg-white">
        <div className="flex flex-col gap-2 w-64">
          <div className="relative flex justify-center">
            <img className="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" alt="user" />
          </div>
          <div className="flex justify-center">
            <strong className="text-center text-orange-600">Petter L.</strong>
          </div>
          <div>
            <p className="font-serif text-xs italic indent-2 text-center text-gray-600 font-lato font-bold">Lorem ipsum dolor,it amet consectetur adipisicing elit.Facilis ut sed sequi odit.it amet consectetur adipisicing elit.Facilis ut sed sequi odit</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-64">
          <div className="relative flex justify-center">
            <img className="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" alt="user" />
          </div>
          <div className="flex justify-center">
            <strong className="text-center text-orange-600">Petter L.</strong>
          </div>
          <div>
            <p className="font-serif text-xs italic indent-2 text-center text-gray-600">Lorem ipsum dolor,it amet consectetur adipisicing elit.Facilis ut sed sequi odit.it amet consectetur adipisicing elit.Facilis ut sed sequi odit</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-64">
          <div className="relative flex justify-center">
            <img className="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" alt="user" />
          </div>
          <div className="flex justify-center">
            <strong className="text-center text-orange-600">Petter L.</strong>
          </div>
          <div>
            <p className="font-serif text-xs italic indent-2 text-center text-gray-600">Lorem ipsum dolor,it amet consectetur adipisicing elit.Facilis ut sed sequi odit.it amet consectetur adipisicing elit.Facilis ut sed sequi odit</p>
          </div>
        </div>
      </div>
    </>
  );
}

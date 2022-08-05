import React from 'react';

export default function client() {
  return (
    <>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400" />
        <span className="flex-shrink mx-2 text-gray-900">Clients</span>
        <div className="flex-grow border-t border-gray-400" />
      </div>

      <div className="flex p-3 gap-3 mb-10 justify-center bg-white">
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

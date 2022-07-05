import React from 'react';

export default function client() {
  return (
    <>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400" />
        <span className="flex-shrink mx-2 text-gray-400">Clients</span>
        <div className="flex-grow border-t border-gray-400" />
      </div>

      <div className="grid grid-cols-2 p-3 gap-2">
        <div className=" grid-flow-col auto-cols-max items-center">
          <div className="relative flex justify-center">
            <img className="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" alt="user" />
          </div>
          <div className="flex justify-center">
            <strong className="text-center">Petter L.</strong>
          </div>
          <div>
            <p className="font-serif text-xs italic indent-8">Lorem ipsum dolor,it amet consectetur adipisicing elit.Facilis ut sed sequi odit.it amet consectetur adipisicing elit.Facilis ut sed sequi odit</p>
          </div>
        </div>

        <div className=" grid-flow-col auto-cols-max items-center">
          <div className="relative flex justify-center">
            <img className="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" alt="user" />
          </div>
          <div className="flex justify-center">
            <strong className="text-center">Petter L.</strong>
          </div>
          <div>
            <p className="font-serif text-xs italic indent-8">Lorem ipsum dolor,it amet consectetur adipisicing elit.Facilis ut sed sequi odit.it amet consectetur adipisicing elit.Facilis ut sed sequi odit</p>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';

export default function sampleProducts() {
  return (
    <>
      <div id="topProducts" className="flex flex-col p-2 border mx-10 shadow-sm px-5 py-5">
        <div className="mb-3">
          <h3>Top Products</h3>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="flex flex-col hover:bg-gray-100">
            <div>
              <img src="./assets/mri.png" alt="catagory name" className="rounded-t-lg" />
            </div>
            <div className="p-1 border rounded-b-lg">
              <p className="font-sans text-sm font-light truncate text-center text-teal-400 leading-10 italic">Product 1</p>
            </div>
          </div>

          <div className="flex flex-col hover:bg-gray-100">
            <div>
              <img src="./assets/mri.png" alt="catagory name" className="rounded-t-lg" />
            </div>
            <div className="p-1 border rounded-b-lg">
              <p className="font-sans text-sm font-light truncate text-center text-teal-400 leading-10 italic">Product 1</p>
            </div>
          </div>

          <div className="flex flex-col hover:bg-gray-100">
            <div>
              <img src="./assets/mri.png" alt="catagory name" className="rounded-t-lg" />
            </div>
            <div className="p-1 border rounded-b-lg">
              <p className="font-sans text-sm font-light truncate text-center text-teal-400 leading-10 italic">Product 1</p>
            </div>
          </div>

          <div className="flex flex-col hover:bg-gray-100">
            <div>
              <img src="./assets/mri.png" alt="catagory name" className="rounded-t-lg" />
            </div>
            <div className="p-1 border rounded-b-lg">
              <p className="font-sans text-sm font-light truncate text-center text-teal-400 leading-10 italic">Product 1</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center m-3">
        <button type="button" className="border px-5 py-3 hover:rounded-md hover:bg-gray-100"><h2>See more &gt;&gt;&gt;</h2></button>
      </div>

      <div id="recentProducts" className="flex flex-col p-2 border">
        <div>
          <h3>Recent Products</h3>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="border flex flex-col">
            <div>
              <img src="./assets/ct.jpg" alt="catagory name" />
            </div>
            <div className="p-1">
              <p className="font-sans text-sm font-light truncate text-center">Product 1</p>
            </div>
          </div>

          <div className="border flex flex-col">
            <div>
              <img src="./assets/ct.jpg" alt="catagory name" />
            </div>
            <div className="p-1">
              <p className="font-sans text-sm font-light truncate text-center">Product 1</p>
            </div>
          </div>

          <div className="border flex flex-col">
            <div>
              <img src="./assets/ct.jpg" alt="catagory name" />
            </div>
            <div className="p-1">
              <p className="font-sans text-sm font-light truncate text-center">Product 1</p>
            </div>
          </div>

          <div className="border flex flex-col">
            <div>
              <img src="./assets/ct.jpg" alt="catagory name" />
            </div>
            <div className="p-1">
              <p className="font-sans text-sm font-light truncate text-center">Product 1</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center m-3">
        <button type="button" className="outline-2 outline-blue-500/50"><h2>See more &gt;&gt;&gt;</h2></button>
      </div>
    </>
  );
}

import React from 'react';

export default function sampleProducts() {
  return (
    <>
      <div id="topProducts" className="flex flex-col p-2 border">
        <div>
          <h3>Top Products</h3>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="border flex flex-col">
            <div>
              <img src="./assets/mri.png" alt="catagory name" />
            </div>
            <div className="p-1">
              <p className="font-sans text-sm font-light truncate text-center">Product 1</p>
            </div>
          </div>

          <div className="border flex flex-col">
            <div className="place-self-stretch">
              <img src="./assets/mri.png" alt="catagory name" />
            </div>
            <div className="p-1">
              <p className="font-sans text-sm font-light truncate text-center">Product 2</p>
            </div>
          </div>

          <div className="border flex flex-col">
            <div>
              <img src="./assets/mri.png" alt="catagory name" />
            </div>
            <div className="p-1">
              <p className="font-sans text-sm font-light truncate text-center">Product 3</p>
            </div>
          </div>

          <div className="border flex flex-col">
            <div>
              <img src="./assets/mri.png" alt="catagory name" />
            </div>
            <div className="p-1">
              <p className="font-sans text-sm font-light truncate text-center">Product 4</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center m-3">
        <button type="button" className="outline-2 outline-blue-500/50"><h2>See more &gt;&gt;&gt;</h2></button>
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
import React from 'react';
import TopProducts from './top-products';
import RecentProducts from './recent-products';

export default function sampleProducts() {
  return (
    <>
      <div id="topProducts" className="flex flex-col p-2 border mx-10 xs:mx-2 my-5 shadow-sm px-5 py-5 bg-white">
        <div className="mb-3">
          <div className="relative flex py-5 items-center">
            <div className="grow w-[10%] border" />
            <span className="flex-none mx-2 text-gray-500">Top Products</span>
            <div className="grow w-[70%] border" />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-2 xs:grid-cols-1 xs:grid-rows-6">
          { TopProducts }
        </div>

        <div className="mb-3">
          <div className="relative flex py-5 items-center">
            <div className="grow w-[10%] border" />
            <span className="flex-none mx-2 text-gray-500">Recent Products</span>
            <div className="grow w-[70%] border" />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-2 xs:grid-cols-1 xs:grid-rows-6">
          { RecentProducts }
        </div>
      </div>
    </>
  );
}

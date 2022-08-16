import React from 'react';
import TopProducts from './top-products';
import RecentProducts from './recent-products';

export default function sampleProducts() {
  return (
    <>
      <div
        id="topProducts"
        className="flex flex-col p-2 border
                my-5 shadow-sm px-5 bg-white py-5"
      >
        <div className="mb-3">
          <div className="relative flex py-5 items-center">
            <div className="grow w-[10%] border" />
            <span className="flex-none mx-2 text-main font-serif">Top Products</span>
            <div className="grow w-[70%] border" />
          </div>
        </div>
        <div className="flex gap-3
                      xs:flex-row xs:flex-wrap xs:gap-0
                      sm:flex-row sm:flex-wrap sm:gap-0
                      md:flex-row md:justify-between"
        >
          { TopProducts }
        </div>
      </div>
      <div id="recentProducts" className="flex flex-col p-5 border my-5 shadow-sm bg-white">
        <div className="mb-3">
          <div className="relative flex py-5 items-center">
            <div className="grow w-[10%] border" />
            <span className="flex-none mx-2 text-main font-serif">Recent Products</span>
            <div className="grow w-[70%] border" />
          </div>
        </div>
        <div className="flex gap-3
                      xs:flex-row xs:flex-wrap xs:gap-0
                      sm:flex-row sm:flex-wrap sm:gap-0
                      md:flex-row md:justify-between"
        >
          { RecentProducts }
        </div>
      </div>
    </>
  );
}

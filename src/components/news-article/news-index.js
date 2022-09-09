import React from 'react';
import NewsArticleComponent from './news-article';

export default function NewsArticle() {
  return (
    <div className="flex flex-col p-2 border mx-0 sm:mx-2 my-5 shadow-sm px-5 py-5  bg-white">
      <div className="relative flex py-5 items-center">
        <div className="grow w-[10%] border" />
        <span
          className="flex-none mx-2 text-main
                  font-bold"
        >
          News and Articles
        </span>
        <div className="grow w-[80%] border" />
      </div>

      <div
        className="flex flex-wrap
                  xs:gap-y-3 xs:px-1
                  sm:px-0 sm:gap-y-0
                  md:gap-0
                  lg:gap-x-1 lg:justify-between
                  xl:justify-between xl:gap-3"
      >
        {
          NewsArticleComponent
        }
      </div>
    </div>
  );
}

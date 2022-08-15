import React from 'react';
import NewsArticleComponent from './news-article';

export default function NewsArticle() {
  return (
    <div className="flex flex-col p-2 border xs:mx-2 my-5 shadow-sm px-5 py-5  bg-white">
      <div className="relative flex py-5 items-center">
        <div className="grow w-[10%] border" />
        <span className="flex-none mx-2 text-gray-500 font-bold">News and Articles</span>
        <div className="grow w-[80%] border" />
      </div>

      <div
        className="flex flex-wrap
                  lg:justify-between
                  xl:justify-start xl:gap-10"
      >
        {
          NewsArticleComponent
        }
      </div>
    </div>
  );
}

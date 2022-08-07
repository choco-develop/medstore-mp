import React from 'react';
import NewsArticleComponent from './news-article';

export default function NewsArticle() {
  return (
    <ul className="flex flex-col p-2 border mx-10 xs:mx-2 my-5 shadow-sm px-5 py-5 bg-white">
      <div className="relative flex py-5 items-center">
        <div className="grow w-[10%] border" />
        <span className="flex-none mx-2 text-gray-500 font-bold">News and Articles</span>
        <div className="grow w-[80%] border" />
      </div>

      <div className="grid grid-cols-4 gap-5">
        {
          NewsArticleComponent
        }
      </div>
    </ul>
  );
}

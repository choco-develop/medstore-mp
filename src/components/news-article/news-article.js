import NewsArticleList from './news-article-list';

const NewsArticleComponent = NewsArticleList.map((value) => (

  <li
    className="grid grid-rows-7 bg-gray-100
            gap-4 border hover:shadow-2xl
            xs:w-screen
            sm:basis-1/2
            md:basis-1/3 md:max-w-[270px] md:border-1 md:border-main
            lg:basis-1/3
            xl:min-w-[350px]"
    key={value.title}
  >
    <div className="row-span-4">
      <img src={value.image_url} alt="..." className="w-full object-cover" />
    </div>
    <div className="row-span-1 flex gap-2 px-1">
      {
        value.tag.map((item, index) => (
          <span className="text-xs bg-temp p-1 font-serif" key={`${item.id}&${index.name}`}>{item.name}</span>
        ))
      }
    </div>
    <div className="row-span-1 px-1">
      <h3 className="text-left font-serif">{value.title}</h3>
    </div>
    <div className="row-span-1 px-1 pb-2">
      <p className="font-italic text-xs">{value.date}</p>
    </div>
  </li>
));

export default NewsArticleComponent;

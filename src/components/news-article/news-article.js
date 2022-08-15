import NewsArticleList from './news-article-list';

const NewsArticleComponent = NewsArticleList.map((value) => (

  <li
    className="grid grid-rows-7
            gap-3 border hover:shadow-2xl
            sm:basis-1/2
            md:basis-1/3
            lg:basis-1/4 lg:max-w-[250px]
            xl:min-w-[350px]"
    key={value.title}
  >
    <div className="row-span-4">
      <img src={value.image_url} alt="..." className=" w-full object-cover" />
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

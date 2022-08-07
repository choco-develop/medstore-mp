import NewsArticleList from './news-article-list';

const NewsArticleComponent = NewsArticleList.map((value) => (

  <li className="col-span-1 grid grid-rows-7 gap-3 border hover:shadow-2xl" key={value.name}>
    <div className="row-span-4">
      <img src={value.image_url} alt="..." />
    </div>
    <div className="row-span-1 flex gap-2 px-1">
      {
        value.tag.map((item) => (
          <span className="text-xs bg-temp p-1" key={item}>{item}</span>
        ))
      }
    </div>
    <div className="row-span-1 px-1">
      <strong className="text-left w-full">{value.title}</strong>
    </div>
    <div className="row-span-1 px-1 pb-2">
      <p className="font-italic text-xs">{value.date}</p>
    </div>
  </li>
));

export default NewsArticleComponent;

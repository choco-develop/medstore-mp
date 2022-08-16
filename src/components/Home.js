import Slider from './slider';
import Category from './category-matrix/category';
import SampleProduct from './products/sample_product';
import ClientComment from './client-testimonals/client';
import AboutUs from './AboutUs';
import NewsArticle from './news-article/news-index';

export default function Home() {
  return (
    <>
      <Slider />
      <div className="xl:mx-20 2xl:mx-32">
        <Category />
        <SampleProduct />
        <NewsArticle />
        <AboutUs />
        <ClientComment />
      </div>
    </>
  );
}

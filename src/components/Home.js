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
      <Category />
      <SampleProduct />
      <NewsArticle />
      <ClientComment />
      <AboutUs />
    </>
  );
}

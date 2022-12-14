import Slider from './slider';
import Category from './category-matrix/category';
import SampleProduct from './products/sample_product';
import PartnerCrousel from './working-partner/PartnerCrousel';
import AboutUs from './AboutUs';
import NewsArticle from './news-article/news-index';

export default function Home() {
  return (
    <>
      <Slider />
      <div className="xl:mx-5 2xl:mx-32">
        <Category />
        <SampleProduct />
        <NewsArticle />
        <AboutUs />
        <PartnerCrousel />
      </div>
    </>
  );
}

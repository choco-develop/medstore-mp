import Slider from './slider';
import Category from './category-matrix/category';
import SampleProduct from './sample_product';
import ClientComment from './client-testimonals/client';
import AboutUs from './AboutUs';

export default function Home() {
  return (
    <>
      <Slider />
      <Category />
      <SampleProduct />
      <ClientComment />
      <AboutUs />
    </>
  );
}

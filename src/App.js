import Header from './components/navigation/header';
import Slider from './components/slider';
import Category from './components/category-matrix/category';
import SampleProduct from './components/sample_product';
import ClientComment from './components/client-testimonals/client';
import Footer from './components/footer';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Category />
      <SampleProduct />
      <ClientComment />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;

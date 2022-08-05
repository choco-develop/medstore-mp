/* eslint-disable */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/navigation/header';
import Footer from './components/footer';
import LoginForm from './components/auth/login-form';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Home from './components/Home';

function App() {
  return (
      <div>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<LoginForm />} />
          </Routes>
        </Router>
        <Footer />
      </div>
  );
}

export default App;

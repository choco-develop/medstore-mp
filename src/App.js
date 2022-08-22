/* eslint-disable */
import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/navigation/header';
import Footer from './components/footer';
import LoginPage from './pages/login/Login'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Home from './components/Home';
import navMenuContext from './contexts/navigationMenuContext';
import store from './redux/store';

function App() {
  const [search, setSearch] = useState('');
  const [navBar, setNavBar] = useState(false);

  return (
      <>
        <Provider store={store}>
          <navMenuContext.Provider value={{ search, setSearch, navBar, setNavBar }}>
            <div className={navBar ? 'h-[100vh] overflow-hidden' : ''}>
              <Header />
              <Router>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="login" element={<LoginPage />} />
                </Routes>
              </Router>
              <Footer />
            </div>
          </navMenuContext.Provider>
        </Provider>
      </>
  );
}

export default App;

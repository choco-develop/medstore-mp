/* eslint-disable */
import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/navigation/header';
import Footer from './components/footer';
import LoginPage from './pages/login/Login'
import BuyerRegister from './pages/registration/Buyer';
import BuyerDetailData from './pages/registration/BuyerDetailData'
import BuyerActivate from './pages/activate-account/BuyerActivate';
import MPIndex from './pages/mp/index';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Home from './components/Home';
import navMenuContext from './contexts/navigationMenuContext';
import store from './redux/store';
import CompRegContextProvider from './contexts/CompRegContextProvider';
//import "@fontsource/roboto";

function App() {
  const [search, setSearch] = useState('');
  const [navBar, setNavBar] = useState(false);

  return (
      <>
        <Provider store={store}>
          <Router>
            <navMenuContext.Provider value={{ search, setSearch, navBar, setNavBar }}>
              <CompRegContextProvider>
                <div className={navBar ? 'h-[100vh] overflow-hidden' : ''}>
                      <Header />
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="buyer/sign-up" element={<BuyerRegister />} />
                        <Route path="buyer/account-activate" element={<BuyerActivate />} />
                        <Route path="accounts/user-info-reg" element={<BuyerDetailData />} />
                        <Route path="market-place" element={<MPIndex />} />
                      </Routes>
                  <Footer />
                </div>
              </CompRegContextProvider>
            </navMenuContext.Provider>
          </Router>
        </Provider>
      </>
  );
}

export default App;

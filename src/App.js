/* eslint-disable */
import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/navigation/header';
import Footer from './components/footer';
import LoginPage from './pages/login/Login'
import BuyerRegister from './pages/registration/Buyer';
import UserInfoRegistration from './pages/registration/UserInfoRegistration'
import BuyerActivate from './pages/activate-account/BuyerActivate';
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
              <Router>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="login" element={<LoginPage />} />
                  <Route path="buyer/sign-up" element={<BuyerRegister />} />
                  <Route path="buyer/account-activate" element={<BuyerActivate />} />
                  <Route path="accounts/user_info_reg" element={<UserInfoRegistration />} />
                </Routes>
              </Router>
              <Footer />
            </div>
            <Outlet />
          </navMenuContext.Provider>
        </Provider>
      </>
  );
}

export default App;

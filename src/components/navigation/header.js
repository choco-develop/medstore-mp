import React, { useCallback, useContext } from 'react';
import { MdSearch, MdLogin, MdLogout } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/auth';
import MainLogo from '../../assets/images/Logo-New.png';
import MobileNav from './mobile-nav';
import navMenuContext from '../../contexts/navigationMenuContext';

export default function Header() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const {
    navBar, setNavBar, search, setSearch,
  } = useContext(navMenuContext);

  const handleMenuBtn = useCallback(() => {
    setNavBar(!navBar);
  }, [navBar]);

  const logOut = () => {
    dispatch(logout());
  };

  const AuthTools = () => {
    if (!isLoggedIn) {
      return (
        <li className="xs:hidden sm:block">
          <Link to="/login" className="flex items-center gap-1 hover:text-gray-200">
            <MdLogin />
            <p className="font-serif">Login</p>
          </Link>
        </li>
      );
    }

    return (
      <li className="xs:hidden sm:block">
        <button type="button" className="flex items-center gap-1 hover:text-gray-200" onClick={() => logOut()}>
          <MdLogout />
          <p className="font-serif">Logout</p>
        </button>
      </li>
    );
  };

  return (
    <nav className="flex flex-col w-full relative">
      <div className="flex justify-between p-2 mini-nav content-center bg-top">
        <div>
          <p className="font-serif font-sm italic">Ethiopian Medical Material Portal</p>
        </div>
        <div className="flex items-center pr-0 md:pr-2 ">
          <a href="http://localhost:8000" className="font-serif">Seller Portal</a>
        </div>
      </div>
      <div className="flex p-2 flex-wrap gap-y-2 bg-main">
        <Link to="/" className="flex gap-2">
          <div
            className="flex relative w-[55px]
                    sm:w-[100px] md:w-[100px]
                    lg:w-[100px] xl:w-[100px]
                    2xl:w-[100px]"
          >
            <div
              className="absolute top-0 left-0 z-50
                        bg-main rounded-full flex
                        self-center h-[55px] w-[55px]
                        sm:w-[95px] sm:h-[95px] md:w-[95px] md:h-[95px]
                        lg:w-[95px] lg:h-[95px] xl:w-[95px] xl:h-[95px]
                        2xl:w-[95px] 2xl:h-[95px]
                        "
            >
              <img
                src={MainLogo}
                alt="..."
                className="object-scale-down
                        bg-white rounded-full scale-90"
              />
            </div>
          </div>
          <h2 className="text-white font-bold self-center font-serif">Medstore.et</h2>
        </Link>
        <div className="flex-1 flex items-center justify-end">
          <ul className="flex w-full justify-end gap-x-4 px-3 items-center text-white xs:justify-end">
            <li className="xs:hidden md:block">
              <div
                className="flex"
                style={{ backgroundColor: '#2f6e7021' }}
              >
                <input
                  type="text"
                  placeholder="Search here..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full py-3 pl-5 pr-4 outline-none
                              focus:border-transparent italic
                              placeholder:italic placeholder:text-white
                              bg-transparent border-none focus:ring-0"
                />
                <button type="button" className="rounded-md px-5 text-black sm:hidden md:block">
                  <MdSearch color="white" size={20} />
                </button>
              </div>
            </li>
            <li className="xs:hidden sm:block">
              <Link to="/equipment" className="hover:text-gray-200 font-serif">Buy Equipment</Link>
            </li>
            <li className="xs:hidden sm:block">
              <Link to="/emagazine" className="hover:text-gray-200 font-serif">News/Article</Link>
            </li>
            <li className="xs:hidden sm:block">
              <Link to="/tender" className="hover:text-gray-200 font-serif">Tender</Link>
            </li>
            <li className="backdrop:">
              <button
                type="button"
                className="flex items-center gap-1 hover:text-gray-200
                          sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
                onClick={() => handleMenuBtn()}
              >
                <GiHamburgerMenu size={25} />
              </button>
            </li>
            <AuthTools />
          </ul>
          <section
            className={`transition-all duration-500 ease-in absolute top-0 right-0 bg-main rounded-l-xl h-[100vh] ${navBar ? 'w-3/4' : 'w-0'}`}
            style={{ zIndex: '51' }}
          >
            <MobileNav handleMenuBtn={handleMenuBtn} navBarValue={navBar} />
          </section>
        </div>
      </div>
    </nav>
  );
}

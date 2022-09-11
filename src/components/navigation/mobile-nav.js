import { memo } from 'react';
import {
  MdClose, MdNavigateNext, MdLogin, MdLogout,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux/actions/auth';
import LinkList from './link-list-store';
import LogoCircle from './logo-circle';

const SideNavLinks = () => (
  LinkList.map((value) => (
    <NavLink id={value.id} name={value.name} url={value.url} icon={value.icon} key={value.name} />
  ))
);

const NavLink = ({
  id, url, name,
}) => (
  <li key={`${id}&${name}`} className="flex w-full text-gray-300">
    <a href={url} className="flex justify-between w-full font-serif">
      <div className="flex gap-1 items-center">
        {name}
      </div>
      <MdNavigateNext className="text-gray-300" size={25} />
    </a>
  </li>
);

function MobileNav({ handleMenuBtn, navBarValue }) {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };

  const AuthStatus = () => {
    if (!isLoggedIn) {
      return (
        <li key="4auth" className="flex w-full text-gray-300">
          <a href="/login" className="flex justify-between w-full font-serif">
            <div className="flex gap-1 items-center">
              Login
            </div>
            <MdLogin className="text-gray-300 mr-2" size={18} />
          </a>
        </li>
      );
    }
    return (
      <li key="4auth" className="flex w-full text-gray-300">
        <a href="/" className="flex justify-between w-full font-serif" onClick={logOut}>
          <div className="flex gap-1 items-center">
            Logout
          </div>
          <MdLogout className="text-gray-300 mr-2" size={18} />
        </a>
      </li>
    );
  };

  return (
    <nav className="transition-all duration-500 ease-in flex flex-col h-1/2">
      <div className="flex justify-end h-10 items-center mr-3 mt-2">
        <MdClose className="text-gray-300" size={30} onClick={() => handleMenuBtn()} />
      </div>
      <LogoCircle navBarValue={navBarValue} />
      <hr className="text-white" />
      <ul className={`flex flex-col h-full items-center justify-center mt-4 gap-4 p-3 ${navBarValue ? 'scale-100' : 'scale-0'}`}>
        <SideNavLinks />
        <AuthStatus />
      </ul>
    </nav>
  );
}

MobileNav.propTypes = {
  handleMenuBtn: PropTypes.func.isRequired,
  navBarValue: PropTypes.bool.isRequired,
};

NavLink.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default memo(MobileNav);

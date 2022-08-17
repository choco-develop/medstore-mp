import { memo } from 'react';
import { MdClose, MdNavigateNext } from 'react-icons/md';
import PropTypes from 'prop-types';
import LinkList from './link-list-store';
import LogoCircle from './logo-circle';

const SideNavLinks = () => (
  LinkList.map((value) => (
    <NavLink id={value.id} name={value.name} url={value.url} icon={value.icon} key={value.name} />
  ))
);

const NavLink = ({
  id, url, icon, name,
}) => (
  <li key={`${id}&${name}`} className="flex w-full text-gray-300">
    <a href={url} className="flex justify-between w-full font-serif">
      <div className="flex gap-1 items-center">
        { icon && (
          icon
        )}
        {name}
      </div>
      <MdNavigateNext className="text-gray-300" size={25} />
    </a>
  </li>
);

function MobileNav({ handleMenuBtn, navBarValue }) {
  return (
    <nav className="transition-all duration-500 ease-in flex flex-col h-1/2">
      <div className="flex justify-end h-10 items-center mr-3 mt-2">
        <MdClose className="text-gray-300" size={30} onClick={() => handleMenuBtn()} />
      </div>
      <LogoCircle navBarValue={navBarValue} />
      <ul className="flex flex-col h-full items-center justify-center mt-4 gap-4 p-3">
        <SideNavLinks />
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
  icon: PropTypes.element.isRequired,
};

export default memo(MobileNav);
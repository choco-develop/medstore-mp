import React from 'react';
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GoogleIcon from '../assets/images/icons/google.png';

function AuthFooter({ link }) {
  const LinkName = link === '/login' ? 'Login' : 'Sign Up';

  return (
    <>
      <div className="flex py-5 px-3 items-center md:mx-auto md:w-1/2 xl:w-3/4">
        <div className="grow border border-main" />
        <div
          className="flex-none border border-main
                  rounded-full font-serif
                  w-[30px] text-center
                  text-gray-600"
        >
          OR
        </div>
        <div className="grow border border-main" />
      </div>
      <div className="flex justify-center gap-2">
        <AiFillFacebook size={30} color="#3b5998" />
        <img src={GoogleIcon} alt="..." className="object-scale-down h-7" />
        <AiFillLinkedin size={30} color="#0072b1" />
      </div>
      <div className="flex justify-center">
        <span className="flex gap-2 mb-5">
          Need an account?
          <Link to={link} className="underline text-current">
            { LinkName }
          </Link>
        </span>
      </div>
    </>
  );
}

AuthFooter.propTypes = {
  link: PropTypes.string.isRequired,
};

export default AuthFooter;

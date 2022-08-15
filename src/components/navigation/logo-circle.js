import PropTypes from 'prop-types';
import MainLogo from '../../assets/images/colored-logo.png';

function LogoCircle({ navBarValue }) {
  return (
    <div className="flex flex-col">
      <div className={`transition-all duration-700 w-[135px] h-[135px]
                  flex self-center bg-temp rounded-full
                  ${navBarValue ? 'scale-100' : 'scale-0'}`}
      >
        <img
          src={MainLogo}
          alt="Logo"
          className="object-scale-down bg-white rounded-full scale-95"
        />
      </div>
      <div className="flex justify-center">
        <h1 className={`transition-all duration-500 text-gray-300 font-bold text-xl font-serif ${navBarValue ? 'scale-100' : 'scale-0'}`}>Medstore.et</h1>
      </div>
    </div>
  );
}

LogoCircle.propTypes = {
  navBarValue: PropTypes.bool.isRequired,
};

export default LogoCircle;

import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import GoogleIcon from '../../assets/images/icons/google.png';
import { register } from '../../redux/actions/auth';
import StaffFields from '../../components/RegisterForm/StaffFields';

export default function Staff() {
  const form = useRef();
  const inputFields = {
    password: '',
    password2: '',
    phone_number: '',
  };

  const [state, setState] = useState(inputFields);
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(register(inputFields))
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const handleInputChange = (e) => {//eslint-disable-line
    const { value } = e.target;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  if (isLoggedIn) {
    navigate('/');
  }

  return (

    <section
      className="flex flex-col
              my-6 mx-1 pt-2 px-2
              gap-3 bg-white rounded-md
              sm:my-16 sm:mx-3 sm:pt-4 sm:px-4"
    >
      <form
        className="flex flex-col gap-5 md:mx-auto md:w-1/2 xl:w-1/3"
        onSubmit={handleRegister}
        ref={form}
      >
        <div className="">
          <h1 className="font-serif text-lg leading-10 font-medium text-gray-600">Register</h1>
        </div>
        {
          message && (
            <ul className="flex flex-col px-3 list-disc list-inside text-red-500 justify-center">
              <li className="">
                <span className="text-red-500">{message}</span>
              </li>
            </ul>
          )
        }
        <StaffFields handleInputChange={handleInputChange} inputFields={inputFields} />
        <div className="flex justify-start items-center gap-2">
          <input type="checkbox" name="rememeber" className="border border-main checked:bg-main" />
          <span className="font-serif text-gray-600">Rememeber me?</span>
        </div>
        <div className="flex flex-col">
          <input
            type="submit"
            className={`text-center text-whit py-3 font-medium ${loading ? 'bg-busy' : 'bg-main'}`}
            value="LOGIN"
            required
            disabled={loading}
          />
        </div>
      </form>
      <div className="flex py-5 items-center md:mx-auto md:w-1/2 xl:w-1/3">
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
          Have an account?
          <a href="/login" className="underline text-current">
            Login
          </a>
        </span>
      </div>
    </section>
  );
}

import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/actions/auth';
import AuthFooter from '../../components/AuthFooter';

export default function Buyer() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [allValues, setAllValues] = useState({
    email: 'fg',
    password: '',
    password2: '',
  });
  const inputHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(register(allValues))
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const ErrorMessage = () => {
    const haveAnError = message.error;
    const errorsObj = message.msg;
    console.log('message::', errorsObj);
    console.log('have an errror', haveAnError);
    if (haveAnError) {
      return (
        Object.entries(errorsObj).map(([key, val]) => (
          <li key={key}>{`${key} and ${val}`}</li>
        ))
      );
    }
    return (
      <p>No error</p>
    );
  };

  if (isLoggedIn) {
    navigate('/');
  }

  return (

    <section
      className="flex justify-center
              my-6 mx-1 pt-2 px-2
              gap-3
              sm:my-16 sm:mx-16 sm:pt-4 sm:px-4"
    >
      <div className="flex flex-col bg-white w-full md:w-[90%] lg:w-[60%] xl:w-[45%]">
        <form
          className="flex flex-col gap-5 md:mx-auto md:w-1/2 xl:w-[90%]"
          onSubmit={handleRegister}
          ref={form}
        >
          <div className="">
            <h1 className="font-serif text-lg leading-10 font-medium text-gray-600">Register</h1>
          </div>
          {
            message && (
              <ul className="flex flex-col px-3 list-disc list-inside text-red-500 justify-center">
                <ErrorMessage />
              </ul>
            )
          }
          <div className="flex flex-col">
            <label htmlFor="email" className="flex flex-col">
              <span className="leading-10 font-serif text-gray-600 capitalize">Email</span>
              <input
                type="email"
                id="email"
                name="email"
                className="border-2 border-main p-3 rounded-lg
                          placeholder:italic
                          focus:border-main focus:ring-0"
                placeholder="Enter your email here..."
                required
                onChange={inputHandler}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="flex flex-col">
              <span className="leading-10 font-serif text-gray-600 capitalize">Password</span>
              <input
                type="password"
                id="password"
                name="password"
                className="border-2 border-main p-3 rounded-lg
                          placeholder:italic
                          focus:border-main focus:ring-0"
                placeholder="Enter your password here..."
                required
                onChange={inputHandler}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="flex flex-col">
              <span className="leading-10 font-serif text-gray-600">Confirm Password</span>
              <input
                type="password2"
                id="password2"
                name="password2"
                className="border-2 border-main p-3 rounded-lg
                          placeholder:italic
                          focus:border-main focus:ring-0"
                placeholder="Confirm password..."
                required
                onChange={inputHandler}
              />
            </label>
          </div>
          <div className="flex justify-start items-center gap-2">
            <input type="checkbox" name="rememeber" className="border border-main checked:bg-main" />
            <span className="font-serif text-gray-600">Rememeber me?</span>
          </div>
          <div className="flex flex-col">
            <input
              type="submit"
              className={`text-center text-white py-3 font-medium ${loading ? 'bg-busy' : 'bg-main'}`}
              value="Sign Up"
              required
              disabled={loading}
            />
          </div>
        </form>
        <AuthFooter link="/login" />
      </div>
    </section>
  );
}

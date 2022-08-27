import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/actions/auth';
import AuthFooter from '../../components/AuthFooter';

export default function Buyer() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [allValues, setAllValues] = useState({
    email: '',
    role: 'Buyer',
    first_name: '',
    last_name: '',
    phone_number: '',
    password: '',
    password2: '',
  });
  const inputHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };
  const { isLoggedIn, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(register(allValues))
      .then((res) => {
        console.log('pages/Buyer.js: Success', res);
        setLoading(false);
      })
      .catch(() => {
        console.log('pages/Buyer.js: errror', message);
        setLoading(false);
      });
  };

  const ErrorMessage = () => {
    const { data, isError } = message;
    console.log('data', data);
    console.log('isError', isError);
    if (data && isError) {
      return (
        Object.entries(data).map(([key, val]) => (
          <li key={key} className="pl-3 flex gap-1">
            <span className="capitalize">{`${key.split('_').join(' ')}:`}</span>
            <i>{val}</i>
          </li>
        ))
      );
    } else if (data.err) {  //eslint-disable-line
      return (
        Object.entries(data.msg).map(([key, val]) => (
          <li key={key} className="pl-3 flex gap-1">
            <span className="capitalize">{`${key.split('_').join(' ')}:`}</span>
            <i>{val}</i>
          </li>
        ))
      );
    }
    return (
      <li className="flex flex-col text-green-400 italic px-0 py-2">
        <p>{`${data.msg}.`}</p>
        <span>{`Your email: ${data.user_email}`}</span>
      </li>
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
      <div className="flex flex-col bg-white w-full md:w-[90%] lg:w-[60%] xl:w-[55%]">
        <form
          className="flex flex-col gap-5 md:mx-auto md:w-1/2 xl:w-[90%]"
          type="multipart/form-data"
          onSubmit={handleRegister}
          ref={form}
        >
          <div className="">
            <h1 className="font-serif text-lg leading-10 font-medium text-gray-600">Register</h1>
          </div>
          {
            message && (
              <ul className="flex flex-col px-3 list-inside text-red-500 justify-center list-decimal">
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
            <label htmlFor="first_name" className="flex flex-col">
              <span className="leading-10 font-serif text-gray-600 capitalize">First Name</span>
              <input
                type="first_name"
                id="first_name"
                name="first_name"
                className="border-2 border-main p-3 rounded-lg
                          placeholder:italic
                          focus:border-main focus:ring-0"
                placeholder="Enter your first name here..."
                required
                onChange={inputHandler}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="last_name" className="flex flex-col">
              <span className="leading-10 font-serif text-gray-600 capitalize">Last Name</span>
              <input
                type="last_name"
                id="last_name"
                name="last_name"
                className="border-2 border-main p-3 rounded-lg
                          placeholder:italic
                          focus:border-main focus:ring-0"
                placeholder="Enter your last_name here..."
                required
                onChange={inputHandler}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone_number" className="flex flex-col">
              <span className="leading-10 font-serif text-gray-600 capitalize">Phone Number</span>
              <input
                type="phone_number"
                id="phone_number"
                name="phone_number"
                className="border-2 border-main p-3 rounded-lg
                          placeholder:italic
                          focus:border-main focus:ring-0"
                placeholder="+2519xxxxxxxx"
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
            <label htmlFor="password2" className="flex flex-col">
              <span className="leading-10 font-serif text-gray-600">Confirm Password</span>
              <input
                type="password"
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

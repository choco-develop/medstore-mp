import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../../redux/actions/auth';
import AuthFooter from '../../components/AuthFooter';

export default function Login(props) {
  const form = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(login(username, password))
      .then(() => {
        props.history.push('/'); //eslint-disable-line
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <section
      className="flex justify-center
              my-6 mx-1 pt-2 px-2
              gap-3
              sm:my-16 sm:mx-16 sm:pt-4 sm:px-4"
    >
      <div className="flex flex-col bg-white w-full rounded-2xl border border-main md:w-[90%] lg:w-[60%] xl:w-[45%]">
        <form
          className="flex flex-col gap-5 rounded-md p-5"
          onSubmit={handleLogin}
          ref={form}
        >
          <div className="">
            <h1 className="font-serif text-lg leading-10 font-medium text-gray-600">LOGIN</h1>
          </div>
          {
            message && (
              <ul
                className="flex flex-col px-3 list-disc
                          list-inside text-red-500
                          justify-center
                          xs:text-sm md:text-md"
              >
                <li className="">
                  <span className="text-red-500">{message}</span>
                </li>
              </ul>
            )
          }
          <div className="flex flex-col">
            <label htmlFor="email" className="flex flex-col">
              <span className="leading-10 font-serif text-gray-600">Email</span>
              <input
                type="text"
                id="username"
                name="username"
                className="border-2 border-main p-3 rounded-lg
                          placeholder:italic
                          focus:border-main focus:ring-0"
                placeholder="Enter your username here..."
                onChange={onChangeUsername}
                required
                autoFocus //eslint-disable-line
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="flex flex-col">
              <span className="leading-10 font-serif text-gray-600">Password</span>
              <input
                type="password"
                id="password"
                name="password"
                className="border-2 border-main p-3 rounded-lg
                          placeholder:italic
                          focus:border-main focus:ring-0"
                placeholder="Enter your password here..."
                onChange={onChangePassword}
                required
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
              value="LOGIN"
              required
              disabled={loading}
            />
          </div>
        </form>
        <AuthFooter link="/buyer/sign-up" />
      </div>
    </section>
  );
}

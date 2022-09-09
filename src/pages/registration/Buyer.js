import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Checkbox, FormControlLabel, TextField,
  Alert, AlertTitle,
} from '@mui/material';
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
        if (!res.data.err) {
          localStorage.setItem('userEmail', JSON.stringify(allValues));
          navigate('/buyer/account-activate');
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const ErrorMessage = () => {
    const { data, isError } = message;
    if (data && isError) {
      return (
        <ul className="flex flex-col px-3 list-disc list-inside justify-center">
          { Object.entries(data).map(([key, val]) => (
            <li key={key} className="pl-3 flex gap-1">
              <span className="capitalize">{`${key.split('_').join(' ')}:`}</span>
              <i>{val}</i>
            </li>
          ))}
        </ul>
      );
    } else if (data.err) {  //eslint-disable-line
      return (
        <ul className="flex flex-col px-3 list-disc list-inside justify-center">
          <li>hay</li>
          {
            Object.entries(data.msg).map(([key, val]) => (
              <li key={key} className="pl-3 flex flex-wrap gap-1">
                <span className="capitalize font-medium">{`${key.split('_').join(' ')}:`}</span>
                <i>{val}</i>
              </li>
            ))
          }
        </ul>
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
      className="flex
              my-6 mx-1 pt-2 px-2
              gap-3
              sm:my-16 sm:mx-16 sm:pt-4 sm:px-4
              md:justify-start md:mx-10 md:gap-0"
    >
      <div
        className="hidden md:flex justify-center items-center
                  bg-no-repeat bg-contain bg-top
                  flex-col gap-7 bg-[url('../public/assets/ms-banner.jpg')]
                  border-2 border-main
                  md:basis-1/2"
      >
        <h1 className="text-white text-2xl font-bold font-serif">Welcome Back</h1>
        <p className="text-md text-white text-center font-serif w-3/4">To keep connected with us please login with your personal info</p>
      </div>
      <div
        className="flex flex-col bg-white w-full
              md:w-[90%]
              lg:w-3/4
              xl:w-[100%]"
      >
        <div className="text-center pt-5">
          <h2 className="font-serif text-2xl leading-10 font-medium text-main">Create Account</h2>
        </div>
        <form
          className="flex flex-col gap-5 p-3 md:mx-auto md:w-[80%] xl:w-3/4"
          type="multipart/form-data"
          onSubmit={handleRegister}
          ref={form}
        >
          {
            message && (
              <Alert variant="standard" severity="error">
                <AlertTitle>Error — check it out!</AlertTitle>
                {/* <ul className="flex flex-col px-3 list-disc list-inside justify-center"> */}
                <ErrorMessage />
                {/* </ul> */}
              </Alert>
            )
          }
          <div className="flex flex-col">
            <TextField
              id="email"
              label="Email"
              name="email"
              onChange={inputHandler}
            />
          </div>
          <div className="flex flex-col">
            <TextField
              id="first_name"
              name="first_name"
              label="First Name"
              onChange={inputHandler}

            />
          </div>
          <div className="flex flex-col">
            <TextField
              id="last_name"
              name="last_name"
              label="Last Name"
              onChange={inputHandler}
            />
          </div>
          <div className="flex flex-col">
            <TextField
              id="phone_number"
              name="phone_number"
              label="Phone Number"
              onChange={inputHandler}

            />
          </div>
          <div className="flex flex-col">
            <TextField
              type="password"
              id="password"
              name="password"
              label="Password"
              onChange={inputHandler}

            />
          </div>
          <div className="flex flex-col">
            <TextField
              type="password"
              id="password2"
              name="password2"
              label="Confirm Password"
              onChange={inputHandler}

            />
          </div>
          <div className="flex justify-start items-center gap-2">
            <FormControlLabel control={<Checkbox />} label="Remember me" className="text-gray-600" />
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

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { activateAccount } from '../../redux/actions/auth';

export default function BuyerActivate() {
  const storageData = localStorage.getItem('userEmail');
  const { email: userEmail } = storageData ? JSON.parse(storageData) : { email: null };

  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userEmail || userEmail === null) {
      navigate('/buyer/sign-up/');
    }
  }, []);

  const dispatch = useDispatch();
  const handleActivation = (e) => {
    e.preventDefault();
    setLoading(true);
    const actviationData = { user_email: userEmail, code };
    dispatch(activateAccount(actviationData)).then(
      (res) => {
        setHasError(false);
        setErrorMessage(null);
        if (res.data.err) {
          setHasError(true);
          setErrorMessage(res.data.msg);
        } else {
          navigate('/accounts/user_info_reg');
        }
      },
    )
      .catch(() => {
        setHasError(true);
        setErrorMessage('Server Error');
        setLoading(false);
      });
  };

  return (
    <section className="flex justify-center h-[50vh] my-8 mx-3">
      <form
        className="flex flex-col gap-3 border
                rounded-2xl border-main bg-white
                px-4 py-5"
        onSubmit={handleActivation}
      >
        <div>
          <p className="font-serif italic text-gray-600">
            We have sent you an email with Activation code here:
            <span className="text-blue-500">{` ${userEmail}`}</span>
            . Please fill out here
          </p>
        </div>
        <div className="flex self-center">
          <label htmlFor="code" className="flex flex-col">
            <span className="leading-10 font-serif text-gray-600">
              Activation Code:
            </span>
            <input
              type="text"
              id="code"
              name="code"
              className={`border-2 p-3 rounded-lg
                      leading-10 text-center
                      placeholder:tracking-widest
                      focus:border-main focus:ring-0
                      flex space-x-28
                      ${hasError ? 'border-red-400' : 'border-main'}`}
              placeholder="__ __ __ __ __"
              onChange={(e) => setCode(e.target.value)}
              required
              disabled={loading}
            />
            <p className={`${errorMessage ? 'block text-red-700 font-light italic text-xs' : 'hidden'}`}>
              { errorMessage }
            </p>
          </label>
        </div>
        <div className="flex self-center">
          <div className="flex flex-col w-full">
            <input
              type="submit"
              className={`text-center text-white font-medium
                      py-3 px-5
                      ${loading ? 'bg-busy' : 'bg-main'}`}
              value="Activate"
            />
          </div>
        </div>
      </form>
    </section>
  );
}

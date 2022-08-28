import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BuyerActivate() {
  const { email: userEmail } = JSON.parse(localStorage.getItem('userEmail'));
  const [code, setCode] = useState('');
  const navigate = useNavigate();
  if (userEmail) {
    navigate('/buyer/sign-up/');
  }
  const handleActivation = () => {

  }

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
              className="border-2 border-main p-3 rounded-lg leading-10
                      placeholder: placeholder:tracking-widest
                      focus:border-main focus:ring-0
                      flex space-x-28"
              placeholder="__ __ __ __ __"
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="flex self-center">
          <div className="flex flex-col w-full">
            <input
              type="submit"
              className="text-center text-white font-medium bg-main
                      py-3 px-5"
              value="Activate"
            />
          </div>
        </div>
      </form>
    </section>
  );
}

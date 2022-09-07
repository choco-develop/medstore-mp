import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CompanyContext = createContext();

function CompRegContextProvider({ children}) { //eslint-disable-line
  const [values, setValues] = useState({
    message: { err: false, msg: null, form_errors: [] },
    loading: false,
  });

  const handleChange = (responseMsg, loading) => { //eslint-disable-line
    setValues({
      ...values,
      message: responseMsg,
      loading,
    });
  };

  const allValues = {
    values,
    handleChange,
  };

  return (
    <CompanyContext.Provider value={allValues}>
      { children }
    </CompanyContext.Provider>
  );
}

CompRegContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CompRegContextProvider;

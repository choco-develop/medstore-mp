/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useState, useEffect,
} from 'react';
import {
  Box, TextField, Autocomplete, Alert, AlertTitle,
  InputLabel, MenuItem, Select, FormControl, FormHelperText,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import countries from '../../data/country';
import { EthioState, AddisSubCity } from '../../data/EthioStateCity';
import API_URL from '../../services/index';
import authHeader from '../../services/auth-header';

const UserInfoDetailForm = (props) => {
  const { message } = useSelector((state) => state.userInfo);
  const [country, setCountry] = useState(null);
  const [idImage, setIdImage] = useState(null);
  const [dbo, setDBO] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [idType, setIdType] = useState('');
  const [city, setCity] = useState('');
  const [subCity, setSubCity] = useState('');
  const [isLocal, setIsLocal] = useState(false);
  const [isInAddis, setIsInAddis] = useState(false);
  const [idTypes, setIdTypes] = useState([]);
  const headers = {
    'content-type': 'application/json',
    Authorization: authHeader(),
  };

  useEffect(() => {
    fetch(`${API_URL}/accounts/user_info_reg/`, { headers })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        return response.json();
      })
      .then((actualData) => {
        const { user_info: userInfo } = actualData;
        setCountry(userInfo.country ? JSON.parse(userInfo.country) : null);
        setIdTypes(actualData.id_types);
        userInfo.city === 'Addis Ababa' ? setIsInAddis(true) : setIsInAddis(false); //eslint-disable-line
        setDBO(userInfo.dbo);
        setIdType(userInfo.id_type);
        setCity(userInfo.city);
        setSubCity(userInfo.sub_city);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleFromSubmit = (e) => {
    e.preventDefault();
    const allValues = {
      country: JSON.stringify(country),
      city,
      sub_city: subCity,
      dbo,
      id_type: idType,
      id_card: idImage,
      profile_image: profileImage,
    };
    props.submitUserInfo(allValues); //eslint-disable-line
  };

  const handleCountryChange = (e, value) => {
    console.log({
      country: value,
    });
    setCountry(value);
    subCity === 'Addis Ababa' ? setIsInAddis(true) : setIsInAddis(false); //eslint-disable-line
    value.label === 'Ethiopia' ? setIsLocal(true) : setIsLocal(false); //eslint-disable-line
  };

  const handleCityChange = (e) => {
    const val = e.target.value;
    setCity(val);
    val === 'Addis Ababa' ? setIsInAddis(true) : setIsInAddis(false); //eslint-disable-line
  };

  const idCardImageSelectHandler = (e) => {
    setIdImage(e.target.files[0]);
    const idCardImageData = new FormData();
    idCardImageData.append('image', idImage, idImage.name);
    setIdImage(idCardImageData);
  };

  const profileImageSelectHandler = (e) => {
    setProfileImage(e.target.files[0]);
    const profileImageData = new FormData();
    profileImageData.append('image', profileImage, profileImage.name);
    setProfileImage(profileImageData);
  };

  return (
    <form className="flex flex-col gap-y-8 bg-white py-10 pl-5 w-full border-2 rounded-md" id="user-detail" onSubmit={handleFromSubmit}>
      { message && message.err && (
        <div className="flex w-full">
          <Alert severity="error" sx={{ width: '75%' }}>
            <AlertTitle>Error</AlertTitle>
            {message.msg}
            —
            <strong>check it out!</strong>
            {message.form_errors && (
              <ul className="mt-3 ml-2 list-decimal">
                {
                  Object.entries(message.form_errors).map((key) => (
                    <li key={`${key}and}`} className="flex gap-x-2">
                      <span>
                        {`${key[0].split('_').join(' ').toUpperCase()}:`}
                      </span>
                      <p>{key[1]}</p>
                    </li>
                  ))
                }
              </ul>
            )}
          </Alert>
        </div>
      )}
      <div className="flex">
        <Autocomplete
          id="country-select-demo"
          name="country"
          value={country}
          sx={{ width: 300 }}
          options={countries}
          autoHighlight
          onChange={handleCountryChange}
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
              />
              {option.label}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a country"
              required
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
            />
          )}
        />
      </div>
      <div className="flex">
        {isLocal && (
          <FormControl className="w-1/3">
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={city}
              label="City"
              onChange={handleCityChange}
            >
              {EthioState.map((val) => (
                <MenuItem value={val} key={val}>{val}</MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        {!isLocal && (
          <TextField id="city" label="City" value={city} variant="outlined" required />
        )}
      </div>
      <div className="flex">
        {isInAddis && (
          <FormControl className="w-1/3">
            <InputLabel id="demo-simple-select-label">Sub City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={subCity}
              label="Sub City"
              onChange={(e) => setSubCity(e.target.value)}
              required
            >
              {AddisSubCity.map((val) => (
                <MenuItem value={val} key={val}>{val}</MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        {!isInAddis && (
          <TextField id="subCity" label="Sub City" variant="outlined" value={subCity} onChange={(e) => setSubCity(e.target.value)} required />
        )}
      </div>
      <div className="flex">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date of Birth"
            value={dbo}
            onChange={(value) => setDBO(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                required
              />
            )}
          />
        </LocalizationProvider>
      </div>
      <div className="flex">
        <FormControl className="w-1/3">
          <InputLabel id="id-type-select-label">ID Type</InputLabel>
          <Select
            labelId="id-type-select-label"
            id="id-type-select"
            value={idType}
            label="ID Type"
            onChange={(e) => setIdType(e.target.value)}
            required
          >
            {idTypes.map((value) => (
              <MenuItem value={value[1]} key={value[1]}>{value[1]}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-gray-600">ID Card</span>
        <input type="file" onChange={idCardImageSelectHandler} accept="application/pdf, image/png, image/jpeg" className="w-1/3" required />
        <FormHelperText>Accepted inputs: image-png,jpg,jpeg PDF-pdf, docx</FormHelperText>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-gray-600">Profile Image</span>
        <input type="file" onChange={profileImageSelectHandler} accept="application/pdf, image/png, image/jpeg" className="w-1/3" required />
        <FormHelperText>Accepted inputs: image-png,jpg,jpeg PDF-pdf, docx</FormHelperText>
      </div>
    </form>
  );
};

UserInfoDetailForm.propTypes = {
  submitUserInfo: PropTypes.func.isRequired,
};
UserInfoDetailForm.displayName = 'UserInfoDetailForm';
export default UserInfoDetailForm;

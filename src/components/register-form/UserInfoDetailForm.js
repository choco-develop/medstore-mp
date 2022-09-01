/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useSelector } from 'react-redux';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import countries from '../../data/country';

function UserInfoDetailForm({ submitUserInfo }) {
  const form = useRef();
  const { loading } = useSelector((state) => state.userInfo);
  const [country, setCountry] = useState(null);
  const [idImage, setIdImage] = useState(null);
  const [dbo, setDBO] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [idType, setIDType] = useState('');
  const [city, setCity] = useState('');
  const [subCity, setSubCity] = useState('');

  const handleCountryChange = (e, value) => {
    setCountry(value);
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

  const handlFormSubmit = (e) => {
    e.preventDefault();
    const allValues = {
      country,
      city,
      sub_city: subCity,
      dbo,
      id_type: idType,
      idImage,
      profileImage,
    };
    submitUserInfo(allValues);
  };

  return (
    <form className="flex flex-col gap-y-8 py-10" ref={form} onSubmit={handlFormSubmit}>
      <div className="flex">
        <Autocomplete
          id="country-select-demo"
          name="country"
          size="small"
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
        <TextField id="city" label="City" variant="outlined" size="small" onChange={(e) => setCity(e.target.value)} required />
      </div>
      <div className="flex">
        <TextField id="sub_city" label="Sub City" variant="outlined" size="small" onChange={(e) => setSubCity(e.target.value)} required />
      </div>
      <div className="flex">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date of Birth"
            value={dbo}
            onChange={(value) => setDBO(value)}
            renderInput={(params) => (
              <TextField
                size="small"
                {...params}
                required
              />
            )}
          />
        </LocalizationProvider>
      </div>
      <div className="flex">
        <FormControl sx={{ minWidth: 200 }} size="small">
          <InputLabel id="idTypeLabel">ID Type</InputLabel>
          <Select
            labelId="idTypeLabel"
            id="idType"
            label="ID Type"
            value={idType}
            onChange={(e) => setIDType(e.target.value)}
            required
          >
            <MenuItem value="" disabled>Select ID Type</MenuItem>
            <MenuItem value="kebele_id">National ID</MenuItem>
            <MenuItem value="passport">Passport</MenuItem>
            <MenuItem value="driving_license">Driver License</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-gray-600">ID Card</span>
        <input type="file" onChange={idCardImageSelectHandler} accept="application/pdf, image/png, image/jpeg" required />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-gray-600">Profile Image</span>
        <input type="file" onChange={profileImageSelectHandler} accept="application/pdf, image/png, image/jpeg" />
      </div>
      <div>
        <Button type="submit" variant="contained" disabled={loading}>
          Save
        </Button>
      </div>
    </form>
  );
}

UserInfoDetailForm.propTypes = {
  submitUserInfo: PropTypes.func.isRequired,
};

export default UserInfoDetailForm;

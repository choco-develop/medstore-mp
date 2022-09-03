/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
  InputLabel, MenuItem, FormControl, Select,
  Autocomplete, Box, TextField,
} from '@mui/material';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import countries from '../../data/country';
// import EthioState from '../../data/EthioState';

export default function CompanyInformation() {
  const [phone, setPhone] = useState('+251');
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [isLocal, setIsLocal] = useState(false);
  const handleChange = (newPhone) => {
    console.log('is valid', matchIsValidTel(newPhone)); // boolean
    setPhone(newPhone);
  };

  const handleCountry = (e, v) => {
    setCountry(v);
    console.log('Country value is: ', v);
    v.label === 'Ethiopia' ? setIsLocal(true) : setIsLocal(false); //eslint-disable-line
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <form className="flex flex-col gap-y-8 bg-white py-10 pl-5 w-full border-2 rounded-md">
      <div className="flex">
        <FormControl sx={{ minWidth: 300 }}>
          <InputLabel id="natureTypeID">Company Nature</InputLabel>
          <Select
            labelId="natureTypeID"
            id="nature"
            label="Company Nature"
            required
          >
            <MenuItem value="" disabled>Select Company Nature</MenuItem>
            <MenuItem value="NGO">NGO</MenuItem>
            <MenuItem value="Sole Proprietorship">Sole Proprietorship</MenuItem>
            <MenuItem value="Private Limited Company (PLC)">Private Limited Company (PLC)</MenuItem>
            <MenuItem value="Share Company">Share Company</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-gray-600">Trader Registration Document</span>
        <input type="file" accept="application/pdf, image/*" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-gray-600">Trade License</span>
        <input type="file" accept="application/pdf, image/*" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-gray-600">Trade License</span>
        <input type="file" accept="application/pdf, image/*" />
      </div>
      <div className="flex">
        <Autocomplete
          id="country-select-demo"
          name="country"
          sx={{ width: 300 }}
          options={countries}
          onChange={handleCountry}
          value={country}
          autoHighlight
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        )}
        {!isLocal && (
          <TextField id="city" label="City" variant="outlined" required />
        )}
      </div>
      <div className="flex">
        <TextField id="sub_city" label="Sub City" variant="outlined" required />
      </div>
      <div className="flex">
        <MuiTelInput value={phone} onChange={handleChange} placeholder="xxxx" />
      </div>
    </form>
  );
}

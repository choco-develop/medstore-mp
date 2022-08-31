/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import countries from '../../data/country';

export default function UserInfoDetailForm() {
  const [value, setValue] = useState(null);
  const [idType, setIdType] = useState('');
  const [idImage, setIdImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const handleIdTypeChange = (event) => {
    setIdType(event.target.value);
  };

  const idCardImageSelectHandler = (e) => {
    setIdImage(e.target.files[0]);
    const idCardImageData = new FormData();
    idCardImageData.append('image', idImage, idImage.name);
    console.log(idImage.name);
  };

  const profileImageSelectHandler = (e) => {
    console.log(e.target.files[0]);
    setProfileImage(e.target.files[0]);
    const profileImageData = new FormData();
    profileImageData.append('image', profileImage, profileImage.name);
    console.log(profileImage.name);
  };

  return (
    <form className="flex flex-col gap-y-8 py-10">
      <div className="flex">
        <Autocomplete
          id="country-select-demo"
          name="country"
          size="small"
          sx={{ width: 300 }}
          options={countries}
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
              (
              {option.code}
              ) +
              {option.phone}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a country"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
            />
          )}
        />
      </div>
      <div className="flex">
        <TextField id="city" label="City" variant="outlined" size="small" />
      </div>
      <div className="flex">
        <TextField id="sub_city" label="Sub City" variant="outlined" size="small" />
      </div>
      <div className="flex">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date of Birth"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                size="small"
                {...params}
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
            value={idType}
            label="ID Type"
            onChange={handleIdTypeChange}
          >
            <MenuItem value="kebele_id">National ID</MenuItem>
            <MenuItem value="passport">Passport</MenuItem>
            <MenuItem value="driving_license">Driver License</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-gray-600">ID Card</span>
        <input type="file" onChange={idCardImageSelectHandler} accept="application/pdf, image/png, image/jpeg" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-gray-600">Profile Image</span>
        <input type="file" onChange={profileImageSelectHandler} accept="application/pdf, image/png, image/jpeg" />
      </div>
    </form>
  );
}

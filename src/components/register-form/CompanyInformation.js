import React from 'react';
import {
  InputLabel, MenuItem, FormControl, Select,
} from '@mui/material';

export default function CompanyInformation() {
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
    </form>
  );
}

/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useState, forwardRef, useRef, useContext,
} from 'react';
import { FiUpload } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import {
  InputLabel, MenuItem, FormControl, Select,
  Autocomplete, Box, TextField, AlertTitle,
  TextareaAutosize, FormHelperText, Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { CompanyContext } from '../../contexts/CompRegContextProvider';
import countries from '../../data/country';
import { EthioState, AddisSubCity } from '../../data/EthioStateCity';
import { isValidImage } from '../../utils/FileManipulation';

const Alert = forwardRef(function Alert(props, ref) { //eslint-disable-line
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CompanyInformation(props) {
  const { values: { message } } = useContext(CompanyContext);
  const tradeRegDocElt = useRef();
  const tradeLicenseElt = useRef();
  const efdaCertElt = useRef();
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  const [logoImageDir, setLogoImageDir] = useState(null);
  const [logo, setLogo] = useState(null);
  const [tinNumber, setTinNumber] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState('+251');
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState('');
  const [subCity, setSubCity] = useState('');
  const [isLocal, setIsLocal] = useState(false);
  const [isInAddis, setIsInAddis] = useState(false);
  const [natureType, setNatureType] = useState('');
  const [fileInputs, setFileInputs] = useState({
    tradeRegDoc: null,
    tradeLicense: null,
    efdaCert: null,
  });
  const isValidPhone = matchIsValidTel(phone) || phone === '+251';

  const handlePhoneChange = (newPhone) => {
    setPhone(newPhone);
  };

  const handleCountry = (e, v) => {
    setCountry(v);
    subCity === 'Addis Ababa' ? setIsInAddis(true) : setIsInAddis(false); //eslint-disable-line
    v.label === 'Ethiopia' ? setIsLocal(true) : setIsLocal(false); //eslint-disable-line
  };

  const handleCityChange = (e) => {
    const val = e.target.value;
    setCity(val);
    val === 'Addis Ababa' ? setIsInAddis(true) : setIsInAddis(false); //eslint-disable-line
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (isValidImage(file)) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setLogoImageDir(reader.result);
      });
      reader.readAsDataURL(file);
      setLogo(file);
    } else {
      setOpen(true);
    }
  };

  const resetInputFile = (elt) => {
    elt.current.value = '';//eslint-disable-line
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    setFileInputs({
      ...fileInputs,
      [e.target.name]: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      tradeRegDoc: trade_reg, //eslint-disable-line
      tradeLicense: trade_license, //eslint-disable-line
      efdaCertElt: efda_cert, //eslint-disable-line
    } = fileInputs;
    const formData = {
      name,
      detail,
      logo,
      tin_num: tinNumber,
      business_type: businessType,
      nature: natureType,
      trade_reg, //eslint-disable-line
      trade_license, //eslint-disable-line
      efda_cert, //eslint-disable-line
      state: JSON.stringify(country),
      city,
      subcity: subCity,
      phone_number: phone,
    };
    props.submitCompanyInfo(formData); //eslint-disable-line
  };

  return (
    <div className="flex flex-col w-full border-2 rounded-md">
      { message && message.err && (
        <div className="flex w-full px-3 pt-5">
          <Alert variant="standard" severity="error" sx={{ width: '100%' }}>
            <AlertTitle>Error</AlertTitle>
            {`${message.msg}: `}

            <strong>Check it out!</strong>
            {message.form_errors && (
              <ul className="mt-3 ml-2 list-decimal">
                {
                  Object.entries(message.form_errors).map((key) => (
                    <li key={`${key}and}`} className="flex gap-x-2">
                      <span className="capitalize">
                        {`${key[0].split('_').join(' ')}:`}
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
      <form
        className="flex flex-col gap-y-8
          pl-5 w-full
          py-10
          md:flex-row"
        id="company-detail"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-5 md:basis-1/2">
          <div className="flex">
            <TextField
              id="name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ minWidth: 300 }}
              required
            />
          </div>
          <div className="flex">
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Write description here..."
              style={{ width: 400 }}
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              minRows={5}
              required
            />
          </div>
          <div className="flex">
            <FormControl sx={{ minWidth: 300 }}>
              <InputLabel id="bussinesTypeID">Business Type</InputLabel>
              <Select
                labelId="bussinesTypeID"
                id="bussinesType"
                label="bussinesType"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                required
              >
                <MenuItem value="" disabled>Select Business Type</MenuItem>
                <MenuItem value="NGO">NGO</MenuItem>
                <MenuItem value="Sole Proprietorship">Sole Proprietorship</MenuItem>
                <MenuItem value="Private Limited Company (PLC)">Private Limited Company (PLC)</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-600">Logo</span>
            <div className="flex gap-2">
              {logoImageDir && (
                <img src={logoImageDir} alt="..." loading="lazy" className="object-cover w-1/6" />
              )}
              <div className="relative border-dotted rounded-lg border-dashed border-2 border-main bg-gray-100 flex justify-center items-center w-1/6">
                <div className="absolute">
                  <div className="flex flex-col items-center">
                    <FiUpload className="text-main" />
                  </div>
                </div>
                <input type="file" className="h-full w-full opacity-0" name="" onChange={handleLogoChange} required />
              </div>
              {logoImageDir && (
                <button type="button" onClick={() => { setLogoImageDir(null); setLogo(null); }} className="self-end flex items-end">
                  <MdDelete size={30} className="text-main" />
                  <span className="text-main text-lg">Remove</span>
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1 md:w-[90%]">
            <span className="text-gray-600">Trader Registration Document</span>
            <div className="flex w-full gap-3 items-center">
              <input type="file" ref={tradeRegDocElt} name="tradeRegDoc" onChange={handleFileInput} accept="application/pdf, image/*" required />
              <IconButton aria-label="delete" size="large" onClick={() => resetInputFile(tradeRegDocElt)}>
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </div>
            <FormHelperText>Accepted inputs: image-png,jpg,jpeg PDF-pdf, docx</FormHelperText>
          </div>
          <div className="flex flex-col gap-1 md:w-[90%]">
            <span className="text-gray-600">Trade License</span>
            <div className="flex w-full gap-3 items-center">
              <input type="file" ref={tradeLicenseElt} name="tradeLicense" onChange={handleFileInput} accept="application/pdf, image/*" />
              <IconButton aria-label="delete" size="large" onClick={() => resetInputFile(tradeLicenseElt)}>
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </div>
            <FormHelperText>Accepted inputs: image-png,jpg,jpeg PDF-pdf, docx</FormHelperText>
          </div>
          <div className="flex flex-col gap-1 md:w-[90%]">
            <span className="text-gray-600">EFDA Certification</span>
            <div className="flex w-full gap-3 items-center">
              <input type="file" name="efdaCertElt" ref={efdaCertElt} onChange={handleFileInput} accept="application/pdf, image/*" />
              <IconButton aria-label="delete" size="large" onClick={() => resetInputFile(efdaCertElt)}>
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </div>
            <FormHelperText>Accepted inputs: image-png,jpg,jpeg PDF-pdf, docx</FormHelperText>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex">
            <FormControl sx={{ minWidth: 300 }}>
              <InputLabel id="natureTypeID">Nature</InputLabel>
              <Select
                labelId="natureTypeID"
                id="natureID"
                label="natureID"
                value={natureType}
                onChange={(e) => setNatureType(e.target.value)}
                required
              >
                <MenuItem value="" disabled>Select Company Nature</MenuItem>
                <MenuItem value="Hospital">Hospital</MenuItem>
                <MenuItem value="NGO">NGO</MenuItem>
                <MenuItem value="Clinic">Clinic</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex">
            <TextField
              id="tinNumber"
              label="Tin Number"
              value={tinNumber}
              onChange={(e) => setTinNumber(e.target.value)}
              required
            />
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
              <FormControl className="w-1/3" sx={{ width: 300 }}>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
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
              <TextField
                id="city"
                label="State"
                sx={{ width: 300 }}
                variant="outlined"
                onChange={handleCityChange}
                required
              />
            )}
          </div>
          <div className="flex">
            {isInAddis && (
              <FormControl className="w-1/3" sx={{ width: 300 }}>
                <InputLabel id="demo-simple-select-label">Sub City</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={subCity}
                  label="Sub City"
                  onChange={(e) => setSubCity(e.target.value)}
                >
                  {AddisSubCity.map((val) => (
                    <MenuItem value={val} key={val}>{val}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
            {!isInAddis && (
              <TextField id="subCity" label="City" sx={{ width: 300 }} variant="outlined" onChange={(e) => setSubCity(e.target.value)} required />
            )}
          </div>
          <div className="flex flex-col">
            <MuiTelInput value={phone} onChange={handlePhoneChange} error={!isValidPhone} />
            {!isValidPhone
              && <FormHelperText error>Invalid phone number</FormHelperText>}
          </div>
          <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
            <Alert onClose={() => setOpen(false)} severity="warning" sx={{ width: '100%' }}>
              Invalid file format detected!
            </Alert>
          </Snackbar>
        </div>
      </form>
    </div>
  );
}

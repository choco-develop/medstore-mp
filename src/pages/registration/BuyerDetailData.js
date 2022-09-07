/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { matchIsValidTel } from 'mui-tel-input';
import UserInfoDetailForm from '../../components/register-form/UserInfoDetailForm';
import CompanyInformation from '../../components/register-form/CompanyInformation';
import userInforDetail from '../../redux/actions/user_info';
import userService from '../../services/user-service';
import { USER_INFO_REG_REQUEST } from '../../redux/actions/type';
import { CompanyContext } from '../../contexts/CompRegContextProvider';

const steps = ['User Information', 'Company Information', 'Payment Method'];

export default function BuyerDetailData() {
  const {
    handleChange,
    values: {
      message: companyMessage,
      loading: companyLoading,
    },
  } = useContext(CompanyContext);
  const formList = ['company-detail', 'user-detail'];
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    message: userInfoMsg, loading,
  } = useSelector((state) => state.userInfo);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const isStepOptional = (step) => step === 1;

  const isStepSkipped = (step) => skipped.has(step);

  const submitUserInfo = (data) => {
    dispatch({
      type: USER_INFO_REG_REQUEST,
    });
    dispatch(userInforDetail(data));
  };

  const submitCompanyInfo = (data) => {
    userService.companyInfoReg(data).then(
      (res) => {
        const { phone_number: phone } = data;
        if (!matchIsValidTel(phone)) {
          const msg = {
            err: true,
            msg: 'Invalid input detected',
            form_errors: {
              phone_number: ['Invalid format or length'],
            },
          };
          handleChange(msg, false);
        } else {
          handleChange(res, false);
        }
      },
    ).catch((err) => {
      const res = {
        msg: `Servor Error occured: ${err.response.statusText}`,
        err: true,
        form_errors: {},
      };
      handleChange(res, false);
    });
  };

  if (!isLoggedIn) {
    navigate('/login');
  }

  useEffect(() => {
    const stepStates = [companyMessage, userInfoMsg, null];
    const msg = stepStates[activeStep];
    console.log({
      activeStep,
      data: msg,
    });
    if (msg) {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
      if (Object.hasOwn(msg, 'err') && !msg.err && msg.msg) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      }
    }
  }, [userInfoMsg, companyMessage]);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <section className="my-10 mx-1 py-5 px-3 sm:mx-10">
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </>
        ) : (
          <>
            <Box className="flex pt-5 pl-10">
              {activeStep === 0 && (
                <CompanyInformation submitCompanyInfo={submitCompanyInfo} />
              )}
              {activeStep === 1 && (
                <UserInfoDetailForm submitUserInfo={submitUserInfo} />
              )}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button disabled={loading || companyLoading} form={formList[activeStep]} type="submit">
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </section>
  );
}

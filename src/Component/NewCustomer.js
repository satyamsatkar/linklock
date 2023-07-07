import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SaveFooter from './SaveFooter';

const top100Films = [
  {
    name: 'apachi',
    song: 'tu',
  },
  {
    name: 'KFC',
    song: 'tu',
  },
  {
    name: 'MCD',
    song: 'tu',
  },
];

const NewCustomer = () => {
  const navigate = useNavigate();

  return (
    <div className='main'>
      <div className='navbar d-flex align-items-center'>
        <ArrowBackIcon onClick={() => navigate(-1)} className='bg-white mx-2' style={{ borderRadius: '50%', fontSize: '40px', boxShadow: '1px 1px 10px lightgray', padding: '10px' }} />
        <span class='subheaderTitle'></span>
      </div>
      <div className='card my-2 p-3 Team shadow  bg-body rounded mx-2'>
        <div className='d-flex align-items-center justify-content-between'>
          <Stack spacing={2} sx={{ width: '100%' }}>
            <Autocomplete id='free-solo-demo' freeSolo options={top100Films.map((option) => option.name)} renderInput={(params) => <TextField {...params} label='Customer Name' />}></Autocomplete>
          </Stack>
        </div>

        <div className='d-flex align-items-center justify-content-between mt-3'>
          <Stack spacing={2} sx={{ width: '100%' }}>
            <Autocomplete id='free-solo-demo' freeSolo options={top100Films.map((option) => option.name)} renderInput={(params) => <TextField {...params} label='Mo. Number' />} />
          </Stack>
        </div>

     
      </div>
      <Tabs>
        <TabList>
          <Tab style={{ width: '50%',fontWeight : "600" }}>Address</Tab>
          <Tab style={{ width: '50%',fontWeight : "600" }}>GST Details</Tab>
        </TabList>

        <TabPanel>
          <div className='d-flex align-items-center justify-content-between m-3'>
            <TextField id='outlined-basic' label='Billing Address' variant='outlined' style={{ width: '100%' }} />
          </div>
          <div className='d-flex align-items-center justify-content-between m-3'>
            <TextField id='outlined-basic' label='Email Address' variant='outlined' style={{ width: '100%' }} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className='d-flex align-items-center justify-content-between m-3'>
            <Stack spacing={2} sx={{ width: '100%' }}>
              <Autocomplete id='free-solo-demo' freeSolo options={top100Films.map((option) => option.name)} renderInput={(params) => <TextField {...params} label='GST Type' />}></Autocomplete>
            </Stack>
          </div>
          <div className='d-flex align-items-center justify-content-between m-3'>
            <Stack spacing={2} sx={{ width: '100%' }}>
              <Autocomplete id='free-solo-demo' freeSolo options={top100Films.map((option) => option.name)} renderInput={(params) => <TextField {...params} label='State' />}></Autocomplete>
            </Stack>
          </div>
          <div className='d-flex align-items-center justify-content-between m-3'>
            <Stack spacing={2} sx={{ width: '100%' }}>
              <Autocomplete id='free-solo-demo' freeSolo options={top100Films.map((option) => option.name)} renderInput={(params) => <TextField {...params} label='State City Pincode' />}></Autocomplete>
            </Stack>
          </div>
        </TabPanel>
      </Tabs>
      <SaveFooter/>
    </div>
  );
};

export default NewCustomer;

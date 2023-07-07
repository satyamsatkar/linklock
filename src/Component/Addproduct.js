import React from 'react';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import TeamHeader from './TeamHeader';
import SaveFooter from './SaveFooter';



const Addproduct = () => {

  const top100Films = [
    {
      name: 'apachi',
    },
    {
      name: 'KFC',
    },
    {
      name: 'MCD',
    },
  ];
  return (
    <div className=''>
      <TeamHeader />
      <div className='px-3 mt-3'>
        <div>
          <Stack spacing={2} sx={{ width: '100%' }}>
            <Autocomplete id='free-solo-demo' freeSolo options={top100Films.map((option) => option.name)} renderInput={(params) => <TextField {...params} label='Item Name' />} />
          </Stack>
        </div>
        <div className='row pt-3'>
          <div className='col-6'>
            <Stack spacing={2} sx={{ width: '100%' }}>
              <Autocomplete id='free-solo-demo' freeSolo options={top100Films.map((option) => option.name)} renderInput={(params) => <TextField {...params} label='Quanity' />} />
            </Stack>
          </div>
          <div className='col-6'>
            <Stack spacing={2} sx={{ width: '100%' }}>
              <Autocomplete id='free-solo-demo' freeSolo options={top100Films.map((option) => option.name)} renderInput={(params) => <TextField {...params} label='Unit' />} />
            </Stack>
          </div>
        </div>
        <div className='row pt-3'>
          <div className='col-6'>
            <Stack spacing={2} sx={{ width: '100%' }}>
              <Autocomplete id='free-solo-demo' freeSolo options={top100Films.map((option) => option.name)} renderInput={(params) => <TextField {...params} label='Rate' />} />
            </Stack>
          </div>
          <div className='col-6'>
            <Stack spacing={2} sx={{ width: '100%' }}>
              <Autocomplete id='free-solo-demo' freeSolo options={top100Films.map((option) => option.name)} renderInput={(params) => <TextField {...params} label='Without Tax' />} />
            </Stack>
          </div>
        </div>
      </div>
      <SaveFooter/>
    </div>
  );
};

export default Addproduct;

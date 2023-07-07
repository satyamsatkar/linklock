import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Footer from './Footer';
import TeamHeader from './TeamHeader';

const Inventory = () => {
  return (
    <>
      <TeamHeader />
      <div className='my-3 px-2 shadow py-2 mx-3 bg-body rounded card' style={{borderTop:"3px solid red"}}>
        <h5 style={{fontWeight:"600",margin:"0px"}}>Inventory</h5>
      </div>
      <div className='inventory '>
   
        <Box
          component='form'
          sx={{
            '& .MuiTextField-root': { width: '100%' },
          }}
          noValidate
          autoComplete='off'
          className='px-3'
        >
          <TextField  className="py-3" id='standard-textarea' label='Search' placeholder='Article name/code/Category' multiline variant='standard' />
        </Box>
        <div className='card my-3 mx-3  shadow  bg-body rounded '>
          <h2 className='fs-4 p-2 article' style={{ background: '#025464', fontWeight: '200 '}}>
            Article
          </h2>
          <div className='p-2'>
            <div className='d-flex justify-content-between'>
              <h5>Name:</h5>
              <p>Satyam</p>
            </div>
            <div className='d-flex justify-content-between'>
              <h5>Code:</h5>
              <p>#000</p>
            </div>
            <div className='d-flex justify-content-between'>
              <h5>In Hand:</h5>
              <p>9</p>
            </div>
            <div className='d-flex justify-content-between'>
              <h5>Pending To Dispatch:</h5>
              <p>3</p>
            </div>
            <div className='d-flex justify-content-between'>
              <h5>Pending Order:</h5>
              <p>5</p>
            </div>
          </div>
        </div>

      </div>
      <Footer/>
    </>
  );
};

export default Inventory;

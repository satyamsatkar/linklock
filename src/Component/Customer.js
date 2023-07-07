import React from 'react';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import GradingIcon from '@mui/icons-material/Grading';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DescriptionIcon from '@mui/icons-material/Description';
const Customer = () => {
  const navigate = useNavigate();
  return (
    <div className='Main'>
      <div className='navbar d-flex align-items-center'>
        <ArrowBackIcon onClick={() => navigate(-1)} className='bg-white mx-2' style={{ borderRadius: '50%', fontSize: '40px', boxShadow: '1px 1px 10px lightgray', padding: '10px' }} />
        <span class='subheaderTitle'></span>
      </div>
      <Link to='/newparty'>
        <div className='my-3 px-2 shadow py-2 card'>
          <p className='float-end fw-bold'>
            New Party <AddCircleOutlineIcon />
          </p>
        </div>
      </Link>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { width: '100%' },
        }}
        noValidate
        autoComplete='off'
        className='px-3'
      >
        <TextField className='py-3' id='standard-textarea' label='Search' placeholder='Customer Name' multiline variant='standard' />
      </Box>
      <div className='card my-2 p-3 Team shadow  bg-body rounded mx-2'>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center '>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar>
            <div className='px-3'>
              <h4>SAMIR KUMAR JHA</h4>
              <p>9326475*8</p>
              <p>example@gmail.com</p>
            </div>
          </div>

          <div className=''>
            <CallIcon></CallIcon>
            <MailIcon className='mx-3' />
          </div>
        </div>
        <div className='d-flex  pt-3 justify-content-around'>
          <Link to='/order' className='text-center'>
            <div className='card p-2  mb-1' style={{ background: '#C7DBD2',width : "50px" }}>
              <div className='text-center'>
                <GradingIcon />
              </div>
            </div>
            <p style={{ fontSize: '9px' }}>Create SO</p>
          </Link>
          <Link to='/invoice' className='text-center'>
            <div className='card p-2  mb-1' style={{ background: '#C7DBD2',width : "50px",marginLeft : "4px"  }}>
              <div className='text-center'>
                <DescriptionIcon />
              </div>
            </div>
            <p style={{ fontSize: '9px' }}>Create Invoice</p>
          </Link>

          <Link to='/invoice' className='text-center'>
            <div className='card p-2  mb-1' style={{ background: '#C7DBD2',width : "50px"  }}>
              <div className='text-center'>
                <AutorenewIcon />
              </div>
            </div>
            <p style={{ fontSize: '9px' }}>Outstanding</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Customer;

import React from 'react'
import TeamHeader from './TeamHeader';
import { Avatar } from '@mui/material';
import { deepOrange, } from '@mui/material/colors';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import Footer from './Footer';
const Invoice = () => {
  return (
    <>
      <TeamHeader />
      <div className='my-3 px-2 shadow py-2 mx-2 bg-body rounded card' style={{borderTop:"3px solid red"}}>
        <h5 style={{fontWeight:"600",margin:"0px"}}>Invoice</h5>
      </div>
      <div className='card my-2 p-3 Team shadow  bg-body rounded mx-2'>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center '>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar>
            <div className='px-3'>
              <h4>Satyam satkar</h4>
              <p>Zonal Head</p>
            </div>
          </div>

          <div className=''>
            <CallIcon></CallIcon>
            <MailIcon className='mx-3' />
          </div>
        </div>
        <div className='d-flex  pt-3'>
          <Link to="/viewbussiness"><button className='btn btn-sm btn-view  px-3'>View Bussiness</button></Link>
          <button className='btn btn-sm btn-member text-light px-3 mx-3'>View Member</button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Invoice;
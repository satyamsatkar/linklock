import React from 'react';
import TeamHeader from './TeamHeader';
import { Avatar } from '@mui/material';
import { deepOrange, } from '@mui/material/colors';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Team = () => {
  return (
    <>
      <TeamHeader />
      <div className='card my-2 p-3 Team shadow  bg-body rounded mx-2'>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center '>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar>
            <div className='px-3'>
              <h4>SANDEEP SHARMA</h4>
              <p>ZONAL HEAD</p>
            </div>
          </div>

          <div className=''>
            <CallIcon></CallIcon>
            <MailIcon className='mx-3' />
          </div>
        </div>
        <div className='d-flex  pt-3'>
          <Link to="/viewbussiness"><button className='btn btn-sm btn-view  px-3'>View Business</button></Link>
          <button className='btn btn-sm btn-member text-light px-3 mx-3'>View Member</button>
        </div>
      </div>
      <div className='card my-2 p-3 Team shadow  bg-body rounded mx-2'>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center '>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar>
            <div className='px-3'>
              <h4>SAMIR KUMAR JHA</h4>
              <p>MANAGER</p>
            </div>
          </div>

          <div className=''>
            <CallIcon></CallIcon>
            <MailIcon className='mx-3' />
          </div>
        </div>
        <div className='d-flex  pt-3'>
          <Link to="/viewbussiness"><button className='btn btn-sm btn-view  px-3'>View Business</button></Link>
          <button className='btn btn-sm btn-member text-light px-3 mx-3'>View Member</button>
        </div>
      </div>
      <div className='card my-2 p-3 Team shadow  bg-body rounded mx-2'>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center '>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar>
            <div className='px-3'>
              <h4>SHADAB HAMEED</h4>
              <p>REGIONAL MANAGER</p>
            </div>
          </div>

          <div className=''>
            <CallIcon></CallIcon>
            <MailIcon className='mx-3' />
          </div>
        </div>
        <div className='d-flex  pt-3'>
          <Link to="/viewbussiness"><button className='btn btn-sm btn-view  px-3'>View Business</button></Link>
          <button className='btn btn-sm btn-member text-light px-3 mx-3'>View Member</button>
        </div>
      </div>
      <div className='card my-2 p-3 Team shadow  bg-body rounded mx-2'>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center '>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar>
            <div className='px-3'>
              <h4>SURAJ PANDITA</h4>
              <p>REGIONAL MANAGER</p>
            </div>
          </div>

          <div className=''>
            <CallIcon></CallIcon>
            <MailIcon className='mx-3' />
          </div>
        </div>
        <div className='d-flex  pt-3'>
          <Link to="/viewbussiness"><button className='btn btn-sm btn-view  px-3'>View Business</button></Link>
          <button className='btn btn-sm btn-member text-light px-3 mx-3'>View Member</button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Team;

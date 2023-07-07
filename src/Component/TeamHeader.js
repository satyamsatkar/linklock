import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useLocation } from 'react-router-dom';
const TeamHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const getPageName = () => {
    switch (location.pathname) {
      case '/inventory':
        return 'Inventory';
      case '/order':
        return 'Order';
      case '/team':
        return 'Team';
      case '/invoice':
        return 'Invoice';
      case '/newparty':
        return 'Add Party';
      case '/addproduct':
        return 'Add Party';
      case '/customer':
        return 'Customer';

      default:
        return 'My Website';
    }
  };
  
  return (
    <div className='navbar d-flex align-items-center'>
      <ArrowBackIcon onClick={() => navigate(-1)} className='bg-white mx-2' style={{ borderRadius: '50%', fontSize: '40px', boxShadow: '1px 1px 10px lightgray', padding: '10px' }} />

      <p style={{ color: 'white', paddingRight: '10px' }}>{getPageName()}</p>
    </div>
  );
};

export default TeamHeader;

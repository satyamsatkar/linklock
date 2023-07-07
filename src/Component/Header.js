import React from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/link-lock-logo.jpg'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const Header = () => {
  const [log, setLog] = useState(true);

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('email_id');
    localStorage.removeItem('contact_no');
    localStorage.removeItem('candidate_name');

    navigate('/'); 
  };
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
       <img  style={{width:"100px"}} src={logo} alt='logo'/>

          <Stack direction='d-flex desig  align-item-center' spacing={2}>
            <div className='px-3'>
              <p className='my-2'>Hi Satyam!</p>
              {/* <p className='desig'>Manager</p> */}
            </div>
            <StyledBadge onClick={() => setLog(!log)} overlap='circular' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant='dot'>
              <Avatar sx={{ bgcolor: '#025464' }}>S</Avatar>
            </StyledBadge>
          </Stack>
        </div>
      </nav>
      {log ? null : (
        <Link to='/'>
          <div>
            <p className='logout' onClick={handleLogout}>
              Logout
            </p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Header;

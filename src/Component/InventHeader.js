import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
const InventHeader = () => {
  return (
    <div className='navbar d-flex align-items-center'>
        <Link to="/"><ArrowBackIcon className='bg-white mx-2' style={{borderRadius:"50%",fontSize:"40px",boxShadow:"1px 1px 10px lightgray",padding:"10px"}}/></Link>
     
    </div>
  )
}

export default InventHeader
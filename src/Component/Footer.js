import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='foot fixed-bottom '>
      <div className='row'>
        <Link to='/' className='col-3 border-1 text-center py-2 active'>
          <div>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-house-door' viewBox='0 0 16 16'>
              <path d='M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z' />
            </svg>
            <p>Home</p>
          </div>
        </Link>

        <Link to='/team' className='col-3 border-1 text-center py-2'>
          <div>
          <i className="fa-solid fa-users"></i>
            <p>Team</p>
          </div>
        </Link>

        <Link to='/inventory' className='col-3 border-1 text-center py-2'>
          <div style={{ position: 'relative' }}>
          <i className="fa-solid fa-list"></i>
            <p>Inventory</p>
          </div>
        </Link>

        <Link to='/invoice' className='col-3 border-1 text-center py-2'>
          <div>
          <i className="fa-solid fa-file-invoice"></i>
            <p>Invoice</p>
          </div>
        </Link>
      </div>
      <Link to='/order' className='col-3 border-1 text-center py-2'>
        <button className='plus-btn'>
        <i className="fa-solid fa-plus"></i>
        </button>
      </Link>
    </div>
  );
};

export default Footer;

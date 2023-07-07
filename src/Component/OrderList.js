import React, { useState } from 'react';
import TeamHeader from './TeamHeader';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { DatePicker, Space } from 'antd';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SaveFooter from './SaveFooter';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';

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

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
 
};
const OrderList = () => {
  const [click, setClick] = useState(true);
  const [change, setChange] = useState('1');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ marginBottom: '60px' }}>
      <TeamHeader />
      <div className='my-3 px-2 shadow py-2 mx-2 bg-body rounded card' style={{ borderTop: '3px solid red' }}>
        <div className='row'>
          <div className='col-6'>
            <span>Order No.</span>
            <div>
              <div>
                <Button onClick={handleOpen}>{change}</Button>
                <Modal open={open} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
                  <Box sx={style}>
                    <TextField id='outlined-basic' onChange={(e) => setChange(e.target.value)} label='Outlined' variant='outlined' />
                    <i class='bi bi-x-square px-3' onClick={handleClose} style={{ fontSize: '20px',position : 'absolute' , top : "0px" ,right : '0px' }}></i>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <span>Date</span>
            <Space direction='vertical'>
              <DatePicker onChange={onChange} />
            </Space>
          </div>
        </div>
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

        <div className='d-flex align-items-center justify-content-between my-3'>
          <Stack spacing={2} sx={{ width: '100%' }}>
            <Autocomplete id='free-solo-demo' freeSolo options={top100Films.map((option) => option.name)} renderInput={(params) => <TextField {...params} label='Email' />} />
          </Stack>
        </div>

        <div id='cartItems'>
          <div className='card producthol'>
            <div className='row'>
              <div className='col-6'>
                <span class='whitebg'>#1</span>
                <strong>10 Bullet Lock Body SS</strong>
              </div>
              <div className='col-6 text-right'>&#8377; 4130</div>
            </div>
            <div className='row tbspacer'>
              <div className='col-6'>
                <span>Item Subtotal</span>
              </div>
              <div className='col-6 text-right'>10 x 350 = &#8377; 3500</div>
            </div>
            <div className='row'>
              <div className='col-6'>
                <span>Tax GST @18%</span>
              </div>
              <div className='col-6 text-right'>&#8377; 630</div>
            </div>
          </div>
          <div className='card producthol'>Hello 2</div>
        </div>
        <Link to='/addproduct'>
          <div className='d-flex align-items-center justify-content-between'>
            <input type='button' className='btn btn-primary fullbutton' value='Add Product'></input>
          </div>
        </Link>
      </div>

      <div className='card my-2 p-3  shadow   rounded mx-2 producthol' id=''>
        <div className='d-flex justify-content-between'>
          <p>
            <b>Total Amt.</b>
          </p>
          <p>₹8260.00</p>
        </div>
      </div>

      <div className='card my-2 p-3  shadow   rounded mx-2 ' id=''>
        <div className='d-flex justify-content-between'>
          <p>Payment type</p>
          <p onClick={() => setClick(!click)}>
            <i class='bi bi-cash'></i> Cash
          </p>
        </div>
      </div>

      <div className='card my-2 p-3  shadow   rounded mx-2 ' id=''>
        <div className='d-flex justify-content-between'>
          <TextField className='' id='outlined-multiline-static' style={{ width: '80%' }} label='Remark' multiline rows={4} defaultValue='Default Value' />

          <Button className='' variant='outlined'>
            <AttachFileIcon />
          </Button>
        </div>
      </div>

      <div className={click ? 'drawer' : 'drawer drawer2'}>
        <div className='d-flex justify-content-between p-3 border'>
          <h3 className=''>Payment Method</h3>
          <i class='bi bi-x-square' onClick={() => setClick(!click)} style={{ fontSize: '20px' }}></i>
        </div>
        <div className='px-3'>
          <p className='p-2 border-bottom'>
            <i class='bi bi-cash'></i> Cash
          </p>
          <p className='p-2 border-bottom'>
            <i class='bi bi-card-heading'></i> Cheque
          </p>
        </div>
      </div>

      <SaveFooter />
    </div>
  );
};

export default OrderList;

import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import logo from '../assets/link-lock-logo.jpg';
import axios from 'axios';
import md5 from 'md5'


const LoginPage = () => {
  const [value, setValues] = useState({
    mobile: '',
    password: '',
  });

  const Navigate = useNavigate()

  const onhandleSubmit = (e) => {
    e.preventDefault();

    const pass = value.password

    const hashedPassword = md5(pass);
    console.log(hashedPassword);

    const data = {
      mobile : value.mobile,
      password : hashedPassword,
    }



    axios.post('http://localhost:8081/login', data).then((res) => {
      if (res.data.id) {
        localStorage.setItem('id', res.data.id);
        localStorage.setItem('email_id', res.data.email_id);
        localStorage.setItem('candidate_name', res.data.candidate_name);
        localStorage.setItem('contact_no', res.data.contact_no);
        Navigate('/dash');
      } else {
        Navigate('/');
      }
    });
  };

  const handleChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className='sign-up padd-20 '>
      <div className='log-logo'>
        <img src={logo} alt='logo' />
      </div>

      <div>
        <h2 className='py-2'>Log in</h2>
        <p className='py-2'>Welcome back! Glad to see you, Again!</p>
      </div>
      <form onSubmit={onhandleSubmit}>
        <div className='form-floating mb-3'>
          <input type='number' className='form-control' id='floatingInput' onChange={handleChange} value={value.mobile} placeholder='name@example.com' name='mobile' />
          <label htmlFor='floatingInput'>Mobile No.</label>
        </div>
        <div className='form-floating'>
          <input type='password' className='form-control' id='floatingPassword' onChange={handleChange} value={value.password} placeholder='Password' name='password' />
          <label htmlFor='floatingPassword'>Password</label>
        </div>

        <button type='submit' className='btn-1'>
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

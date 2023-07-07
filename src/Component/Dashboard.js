import React, { useEffect, useState } from 'react';
import graph from '../assets/graph1.png';
import Header from './Header';
import Footer from './Footer';
import Person4Icon from '@mui/icons-material/Person4';
import ViewListIcon from '@mui/icons-material/ViewList';
import DescriptionIcon from '@mui/icons-material/Description';
import GradingIcon from '@mui/icons-material/Grading';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Dashboard = () => {

  const [ytd , setytd] = useState({})

  useEffect(()=>{
    const data = {
      contact_no : localStorage.getItem('contact_no'),
    }
    async function fetch(){
      axios.post('http://localhost:8081/Ytd' , data)
      .then((res)=>{
        console.log(res)
        setytd(res);
       
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    fetch()
  },[])
  return (
    <>
      <Header />
      <div className='Dash my-3 px-3  m90'>
        <div className='row cards'>
          <div className='col-6'>
            <div className='card my-2' style={{ background: '#4D4CAC' }}>
              <p>YTD Sales:</p>
              <h3>₹{ytd?.data[0]?.amount}</h3>
            </div>
            <div className='card' style={{ background: '#659CFF' }}>
              <p>MTD Sales:</p>
              <h3>₹1200</h3>
            </div>
          </div>
          <div className='col-6'>
            <div className='card my-2' style={{ background: '#FF808B' }}>
              <p>YTD Collection:</p>
              <h3>₹1200</h3>
            </div>
            <div className='card ' style={{ background: '#FFA056' }}>
              <p>MTD Collection:</p>
              <h3>₹1200</h3>
            </div>
          </div>
          <div className=''>
            <div className='card my-2 d-flex' style={{ background: '#E57C23', display: 'flex' }}>
              <p>Total Outstanding:</p>
              <h3>₹1200</h3>
            </div>
          </div>
        </div>
        <div className='my-2  py-2 d-flex justify-content-between'>
          <Link to='/customer' className='text-center'>
            <div className='card p-3  mb-1' style={{background : "#C7DBD2" , border : "none"}} >
              <div className='text-center' >
                <Person4Icon />
              </div>
            </div>
                <p style={{fontSize : "10px"}}>Customer</p>
          </Link>
          <Link to='/order' className='text-center' >
            <div className='card p-3  mb-1' style={{background : "#C7DBD2", border : "none"}}>
              <div className='text-center'>
                <GradingIcon />
              </div>
            </div>
                <p style={{fontSize : "10px"}}>Sales Order</p>
          </Link>
          <Link to='/inventory' className='text-center'>
            <div className='card p-3  mb-1'style={{background : "#C7DBD2", border : "none"}} >
              <div className='text-center'>
                <ViewListIcon />
              </div>
            </div>
                <p style={{fontSize : "10px"}}>Inventory</p>
          </Link>
          <Link to='/invoice' className='text-center'>
            <div className='card p-3  mb-1' style={{background : "#C7DBD2", border : "none"}}>
              <div className='text-center'>
                <DescriptionIcon />
              </div>
            </div>
                <p style={{fontSize : "10px"}}>Invoice</p>
          </Link>
        </div>
        <div className='my-3 px-2 shadow py-2 bg-body rounded card' style={{ borderTop: '3px solid red' }}>
          <h5 style={{ fontWeight: '600', margin: '0px' }}>
            Target <span className='text-danger'>vs</span> Achive
          </h5>
        </div>
        <div className='graph shadow p-3 my-2  bg-body rounded card'>
          <img src={graph} alt='graph' />
        </div>

        <table className='table bg-white shadow p-3 my-3  bg-body rounded table-striped'>
          <thead>
            <tr className='text-center border-danger'>
              <th>Month</th>
              <th colSpan='2' scope='col'>
                Door Fit
              </th>
              <th colSpan='2' scope='col'>
                Pad Lock
              </th>
              <th colSpan='2' scope='col'>
                Furniture
              </th>
            </tr>
          </thead>

          <tbody className='text-center'>
            <tr className='table-success'>
              <th>-</th>
              <th>Target</th>
              <th>Ach</th>
              <th>Target</th>
              <th>Ach</th>
              <th>Target</th>
              <th>Ach</th>
            </tr>
            <tr>
              <td>JAN</td>
              <td>12</td>
              <td>12</td>
              <td>12</td>
              <td>12</td>
              <td>12</td>
              <td>12</td>
            </tr>
            <tr>
              <td>FEB</td>
              <td>12</td>
              <td>12</td>
              <td>12</td>
              <td>12</td>
              <td>12</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;

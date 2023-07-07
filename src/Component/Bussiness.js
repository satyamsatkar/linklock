import React from 'react';
import InventHeader from './InventHeader';

const Bussiness = () => {
  return (
    <div>
      <InventHeader />
      <div className='p-3'>
        <div className='my-3 px-2 shadow py-2 bg-body rounded card' style={{ borderTop: '3px solid red' }}>
          <h5 style={{ fontWeight: '600', margin: '0px' }}>Bussiness Chart</h5>
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
    </div>
  );
};

export default Bussiness;

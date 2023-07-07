import { Outlet, createBrowserRouter } from 'react-router-dom';

import Error from './Error';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import Team from './Team';
import Inventory from './Inventory';
import Invoice from './Invoice';
import OrderList from './OrderList';
import Bussiness from './Bussiness';
import Addproduct from './Addproduct';
import Customer from './Customer';
import NewCustomer from './NewCustomer';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



const Routing = createBrowserRouter([


  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
      },
      {
        path: '/dash',
        element: <Dashboard />,
      },
      {
        path: '/team',
        element: <Team />,
      },
      {
        path: '/inventory',
        element: <Inventory />,
      },
      {
        path: '/invoice',
        element: <Invoice />,
      },
      {
        path: '/order',
        element: <OrderList />,
      },
      {
        path: '/viewbussiness',
        element: <Bussiness />,
      },
      {
        path: '/addproduct',
        element: <Addproduct />,
      },
      {
        path: '/customer',
        element: <Customer />,
      },
      {
        path: '/newparty',
        element: <NewCustomer/>,
      },
   
    ],
  },
]);

function checkLocalStorageAndRedirect(navigate) {
  const id = localStorage.getItem('id');
  if (id) {
    navigate('/dash'); // Redirect to dashboard if id exists in localStorage
  }
}

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    checkLocalStorageAndRedirect(navigate);
  }, [navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}
export default Routing;

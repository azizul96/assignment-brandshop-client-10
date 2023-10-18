import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './pages/Home/Home';
import AuthProvider from './context/AuthProvider';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import AddProduct from './pages/AddProduct/AddProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path:"/signUp",
        element: <SignUp></SignUp>
      },
      {
        path:"/login",
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

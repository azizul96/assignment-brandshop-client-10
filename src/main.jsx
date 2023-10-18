
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
import PrivateRoute from './Private/PrivateRoute';
import BrandPage from './pages/BrandPage/BrandPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path:"/",
        element: <Home></Home>,
        loader: ()=> fetch('/brand.json')
      },
      {
        path:"/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:"/brand/:brand",
        element: <BrandPage></BrandPage>,
        loader: ({params})=> fetch(`http://localhost:5000/products/${params.brand}`),
        loader: ()=> fetch('http://localhost:5000/products')
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

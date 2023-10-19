/* eslint-disable no-dupe-keys */

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
import UpdateProduct from './pages/UpdateProduct/UpdateProduct';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import MyCart from './pages/MyCart/MyCart';

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
      },
      {
        path:"/update/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path:"/details/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ()=> fetch('http://localhost:5000/products')
      },
      {
        path: "/myCart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute> ,
        loader: ()=> fetch('http://localhost:5000/carts')
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

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import About from './components/About/About';
import Users from './components/Users/Users';
import ErrorPage from './components/Errorpage/ErrorPage';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/products",
        element:<Products></Products>,
        loader: ()=> fetch("data.json")
      },
      {
        path:"/about",
        element:<About></About>,
      },
      {
        path:"/users",
        element:<Users></Users>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer/>
  </React.StrictMode>,
)

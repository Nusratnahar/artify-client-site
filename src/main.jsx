import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layouts/Root.jsx';
import Home from './Pages/Home.jsx';



const router = createBrowserRouter([
   {
    path: "/",
   Component: Root,
   children: [
    {
      index: true,
      Component: Home ,
    },
    // {
    //   path: '/plants',
    //   Component: Plants,
    // },
    // {
    //   path: '/plants/:plantId',
    //   element: 
    //     <PrivateRoute>
    //       <PlantDetails></PlantDetails>
    //     </PrivateRoute>
    //   ,
    //   loader: ()=> fetch('/data.json').then(res => res.json()),
    // },
   
    // {
    //   path: '/login',
    //   Component: Login,

    // },
    // {
    //   path: '/signup',
    //   Component: Signup,

    // },
    // {
    //   path: '/profile',
    //   element: <PrivateRoute>
    // <Profile></Profile>
    //   </PrivateRoute>,
    
    // },
   ]
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

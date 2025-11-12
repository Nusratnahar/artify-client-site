import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layouts/Root.jsx';
import Home from './Pages/Home.jsx';
import ExploreArtWorks from './Pages/ExploreArtWorks';
import AddArtWork from './Pages/AddArtWork.jsx';
import AuthProvider from './Contexts/AuthContext/AuthProvider.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';




const router = createBrowserRouter([
   {
    path: "/",
   Component: Root,
   children: [
    {
      index: true,
      Component: Home ,
    },
    {
      path: '/artworks',
      element: <ExploreArtWorks></ExploreArtWorks>,
      loader: ()=> fetch('http://localhost:3000/artworks')
    },
    {
      path: '/add-artwork',
      element: <AddArtWork></AddArtWork>
    },
    // {
    //   path: '/plants/:plantId',
    //   element: 
    //     <PrivateRoute>
    //       <PlantDetails></PlantDetails>
    //     </PrivateRoute>
    //   ,
    //   loader: ()=> fetch('/data.json').then(res => res.json()),
    // },
   
    {
      path: '/login',
      Component: Login,

    },
    {
      path: '/register',
      Component: Register,

    },
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

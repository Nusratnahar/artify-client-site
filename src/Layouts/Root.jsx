import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
       <div className="flex flex-col min-h-screen ">
            <Navbar></Navbar>
            <main >
    <Outlet />
   <ToastContainer position="top-center" autoClose={3000} />
  </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;
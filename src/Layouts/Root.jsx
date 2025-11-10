import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
       <div className="flex flex-col min-h-screen ">
            <Navbar></Navbar>
            <main >
    <Outlet />
   
  </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;
import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const {user, loading}= use(AuthContext);
    const location = useLocation();
   
    if(loading){
        return <p>loading....</p>
    }
    if(user){
        return children;
        }
        return <Navigate state={location?.pathname} to='/login'></Navigate>
};

export default PrivateRoute;
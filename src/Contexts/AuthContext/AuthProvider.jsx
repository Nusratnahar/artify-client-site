import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';

import { AuthContext } from './AuthContext';
import { auth } from '../../Firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword( auth, email, password);
    }
const signInUser = (email, password) =>{
         setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }

    const googleProvider = new GoogleAuthProvider()
const googleLogin = () => signInWithPopup(auth, googleProvider);

    const signOutUser = () =>{
         setLoading(true);
        return signOut(auth);

    }

const updateUserProfile = (name, photoURL) => {
  if (!auth.currentUser) return;
  return updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photoURL,
  });
};







useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
        // console.log('current user is', currentUser);
        setUser(currentUser);
        setLoading(false);
    })
    return ()=>{
        unSubscribe()
    }
},[])


 const authInfo ={
    user,
    loading,
    createUser,
    signInUser,
        signOutUser, googleLogin,
        updateUserProfile,
 }
 
    return (
       <AuthContext value={authInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;
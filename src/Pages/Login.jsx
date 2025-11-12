import React, { use, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { FaGoogle } from "react-icons/fa";
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const Login = () => {
     const { signInUser,googleLogin } = use(AuthContext)
const [email, setEmail] = useState("");
    const location =useLocation();
    const navigate = useNavigate()
    const handleLogin = (event) =>{
         event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
 
         signInUser(email,password)
         .then(result=>{
            console.log(result.user)
             toast.success("Login successful!");
            event.target.reset();
            navigate(location.state || '/')
         })
         .catch(error=>{
            console.log(error);
            toast.error("Invalid email or password!");
         })

    }



     const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("Logged in with Google!");
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Google Sign-in failed!");
      });
  };





const handleForgotPassword = (email) => {
  if (!email) return toast.error("Please enter your email first!");
  
  sendPasswordResetEmail(auth, email)
    .then(() => toast.success("Password reset email sent!"))
    .catch((err) => {
      console.error(err);
      toast.error("Failed to send reset email!");
    });
};


const [showPassword, setShowPassword] = useState(false);


    return (
      <div className="card bg-base-100 w-full max-w-sm mx-auto my-20 py-10 shrink-0 shadow-2xl">
        <h1 className="text-center text-2xl font-bold">Login now!</h1>
        <h2 className='text-center text-xl font-semibold'>Access Your GreenNest Account</h2>
      <div className="card-body">
       <form onSubmit={handleLogin}>
         <fieldset className="fieldset">
            {/* email field */}
          <label className="label">Email</label>
          <input type="email"  onChange={(e) => setEmail(e.target.value)} name='email' className="input w-full" placeholder="Email" />
          {/* password field */}
          {/* <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" /> */}
<div className="relative">
   <label className="label">Password</label>
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Password"
    className="w-full border p-2 rounded"
    required
  />
  <span
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-6 cursor-pointer text-gray-600"
  >
    {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
  </span>
</div>




{/* ====== */}

          <div className='my-1'><a onClick={() => handleForgotPassword(email)} className="link link-hover  ">Forget password?</a></div>
          <button className="w-full rounded-2xl border-2 border-green-500 text-green-700 py-2  hover:bg-green-700 font-medium hover:text-white">
          Login
        </button>


<button
  onClick={handleGoogleSignIn}
  className="flex items-center justify-center gap-2 w-full py-2 rounded-2xl 
             border-2 border-green-500 text-green-700 hover:bg-green-600 hover:text-white
             transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
>
  <FaGoogle className="text-lg" />
  <span className="font-medium">Continue with Google</span>
</button>



        </fieldset>
       </form>
       <p className="text-center mt-3">
        Don't have an account? <Link className='text-blue-600 hover:text-blue-800' to="/signup">SignUp</Link>
      </p>
       
      </div>
    </div>
    );
};

export default Login;
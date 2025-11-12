import React, { useState, useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const { createUser, updateUserProfile, googleLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState('');

 console.log(error);

  const handleRegister = (event) => {
     event.preventDefault();
        const name = event.target.name.value;
        const photoURL = event.target.photoURL.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

 if (!/[A-Z]/.test(password)) {
      setError('Password must have at least 1 uppercase letter');
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError('Password must have at least 1 lowercase letter');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setError('');





         createUser(email,password)
         .then(()=>{
            toast.success('Signup successful!');
            navigate('/')
         })
         .catch(error=>{
            console.log(error)
            setError(error.message);
        toast.error(error.message);
         })

        // ✅ Update Profile
        updateUserProfile(name, photoURL)
          .then(() => {
            toast.success("Account created successfully!");
            event.target.reset();
            navigate("/");
          })
          .catch((error) => {
            console.error(error);
            toast.error("Failed to update profile!");
          });
      }
      


  // ✅ Google Sign Up
  const handleGoogleSignUp = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("Signed up with Google!");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Google sign-up failed!");
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto my-20 py-10 shadow-2xl">
      <h1 className="text-center text-2xl font-bold text-pink-600">Create an Account</h1>
      <h2 className="text-center text-lg text-gray-600 dark:text-gray-300 mb-4">
        Join Artify and share your creativity 🌸
      </h2>

      <div className="card-body">
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Full Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Your Name"
              required
            />

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              className="input w-full"
              placeholder="Your Photo URL"
              required
            />

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Your Email"
              required
            />

            {/* Password */}
            <div className="relative">
              <label className="label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input w-full pr-10"
                placeholder="Create Password"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 cursor-pointer text-gray-600"
              >
                {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
              </span>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="mt-4 w-full py-2 rounded-2xl border-2 border-pink-500 text-pink-600 
                        hover:bg-pink-600 hover:text-white font-medium transition-all duration-300"
            >
              Register
            </button>

            {/* Google Sign Up */}
            <button
              onClick={handleGoogleSignUp}
              type="button"
              className="flex items-center justify-center gap-2 w-full py-2 mt-3 rounded-2xl 
                         border-2 border-pink-500 text-pink-600 hover:bg-pink-600 hover:text-white
                         transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <FaGoogle className="text-lg" />
              <span className="font-medium">Continue with Google</span>
            </button>
          </fieldset>
        </form>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link className="text-blue-600 hover:text-blue-800" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

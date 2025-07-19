
"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginUserMutation, useSignupUserMutation } from "../../redux/slice/userApi";
import { setUser } from "../../redux/slice/userSlice";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

export default function AuthModal({ setshowLoginForm }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();
  const [signupUser] = useSignupUserMutation();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");
  //   setSuccess(false);

  //   if (!isLogin && password !== confirmPassword) {
  //     setError("Passwords do not match");
  //     setLoading(false);
  //     return;
  //   }

  //   try {
  //     let result;
  //     if (isLogin.token) {
  //       result = await loginUser({ emailOrUsername: email, password, userType: 2 }).unwrap();
  //       document.cookie = `token=${result.data.token}`;
  //     } else {
  //       result = await signupUser({ email, password, username, userType: 2 }).unwrap();
  //     }

  //     dispatch(setUser(result));
  //     setSuccess(true);
  //     setTimeout(() => setshowLoginForm(false), 2000);
  //   } catch (error) {
  //     setError("Authentication failed. Please check your credentials.");
  //     console.error("Auth Error:", error);
  //   }

  //   setLoading(false);
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
  
    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
  
    try {
      let result;
      if (isLogin) {
        result = await loginUser({ emailOrUsername: email, password, userType: 2 }).unwrap();
      } else {
        result = await signupUser({ email, password, username, userType: 2 }).unwrap();
      }
  
      if (result && result.data && result.data.token) {
        dispatch(setUser(result));
        document.cookie = `token=${result.data.token}`;
        setSuccess(true);
        setTimeout(() => setshowLoginForm(false), 2000);
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("Authentication failed. Please check your credentials.");
      console.error("Auth Error:", error);
    }
  
    setLoading(false);
  };
  


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 w-[400px] max-w-[90%] shadow-xl relative flex flex-col items-center backdrop-blur-md bg-opacity-90">
        <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl" onClick={() => setshowLoginForm(false)}>✖</button>
        
        <div className="flex w-full justify-center mb-6 gap-2">
          <button className={`px-6 py-2 text-lg font-semibold rounded-md transition-all ${isLogin ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`} onClick={() => setIsLogin(true)}>Login</button>
          <button className={`px-6 py-2 text-lg font-semibold rounded-md transition-all ${!isLogin ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`} onClick={() => setIsLogin(false)}>Register</button>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">{isLogin ? "Welcome Back!" : "Create an Account"}</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {success && (
          <div className="flex items-center gap-2 text-green-700 bg-green-100 p-3 rounded-md mb-2 animate-fadeInOut">
            <FaCheckCircle className="text-green-500" size={20} />
            <p>{isLogin ? "Login Successful!" : "Registration Successful!"}</p>
          </div>
        )}

        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" className="p-3 border rounded-md w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
          {!isLogin && <input type="text" placeholder="Username" className="p-3 border rounded-md w-full" value={username} onChange={(e) => setUsername(e.target.value)} required />}
          <input type="password" placeholder="Password" className="p-3 border rounded-md w-full" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {!isLogin && <input type="password" placeholder="Confirm Password" className="p-3 border rounded-md w-full" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />}
          <button className="bg-blue-600 text-white py-3 rounded-md font-bold hover:bg-blue-700 transition-all" disabled={loading}>{loading ? "Processing..." : isLogin ? "Login" : "Register"}</button>
        </form>

        <div className="mt-6 flex flex-col w-full gap-3">
          <button className="flex items-center justify-center gap-2 border py-2 px-4 rounded-md w-full text-gray-700 hover:bg-gray-100 transition-all"><FcGoogle size={24} /> Continue with Google</button>
          <button className="flex items-center justify-center gap-2 border py-2 px-4 rounded-md w-full text-gray-700 hover:bg-gray-100 transition-all"><FaFacebook size={24} className="text-blue-600" /> Continue with Facebook</button>
        </div>
      </div>
    </div>
  );
}

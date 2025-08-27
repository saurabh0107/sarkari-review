"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginUserMutation, useSignupUserMutation } from "../../redux/slice/userApi";
import { setUser } from "../../redux/slice/userSlice";
import { FcGoogle } from "react-icons/fc";
import { FaCheckCircle } from "react-icons/fa";
import { Mail, Lock, User } from "lucide-react";

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
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl p-8 w-[420px] max-w-[90%] shadow-2xl relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
          onClick={() => setshowLoginForm(false)}
        >
          ✖
        </button>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            className={`flex-1 py-2 text-lg font-semibold rounded-l-lg transition-all ${
              isLogin ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 text-lg font-semibold rounded-r-lg transition-all ${
              !isLogin ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          {isLogin ? "Welcome Back 👋" : "Create Your Account"}
        </h2>

        {/* Alerts */}
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        {success && (
          <div className="flex items-center gap-2 text-green-700 bg-green-100 p-3 rounded-lg mb-3">
            <FaCheckCircle className="text-green-500" size={20} />
            <p>{isLogin ? "Login Successful!" : "Registration Successful!"}</p>
          </div>
        )}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Username"
                className="pl-10 pr-3 py-3 w-full border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="Email"
              className="pl-10 pr-3 py-3 w-full border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="password"
              placeholder="Password"
              className="pl-10 pr-3 py-3 w-full border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {!isLogin && (
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="password"
                placeholder="Confirm Password"
                className="pl-10 pr-3 py-3 w-full border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          <button
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition shadow-md"
            disabled={loading}
          >
            {loading ? "Processing..." : isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <button className="flex items-center justify-center gap-2 border py-3 px-4 rounded-lg w-full text-gray-700 hover:bg-gray-50 transition">
          <FcGoogle size={22} /> Continue with Google
        </button>
      </div>
    </div>
  );
}

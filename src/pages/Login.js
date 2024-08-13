import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoEyeSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { bgstyle } from '../styles';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const predefinedEmail = 'raviravi18425@gmail.com';
    const predefinedPassword = '12345';

    if (email === predefinedEmail && password === predefinedPassword) {
      navigate('/home');
    } else {
      alert('Incorrect email or password');
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-black" id='bgc' style={bgstyle}>
      <div className="bg-white w-80 p-6 rounded-3xl shadow-md">
        <form className="flex flex-col gap-4 py-10" onSubmit={handleLogin}>
          <input
            type="text"
            className="w-full p-3 bg-white border-b-2"
            placeholder="E mail or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-3 bg-white border-b-2"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <IoEyeSharp /> : <FaRegEyeSlash />}
            </button>
          </div>
          <a href="#" className="text-right text-sm text-gray-600">
            Forgot password?
          </a>
          <button type="submit" className="bg-orange-500 text-white p-3 rounded-md font-semibold">
            Login
          </button>
        </form>
        <p className="text-center my-4 text-sm text-gray-600">
          Don't have an account? <a href="#" className="text-orange-500 font-semibold">Sign up</a>
        </p>
        <div className="text-center text-sm text-gray-500 mb-4">OR</div>
        <div className="flex justify-center space-x-4">
          <button className="p-2 border border-gray-300 rounded-full">
            <FaFacebook className="text-blue-600 text-xl" />
          </button>
          <button className="p-2 border border-gray-300 rounded-full">
            <FcGoogle className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

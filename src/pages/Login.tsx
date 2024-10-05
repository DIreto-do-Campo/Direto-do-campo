import React from 'react';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm/LoginForm';

const Login = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-cinereous/20 rounded-[19px] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm/LoginForm';

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

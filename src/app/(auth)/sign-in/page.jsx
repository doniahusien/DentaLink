'use client'
import React from 'react';
import loginImg from '../../../../public/images/login.png';
import LoginForm from '@/components/auth/LoginForm';
import AuthCard from '@/components/auth/AuthCard';
const signinPage = () => {
  return (
    <>
      <AuthCard img={loginImg} formAuth='login' />
    </>
  
  );
};

export default signinPage;

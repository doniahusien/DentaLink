'use client'
import React from 'react';
import Image from 'next/image';
import loginImg from '../../../../public/images/login.png';
import LoginForm from '@/components/auth/LoginForm';

const signinPage = () => {
  return (
    <div className=" mt-14 flex justify-center items-center w-full h-screen ">
      <div
        className="flex w-[900px] h-[550px] shadow-lg border rounded-lg overflow-hidden"
      >
        {/* Left Image Section */}
        <div className="w-1/2 bg-primary px-24 flex justify-center items-center">
          <Image src={loginImg} alt="login" width={350} height={250} />
        </div>

        {/* Right Form Section */}
        <div className="w-1/2 flex justify-center items-center ">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default signinPage;

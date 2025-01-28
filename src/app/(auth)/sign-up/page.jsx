'use client'
import React from 'react';
import Image from 'next/image';
import signupImg from '../../../../public/images/signup.png';
import SignupForm from '@/components/auth/SignupForm';

const signupPage = () => {
  return (
    <div className="pt-28 flex justify-center items-center w-full h-screen ">
    <div
      className="flex w-[900px] h-[600px] shadow-lg border rounded-lg overflow-hidden"
    >
      {/* Left Image Section */}
      <div className="w-1/2 bg-primary px-24 flex justify-center items-center">
        <Image src={signupImg} alt="signup" width={350} height={250} />
      </div>

      {/* Right Form Section */}
      <div className="w-1/2 flex justify-center items-center ">
        <SignupForm />
      </div>
    </div>
  </div>
  )
}

export default signupPage
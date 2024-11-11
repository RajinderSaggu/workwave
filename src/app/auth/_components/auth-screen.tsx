"use client";
import { useState } from 'react';
import SignInCard from './sign-in-card';
import SignUpCard from './sign-up-card';
import { SignInFlow } from '../../../types/types';

const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn");
  return (
    <div className='h-full flex items-center justify-center bg-[#AFE1AF]'>
      <div className='md:h-auto md:w-[420px]'>
        {state === "signIn" ? 
          <SignInCard setState={setState} /> : 
          <SignUpCard setState={setState} />}
      </div>
    </div>
  );
}

export default AuthScreen;

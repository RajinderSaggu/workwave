import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import SocialButtons from './socials';
import { SignInFlow } from '../../../types/types';

interface SignInCardProps {
  setState: (state: SignInFlow) => void;
};
const SignInCard = ({ setState }:  SignInCardProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Card className="max-w-md w-full shadow-lg border rounded-lg bg-white text-gray-800">
        <CardHeader className="px-6 py-4 text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">Login to continue</CardTitle>
          <CardDescription className="text-gray-500">Use your email or another service to continue</CardDescription>
        </CardHeader>
        <CardContent className="px-6 py-4 space-y-4">
          <form>
            <div className="space-y-4">
              <Input 
                className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <Input 
                className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <Button 
              type="submit"
              className="w-full mt-6 py-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition duration-200 ease-in-out"
            >
              Continue
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col text-center py-4 text-gray-600">
        <SocialButtons/>
        <div className='py-2'>
        Don’t have an account? <p onClick={() => setState("signUp")} className="text-blue-500 hover:underline cursor-pointer" >Sign up</p>
        </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignInCard;

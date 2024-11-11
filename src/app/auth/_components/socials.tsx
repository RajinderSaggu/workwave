import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { useAuthActions } from "@convex-dev/auth/react";

const SocialButtons = () => {
  const { signIn } = useAuthActions();

  return (
    <div className="flex flex-col  w-full space-y-2">
      {/* Google Sign-In Button */}
      <Button onClick={() => signIn("google")} className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition-colors">
        <FcGoogle className="w-5 h-5 mr-2" />
        <span className="font-medium text-gray-700">Continue with Google</span>
      </Button>
      {/* GitHub Sign-In Button */}
      <Button onClick={() => signIn("github")} className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition-colors">
        <FaGithub className="w-5 h-5 mr-2 text-gray-800" />
        <span className="font-medium text-gray-700">Continue with GitHub</span>
      </Button>
    </div>
  );
};

export default SocialButtons;

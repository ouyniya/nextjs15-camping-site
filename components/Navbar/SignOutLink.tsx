"use client";

import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";

const SignOutLink = () => {
  const hdlLogout = () => {
    toast("Logout successfully!!");
  };
  return (
    <>
      <SignOutButton redirectUrl="/">
        <button 
        className="w-full text-left text-rose-500"
        onClick={() => hdlLogout()}>Logout</button>
      </SignOutButton>
    </>
  );
};
export default SignOutLink;

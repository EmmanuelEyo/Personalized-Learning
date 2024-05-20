"use client";
import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { handleUserRegister } from "@/redux/authSlice";
import { useAppDispatch } from "@/redux/store";
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter();
  const dispatch = useAppDispatch()
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name
    let value = e.target.value

    setCredentials({ ...credentials, [name]: value})
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(handleUserRegister(credentials, router))
  }

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="flex-1 flex flex-col justify-center max-w-full p-8 bg-black">
        <h2 className="font-bold text-xl text-neutral-200">
          Welcome to Learn.ai
        </h2>
        <p className="text-neutral-300 text-sm max-w-sm mt-2">
          Sign Up to experience an endless world of Personalized Learning!
        </p>

        <form className="my-8" onSubmit={handleFormSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname" className="text-white">First name</Label>
              <Input id="firstname" name="name" value={credentials.name} onChange={handleInputChange} className="rounded bg-zinc-800" placeholder="John" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label className="text-white" htmlFor="lastname">Last name</Label>
              <Input id="lastname" className="rounded bg-zinc-800" placeholder="Doe" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label className="text-white" htmlFor="email">Email Address</Label>
            <Input id="email" name="email" value={credentials.email} onChange={handleInputChange} className="rounded bg-zinc-800" placeholder="johndoe@gmail.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label className="text-white" htmlFor="password">Password</Label>
            <Input id="password" name="password1" value={credentials.password1} onChange={handleInputChange} className="rounded bg-zinc-800" placeholder="••••••••" type="password" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label className="text-white" htmlFor="confirmpassword">Confirm your password</Label>
            <Input id="confirmpassword" value={credentials.password2} onChange={handleInputChange} name="password2" placeholder="••••••••" type="password" className="rounded bg-zinc-800" />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-col space-y-4">
            <button
              className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-300" />
              <span className="text-neutral-300 text-sm">
                GitHub
              </span>
              <BottomGradient />
            </button>
            <button
              className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-300" />
              <span className="text-neutral-300 text-sm">
                Google
              </span>
              <BottomGradient />
            </button>
          </div>
          <div className="mt-5">
            <p>Already have an account? <Link href='/sign-in' className="text-blue-700">Sign In</Link></p>
          </div>
        </form>
      </div>
      <div className="w-[1px] bg-gray-500"></div>
      <div className="flex-1 flex items-center justify-center">
        <Image src="/3D-image.png" alt="Sign Up" width={1000} height={1000} objectFit="cover" className="rounded-md" />
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};


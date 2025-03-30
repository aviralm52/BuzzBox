"use client";

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import { signIn } from "next-auth/react";

import { Button } from "../ui/button";

const handleGoogleLogin = () => {
  signIn("google", {
    redirect: true,
    callbackUrl: "/dashboard",
  });
};

const LoginModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Get Started</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className=" text-2xl">Welcome to BuzzBox</DialogTitle>
          <DialogDescription>
            BuzzBox makes it effortless to create secure chat links and start conversation
            in seconds
          </DialogDescription>
        </DialogHeader>
        <Button variant={"outline"} onClick={handleGoogleLogin}>
          <Image
            src={"/images/google.png"}
            alt="google_logo"
            className=" mr-4"
            width={25}
            height={25}
          />
          Continue with Google
        </Button>
      </DialogContent>
    </Dialog>
  );
};
export default LoginModal;

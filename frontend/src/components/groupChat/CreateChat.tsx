"use client";

import { toast } from "sonner";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { clearCache } from "@/actions/common";
import { CHAT_GROUP_URL } from "@/lib/apiEndPoints";
import { zodResolver } from "@hookform/resolvers/zod"
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import { createChatSchema, createChatSchemaType } from "@/validations/groupChatValidations";

import { Input } from "../ui/input";
import { Button } from "../ui/button";


const CreateChat = ({ user }: { user: CustomUser }) => {

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  const { register, handleSubmit, formState: { errors } } = useForm<createChatSchemaType>({
    resolver: zodResolver(createChatSchema)
  });

  const onSubmit = async (payload: createChatSchemaType) => {
    try {

      setLoading(true);
      const { data } = await axios.post(CHAT_GROUP_URL, { ...payload, user_id: user.id }, { headers: { Authorization: user.token } })

      if (data?.message) {
        clearCache("dashboard");
        setLoading(false);
        setOpen(false);
        toast.success(data?.message);
      }

    } catch (error) {

      setLoading(false);
      if (error instanceof AxiosError) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong. please try again!");
      }

    }
  }


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Chat</Button>
      </DialogTrigger>
      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Create your new Chat</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <Input placeholder="Enter chat title" {...register("title")} />
            <span className="text-red-400">{errors.title?.message}</span>
          </div>
          <div className="mt-4">
            <Input placeholder="Enter passcode" {...register("passcode")} />
            <span className="text-red-400">{errors.passcode?.message}</span>
          </div>
          <div className="mt-4">
            <Button className="w-full" disabled={loading}>
              {loading ? "Processing.." : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>

  )
}


export default CreateChat
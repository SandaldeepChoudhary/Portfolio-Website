"use client";

import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

//form service
import { useForm, ValidationError } from "@formspree/react";




const Form = () => {
  const [state, handleSubmit] = useForm("mkndzybe");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
        {/* input  */}
        <div className="relative flex items-center">
            <Input type="name" id="name" placeholder="Name"/>
            <User className="absolute right-6" size={20}/>
        </div>
        {/* Email  */}
        <div className="relative flex items-center">
            <Input type="email" id="email" placeholder="Email"/>
            <MailIcon className="absolute right-6" size={20}/>
        </div>
        {/* Textarea  */}
        <div className="relative flex items-center">
            <Textarea placeholder="Type Your Message Here..."/>
            <MessageSquare className="absolute right-6" size={20}/>
        </div>
        <Button type ="submit" disabled={state.submitting} className="flex items-center gap-x-1 max-w-[166px]">Let's Talk
        <ArrowRightIcon size={20}/></Button>
    </form>
  )
}

export default Form
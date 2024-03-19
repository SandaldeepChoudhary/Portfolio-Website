"use client";

import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

//EmailJS
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

//Toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate name field for special characters
    const nameField = form.current.elements["user_name"];
    if (!/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(nameField.value)) {
      toast.error("Name must not contain special characters");
      return;
    }

    // Validate email field
    const emailField = form.current.elements["user_email"];
    if (!isValidEmail(emailField.value)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Validate textarea for word limit
    const messageField = form.current.elements["message"];
    const messageWords = messageField.value.trim().split(/\s+/);
    if (messageWords.length > 200) {
      toast.error("Message should not exceed 200 words");
      return;
    }

    toast.success("Thank you for contacting me! I'll get back to you 😊");
    emailjs
      .sendForm("service_93i2nan", "template_o0ehj02", form.current, {
        publicKey: "HOl5DKTat_otrAqrY",
      })
      .then(
        () => {
          console.log("Message is sent Successfully!");
          form.current.reset(); // Reset the form
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      {/* input  */}
      <div className="relative flex items-center">
        <Input
          type="name"
          id="name"
          name="user_name"
          required
          placeholder="Name"
        />
        <User className="absolute right-6" size={20} />
      </div>
      {/* Email  */}
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          name="user_email"
          required
          placeholder="Email"
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* Textarea  */}
      <div className="relative flex items-center">
        <Textarea
          name="message"
          required
          placeholder="Type Your Message Here..."
        />
        <MessageSquare className="absolute right-6" size={20} />
      </div>
      <div>
        <Button
          type="submit"
          value="Send"
          className="flex items-center gap-x-1 max-w-[166px]"
        >
          Let's Talk
          <ArrowRightIcon size={20} />
        </Button>
      </div>
    </form>
  );
};

export default Form;

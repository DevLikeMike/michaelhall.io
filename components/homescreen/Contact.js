import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NEXT_URL } from "@/config/index";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  // Form init for react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // useRouter
  const router = useRouter();

  // onSubmit for react form hook ASYNC
  const onSubmit = async (data) => {
    let { name, email, message, subject } = data;
    // Hit api/contact endpoint from built in api page using fetch
    const res = await fetch(`${NEXT_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        subject: subject,
      }),
    });

    // AWAIT response form backend api/contact route
    const result = await res.json();
    if (res.ok) {
      toast.success("Thank you for your message!");
      reset();
    } else {
      toast.error("Something went wrong. Try Again later");
      console.log("Something wrong");
    }
  };

  return (
    <section className='contact flex flex-center col' id='contact'>
      <h2>Contact Me</h2>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className='contact__form'>
        <input
          type='text'
          name='name'
          placeholder='Name'
          // Register is from react-hook-form, first param is name field, second options
          {...register("name", {
            required: {
              value: true,
              message: "You must enter a first name.",
            },
            maxLength: {
              value: 20,
              message: "First name cannot be longer than 20 characters.",
            },
          })}
        />
        <span>{errors?.name?.message}</span>
        <input
          type='email'
          name='email'
          placeholder='Email'
          // Register is from react-hook-form, first param is name field, second options
          {...register("email", {
            required: {
              value: true,
              message: "You must enter a email.",
            },
            maxLength: {
              value: 40,
              message: "Your email cannot be longer than 40 characters.",
            },
          })}
        />
        <span>{errors?.email?.message}</span>
        <input
          type='text'
          name='subject'
          placeholder='Subject'
          {...register("subject", {
            required: {
              value: true,
              message: "You must enter a Subject for your message.",
            },
            maxLength: {
              value: 30,
              message: "Subject cannot be longer than 30 characters.",
            },
          })}
        />
        <span>{errors?.subject?.message}</span>
        <textarea
          name='message'
          placeholder='Message'
          {...register("message", {
            required: {
              value: true,
              message: "You must enter a message.",
            },
            minLength: {
              value: 25,
              message: "Your message must be at least 25 characters long.",
            },
            maxLength: {
              value: 1000,
              message: "Your message cannot be longer than 1000 characters.",
            },
          })}
        ></textarea>
        <span>{errors?.message?.message}</span>
        <input type='submit' value='Submit Message' />
      </form>
    </section>
  );
};

export default Contact;

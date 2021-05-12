import { useForm } from "react-hook-form";
import { NEXT_URL } from "@/config/index";
import { useRouter } from "next/router";

const Contact = () => {
  // Form init for react-hook-form
  const {
    register,
    handleSubmit,
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
      router.push("/message");
    }
  };

  return (
    <section className='contact flex flex-center col' id='contact'>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='contact__form'>
        <input
          type='text'
          name='name'
          placeholder='Name'
          required
          // Register is from react-hook-form, first param is name field, second options
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          required
          // Register is from react-hook-form, first param is name field, second options
          {...register("email", { required: true, maxLength: 40 })}
        />
        <input
          type='text'
          name='subject'
          placeholder='Subject'
          required
          // Register is from react-hook-form, first param is name field, second options
          {...register("subject", { required: true, maxLength: 30 })}
        />
        <textarea
          name='message'
          placeholder='Brief details about your case.'
          {...register("message", {
            required: true,
            maxLength: 1000,
            minLength: 25,
          })}
        ></textarea>
        <input type='submit' value='Submit Message' />
      </form>
    </section>
  );
};

export default Contact;

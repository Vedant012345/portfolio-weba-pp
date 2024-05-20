import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import { FaLinkedin, FaInstagram, FaFacebook, FaTelegram ,FaRegCopyright,  FaHeart } from 'react-icons/fa';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset // Adding the reset function from react-hook-form
  } = useForm();
  
  const onSubmit = async(data) => {
    const userInfo={
      name:data.name,
      email:data.email,
      message:data.message
    }
    try{
      await axios.post("https://getform.io/f/jbwxrwva",userInfo);
      toast.success("Your message has been sent.");
      reset(); // Resetting the form after successful submission
    } catch(error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  }

  return (
    <div name="contact" className="Contact container mx-auto px-4 md:px-20 py-20">
      <h1 className='text-center'>Contact Me</h1>
      <hr className='About-hr'/>
      <span className='contact-span'>:- Please fill in your complete details to contact me.</span><br />
      <span className='contact-span'>:- Please give me a feedback for my website for improvement.</span>
      <div className='flex flex-col items-center text-center justify-center mt-5'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className='text-xl font-semibold mb-4'>Enter your details</h2>
          <div className='flex flex-col mb-4'>
            <label htmlFor='name' className='block text-gray-700'>
              Full Name
            </label>
            <input {...register("name", { required: true })} type="text" placeholder='Enter your full name' id='name' name='name' className='border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300' />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='email' className='block text-gray-700'>
              Email Address
            </label>
            <input {...register("email", { required: true })} type="email" placeholder='Enter your email address' id='email' name="email" className='border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300' />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='message' className='block text-gray-700'>
              Message
            </label>
            <textarea {...register("message", { required: true })} id='message' placeholder='Write your message' name='message' className='border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300'></textarea>
            {errors.message && <span>This field is required</span>}
          </div>
          <button type="submit" className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
            Submit
          </button>
        </form><br /><br /><br /><hr className='About-hr' />
        <div className="flex flex-wrap justify-start items-center">
                <a href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit" className="mr-4 mb-2"><FaLinkedin className="icon" size={30} /></a>
                <a href="https://www.instagram.com/mr.vedupawar5/" className="mr-4 mb-2"><FaInstagram className="icon" size={30} /></a>
                <a href="https://www.facebook.com/vedant.pawar.100483?mibextid=ZbWKwL" className="mr-4 mb-2"><FaFacebook className="icon" size={30} /></a>
                <a href="/" className="mr-4 mb-2"><FaTelegram className="icon" size={30} /></a>
              </div><br />
              <p><FaRegCopyright className="icon" size={20} />2024. All rights reserved by @Unknowncoder09.  </p>
              <p>Thanku For Visiting < FaHeart className="heart" size={20} /></p>
      </div>
    </div>
  );
}

export default Contact;

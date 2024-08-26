import React, {useState, useEffect} from 'react'
import { set, useForm } from "react-hook-form";
import appwriteService from '../../appwrite/config';

function Footer() {
  const { register, handleSubmit} = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("")

  const email = async (data) => {
    setError("")
    const getEmail = appwriteService.subscribe(data)
    getEmail.then((response) => {
      if (response) {
        setSuccess("Thank you for subscribing us!")
      }
    }).catch((error) => {
      setError(error.message)
    })
  }

  useEffect(() => {
    let timeoutId;
    if (error) {
      timeoutId = setTimeout(() => setError(''), 5000); // Clear error after 5 seconds
    }
    return () => clearTimeout(timeoutId);
  }, [error]);

  useEffect(() => {
    let timeoutId;
    if (success) {
      timeoutId = setTimeout(() => setSuccess(''), 5000); // Clear success after 5 seconds
    }
    return () => clearTimeout(timeoutId);
  }, [success]);

  return (
    <form onClick={handleSubmit(email)} className='w-full'>
    <div className='flex justify-center items-center md:p-16 pt-16 pb-0 bg-[#EFEFEF]'>
        <div className='lg:w-2/3 w-full flex'>
      <div className='w-[40%] hidden md:block '>
      <img src="../../footer.png" className='rounded-l-3xl' alt="" />
      </div>
      <div className='md:w-[70%] w-full p-16 md:p-0 flex flex-col justify-center rounded-3xl md:rounded-r-3xl md:pr-4 bg-white'>
      <h1 className='text-4xl font-bold md:ml-6'>Subscribe</h1>
      <p className='text-md text-gray-800 md:ml-6 mt-2'>Subscribe to our newsletter and get upto 40% off on our exclusive service. </p>
      <div className='w-full flex'>
        
      <input
      placeholder="Enter your email"
      type="email"
      className="px-3 py-2 bg-white w-full mt-4 md:ml-6 border-2 rounded-l-lg border-[#3652e1] "
      {...register("email", {
        required: true,
        validate: {
            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
            "Email address must be a valid address",
        }
    })}
      />
      <button type='submit' className=' mt-4 bg-[#3652e1] text-white px-4 py-2 rounded-r-lg'>Subscribe</button>
      </div>
      {error && <p className='text-red-500 text-sm mt-2 ml-2'>{error}</p>}
      {success && <p className='text-[#3652e1] text-lg font-bold mt-2 ml-6'>{success}</p>}
      </div>
      </div>
    </div>
      <div className='flex justify-center items-center bg-gradient-to-r from-[#3652e1] to-[#7e56f3] py-4'>
        <p className='text-white'><span className='font-bold'>© 2024 RiseBlog</span> All rights reserved.</p>
      </div>
    </form>
  )
}

export default Footer

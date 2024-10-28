import React,{useState,useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'


export default function Contact() {
  const formRef=useRef();
  const [form,setForm] = useState({
    name:"",
    email:"",
    message:""
  });
  const [loading,setLoading] = useState(false);
  const handleChange=(e)=>{}
  const handleSubmit=(e)=>{}



  return (
    <div className='mt-12 flex-row gap-10 overflow-hidden w-[40%] bg-inherit p-4 border border-lime-500 rounded-lg'>
      <motion.div className='flex-[0.75] rounded-2xl '>
          <p className='sm:text-xl text-md font-primary text-white mb-2'>Reach out</p>
          <h3 className='sm:text-4xl text-2xl font-primary text-lime-500'>Ping</h3>
      </motion.div>

      <form action="#" ref={formRef} onSubmit={handleSubmit} className='mt-8 flex flex-col gap-8 '>
          <label className='flex flex-col'>
            <span className='text-white font-primary mb-2'>
                Your Name 
            </span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder='What is your name ?' className='bg-[#454B1B] rounded-md p-2 font-primary outlined-none border-none'/>
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-primary mb-2'>
                Your Email 
            </span>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder='What is your Email?' className='bg-[#454B1B] rounded-md p-2 font-primary outlined-none border-none'/>
          </label>


          <label className='flex flex-col'>
            <span className='text-white font-primary mb-2'>
                Your message  
            </span>
            <textarea rows="7" name='message' value={form.message} onChange={handleChange} placeholder='Write your message ' className='bg-[#454B1B] rounded-md p-2 font-primary outlined-none border-none'/>
          </label>

          <button type='submit' className='bg-dark py-3 px-8 outline-none font-primary text-white w-fit rounded-xl'>
              {loading ? 'Sending...' : 'Send'}
          </button>
      </form>
    </div>
  )
}

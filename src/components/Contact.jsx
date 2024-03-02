import React from 'react'
import { FaGithub,FaInstagram ,FaWhatsapp,FaYoutube ,FaTelegram,FaDiscord,FaTiktok    } from "react-icons/fa";
import 'animate.css';

const Contact = () => {
  return (
    <div  className='h-screen flex lg:justify-between text-[#1f1f1f] items-center justify-center flex-wrap'>
        <section className='grid lg:grid-cols-2 grid-cols-1 gap-5 px-5 mt-20 lg:mt-0'>
          {/* Text  */}
          <div className='animate__delay-0.5s  animate__animated animate__fadeInLeft animate__ease-in animate__slow'>
            <h1 className='font-poppins-medium text-[#1f1f1f] lg:text-4xl text-2xl'>Connect With Our Representatives</h1>
            <p className='text-slate-600 font-poppins-regular lg:text-lg text-sm '>"Get in touch with us or drop us a message, we're here to help!"</p>
            <div className='flex gap-3'>
              <a href="https://github.com/anang2727" className='no-underline' title='Github'>
                <FaGithub className='text-[#1f1f1f] text-2xl lg:text-3xl'></FaGithub>
              </a>
              <a href="https://www.instagram.com/anang__k/" className="no-underline" title="Instagram">
                  <FaInstagram className='text-[#1f1f1f] text-2xl lg:text-3xl'></FaInstagram>
              </a>

              <a href="https://www.youtube.com/@anangkurniawan2727/" className="no-underline" title="Youtube">
                <FaYoutube className='text-[#1f1f1f] text-2xl lg:text-3xl'></FaYoutube>
              </a>
              <FaWhatsapp className='text-[#1f1f1f] text-2xl lg:text-3xl'></FaWhatsapp>
              <FaTelegram  className='text-[#1f1f1f] text-2xl lg:text-3xl'></FaTelegram>
              <FaDiscord   className='text-[#1f1f1f] text-2xl lg:text-3xl'></FaDiscord>
              <FaTiktok    className='text-[#1f1f1f] text-2xl lg:text-3xl'></FaTiktok>
            </div>
          </div>
          {/* Text End */}

          {/* Contact Form  */}
          <div className='shadow-[5px_5px_0px_0px_rgba(109,40,217)] bg-[#1F1F1F] p-10 animate__delay-1s  animate__animated animate__fadeInRight animate__ease-in animate__slow'>
            <h1 className='font-poppins-medium text-white lg:text-2xl text-xl'>Connect Today</h1>
            <form >
              <div className='mb-5'>
                <label htmlFor="name" className='block text-slate-300 font-poppins-regular'>Name</label>
                <input type="text" id='name' className='w-full appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Input Your Name'/>
              </div>
              <div className='mb-5'>
                <label htmlFor="email" className='block text-slate-300 font-poppins-regular'>E-mail</label>
                <input id='email' type="email" className='w-full appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Input Your E-mail'/>
              </div>
              <div className='mb-5'>
                <label htmlFor="message" className='block text-slate-300 font-poppins-regular'>Message</label>
                <textarea id='message' className="resize w-full h-20 appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
              </div>
              <button className='btn-block text-[#1F1F1F] btn hover:bg-white font-poppins-bold font-bold shadow-[5px_5px_0px_0px_rgba(109,40,217)] bg-[#CFFC01]'>Send Message</button>
            </form>
          </div>
          {/* Contact Form end */}
        </section>
    </div>
  )
}

export default Contact
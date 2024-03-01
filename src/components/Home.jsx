import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaGithub ,FaArrowRightLong } from "react-icons/fa6";
import { TbBrandYoutube } from "react-icons/tb";
import { Link } from 'react-router-dom';
import 'animate.css';
const Home = () => {
  return (
    <div className='h-screen flex lg:justify-between text-[#1f1f1f] items-center justify-center flex-wrap'>
      <div className='flex flex-col  animate__animated lg:animate__fadeInUp animate__fadeInLeft animate__ease-in animate__slow '>
       <h1 className='font-poppins-medium text-[#1f1f1f] lg:text-4xl text-2xl '>Hello World👋</h1>
        <h1 className='font-poppins-regular font-normal -my-2  lg:text-6xl'>I'M Anang Kurniawan</h1>
       <h1 className='font-[poppins] italic lg:text-2xl text-2xl'>Fullstack Developer</h1>
      <div className='flex gap-3 text-2xl items-center'>
        <Link to="https://github.com/anang2727" target='_blank' className='text-[#1f1f1f]'>
          <FaGithub />
        </Link>
        <Link to="https://www.instagram.com/anang__k/" target='_blank' className='text-[#1f1f1f]'>
          <FaInstagram />
        </Link>
        <Link to="https://www.youtube.com/@anangkurniawan2727/" target='_blank' className='text-[#1f1f1f]'>
          <TbBrandYoutube />
        </Link>
        <a href="#">
        <button className="font-poppins-medium text-[#1F1F1F] btn btn-solid-secondary shadow-[5px_5px_0px_0px_rgba(109,40,217)] bg-[#CFFC01]">See CV <FaArrowRightLong  className='ml-3
        '/></button>
        </a>
        
      </div>
      </div>
      <img src="/profil.jpg" className="  animate__animated animate__fadeInRight animate__ease-in animate__slow lg:w-96 w-60 -mt-44 lg:mt-0 rounded-md scale-0 shadow-[10px_10px_0px_0px_#1f1f1f]"  />
  </div>
  
  );
}

export default Home;  

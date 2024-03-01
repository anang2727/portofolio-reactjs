import React, { useEffect } from 'react';
import CardLogo from '../atoms/CardLogo';
import Sertificat from '../atoms/Sertificat';
import { RiBardLine } from "react-icons/ri";
import { CiCreditCard2 } from "react-icons/ci";
import { IoMdBook } from "react-icons/io";
import { MdEco } from "react-icons/md";
import { FaCircleNotch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      delay: 200, // Penundaan sebelum animasi dimulai dalam milidetik
      easing: 'ease', // Jenis pergerakan animasi
      once: true // Animasi hanya diputar sekali
    });
  }, []);

  return (
    <div className='h-screen flex lg:justify-between text-[#1f1f1f] items-center justify-center flex-wrap mt-20 py-10'>
        <div className=''>
          {/* Home Section  */}
          <div className=' animate__animated lg:animate__fadeInUp animate__fadeInLeft animate__ease-in animate__slow'>
            <h1 className='font-poppins-medium text-[#1F1F1F] '>About<MdEco  className='text-base mx-2 text-slate-500'/></h1>
            <p className='text-slate-600 font-poppins-regular lg:text-2xl'>Hello everyone! I'm <span className='bg-[#1f1f1f] text-white mx-1 px-1'>Anang Kurniawan</span>, an enthusiastic computer science student passionate about coding. Despite being a beginner, I've been exploring coding for three years and always seeking new experiences. Let's embark on a coding adventure together!</p>
          </div>
          {/* Home Section  End*/}

          {/* Education Section  */}
          <section className='my-20 px-5' data-aos='fade-up'>
            <h1 className='font-poppins-medium text-[#1F1F1F]'>Educations<IoMdBook  className='text-base mx-2 text-slate-500'/></h1>
            <div className='flex items-start gap-5 '>
              <div className='h-96 w-1 rounded-full bg-slate-800 opacity-45 -z-10'></div>
              <div className='flex flex-col justify-start'>
              <div className='md:card  px-5 mb-14 shadow-xl'>
                <div>
                    <FaCircleNotch className='-ml-6'/>
                    <p className='font-poppins-regular'>2021 - Now</p>
                    <h1 className='font-poppins-medium'>AL MUSLIM UNIVERSITY</h1>
                </div>
              </div>
              <div className='md:card shadow-xl px-5 ' >
                <div>
                    <FaCircleNotch className='-ml-6'/>
                    <p className='font-poppins-regular'>2018 - 2021</p>
                    <h1 className='font-poppins-medium'>MAN 3 BIREUEN</h1>
                </div>
              </div>
              </div>
            </div>
          </section>
          {/* Education Section End */}

          {/* Skills Sections  */}
          <div className='my-20' data-aos='fade-up' data-aos-anchor-placement="top-center">
                <h1 className='font-poppins-medium text-[#1F1F1F] '>Skills <RiBardLine className='text-base text-slate-500'/></h1>
                <div className='font-poppins-medium flex gap-3'>
                    <CardLogo imageSrc="/logo/html5-original.png" text="HTML"></CardLogo>
                    <CardLogo imageSrc="/logo/css3-original.png" text="CSS"></CardLogo>
                    <CardLogo imageSrc="/logo/javascript-original.png" text="JAVASCRIPT"></CardLogo>
                </div>
                <div className='font-poppins-medium flex gap-3 my-3'>
                  <CardLogo imageSrc="/logo/php-original.png" text="PHP"></CardLogo>
                  <CardLogo imageSrc="/logo/python-original.png" text="PYTHON"></CardLogo>
                  <CardLogo imageSrc="/logo/bootstrap-original.png" text="BOOSTRAP"></CardLogo>
                </div>
                <div className='font-poppins-medium flex gap-3 my-3'>
                  <CardLogo imageSrc="/logo/laravel-plain.png" text="LARAVEL"></CardLogo>
                  <CardLogo imageSrc="/logo/codeigniter-plain.png" text="CODEIGNITER"></CardLogo>
                  <CardLogo imageSrc="/logo/mysql-original.png" text="MYSQL"></CardLogo>
                </div>
                <div className='font-poppins-medium flex gap-3 my-3'>
                  <CardLogo imageSrc="/logo/react-original.png" text="REACTJS"></CardLogo>
                  <CardLogo imageSrc="/logo/tailwindcss-plain.png" text="TAILWINDCSS"></CardLogo>
                  <CardLogo imageSrc="/logo/nodejs-plain.png" text="NODEJS"></CardLogo>
                </div>
                <div className='font-poppins-medium flex gap-3 my-3'>
                  <CardLogo imageSrc="/logo/git-plain.png" text="GIT"></CardLogo>
                  <CardLogo imageSrc="/logo/dart-original.png" text="DART"></CardLogo>
                  <CardLogo imageSrc="/logo/flutter-original.png" text="FLUTTER"></CardLogo>
                </div>
                <div className='font-poppins-medium flex gap-3 my-3'>
                  <CardLogo imageSrc="/logo/figma-original.png" text="FIGMA"></CardLogo>
                  <CardLogo imageSrc="/logo/xd-line.png" text="XD"></CardLogo>
                  <CardLogo imageSrc="/logo/illustrator-line.png" text="ILLUSTRATOR"></CardLogo>
                </div>
          </div>
          {/* Skills Sections  End*/}

          {/* Sertification Sections  */}
          <div className='px-3' data-aos='fade-up' data-aos-anchor-placement="top-center">
              <h1 className='font-poppins-medium text-[#1F1F1F] '>Sertification <CiCreditCard2  className='text-base text-slate-500'/></h1>
              <div>
                <Sertificat nameSertificat={"AWS CLOUD -"} startUp={"Dicoding"}/>
                <Sertificat nameSertificat={"PEMOGRAMAN DASAR -"} startUp={"Dicoding"}/>
                <Sertificat nameSertificat={"GIT & GITHUB -"} startUp={"Dicoding"}/>
                <Sertificat nameSertificat={"Belajar Dasar Structured Query Language (SQL) -"} startUp={"Dicoding"}/>
                <Sertificat nameSertificat={"Memulai Dasar Pemrograman untuk Menjadi Pengembang Software -"} startUp={"Dicoding"}/>
              </div>
          </div>
          {/* Sertification Sections End  */}

          {/* Footer Sections  */}
          <footer className='py-5 mt-10'>
            <div className='card  mx-auto'>
              <h3 className='font-poppins-regular text-sm text-center text-slate-700'>© 2024 Anang Kurniawan <label htmlFor="modal-1" className='text-slate-500 cursor-pointer  italic font-poppins-light no-underline'>Info Web</label></h3>
            </div>
          </footer>
          {/* Footer Sections End */}

          {/* Modal  */}
          <input className="modal-state" id="modal-1" type="checkbox" />
          <div className="modal bg-white">
	          <label className="modal-overlay" htmlFor="modal-1"></label>
	        <div className="modal-content flex flex-col gap-5">
		        <label htmlFor="modal-1" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
		        <h2 className="text-xl">Modal title 1</h2>
		        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum voluptate ratione dicta. Maxime cupiditate, est commodi consectetur earum iure, optio, obcaecati in nulla saepe maiores nobis iste quasi alias!</span>
        	</div>
          </div>
          {/* Modal end */}

        </div>
    </div>
  )
}

export default About
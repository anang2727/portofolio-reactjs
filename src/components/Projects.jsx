import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardProjects from '../atoms/CardProjects';
import 'animate.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      delay: 200, // Penundaan sebelum animasi dimulai dalam milidetik
      easing: 'ease', // Jenis pergerakan animasi
      once: true // Animasi hanya diputar sekali
    });
  }, []);
  return (
    <div className='h-screen flex lg:justify-between text-[#1f1f1f] items-center justify-center flex-wrap lg:mt-10 mt-24'>
      <h1 className='font-poppins-medium text-[#1F1F1F] hidden lg:block'>Projects</h1>
      <section className='lg:-mt-44 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:py-0 pb-44 px-5'>
        <h1 className='font-poppins-medium text-[#1F1F1F] lg:hidden'>Projects</h1>
        <div>
            <CardProjects  bigTitle='Anime Music' image='/MUSICANIME.svg' delayClass='animate__delay-0.5s  animate__animated animate__fadeInUp animate__ease-in animate__slow' />
        </div>
        <div>
            <CardProjects bigTitle='SI YPI AnNabawi' image='/rapor.svg' delayClass='animate__delay-1s  animate__animated animate__fadeInUp animate__ease-in animate__slow' />
        </div>
        <div>
            <CardProjects bigTitle='Food Searching' image='/search.svg' delayClass='animate__delay-2s  animate__animated animate__fadeInUp animate__ease-in animate__slow' />
        </div>
      </section>
    </div>
  );
};

export default Projects;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavIkon from '../NavIkon';
import { FaBarsStaggered } from "react-icons/fa6";
const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 0) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [scrollY]);

  return (
    <nav className={`px-4 font-poppins-medium z-50 fixed top-0 left-0 w-full transition-colors duration-300 ${darkMode ? 'bg-[#1F1F1F] text-white' : 'bg-gray-100 text-[#1f1f1f]'}`}>
      <div className='container mx-auto'>
        <div className="flex lg:justify-between  gap-32 lg:gap-0 justify-around items-center lg:px-44">
          <h1 className='text-2xl text-[#CFFC01] bg-[#1f1f1f] transform translate-y-1 rounded border px-2 py-1'>A</h1>
          <div className='hidden lg:flex lg:justify-center lg:items-center'>
          {NavIkon.map(icon => (  
  <Link key={icon.id} to={icon.path} className='no-underline font-poppins-medium'>
    <i className="text-base text-gray-600 lg:hidden">{icon.icon}</i>
    <span className={`text-xs lg:text-base lg:mx-5 ${darkMode ? 'text-white hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>{icon.title}</span>
  </Link>
))}

          </div>
          <button className='lg:hidden flex items-center justify-center btn btn-solid-secondary shadow-[5px_5px_0px_0px_rgba(109,40,217)] bg-[#CFFC01] btn-sm' onClick={() => setOpen(!open)}> <FaBarsStaggered /> </button>
        </div>
      </div>
      {/* Menambahkan x-show dan transisi */}
      <div className={`fixed bottom-0 left-0 w-full bg-[#1f1f1f] transition-opacity lg:hidden duration-300 transform ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <div className="flex justify-around py-3 px-4 border">
          {NavIkon.map(icon => (
            <Link key={icon.id} to={icon.path} className='no-underline border flex flex-col items-center text-[poppins]'>
              <i className="text-base text-gray-300">{icon.icon}</i>
              <span className="text-xs  text-gray-300 focus:text-white">{icon.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

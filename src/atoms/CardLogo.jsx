import React from 'react';

const CardLogo = ({ children, imageSrc, text }) => {
  return (
    <div className='flex items-center gap-1 py-1 px-3 border rounded bg-[#1f1f1f]'>
      {/* Gambar */}
      <img src={imageSrc} alt="Logo" className="w-6" />

      {/* Teks */}
      <span className="text-white lg:text-lg text-sm ">{text}</span>
      
      {/* Children */}
      {children}
    </div>
  );
}

export default CardLogo;

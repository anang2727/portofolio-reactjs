import React from 'react';

const CardProjects = ({ bigTitle, image, delayClass }) => {
  return (
    <div className={`card card-image-cover ${delayClass}`}>
      <img src={image} alt="" />
      <div className="card-body">
        <h2 className="card-header -mt-5 font-poppins-semibold">{bigTitle}</h2>
        <button className='btn shadow-[5px_5px_0px_0px_rgba(109,40,217)] bg-[#CFFC01] text-gray-700 font-poppins-bold font-bold btn-solid-secondary '>See Details</button>
      </div>
    </div>
  );
};

export default CardProjects;

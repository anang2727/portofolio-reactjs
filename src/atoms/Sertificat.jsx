import React from 'react'
import { CiCircleCheck } from "react-icons/ci";

const Sertificat = ({nameSertificat,startUp}) => {
  return (
    <div>
        <div className='flex items-center gap-2'>
            <CiCircleCheck />
            <p className='text-slate-800 font-poppins-regular'>{nameSertificat}<a target='_blank' href='#' className='underline text-slate-500 italic'>{startUp}</a></p>
        </div>
    </div>
  )
}

export default Sertificat
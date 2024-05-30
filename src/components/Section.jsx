import React from 'react';
import Scroll from '../../src/assets/scroll.svg';

const Section = ({ title, description, image, leftButton, rightButton, scrollIndicator }) => {
  return (
    <section className='w-full h-screen relative flex flex-col justify-between items-center snap-start'>
        <div className='pt-[calc(16vh+20px)] flex flex-col items-center w-fit'>
            <h1 className='w-fit text-3xl sm:text-4xl font-medium py-1 px-0 text-[rgba(57,60,65,1)] text-center'>{title}</h1>
            {description ? <p className='w-fit text-sm text-[rgba(92, 94, 98, 1)]'>{description}</p> : (<p className='w-fit text-sm text-[rgba(92, 94, 98, 1)]'>Order Online for Touchless Delivery</p>)}
        </div>

        <div className='btn-group flex flex-col gap-5 sm:flex-row mb-[14vh]'>
            {leftButton && <button className='bg-[rgba(23,26,32,0.8)] text-white uppercase text-xs font-medium w-64 h-10 p-1 px-10 my-0 mx-2 rounded-[100px] outline-none cursor-pointer'>{leftButton}</button>}
            {rightButton && <button className='bg-[rgba(255,255,255,0.5)] text-black uppercase text-xs font-medium w-64 h-10 p-1 px-10 my-0 mx-2 rounded-[100px] outline-none cursor-pointer'>{rightButton}</button>}
        </div>
        <img src={image} alt="" className='w-full h-full object-cover top-0 left-0 absolute -z-[1]' />    
        {scrollIndicator && (
            <img src={Scroll} alt="Scroll Down" className="absolute w-6 bottom-[5vh] animate-animation" />
        )}
    </section>
  )
}
export default Section;
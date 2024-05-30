import React from 'react';
import Logo from '../assets/logo.svg'
import Menu from '../assets/menu.svg'

const Navbar = () => {
  return (
    <nav className='w-screen h-[52px] py-3 sm:py-0 px-10 sm:px-20 flex gap-3 justify-between flex-wrap lg:grid grid-cols-2 lg:grid-cols-[1fr_640px_1fr] items-center fixed top-0 left-0 z-[100]'>
       <img src={Logo} alt='logo' className='w-[100px] cursor-pointer' />
       <ul className='hidden justify-self-center mx-auto lg:flex'>
        <li className='uppercase text-sm my-0 mx-3 cursor-pointer'>Model 5</li>
        <li className='uppercase text-sm my-0 mx-3 cursor-pointer'>Model 3</li>
        <li className='uppercase text-sm my-0 mx-3 cursor-pointer'>Model X</li>
        <li className='uppercase text-sm my-0 mx-3 cursor-pointer'>Model Y</li>
        <li className='uppercase text-sm my-0 mx-3 cursor-pointer'>Solar Roof</li>
        <li className='uppercase text-sm my-0 mx-3 cursor-pointer'>Solar Panels</li>
       </ul>
       <div className="flex justify-stretch sm:justify-self-end">
        <ul className='flex gap-4'>
          <li>Shop</li>
          <li>Tesla Account</li>
        </ul>
        <img src={Menu} alt="Menu" className="w-[18px] ml-[16px] cursor-pointer" />
      </div>
    </nav>
  )
}
export default Navbar;
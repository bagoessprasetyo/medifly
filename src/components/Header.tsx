import { logo } from '@/assets/img'
import React from 'react'
import { Button } from './ui/button'
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  return (
    <nav className='flex justify-between items-center py-4 border-b-1 border-[rgb(237, 237, 237)] sticky top-0 bg-white'>
      <a href="">
        <img src={logo} alt="logo-medifly" className='w-[90px] h-[24px] object-cover'/>
      </a>
      <Button variant="custom">
        Partner with us
        <FaArrowRightLong />
      </Button>
    </nav>
  )
}

export default Header
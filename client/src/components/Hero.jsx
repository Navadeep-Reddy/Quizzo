import React from 'react'
import { BiSolidDownArrow } from "react-icons/bi";

const Hero = () => {
  return (
    <div className='h-[100vh] bg-gradient-to-b from-PopYellow to-KindaWhite w-full flex items-center justify-center'>
      <div className='flex flex-col items-center'>
        <h1 className='text-[70px] font-extrabold text-GreenBrown -mb-2'>Welcome to Quizzo!</h1>
        <h2 className='text-[30px] font-semibold'>Empowering Learning, One Quiz at a Time</h2>
        <p className='w-[500px] my-10 text-center text-[18px]'>Unlock a world of interactive learning with Quizzo, your go-to platform for creating and taking quizzes! Whether you're a teacher aiming to inspire or a student eager to excel, Quizzo is designed to make education engaging and effective.</p>
        <button className='h-10 border-2 text-KindaWhite border-GreenBrown bg-gradient-to-b from-GreenBrown to-FakeBlack px-5 rounded-md flex items-center justify-center space-x-2 hover:scale-105 duration-300 font-semibold '>Explore</button>
      </div>
    </div>
  )
}

export default Hero

import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";

function Home() {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row sm:pt-[140px]'> 
            <div className='flex flex-col justify-center  sm:items-center h-full '>
                <h2 className='text-4xl sm:text-7xl font-bold text-white sm:text-center'>I'm a Frontend Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have 6 months of experience building and desgining software. Currently, I love to work on web Application using technologies like React, Tailwind, and JavaScript.
                </p>
                <div>
                    <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 cursor-pointer  hover:shadow-[0px_0px_10px] hover:shadow-white hover:duration-300 gap-2'>
                        Portfolio
                        <span className=''>
                           <FaLocationArrow size={20}></FaLocationArrow>
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img className='rounded-2xl mx-auto w-2/3 md:w-full' src='./Images/heroImage.png' alt="photo"/>
            </div>
            
        </div>
    </div>
  )
}

export default Home
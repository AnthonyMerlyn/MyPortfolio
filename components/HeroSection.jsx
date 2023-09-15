"use client"
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
    const HeroImage = "./public/images/FrontImage.png"

  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500'>Hello, I'm{" "}</span>
                    <br/>
                    <TypeAnimation 
                    sequence={[
                        "Raphael",
                        1000,
                        "Web Developer",
                        1000,
                        "UI/UX Designer",
                        1000,
                        "Mobile Developer",
                        1000,
                    ]}
                    wrapper="span"
                    speed={10}
                    repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7E] text-base sm:text-lg lg:text-xl mb-6'>
                    This is going to be a nice example text. Its crazy how fast I am learning to create something like this out of scratch
                </p>
                <div>
                    <button className='px-6 py-3 rounded-full sm:w-fit mr-4 w-full bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-200 text-white'>
                        Hire Me
                    </button>
                    <button className='px-6 py-3 rounded-full sm:w-fit w-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>
                        Download CV
                    </button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
               <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative'>
               <Image 
                    src="/images/FrontImage.png"
                    alt="Hero image"
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    width={300}
                    height={300}
                />
                </div> 
            </div>
        </div>
    </section>
  )
}

export default HeroSection
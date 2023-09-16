"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './navLink'
import Bars3Icon from "public/3bars.svg";
import XmarkIcon from "public/xbutton.svg"
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';


const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
]


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link 
          href={"/"} 
          className='text-2xl md:text-5xl text-white font-semibold'
        >
          LOGO
        </Link>
        <div className='mobile-menu block md:hidden'>
          {
            !navbarOpen 
            ? 
              <button onClick={() => setNavbarOpen(true)} className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hovber:border-white'><Image className='h-5 w-5' src={Bars3Icon} alt='3bars'/></button> 
              : 
              <button onClick={() => setNavbarOpen(false)} className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hovber:border-white'><Image className='h-5 w-5' src={XmarkIcon} alt='3bars'/></button> 
          }
        </div>
        <div className='menu hidden md:block md:w-auto' id="navbar">
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-10'>
            {
              navLinks.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title}/>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar
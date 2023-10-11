import React from "react";
import Image from 'next/image';
import Link from 'next/link'

const Footer = () => {
  const LogoImage = "/images/Logo.png"
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold flex items-center'>
            <Image
              src={LogoImage}
              alt='Logo'
              width={50}
              height={50}
            />
            <span className="ml-1">Raphael Ramm</span>
          </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

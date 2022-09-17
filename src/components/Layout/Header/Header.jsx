import { React, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import logo from '../../../../public/img/LogoOusean.png';
import Navlinks from './Navlinks';
import Button from './Button';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white h-[100px] shadow-lg fixed top-0 z-10 left-0 right-0 ">
      {/* Ionic icon library */}
      <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
      <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
      <div className="flex items-center font-medium md:justify-between md:px-12 justify-center ">
        <div className="flex items-center z-50 md:w-auto w-full justify-between pr-6">
          <div className="flex items-center">
            <Image
              src={logo}
              width={103}
              height={88}
              alt="Logo Ousean"
              className="md:cursor-pointer"
            />
            <h4 className=" lg:block font-Montserrat font-bold text-xl">
              OUSEAN GROUP
            </h4>
          </div>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? 'close-outline' : 'menu-outline'}`} />
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-9 font-Poppins font-medium text-xl ">
          <Navlinks />
          <Button />
        </ul>
        <ul
          className={`md:hidden bg-white fixed z-10 w-full h-full bottom-0 py-24 pl-4 duration-500 ${
            open ? 'left-0' : 'left-[-100%]'
          }`}
        >
          <li className="py-7 px-3">
            <Link href="/" className="font-Poppins inline-block">
              <a>Home</a>
            </Link>
          </li>
          <Navlinks setOpen={setOpen} />

          <div className="py-7">
            <Button setOpen={setOpen} />
          </div>
        </ul>
      </div>
    </header>
  );
}

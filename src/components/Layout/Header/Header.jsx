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
    <header className="bg-white h-[100px] shadow-lg fixed top-0 left-0 right-0 z-40">
      {/* Ionic icon library */}
      <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
      <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
      <div className="flex items-center justify-center font-medium md:justify-between md:px-12 ">
        <div className="z-50 flex w-full items-center justify-between pr-6 md:w-auto">
          <div className="flex items-center">
            <Image
              src={logo}
              width={103}
              height={88}
              alt="Logo Ousean"
              className="md:cursor-pointer"
            />
            <h4 className=" font-Montserrat text-xl font-bold lg:block">
              OUSEAN GROUP
            </h4>
          </div>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? 'close-outline' : 'menu-outline'}`} />
          </div>
        </div>
        <ul className="hidden items-center gap-12 font-Poppins text-xl font-medium md:flex ">
          <div className="md:flex">
            <Navlinks />
          </div>
          <Button />
        </ul>
        <ul
          className={`fixed bottom-0 z-10 h-full w-full bg-white py-24 pl-4 duration-500 md:hidden ${
            open ? 'left-0' : 'left-[-100%]'
          }`}
        >
          <li className="py-7 px-3">
            <Link href="/">
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

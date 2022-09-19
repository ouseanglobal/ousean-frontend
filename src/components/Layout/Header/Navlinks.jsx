import Link from 'next/link';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

export default function Navlinks({ setOpen }) {
  const links = [
    {
      name: 'About Me',
      submenu: true,
      sublinks: [
        {
          Head: 'About Me',
          sublink: [
            { name: 'Visi & Misi Perusahaan', link: '/' },
            { name: 'Komunitas', link: '/' },
            { name: 'Struktur Perusahaan', link: '/' },
          ],
        },
      ],
    },
    {
      name: 'Product',
      submenu: true,
      sublinks: [
        {
          Head: 'Product',
          sublink: [
            { name: 'Produk Kami', link: '/' },
            { name: 'Our Product', link: '/' },
          ],
        },
      ],
    },
  ];
  const [heading, setHeading] = useState('');
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <div className="flex gap-1 justify-between">
              <button
                type="submit"
                className="py-7"
                onClick={() => (heading !== link.name ? setHeading(link.name) : setHeading(''))}
              >
                {link.name}
              </button>
              <Image
                src="/img/Vector.svg"
                width={18}
                height={13}
                onClick={() => (heading !== link.name ? setHeading(link.name) : setHeading(''))}
                className={`${
                  heading === link.name ? 'rotate-180' : ''
                } duration-150 `}
              />
            </div>
            {link.submenu && (
              <div>
                <div
                  className={`absolute top-[84px] hidden  ${
                    heading === link.name ? 'md:block' : ''
                  } duration-500`}
                >
                  <div
                    className={`py-3 absolute top-[-30px] ${
                      link.name === 'Product' ? 'left-[50px]' : 'left-16'
                    }  scale-90`}
                  >
                    <Image
                      src="/img/arrow.svg"
                      width={41}
                      height={29}
                      className="absolute"
                    />
                  </div>
                  <div className="bg-[#d9d9d9cc] w-[300px] pl-3 py-3 rounded-xl relative right-28">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="font-semibold font-Poppins text-2xl">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm my-4">
                            <Link href={slink.link}>
                              <a className="text-[#ff0000] font-Montserrat font-normal text-xl hover:opacity-80">
                                {' '}
                                {slink.name}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          <div
            className={`
              ${heading === link.name ? 'md:hidden' : 'hidden'}
            `}
          >
            {/* Sublink */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1 className="py-4 pl-7 font-semibold md:pr-0 pr-5">
                    {slinks.Head}
                  </h1>
                  <div>
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link href={slink.link}>
                          <a
                            onClick={() => {
                              setOpen(false);
                            }}
                          >
                            {slink.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

Navlinks.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

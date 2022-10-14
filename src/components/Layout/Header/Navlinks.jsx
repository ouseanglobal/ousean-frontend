/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import Link from 'next/link';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Navlinks({ setOpen }) {
  const links = [
    {
      name: 'Home',
      submenu: false,
    },
    {
      name: 'Page',
      submenu: true,
      sublinks: [
        {
          Head: 'Page',
          sublink: [
            { name: 'About Me', link: '/visi' },
            { name: 'Layanan Kami', link: '/' },
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
            { name: '1.svg', link: '/' },
            { name: '2.png', link: '/' },
            { name: '3.svg', link: '/' },
            { name: '4.svg', link: '/' },
            { name: '5.svg', link: '/' },
            { name: '6.svg', link: '/' },
          ],
        },
      ],
    },
    {
      name: 'Portfolio',
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
  const router = useRouter();

  const onClickFunc = (link) => {
    if (heading !== link.name) {
      setHeading(link.name);
    } else {
      setHeading('');
    }
  };

  return (
    <>
      {links.map((link) => (
        <div>
          <div className="group px-3 text-left md:cursor-pointer gap-0">
            <div className="flex justify-between gap-1 group">
              <button
                type="submit"
                className="py-7"
                onClick={() =>
                  link.name === 'Home' ? router.push('/') : onClickFunc(link)
                }
              >
                {link.name}
              </button>
              <Image
                src="/img/arrow-nav.svg"
                width={12}
                height={12}
                onClick={() =>
                  heading !== link.name ? setHeading(link.name) : setHeading('')
                }
                className={` group-hover:rotate-180${
                  heading === link.name ? 'rotate-180' : ''
                } duration-150 ${link.name === 'Home' ? 'opacity-0' : ''}`}
              />
            </div>
            {link.submenu && (
              <div className="group">
                <div
                  className={`absolute top-[84px] hidden md:group-hover:block ${
                    heading === link.name ? 'md:block' : ''
                  } duration-500`}
                >
                  {/* <div
                    className={`absolute top-[-30px] py-3 ${
                      link.name === 'Product' ? 'left-[50px]' : 'left-16'
                    }  scale-90 ${link.name === 'Home' ? 'hidden' : ''}`}
                  >
                    <Image
                      src="/img/arrow.svg"
                      width={41}
                      height={29}
                      className="absolute"
                    />
                  </div> */}
                  <div className="relative right-28 w-[300px] rounded-xl bg-white/30 backdrop-blur-md py-3 pl-3">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="font-Poppins text-2xl font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.Head !== 'Product' && mysublinks.sublink.map((slink) => (
                          <li className="my-4 text-sm">
                            <Link href={slink.link}>
                              <a className="font-Montserrat text-xl font-normal text-gray-900 hover:opacity-80">
                                {slink.name}
                              </a>
                            </Link>
                          </li>
                        ))}
                        <ul className=" flex justify-start flex-wrap">
                          {mysublinks.Head === 'Product' && mysublinks.sublink.map((slink) => (
                            <li className="font-Poppins text-2xl font-semibold">
                              <Image
                                src={`/img/Header/${slink.name}`}
                                width={123}
                                height={49}
                                onClick={() =>
                                  heading !== link.name ? setHeading(link.name) : setHeading('')
                                }
                              />
                            </li>
                          ))}
                        </ul>
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
            {link.sublinks && link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1 className="py-4 pl-7 pr-5 font-semibold md:pr-0">
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

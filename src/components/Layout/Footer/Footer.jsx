import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#D9D9D9] bg-opacity-[20%] pt-24">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full px-4 sm:w-1/2 md:w-1/4">
            <h1 className="py-5 text-lg font-bold md:text-xl">
              LAYANAN PRODUK
            </h1>
            <ul>
              <li>
                <Link href="">
                  <a className="block py-2 text-base font-semibold hover:bg-[#0060D1] hover:px-2 hover:font-bold hover:text-white rounded-lg md:text-lg ">
                    {' '}
                    One Step Abroad
                  </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block py-2 text-base font-semibold hover:bg-[#0060D1] hover:px-2 hover:font-bold hover:text-white rounded-lg md:text-lg">
                    Here Yugo
                  </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block py-2 text-base font-semibold hover:bg-[#0060D1] hover:px-2 hover:font-bold hover:text-white rounded-lg md:text-lg">
                    Arusyd Indonesia
                  </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block py-2 text-base font-semibold hover:bg-[#0060D1] hover:px-2 hover:font-bold hover:text-white rounded-lg md:text-lg">
                    Setudio
                  </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block py-2 text-base font-semibold hover:bg-[#0060D1] hover:px-2 hover:font-bold hover:text-white rounded-lg md:text-lg">
                    Shedeserves
                  </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block py-2 text-base font-semibold hover:bg-[#0060D1] hover:px-2 hover:font-bold hover:text-white rounded-lg md:text-lg">
                    Our Product
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-12 w-full px-4 sm:w-1/2 md:w-1/4">
            <h1 className="py-5 text-lg font-bold md:text-xl ">TENTANG KAMI</h1>
            <ul>
              <li>
                <Link href="/visi">
                  <a className="block py-2 text-base font-semibold hover:bg-[#0060D1] hover:px-2 hover:font-bold hover:text-white rounded-lg md:text-lg">
                    {' '}
                    Visi & Misi Perusahaan
                  </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block py-2 text-base font-semibold hover:bg-[#0060D1] hover:px-2 hover:font-bold hover:text-white rounded-lg md:text-lg">
                    Komunitas
                  </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block py-2 text-base font-semibold hover:bg-[#0060D1] hover:px-2 hover:font-bold hover:text-white rounded-lg md:text-lg">
                    Struktur Perusahaan
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/career">
                  <a className="block py-2 text-base font-semibold hover:bg-[#0060D1] hover:px-2 hover:font-bold hover:text-white rounded-lg md:text-lg">
                    {' '}
                    Karir
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-12 w-full px-4 sm:w-1/2 md:w-1/4">
            <h1 className="py-5 text-lg font-bold md:text-xl">BANTUAN</h1>
            <ul>
              <li>
                <Link href="">
                  <a className="block py-2 text-base font-semibold hover:bg-[#0060D1] hover:px-2 hover:font-bold hover:text-white rounded-lg md:text-lg">
                    {' '}
                    FAQ
                  </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block py-2 text-base font-semibold hover:bg-[#0060D1] hover:px-2 hover:font-bold hover:text-white rounded-lg md:text-lg">
                    Syarat & Ketentuan
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-12 w-full px-4 sm:w-1/2 md:w-1/4">
            <h1 className="py-5 text-lg font-bold md:text-xl">SOCIAL MEDIA</h1>
            <ul>
              <li>
                <Link href="">
                  <a className="block py-2 text-base font-semibold hover:bg-[#0060D1] hover:px-2 hover:font-bold hover:text-white rounded-lg md:text-lg">
                    LinkedIn
                  </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block py-2 text-base font-semibold hover:bg-[#0060D1] hover:px-2 hover:font-bold hover:text-white rounded-lg md:text-lg">
                    Instagram
                  </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block py-2 text-base font-semibold hover:bg-[#0060D1] hover:px-2 hover:font-bold hover:text-white rounded-lg md:text-lg">
                    Youtube
                  </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block py-2 text-base font-semibold hover:bg-[#0060D1] hover:px-2 hover:font-bold hover:text-white rounded-lg md:text-lg">
                    Email
                  </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block py-2 text-base font-semibold hover:bg-[#0060D1] hover:px-2 hover:font-bold hover:text-white rounded-lg md:text-lg ">
                    Blog
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-slate-200 bg-white py-5">
        <h6 className="text-center text-sm font-semibold md:text-base">
          OUSEAN GROUP | PT. OUSEAN GLOBAL DIGITAL
        </h6>
      </div>
    </footer>
  );
}

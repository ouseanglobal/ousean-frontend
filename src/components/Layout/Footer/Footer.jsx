import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-100 pt-24 w-full">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-12 md:w-1/4 sm:w-1/2">
            <h1 className="font-bold text-2xl py-5">LAYANAN PRODUK</h1>
            <ul>
              <li>
                <Link href="">
                  <a className="block hover:bg-slate-500 hover:px-2 hover:text-slate-100 font-semibold hover:font-bold py-2"> One Step Abroad</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block hover:bg-slate-500 hover:px-2 hover:text-slate-100 font-semibold hover:font-bold py-2">Here Yugo</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block hover:bg-slate-500 hover:px-2 hover:text-slate-100 font-semibold hover:font-bold py-2">Arusyd Indonesia</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block hover:bg-slate-500 hover:px-2 hover:text-slate-100 font-semibold hover:font-bold py-2">Setudio</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block hover:bg-slate-500 hover:px-2 hover:text-slate-100 font-semibold hover:font-bold py-2">Shedeserves</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block hover:bg-slate-500 hover:px-2 hover:text-slate-100 font-semibold hover:font-bold py-2">Our Product</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 mb-12 md:w-1/4 sm:w-1/2">
            <h1 className="font-bold text-2xl py-5">TENTANG KAMI</h1>
            <ul>
              <li>
                <Link href="">
                  <a className="block hover:bg-slate-500 hover:px-2 hover:text-slate-100 font-semibold hover:font-bold py-2"> Visi & Misi Perusahaan</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block hover:bg-slate-500 hover:px-2 hover:text-slate-100 font-semibold hover:font-bold py-2">Komunitas</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block hover:bg-slate-500 hover:px-2 hover:text-slate-100 font-semibold hover:font-bold py-2">Struktur Perusahaan</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 mb-12 md:w-1/4 sm:w-1/2">
            <h1 className="font-bold text-2xl py-5">BANTUAN</h1>
            <ul>
              <li>
                <Link href="">
                  <a className="block hover:bg-slate-500 hover:px-2 hover:text-slate-100 font-semibold hover:font-bold py-2"> FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block hover:bg-slate-500 hover:px-2 hover:text-slate-100 font-semibold hover:font-bold py-2">Syarat & Ketentuan</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 mb-12 md:w-1/4 sm:w-1/2">
            <h1 className="font-bold text-2xl py-5">SOCIAL MEDIA</h1>
            <ul>
              <li>
                <Link href="">
                  <a className="block hover:bg-slate-500 hover:px-2 hover:text-slate-100 font-semibold hover:font-bold py-2"> LinkedIn</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block hover:bg-slate-500 hover:px-2 hover:text-slate-100 font-semibold hover:font-bold py-2">Instagram</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block hover:bg-slate-500 hover:px-2 hover:text-slate-100 font-semibold hover:font-bold py-2">Youtube</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block hover:bg-slate-500 hover:px-2 hover:text-slate-100 font-semibold hover:font-bold py-2">Email</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a className="block hover:bg-slate-500 hover:px-2 hover:text-slate-100 font-semibold hover:font-bold py-2 ">Blog</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-5 w-full bg-white border-t border-slate-200">
        <h3 className="font-bold text-center">OUSEAN GROUP | PT. OUSEAN GLOBAL DIGITAL</h3>
      </div>
    </footer>
  );
}

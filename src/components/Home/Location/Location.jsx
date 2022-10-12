import React from 'react';
import Image from 'next/image';

export default function Location() {
  return (
    <section id="portfolio" className="pt-16 pb-16 flex justify-center">
      <div className="container">
        <div className="w-full px-4 flex text-center just">
          <div className="mb-5 flex w-full flex-wrap justify-center text-center">
            <h2 className="mb-5 text-2xl font-semibold text-black md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              Lokasi Kantor Kami
            </h2>
            <p className="text-base sm:px-10 md:px-16 md:text-lg lg:px-24 lg:text-2xl xl:px-32 xl:text-3xl 2xl:px-40 2xl:text-4xl">
              Terletak dengan strategis di pusat bisnis wilayah Jabodetabek Indonesia agar kami lebih dekat dengan Anda
            </p>
          </div>
        </div>

        <div className="w-full px-4 mt-[82px] flex flex-wrap justify-center gap-10">
          <div className="flex items-center flex-wrap">
            <Image
              src="/img/location/locationPic.svg"
              alt="picture"
              width={599}
              height={364}
            />
            <div className="text-center bg-[#D9D9D9] px-[90px] h-[294px] rounded-r-xl">
              <h1 className="w-full lg:text-3xl text-2xl font-semibold font-Poppins mt-12">Location</h1>
              <h2 className="w-full mt-6 font-semibold lg:text-2xl text-xl font-Poppins">PT OUSEAN GLOBAL DIGITAL</h2>
              <p className="w-full mt-6 font-light lg:text-2xl text-lg font-Poppins">Tangerang Selatan, Banten Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

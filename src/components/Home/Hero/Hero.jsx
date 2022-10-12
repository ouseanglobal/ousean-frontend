import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="mt-24 mb-24  flex h-[800px] justify-center bg-[#E3E6FF] lg:mb-0 lg:h-[590px]"
    >
      <div className="container">
        <div className="flex flex-wrap ">
          <div className="flex w-full flex-wrap justify-center px-5 lg:relative lg:mt-[100px] lg:block lg:w-1/2 lg:pl-[57px]">
            <h1 className="text-center font-Poppins text-4xl font-semibold leading-[72px] text-[#414141] lg:text-start lg:text-[48px]">
              WUJUDKAN IMPIANMU DENGAN
              <span className=" text-[#199DE7]"> OUSEAN</span>
            </h1>
            <div className="pt-[10px] text-justify">
              <div className="flex justify-center lg:block">
                <h4 className="font-Poppinss w-[350px] text-base font-light text-[#414141] lg:w-[375px]">
                  Mari Bergabung Dengan Ousean Group untuk meraih skill dan
                  pengalamanmu untuk yang belum memiliki pengalaman dan ingin
                  belajar untuk siap memulai di dunia kerja
                </h4>
              </div>
              <div className="ml-[40px] flex lg:justify-end justify-center pt-[20px] lg:block">
                <button
                  type="submit"
                  className=" font-Inter mt-4 w-[200px] rounded-[5px] bg-[#0060D1] py-[20px] text-center text-xl font-semibold text-white hover:opacity-80 md:text-2xl"
                >
                  Get Started
                </button>
              </div>
              {/* <div className="flex mt-12 w-[350px]">
                <div className="w-1/2">
                  <Image src="/img/hero/foto-hero.svg" width={139} height={77} />
                </div>
                <div className="w-1/2 mt-3">
                  <div className="flex justify-center flex-wrap gap-4">
                    <Image
                      src="/img/hero/star-full.svg"
                      width={112}
                      height={26}
                    />
                    <h4 className="text-[10px] font-semibold">
                      (5/5 dari 2100 Orang Sudah Mencoba)
                    </h4>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="mt-20 w-full self-end lg:w-1/2">
            <div className="relative lg:right-0 lg:mt-0">
              <Image
                width={703}
                height={532}
                src="/img/hero/hero-img.svg"
                alt="hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

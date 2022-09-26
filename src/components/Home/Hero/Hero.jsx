import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="lg:h-[590px] h-[800px]  bg-[#E3E6FF] flex justify-center mt-24 lg:mb-0 mb-24"
    >
      <div className="container">
        <div className="flex flex-wrap ">
          <div className="w-full lg:pl-[57px] lg:mt-[100px] lg:w-1/2 flex flex-wrap justify-center lg:block lg:relative px-5">
            <h1 className="font-Poppins font-semibold lg:text-[48px] text-4xl text-[#414141] text-center lg:text-start leading-[72px]">
              WUJUDKAN IMPIANMU DENGAN
              <span className=" text-[#199DE7]"> OUSEAN</span>
            </h1>
            <div className="text-justify pt-[50px]">
              <div className="flex justify-center lg:block">
                <h4 className="font-Poppinss font-light text-sm text-[#414141] w-[225px] lg:w-[375px]">
                  Mari Bergabung Dengan Ousean Group untuk meraih skill dan
                  pengalamanmu untuk yang belum memiliki pengalaman dan ingin
                  belajar untuk siap memulai di dunia kerja
                </h4>
              </div>
              <div className="flex justify-center lg:block">
                <button
                  type="submit"
                  className="bg-[#4ba73c] rounded-2xl md:w-[327px] w-[200px] h-[42px] text-white text-center font-semibold md:text-2xl text-xl mt-4 hover:opacity-80"
                >
                  Temukan Karirmu
                </button>
              </div>
              <div className="flex mt-12 w-[350px]">
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
              </div>
            </div>
          </div>

          <div className="w-full self-end lg:w-1/2 mt-20">
            <div className="relative lg:mt-0 lg:right-0">
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

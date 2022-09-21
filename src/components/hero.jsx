import React from 'react';
import Image from 'next/image';

export default function Hero() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <section
      id="home"
      className="lg:pt-[70px] pb-[80px] pt-[170px] bg-[#E3E6FF]"
    >
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-0">
          <div className="w-full lg:pl-[80px] lg:w-1/2 flex flex-wrap justify-center lg:block">
            <h1 className="font-Poppins font-semibold lg:text-[48px] text-4xl text-[#414141] text-center lg:text-start">
              {' '}
              WUJUDKAN IMPIANMU DENGAN
              <span className=" text-[#199DE7]">OUSEAN</span>
            </h1>
            <div className="w-[320px] text-justify pt-[50px]">
              <h4 className="font-Poppinss font-light text-sm text-[#414141]">
                Mari Bergabung Dengan Ousean Group untuk meraih skill dan
                pengalamanmu untuk yang belum memiliki pengalaman dan ingin
                belajar untuk siap memulai di dunia kerja
              </h4>
              <button
                type="submit"
                className="bg-[#4ba73c] rounded-2xl w-[327px] h-[42px] text-white text-center font-semibold text-2xl mt-4 hover:opacity-80"
              >
                Temukan Karirmu
              </button>
              <div className="mt-10 relative flex flex-wrap">
                <div className="absolute w-full">
                  <Image src="/img/hero/foto-hero.svg" width={139} height={77} />
                </div>
                <div className="absolute left-52 flex top-2 w-full">
                  {arr.map((ar) => (ar === 3
                    ? (
                      <div>
                        <Image
                          src="/img/hero/mid-star.svg"
                          width={20}
                          height={25.49}
                        />
                      </div>
                    )
                    : (
                      <div>
                        <Image src="/img/hero/star.svg" width={20} height={20} />
                      </div>
                    )
                  ))}
                  <h4 className="absolute -left-14 top-10 font-Poppins font-semibold text-[12px] w-[259px]">
                    (5/5 dari 2100 Orang Sudah Mencoba)
                  </h4>
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
                className="max-w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

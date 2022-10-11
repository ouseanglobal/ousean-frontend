import React from 'react';
import Image from 'next/image';

export default function Event() {
  const data = [
    { icon: 'img/Event/1.svg' },
    { icon: 'img/Event/2.svg' },
    { icon: 'img/Event/3.svg' },
  ];
  return (
    <section
      id="portfolio"
      className="mx-auto mb-40 flex justify-center pt-28 pb-16"
    >
      <div className="container mx-auto px-2">
        <div className="mb-5 flex w-full flex-wrap justify-center text-center">
          <h2 className="mb-5 text-2xl font-semibold text-[#414141] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Event dan Penawaran Menarik Untukmu
          </h2>
          <p className="text-base sm:px-10 md:px-16 md:text-lg lg:px-24 lg:text-2xl xl:px-32 xl:text-3xl 2xl:px-40 2xl:text-4xl">
            Ousean Group hadir menemani Anda untuk mengikuti event Kami untuk
            menambah wawasan baru
          </p>
        </div>

        <div className="flex w-full flex-wrap justify-center px-4">
          {data.map((i) => (
            <div className="flex w-full justify-center lg:w-1/3">
              <Image
                src={`/${i.icon}`}
                alt="picture"
                width={371}
                height={381}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className=" relative rounded-lg bg-[#1400FF] hover:opacity-80">
            <button
              type="submit"
              className="flex items-center p-2 px-14 text-lg font-semibold text-white"
            >
              Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

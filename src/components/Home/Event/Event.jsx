import React from 'react';
import Image from 'next/image';

export default function Event() {
  const data = [
    { icon: 'img/event/event-1.svg' },
    { icon: 'img/event/event-2.svg' },
    { icon: 'img/event/event-3.svg' },
  ];
  return (
    <section id="portfolio" className="mb-40 flex justify-center pt-28 pb-16">
      <div className="container">
        <div className="flex w-full justify-center text-center">
          <h2 className="mb-9 w-[722px] font-Poppins text-2xl font-bold sm:text-4xl lg:text-3xl">
            Event dan Penawaran Menarik Untukmu
          </h2>
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

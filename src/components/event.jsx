import React from 'react';
import Image from 'next/image';

export default function Event() {
  const data = [
    { icon: 'img/event/event-1.svg' },
    { icon: 'img/event/event-2.svg' },
    { icon: 'img/event/event-3.svg' },
  ];
  return (
    <section id="portfolio" className="pt-28 pb-16">
      <div className="container">
        <div className="w-full flex justify-center text-center">
          <h2 className="font-bold lg:text-3xl text-2xl mb-9 sm:text-4xl font-Poppins w-[722px]">
            Event dan Penawaran Menarik Untukmu
          </h2>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {data.map((i) => (
            <div className="lg:w-1/3 w-full flex justify-center">
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
          <div className=" bg-[#4ba73c] rounded-2xl hover:opacity-80 relative">
            <button
              type="submit"
              className="flex items-center gap-1 px-9 py-2 text-white text-2xl"
            >
              Selengkapnya
              <span className="text-black absolute right-2 top-3">
                {' '}
                <ion-icon name="arrow-forward" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

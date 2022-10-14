import React from 'react';
import Image from 'next/image';

export default function Product() {
  const data = [
    { icon: 'img/Header/1.svg', title: 'Mentor Yang Sudah Profesional' },
    { icon: 'img/Header/2.svg', title: 'Mengasah Hardskill & Sofkill' },
    { icon: 'img/Header/3.svg', title: 'Materi Pelatihan Lebih Fleksibel' },
    { icon: 'img/Header/4.svg', title: 'Cocok Untuk Kalangan Pemuda' },
    { icon: 'img/Header/5.svg', title: 'Cocok Untuk Kalangan Pemuda' },
    { icon: 'img/Header/6.svg', title: 'Cocok Untuk Kalangan Pemuda' },
  ];
  return (
    <section id="portfolio" className="pt-16 pb-16 flex justify-center">
      <div className="container">
        <div className="w-full px-4 flex justify-center">
          <div className="max-w-xl text-center mb-16">
            <h2 className="font-bold text-3xl mb-4 sm:text-4xl font-Poppins ">
              Produk Dari Ousean
            </h2>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center gap-10">
          {data.map((i) => (
            <div className="bg-[#D9D9D9] bg-opacity-[20%] w-full lg:w-[283px] h-[105px] flex justify-center rounded-md ">
              <Image
                src={`/${i.icon}`}
                alt="picture"
                width={229}
                height={120}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

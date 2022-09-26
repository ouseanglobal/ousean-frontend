import React from 'react';
import Image from 'next/image';

export default function Alasan() {
  const data = [
    { icon: 'img/alasan/alasan-1.svg', title: 'Mentor Yang Sudah Profesional' },
    { icon: 'img/alasan/alasan-2.svg', title: 'Mengasah Hardskill & Sofkill' },
    { icon: 'img/alasan/alasan-3.svg', title: 'Materi Pelatihan Lebih Fleksibel' },
    { icon: 'img/alasan/alasan-4.svg', title: 'Cocok Untuk Kalangan Pemuda' },
  ];
  return (
    <section id="portfolio" className="pt-28 pb-16 flex justify-center">
      <div className="container">
        <div className="w-full px-4 flex justify-center">
          <div className="max-w-xl text-center mb-16">
            <h2 className="font-bold text-3xl mb-4 sm:text-4xl font-Poppins ">
              Mengapa Harus Pilih Ousean
            </h2>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center gap-x-10">
          {data.map((i) => (
            <div className="mb-12 p-4 md:w-[400px] bg-[#f0e2e2] shadow-lg rounded-[18px] h-[249px]">
              <Image
                src={`/${i.icon}`}
                alt="picture"
                width={114}
                height={106}
              />
              <h3 className="font-semibold text-xl mt-5 mb-3 font-Poppins">
                {i.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

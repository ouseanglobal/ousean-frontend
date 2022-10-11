import React from 'react';
import Image from 'next/image';

export default function Fokus() {
  const data = [
    {
      icon: './img/Fokus/materi.svg',
      h5: 'Materi Untuk Dapat Berkembang',
      p: 'Peningkatan produktivitas dan performa Skill yang dibutukan untuk masa depan.',
    },
    {
      icon: './img/Fokus/dukungan.svg',
      h5: 'Dukungan Purna Lebih Terpercaya',
      p: 'Kemudahan dan kenyamanan yang dapat terwujud melalui layanan terbaik.',
    },
    {
      icon: './img/Fokus/mentor.svg',
      h5: 'Mentor Yang Berpengalaman',
      p: 'Sistem pembelajaran kami sudah diajarkan oleh mentor berpengalaman',
    },
  ];
  return (
    <section className="mb-40">
      <div className="container mx-auto px-2">
        <div className="mx-auto">
          <article className="mx-auto p-2 text-center">
            <h1 className="text-2xl font-semibold text-[#414141] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              Fokus Pendidikan Untuk Masa Depan
            </h1>
            <p className="mt-5 text-xl text-[#909090] lg:text-2xl xl:text-3xl 2xl:text-4xl">
              Karena kami sangat menghargai kepercayaan telah menggunakan Produk
              Ousean
            </p>
          </article>
        </div>
        <div className="flex flex-wrap">
          {data.map((i) => (
            <div className="mx-auto flex flex-wrap items-center justify-center sm:justify-start md:w-1/3 md:px-5">
              <div className="px-14 pt-24 md:px-0">
                <Image
                  src={`/${i.icon}`}
                  width={51}
                  height={41}
                  alt="Picture"
                />
              </div>
              <article className="mx-auto mt-3">
                <h1 className="text-center text-xl font-semibold sm:text-start md:text-start md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl">
                  {i.h5}
                </h1>
                <p className="font-inter mt-3 text-center text-base md:mx-0 md:text-justify lg:text-xl xl:text-2xl 2xl:text-3xl">
                  {i.p}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

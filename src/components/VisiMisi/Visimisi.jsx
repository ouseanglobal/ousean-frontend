import React from 'react';
import Image from 'next/image';

export default function Alasan() {
  const data = [
    {
      icon: 'img/Visimisi/misi.svg',
      deskripsi:
        '“Membentuk Ekosistem Masyarakat Indonesia yang Peduli, Membangun, Bersinergi dan Bermanfaat.”',
      title: 'VISI',
    },
    {
      icon: 'img/Visimisi/visi.svg',
      deskripsi:
        '“Mendorong Terciptanya Pemuda-Pemudi Berkarya,Berkembang dan Bermanfaat.”',
      title: 'MISI',
    },
  ];
  return (
    <section className="flex justify-center rounded-3xl bg-[#D9D9D9] pt-28 pb-16">
      <div className="flex flex-wrap justify-center">
        <div className="flex w-full justify-center">
          <div className="mb-16 flex max-w-xl justify-center text-center">
            <h2 className="mb-4 text-center font-Poppins text-3xl font-bold sm:text-4xl">
              Visi & Misi Kami
            </h2>
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-center gap-8 px-4">
          {data.map((i) => (
            <div className="flex flex-wrap justify-center">
              <div className="flex w-full justify-center pb-[26px]">
                <Image
                  src={`/${i.icon}`}
                  width={65}
                  height={70}
                  alt="Logo Ousean"
                />
              </div>
              <div className="h-[178px] rounded-[18px] bg-[#5F6FAA] px-4 font-Poppins shadow-lg md:w-[402px] md:px-8">
                <h3 className="pt-2 text-center text-[36px] font-semibold">
                  {i.title}
                </h3>
                <h3 className="mt-3 font-Poppins text-lg md:text-xl md:font-semibold">
                  {i.deskripsi}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

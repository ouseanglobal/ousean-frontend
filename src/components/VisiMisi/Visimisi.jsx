import React from 'react';
import Image from 'next/image';

export default function Alasan() {
  const data = [
    { icon: 'img/Visimisi/misi.svg', deskripsi: '“Membentuk Ekosistem Masyarakat Indonesia yang Peduli, Membangun, Bersinergi dan Bermanfaat.”', title: 'VISI' },
    { icon: 'img/Visimisi/visi.svg', deskripsi: '“Mendorong Terciptanya Pemuda-Pemudi Berkarya,Berkembang dan Bermanfaat.”', title: 'MISI' },
  ];
  return (
    <section id="portfolio" className="pt-28 pb-16 flex bg-[#D9D9D9] rounded-3xl">
      <div className="flex justify-center flex-wrap ml-20">
        <div className="w-full flex justify-center">
          <div className="max-w-xl text-center mb-16 flex justify-center">
            <h2 className="font-bold text-3xl mb-4 sm:text-4xl font-Poppins text-center">
              Visi & Misi Kami
            </h2>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center gap-8">
          {data.map((i) => (
            <div className="flex flex-wrap justify-center">
              <div className="w-full flex justify-center pb-[26px]">
                <Image
                  src={`/${i.icon}`}
                  width={65}
                  height={70}
                  alt="Logo Ousean"
                />
              </div>
              <div className="px-8 md:w-[402px] bg-[#5F6FAA] shadow-lg rounded-[18px] h-[178px] font-Poppins">
                <h3 className="text-[36px] font-semibold text-center pt-2">{i.title}</h3>
                <h3 className="font-semibold text-xl mt-3 font-Poppins pb-0">
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

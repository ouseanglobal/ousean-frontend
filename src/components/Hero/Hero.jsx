import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="lg:h-[590px] h-[800px]  bg-[#E3E6FF] flex justify-center mt-24"
    >
      <div className="container">
        <div className="flex flex-wrap ">
          <div className="w-full lg:pl-[57px] lg:mt-[100px] lg:w-1/2 flex flex-wrap justify-center lg:block lg:relative">
            <div className="lg:w-[504px] lg:pl-[57px] lg:absolute lg:pb-0 lg:pt-0 pb-14 pt-12 px-9 lg:pr-0">
              <h1 className="font-Poppins font-semibold lg:text-[42px] lg:leading-[55px] text-3xl text-[#414141] text-center lg:text-start">
                “Ousean Group Wadah untuk Berkarya, Berkembang dan Bermanfaat”
              </h1>
            </div>
          </div>

          <div className="w-full self-end lg:w-1/2 lg:relative">
            <div className="font-light font-Poppins lg:text-lg text-justify lg:absolute top-[20px] pr-7 text-base px-11 lg:px-0">“Sudah banyak artikel yang membahas kesenjangan skill yang dimiliki anak muda Indonesia. PT. Ousean Global Digital berdiri dan aktif pada 10 Maret 2019. Kami menggambarkan diri kami sebagai lautan yang menjadi tempat bagi siapapun untuk tumbuh, berkembang, terhubung, dan berdampak. Kami mengumpulkannya pada satu tempat, jiwa-jiwa yang siap membuat perbedaan untuk dunia yang lebih baik. Berfokus pada tiga sektor utama, yaitu Pendidikan, Kesehatan dan Pemberdayaan Manusia.”</div>
            <div className="lg:absolute top-[180px] right-0">
              <Image
                src="/img/hero/hero-2.svg"
                width={465}
                height={308}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

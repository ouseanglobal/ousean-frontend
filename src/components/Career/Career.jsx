import React from 'react';
import Image from 'next/image';

export default function Career() {
  const data = [
    {
      divisi: 'Front End Developer',
      img: 1,
      size: [150, 150],
      padding: ['pt-[47px]', 'pb-[43px]'],
    },
    {
      divisi: 'Back End Developer',
      img: 2,
      size: [150, 150],
      padding: ['pt-[47px]', 'pb-[43px]'],
    },
    {
      divisi: 'Mobile Apps Developer',
      img: 3,
      size: [150, 150],
      padding: ['pt-[47px]', 'pb-[43px]'],
    },
    {
      divisi: 'DevOpsEngineer',
      img: 4,
      size: [190, 190],
      padding: ['pt-[16px]', 'pb-[34px]'],
    },
    {
      divisi: 'Project Manager',
      img: 5,
      size: [150, 150],
      padding: ['pt-[47px]', 'pb-[43px]'],
    },
    {
      divisi: 'Quality Control',
      img: 6,
      size: [208, 213],
      padding: ['pt-[0px]', 'pb-[34px]'],
    },
    {
      divisi: 'Python Developer',
      img: 7,
      size: [150, 150],
      padding: ['pt-[47px]', 'pb-[43px]'],
    },
    {
      divisi: 'UI/UX Designer',
      img: 8,
      size: [164, 138],
      padding: ['pt-[52px]', 'pb-[50px] pl-[20px]'],
    },
  ];
  return (
    <section id="Career" className="pt-32 pb-16 flex justify-center">
      <div className="container">
        <div className="text-center w-full py-10 bg-[#F8F8F8] font-Poppins text-[36px] font-semibold">Career</div>
        <div className="w-full px-4 flex flex-wrap gap-0 relative">
          {data.map((i) => (
            <div className="lg:w-1/3 w-full flex justify-center relative mt-10">
              <div className="w-[335px] h-[410px] relative shadow-lg">
                <h2 className="text-center pt-[30px] font-Poppins font-semibold text-lg text-[#4A4A4A]">{i.divisi}</h2>
                <div className={`${i.padding[0]} ${i.padding[1]} flex justify-center`}>
                  <Image
                    src={`/img/Career/${i.img}.svg`}
                    alt="picture"
                    width={i.size[0]}
                    height={i.size[1]}
                  />
                </div>
                <div className="flex justify-center mb-[21px]">
                  <button type="submit" className="w-[250px] hover:opacity-90 h-[50px] rounded-[50px] bg-[#4A4A4A] text-white font-Poppins font-semibold text-sm text-center">Apply</button>
                </div>
                <div className="mb-[21px]">
                  <h2 className="font-Poppins font-semibold text-[14px] text-center text-[#4A4A4A]">See Detail</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

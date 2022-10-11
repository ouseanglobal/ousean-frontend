import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function WeDo() {
  const logo1 = [
    {
      icon: './img/WeDo/logo1/1.svg',
      teks: '4 Unit Guide Book',
    },
    {
      icon: './img/WeDo/logo1/2.svg',
      teks: '50 Unit E-Book kampus dan beasiswa',
    },
    {
      icon: './img/WeDo/logo1/3.svg',
      teks: '5 Unit Modul Belajar',
    },
    {
      icon: './img/WeDo/logo1/4.svg',
      teks: 'Instagram`s Daily Content',
    },
    {
      icon: './img/WeDo/logo1/5.svg',
      teks: '7 Mentor Aktif Sesuai Bidang',
    },
    {
      icon: './img/WeDo/logo1/6.svg',
      teks: '5 Unit Kajian Literatur',
    },
  ];
  const logo2 = [
    {
      icon: './img/WeDo/logo2/1.svg',
      teks: '5.500+ Alumni Program',
    },
    {
      icon: './img/WeDo/logo2/2.svg',
      teks: '25.000+ Peserta Acara',
    },
    {
      icon: './img/WeDo/logo2/3.svg',
      teks: '1500+ Seminar & Pelatihan Gratis',
    },
    {
      icon: './img/WeDo/logo2/4.svg',
      teks: '50+ Sesi Acara Terlaksanakan',
    },
    {
      icon: './img/WeDo/logo2/5.svg',
      teks: '95+ Narasumber Diundang',
    },
    {
      icon: './img/WeDo/logo2/6.svg',
      teks: '9 Program Diinisiasi',
    },
  ];
  const logo3 = [
    {
      icon: './img/WeDo/logo3/1.svg',
      teks: '13K+ Follower On Social Media',
    },
    {
      icon: './img/WeDo/logo3/5.svg',
      teks: '@ousean.group @onestepabroad.id @arusyd.indonesia @yeongu.id @hereyougo @shedeserves',
    },
    {
      icon: './img/WeDo/logo3/2.svg',
      teks: '80.000 Reach On Social Media',
    },
    {
      icon: './img/WeDo/logo3/6.svg',
      teks: 'www.ousean.com www.innect.com',
    },

    {
      icon: './img/WeDo/logo3/3.svg',
      teks: '10.000 Database User',
    },
    {
      icon: './img/WeDo/logo3/7.svg',
      teks: '20 Whatsapps Group Chapter',
    },

    {
      icon: './img/WeDo/logo3/4.svg',
      teks: 'Daily Content Of Social Media',
    },
  ];
  const logo4 = [
    {
      icon: './img/WeDo/logo4/1.svg',
      teks: '60 Jejaringan Komunitas',
    },
    {
      icon: './img/WeDo/logo4/2.svg',
      teks: '1.500 Kontak Komunitas',
    },
    {
      icon: './img/WeDo/logo4/3.svg',
      teks: '200 Volunteer Telah Berpartisipasi',
    },
    {
      icon: './img/WeDo/logo4/4.svg',
      teks: '9 Program Diinisiasi',
    },
    {
      icon: './img/WeDo/logo4/5.svg',
      teks: '2 Komunitas Alumni',
    },
  ];

  return (
    <section className="mb-40 pt-20">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold lg:text-4xl">
          Apa Yang Kami Lakukan?
        </h1>
        <div className="px-5">
          <div className="mt-10 xl:mt-16">
            <h2 className="text-2xl font-bold md:mx-5 lg:mx-8 lg:text-3xl xl:mx-11 xl:text-4xl">
              1. Researcher
            </h2>
            <div className="flex flex-wrap lg:mt-5">
              <div className="mt-4 grid grid-cols-2 px-2 md:w-1/2">
                <div className="flex h-[104px] w-[101px] rounded-full bg-[#D9D9D9] sm:ml-8 md:-ml-[2px] xl:ml-10">
                  <span className="mx-auto translate-y-6">
                    <Image src="/img/WeDo/1.svg" width={60} height={57} />
                  </span>
                </div>
                <article className="-ml-14 text-justify">
                  <p className="text-base font-semibold sm:-ml-14 md:mx-3 lg:-ml-10 lg:text-lg xl:-ml-12 xl:text-2xl">
                    Melakukan riset terkait sosial, kesehatan dan pendidikan
                    dalam pencarian solusi berdasarkan data dan fakta dalam
                    bentuk artikel ataupun buku.
                  </p>
                </article>
              </div>
              <div className="mt-10 w-full md:mt-0 md:w-1/2">
                <div className="grid grid-cols-2 px-2 ">
                  {logo1.map((e) => (
                    <div className="mx-auto">
                      <div className="inline-flex pt-3 sm:px-5 md:px-0 xl:px-5">
                        <Image src={`/${e.icon}`} width={78} height={80} />
                        <Link href="">
                          <a className="mx-2 text-sm font-medium text-[#1129FF] hover:underline lg:text-lg xl:text-xl">
                            {e.teks}
                          </a>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5">
          <div className="mt-10 xl:mt-16">
            <h2 className="text-2xl font-bold md:mx-5 lg:mx-8 lg:text-3xl xl:mx-11 xl:text-4xl">
              2. Learning
            </h2>
            <div className="flex flex-wrap lg:mt-5">
              <div className="mt-4 grid grid-cols-2 px-2 md:w-1/2">
                <div className="flex h-[104px] w-[101px] rounded-full bg-[#D9D9D9] sm:ml-8 md:-ml-[2px] xl:ml-10">
                  <span className="mx-auto translate-y-6">
                    <Image src="/img/WeDo/2.svg" width={60} height={57} />
                  </span>
                </div>
                <article className="-ml-14 text-justify">
                  <p className="text-base font-semibold sm:-ml-14 md:mx-3 lg:-ml-10 lg:text-lg xl:-ml-12 xl:text-2xl">
                    Mengadakan rangkaian pelatihan dan acara tentang sosial,
                    kesehatan, pendidikan untuk para anak muda Indonesia.
                  </p>
                </article>
              </div>
              <div className="mt-10 w-full md:mt-0 md:w-1/2">
                <div className="grid grid-cols-2 px-2 ">
                  {logo2.map((e) => (
                    <div className="mx-auto">
                      <div className="inline-flex pt-3 sm:px-5 md:px-0 xl:px-5">
                        <Image src={`/${e.icon}`} width={78} height={80} />
                        <Link href="">
                          <a className="mx-2 text-sm font-medium text-[#1129FF] hover:underline lg:text-lg xl:text-xl">
                            {e.teks}
                          </a>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5">
          <div className="mt-10 xl:mt-16">
            <h2 className="text-2xl font-bold md:mx-5 lg:mx-8 lg:text-3xl xl:mx-11 xl:text-4xl">
              3. Media
            </h2>
            <div className="flex flex-wrap lg:mt-5">
              <div className="mt-4 grid grid-cols-2 px-2 md:w-1/2">
                <div className="flex h-[104px] w-[101px] rounded-full bg-[#D9D9D9] sm:ml-8 md:-ml-[2px] xl:ml-10">
                  <span className="mx-auto translate-y-6">
                    <Image src="/img/WeDo/3.svg" width={60} height={57} />
                  </span>
                </div>
                <article className="-ml-14 text-justify">
                  <p className="text-base font-semibold sm:-ml-14 md:mx-3 lg:-ml-10 lg:text-lg xl:-ml-12 xl:text-2xl">
                    Menyebarluaskan edukasi tentang sosial, kesehatan dan
                    pendidikan melalui media online terutama di website dan
                    sosial media.
                  </p>
                </article>
              </div>
              <div className="mt-10 w-full md:mt-0 md:w-1/2">
                <div className="grid grid-cols-2 px-3">
                  {logo3.map((e) => (
                    <div className="mx-auto">
                      <div className="inline-flex pt-3 sm:px-5 md:px-0 xl:px-5">
                        <Image src={`/${e.icon}`} width={250} height={100} />
                        <Link href="">
                          <a className="mx-2 text-sm font-medium text-[#1129FF] hover:underline lg:text-lg xl:text-xl">
                            {e.teks}
                          </a>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5">
          <div className="mt-10 xl:mt-16">
            <h2 className="text-2xl font-bold md:mx-5 lg:mx-8 lg:text-3xl xl:mx-11 xl:text-4xl">
              4. Komunitas
            </h2>
            <div className="flex flex-wrap lg:mt-5">
              <div className="mt-4 grid grid-cols-2 px-2 md:w-1/2">
                <div className="flex h-[104px] w-[101px] rounded-full bg-[#D9D9D9] sm:ml-8 md:-ml-[2px] xl:ml-10">
                  <span className="mx-auto translate-y-6">
                    <Image src="/img/WeDo/4.svg" width={60} height={57} />
                  </span>
                </div>
                <article className="-ml-14 text-justify">
                  <p className="text-base font-semibold sm:-ml-14 md:mx-3 lg:-ml-10 lg:text-lg xl:-ml-12 xl:text-2xl">
                    Mengadakan rangkaian pelatihan dan acara tentang sosial,
                    kesehatan, pendidikan untuk para anak muda Indonesia.
                  </p>
                </article>
              </div>
              <div className="mt-10 w-full md:mt-0 md:w-1/2">
                <div className="grid grid-cols-2 px-2 ">
                  {logo4.map((e) => (
                    <div className="mx-auto">
                      <div className="inline-flex pt-3 sm:px-5 md:px-0 xl:px-5">
                        <Image src={`/${e.icon}`} width={78} height={80} />
                        <Link href="">
                          <a className="mx-2 text-sm font-medium text-[#1129FF] hover:underline lg:text-lg xl:text-xl">
                            {e.teks}
                          </a>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

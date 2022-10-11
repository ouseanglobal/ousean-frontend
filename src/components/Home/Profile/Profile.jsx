import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {
  const data = [
    {
      icon: './img/Profile/alif.svg',
      nama: 'Alif Hafidz',
      jabatan: 'CEO',
    },
    {
      icon: './img/Profile/novi.svg',
      nama: 'Novi Andriani',
      jabatan: 'COO',
    },
    {
      icon: './img/Profile/fatia.svg',
      nama: 'Fatia Rizka',
      jabatan: 'CMO',
    },
  ];
  const circle = [
    { gambar: './img/Profile/1.svg' },
    { gambar: './img/Profile/2.svg' },
    { gambar: './img/Profile/3.svg' },
    { gambar: './img/Profile/4.svg' },
    { gambar: './img/Profile/5.svg' },
    { gambar: './img/Profile/6.svg' },
  ];

  return (
    <section className="mb-40">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <h1 className="mx-auto mb-5 text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Team Profile Ousean
          </h1>
          <div className="mx-auto mt-5 items-center justify-center px-5">
            <div className="flex flex-wrap">
              {data.map((i) => (
                <div className="mx-auto mb-5 mt-3 flex flex-wrap lg:mx-2 xl:mx-10">
                  <div className=" rounded-lg bg-[#D9D9D9] px-10 pt-10">
                    <span className="mx-auto flex items-center justify-center">
                      <Image
                        src={`/${i.icon}`}
                        width={185}
                        height={170}
                        alt="Picture"
                      />
                    </span>
                    <h1 className="mt-5 text-center text-lg font-medium md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                      {i.nama}
                    </h1>
                    <h5 className="text-center text-base md:text-lg lg:text-xl xl:text-2xl">
                      {i.jabatan}
                    </h5>
                    <div className="mt-24 mb-5">
                      <span className="pr-3 hover:opacity-50">
                        <Link href="">
                          <a>
                            <Image
                              src="/img/Profile/linkedin.svg"
                              width={45}
                              height={42}
                              alt="Linkedin"
                            />
                          </a>
                        </Link>
                      </span>
                      <span className="pr-3 hover:opacity-50">
                        <Link href="">
                          <a>
                            <Image
                              src="/img/Profile/ig.svg"
                              width={45}
                              height={42}
                              alt="Instagram"
                            />
                          </a>
                        </Link>
                      </span>
                      <span className="pr-3 hover:opacity-50">
                        <Link href="">
                          <a>
                            <Image
                              src="/img/Profile/fb.svg"
                              width={45}
                              height={42}
                              alt="Facebook"
                            />
                          </a>
                        </Link>
                      </span>
                      <span className="pr-3 hover:opacity-50">
                        <Link href="">
                          <a>
                            <Image
                              src="/img/Profile/twitter.svg"
                              width={45}
                              height={42}
                              alt="Twitter"
                            />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center">
              {circle.map((a) => (
                <div className="hidden pr-3 lg:flex">
                  <Image
                    src={`/${a.gambar}`}
                    width={15}
                    height={15}
                    alt="Pic"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

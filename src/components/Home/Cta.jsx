import Image from 'next/image';
import Link from 'next/link';

export default function Cta() {
  return (
    <section className="mb-40 rounded-l-xl rounded-tr-xl bg-indigo-900">
      <div className="flex w-full flex-wrap overflow-y-hidden">
        <div className="w-full items-center justify-center border-stone-50 px-3 pt-20 md:w-1/2">
          <h1 className="text-center text-2xl text-slate-200 md:text-2xl lg:text-4xl">
            Masih Bingung Untuk Gapai Karirmu Di Ousean Group? Konsultasikan
            Saja Dengan Kami Melalui Whatsapp
          </h1>
          <div className="mt-10 flex">
            <Link href="">
              <a className="mx-auto flex rounded-xl bg-cta2 p-3 px-5 shadow-lg md:px-8">
                <Image
                  src="/img/cta/hubungi.png"
                  alt="Hubungi Kami"
                  width={23}
                  height={20}
                />
                <span className="inline-block px-3 text-lg font-semibold text-slate-200 md:text-xl">
                  Hubungi Kami
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div className="relative flex overflow-hidden md:w-1/2">
          <div className="z-10 mx-auto -mb-2 w-full min-w-full lg:-mr-3 xl:-mr-44 2xl:translate-x-96">
            <Image
              src="/img/cta/cs.png"
              alt="Image Photo"
              width={500}
              height={500}
            />
            <span className="absolute -bottom-32 -z-10 -ml-80 md:-bottom-52 lg:-bottom-24 lg:-translate-x-16">
              <svg
                width={500}
                height={500}
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#A73C3C"
                  d="M57.4,-57.1C72.6,-42.3,81.8,-21.1,81.8,0C81.8,21.1,72.6,42.2,57.4,57.7C42.2,73.2,21.1,83.1,-0.6,83.7C-22.4,84.3,-44.7,75.7,-61,60.2C-77.3,44.7,-87.5,22.4,-87.7,-0.2C-87.8,-22.7,-77.9,-45.3,-61.6,-60.2C-45.3,-75,-22.7,-81.9,-0.8,-81.2C21.1,-80.4,42.3,-71.9,57.4,-57.1Z"
                  transform="translate(100 100) scale(1.1)"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

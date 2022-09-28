import Image from 'next/image';
import Link from 'next/link';

export default function Join() {
  return (
    <section className="mb-40 bg-[#D9D9D9]">
      <div className="container mx-auto py-10">
        <h1 className="text-center text-3xl font-bold">Join Our Team</h1>
        <div className="flex flex-wrap items-center justify-center px-7 py-5">
          <div className="-mx-[57] md:w-1/2">
            <Image
              src="/img/Join/team.svg"
              width={390}
              height={239}
              alt="Picture"
            />
          </div>
          <div className="flex flex-wrap md:w-1/2">
            <div className="sm:flex-none lg:-ml-20 xl:-ml-40 2xl:-ml-60">
              <article className="mb-3 sm:-mb-3 sm:h-[150px] sm:w-[371px] md:h-[150px] md:w-[371px] 2xl:mt-10 2xl:h-[250px] 2xl:w-[471]">
                <p className="px-2 text-justify font-Poppins text-lg leading-7 lg:text-xl xl:text-2xl 2xl:text-3xl">
                  Join us at Ousean Group to get your dream job to support your
                  career and to gain experience in IT startups to make your
                  company more advanced and more professional.
                </p>
              </article>
              <div className="item-center mt-5 flex justify-center">
                <div className="md:-ml-64 md:flex-none lg:mt-8 xl:mt-10 2xl:mt-20">
                  <Link href="">
                    <a className="mx-auto items-center justify-center rounded-xl bg-[#1813FF] px-5 py-2 font-semibold text-[#ffff] sm:-mt-2 xl:text-xl 2xl:text-2xl">
                      Join Us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center px-7 py-5">
          <div className="inline-block md:w-1/2">
            <h2 className="mb-2 text-center text-2xl font-semibold xl:text-3xl 2xl:text-4xl">
              Location
            </h2>
            <h3 className="mb-2 text-center text-xl font-semibold xl:text-2xl 2xl:text-3xl">
              PT. OUSEAN GLOBAL DIGITAL
            </h3>
            <h5 className="mb-2 text-center text-lg sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Tangerang Selatan, Banten Indonesia
            </h5>
          </div>
          <div className="-mx-[57] mt-8 md:w-1/2">
            <Image
              src="/img/Join/maps.svg"
              width={528}
              height={310}
              alt="Picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

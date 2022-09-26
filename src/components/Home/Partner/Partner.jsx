import Link from 'next/link';
import Image from 'next/image';
export default function Partner() {
  return (
    <section className="mt-40 mb-40 rounded-3xl bg-partners shadow-xl">
      <div className="container px-7 py-10">
        <div className="w-full px-4">
          <h1 className="mx-auto mb-10 items-center justify-center text-center text-3xl font-bold text-slate-700">
            Hiring Partner
          </h1>
          <div className="flex flex-wrap items-center justify-center text-justify">
            <Link href="">
              <a className="mx-4 lg:mx-5 xl:mx-7">
                <Image
                  src="/img/partner/mandiri.svg"
                  alt="Mandiri"
                  width={182}
                  height={130}
                />
              </a>
            </Link>
            <Link href="">
              <a className="mx-4 lg:mx-5 xl:mx-7">
                <Image
                  src="/img/partner/amartha.svg"
                  alt="Mandiri"
                  width={182}
                  height={130}
                />
              </a>
            </Link>
            <Link href="">
              <a className="mx-4 lg:mx-5 xl:mx-7">
                <Image
                  src="/img/partner/paxel.svg"
                  alt="Mandiri"
                  width={182}
                  height={130}
                />
              </a>
            </Link>
            <Link href="">
              <a className="mx-4 lg:mx-5 xl:mx-7">
                <Image
                  src="/img/partner/wahyoo.svg"
                  alt="Mandiri"
                  width={182}
                  height={130}
                />
              </a>
            </Link>
            <Link href="">
              <a className="mx-4 lg:mx-5 xl:mx-7">
                <Image
                  src="/img/partner/cisco.svg"
                  alt="Mandiri"
                  width={182}
                  height={130}
                />
              </a>
            </Link>
            <Link href="">
              <a className="mx-4 lg:mx-8 xl:mx-10">
                <Image
                  src="/img/partner/hubble.svg"
                  alt="Mandiri"
                  width={182}
                  height={130}
                />
              </a>
            </Link>
            <Link href="">
              <a className="mx-4 lg:mx-5 xl:mx-7">
                <Image
                  src="/img/partner/legoas.svg"
                  alt="Mandiri"
                  width={182}
                  height={130}
                />
              </a>
            </Link>
            <Link href="">
              <a className="mx-4 lg:mx-5 xl:mx-7">
                <Image
                  src="/img/partner/cbn.svg"
                  alt="Mandiri"
                  width={182}
                  height={130}
                />
              </a>
            </Link>
            <Link href="">
              <a className="mx-4 lg:mx-5 xl:mx-7">
                <Image
                  src="/img/partner/ciputra.svg"
                  alt="Mandiri"
                  width={182}
                  height={130}
                />
              </a>
            </Link>
            <Link href="">
              <a className="mx-4 lg:mx-5 xl:mx-7">
                <Image
                  src="/img/partner/income.svg"
                  alt="Mandiri"
                  width={182}
                  height={130}
                />
              </a>
            </Link>
            <Link href="">
              <a className="mx-4 lg:mx-5 xl:mx-7">
                <Image
                  src="/img/partner/lazada.svg"
                  alt="Mandiri"
                  width={182}
                  height={130}
                />
              </a>
            </Link>
            <Link href="">
              <a className="mx-4 lg:mx-5 xl:mx-7">
                <Image
                  src="/img/partner/unair.svg"
                  alt="Mandiri"
                  width={182}
                  height={130}
                />
              </a>
            </Link>
            <Link href="">
              <a className="mx-4 lg:mx-5 xl:mx-7">
                <Image
                  src="/img/partner/jawapos.svg"
                  alt="Mandiri"
                  width={182}
                  height={130}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

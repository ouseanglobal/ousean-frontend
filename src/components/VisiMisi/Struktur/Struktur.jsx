import Image from 'next/image';

export default function Struktur() {
  const foto = [
    {
      icon: './img/Struktur/coo.svg',
      nama: 'Novi Andriani',
      title: 'COO',
    },
    {
      icon: './img/Struktur/ceo.svg',
      nama: 'Muhammad Alif. H',
      title: 'CEO Ousean',
    },
    {
      icon: './img/Struktur/cmo.svg',
      nama: 'Fatia Rizka',
      title: 'CMO',
    },
  ];
  return (
    <section className="bg-[#C7E2E3] pt-20 pb-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center">
          <h1 className="text-center text-3xl font-bold">Strukstur Ousean</h1>
          <div className="mx-auto flex w-full flex-wrap">
            {foto.map((i) => (
              <div className="mx-auto items-center justify-center">
                <div className="px-5 pt-24 lg:w-80">
                  <Image
                    src={`/${i.icon}`}
                    width={333}
                    height={300}
                    alt="Picture"
                  />
                </div>
                <div className="mt-5">
                  <h2 className="text-center text-xl font-semibold">
                    {i.nama}
                  </h2>
                  <h4 className="text-center text-lg font-semibold text-[#9F9F9F]">
                    {i.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 flex flex-wrap pb-5">
            <div className="hidden lg:flex">
              <div className="">
                <Image
                  src="/img/Struktur/1.svg"
                  width={20}
                  height={10}
                  alt="pic"
                />
              </div>
              <div className="">
                <Image
                  src="/img/Struktur/2.svg"
                  width={20}
                  height={10}
                  alt="pic"
                />
              </div>
              <div className="">
                <Image
                  src="/img/Struktur/3.svg"
                  width={20}
                  height={10}
                  alt="pic"
                />
              </div>
              <div className="">
                <Image
                  src="/img/Struktur/4.svg"
                  width={20}
                  height={10}
                  alt="pic"
                />
              </div>
              <div className="">
                <Image
                  src="/img/Struktur/5.svg"
                  width={20}
                  height={10}
                  alt="pic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

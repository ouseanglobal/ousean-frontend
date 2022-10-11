import Image from 'next/image';

export default function Cta() {
  return (
    <section className="mb-40">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="mx-auto">
            <Image src="/img/Cta/logo.svg" width={193} height={195} />
          </div>
          <article className="-mt-10 flex flex-wrap items-center justify-center p-3 text-center">
            <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              Siap Maju bersama Ousean?
            </h1>
            <p className="mt-3 text-base md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl">
              Tingkatkan skill Anda untuk meraih masa depan yang cerah untuk
              tumbuh berkembang dan Membentuk Ekosistem Masyarakat Indonesia
              yang Peduli, Membangun, Bersinergi dan Bermanfaat dalam sektor
              Pendidikan, Kesehatan dan Pemberdayaan Manusia.
            </p>
          </article>
          <button
            type="button"
            className="mx-auto mt-5 rounded-md bg-[#0060D1] p-3 font-semibold text-[#FFFFFF] hover:opacity-90"
          >
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

export default function Testimoni() {
  return (
    <section className="mb-40">
      <h1 className="mx-auto mb-5 items-center justify-center text-center text-3xl font-bold">
        Testimoni Ousean
      </h1>
      <div className="justify-center overflow-hidden px-3 sm:flex sm:flex-wrap md:flex lg:flex lg:px-0">
        <div className="font-Intern  relative mb-7 mt-7 rounded-xl bg-stone-100 p-5 shadow-lg sm:mx-5 sm:h-80 sm:w-96 md:h-96 md:w-96 lg:w-96">
          <div className="hidden xl:flex">
            <div className="absolute top-1/2 -left-7 z-10 flex h-10 w-10 rounded-full bg-slate-400">
              <span className="mx-auto translate-y-1 text-2xl">
                <Image
                  src="/img/testimoni/arrow-left.png"
                  alt="Left"
                  width={20}
                  height={20}
                />
              </span>
            </div>
          </div>
          <span className="float-left px-3">
            <Image
              src="/img/testimoni/iqbal.png"
              alt="Muhammad Iqbal"
              width={50}
              height={50}
            />
          </span>
          <h1 className="text-lg font-bold md:text-base">Muhammad Iqbal</h1>
          <h6 className="text-sm text-slate-500 ">Web Development Manager</h6>
          <article className="mt-6">
            <p className="text-justify text-base">
              Ouasen Group dapat membantu Saya untuk mengembangkan Skill Saya di
              dunia programming dan mengembangkan skill untuk berkarir di dunia
              IT karena Ousean terpacaya dapat membantu Saya untuk belajar untuk
              siap memulai di dunia kerja untuk masa depan yang cerah karena
              bagi Saya bekerja tanpa ada Skill dan Koneksi rasanya masih ada
              yang kurang.
            </p>
          </article>
        </div>
        <div className="font-Intern mb-7 mt-7 rounded-xl bg-stone-100 p-5 shadow-lg sm:mx-5 sm:h-80 sm:w-96 md:h-96 md:w-96 lg:w-96">
          <span className="float-left px-3 ">
            <Image
              src="/img/testimoni/andreas.png"
              alt="Andreas B.W. Katon Raharjo"
              width={50}
              height={50}
            />
          </span>
          <h1 className="text-lg font-bold md:text-base">
            Andreas B.W. Katon Raharjo
          </h1>
          <h6 className="text-sm text-slate-500 ">
            UI/UX Designer Intern (Web Development)
          </h6>
          <article className="mt-6">
            <p className="text-justify text-base">
              Saya sangat berterima kasih terhadap Ouasen Group bisa merekrut
              Saya untuk join dengan perusahaan ini selain untuk bekerja dan
              untuk saling belajar serta memberi pelatihan yang sangat
              berkualitas dengan event tidak kalah jauh dari event lain yang
              dapat membantu Saya meningkatkan Softkill dan Hardskill di dunia
              kerja.
            </p>
          </article>
        </div>
        <div className="font-Intern relative mb-7 mt-7 rounded-xl bg-stone-100 p-5 shadow-lg sm:mx-5 sm:h-80 sm:w-96 md:h-96 md:w-96 lg:w-96">
          <div className="hidden xl:flex">
            <div className="absolute top-1/2 -right-7 z-10 flex h-10 w-10 rounded-full bg-slate-400">
              <span className="mx-auto translate-y-1 text-2xl">
                <Image
                  src="/img/testimoni/arrow-right.png"
                  alt="Left"
                  width={20}
                  height={20}
                />
              </span>
            </div>
          </div>
          <span className="float-left px-3 ">
            <Image
              src="/img/testimoni/arsyi.png"
              alt="Arsyi Zakaria"
              width={50}
              height={50}
            />
          </span>
          <h1 className="text-lg font-bold md:text-base">Arsyi Zakaria</h1>
          <h6 className="text-sm text-slate-500 ">
            Vice Manager Business Development
          </h6>
          <article className="mt-6">
            <p className="text-justify text-base">
              Ousean Group membantu Saya menambah skill tentang dunia marketing
              dan bisnis yang sangat dibutuhkan perusahaan untuk siap memasuki
              generasi 2045 untuk mengembangkan bisnis perusahaan dan Ousean
              adalah tempat belajar dan berlatih dan menimba ilmu.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

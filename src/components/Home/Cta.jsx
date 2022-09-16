export default function Cta() {
  return (
    <section className="pb-32 mb-32">
      <div className="container w-full">
        <div className="flex flex-wrap bg-indigo-900 rounded-l-xl rounded-tr-xl">
          <div className="w-full mb-10 lg:w-1/2 px-16 text-slate-100 pt-40 pl-20">
            <p className="text-4xl pb-7">Masih Bingung Untuk Gapai Karirmu Di Ousean Group? Konsultasikan Saja Dengan Kami Melalui Whatsapp</p>
            <button
              className=" bg-red-700 inline-block px-10 py-2 mx-auto rounded-xl ml-20 drop-shadow-2
            xl"
            >
              <img src="./img/Vector.png" alt="Hubungi Kami" className="w-7 h-7 mx-auto inline-block" />
              <span className="px-2 font-semibold"> Hubungi Kami</span>
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <img src="./img/Ousean4.png" alt="Image" className="max-w-full " />
          </div>
        </div>
      </div>
    </section>
  );
}

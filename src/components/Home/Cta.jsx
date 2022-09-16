export default function Cta() {
  return (
    <section className="pb-32 mb-32 w-full pt-32">
      <div className="container ">
        <div className="flex flex-wrap bg-indigo-900 rounded-l-xl rounded-tr-xl relative pb-20">
          <div className="w-full md:w-1/2  sm:w-full mb-10 text-slate-100 py-12 ">
            <p className="w-full pb-7 text-3xl px-10 ml-36">Masih Bingung Untuk Gapai Karirmu Di Ousean Group? Konsultasikan Saja Dengan Kami Melalui Whatsapp</p>
            <button className="w-1/2 bg-red-700 inline-block py-2 mx-auto rounded-xl shadow-xl ml-56">
              <img src="./img/Vector.png" alt="Hubungi Kami" className="w-7 h-7 mx-auto inline-block" />
              <span className="px-2 font-semibold"> Hubungi Kami</span>
            </button>
          </div>
          <div className="w-full md:w-1/2 absolute bottom-0 right-0">
            <div className=" ">
              <img src="./img/Ousean4.png" alt="Image" className="w-full " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

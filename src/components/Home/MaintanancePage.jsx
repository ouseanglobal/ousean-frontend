import Image from 'next/image';

export default function MaintanancePage() {
  return (
    <div className="bg-[#153866] w-screen h-screen relative overflow-hidden">
      <div className="p-10 w-[175px] lg:w-[200px] lg:absolute lg:z-20">
        <Image src="/img/Maintanance/Logo.svg" alt="" />
      </div>
      <div className="absolute w-[300px] inset-x-0 mx-auto bottom-[29%] sm:w-[400px] md:w-[500px] lg:w-[800px] lg:-bottom-2 z-20">
        <Image src="/img/Maintanance/Laptop.svg" />
      </div>
      <div className="absolute h-[30%] w-screen bottom-0 bg-[#FFDE59] lg:top-0 lg:bottom-auto lg:z-0 lg:h-[50%] lg:rounded-b-[100px]" />
    </div>
  );
}

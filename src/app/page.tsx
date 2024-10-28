import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex gap-8 place-content-around my-8 items-center">
        <div className="">
          <h2 className="font-extrabold text-3xl">Accede <span className="text-[#119FF8]">rapido</span></h2>
          <h2 className="font-extrabold text-3xl">En <span className="text-[#119FF8]">todo</span> momento</h2>
          <button className="rounded-full py-1 bg-[#119FF8] px-4 mt-4">
            Comenzar
          </button>
        </div>
        <div className="bg-gray-600">
          <div className="w-[38rem] h-80"></div>
        </div>
      </section>
      <section>
        <h2 className="font-extrabold text-3xl"> ¿Que es Infomily? </h2>
        <p>Infomily es una plataforma almacenada en la nube local para acceder de forma remota a tus archivos personales, de manera rapida y facil, sin gastar espacion en tu disco.</p>
        <Link href="/" className="text-[#119FF8]">Saber mas...</Link>
      </section>
      <section className="text-center flex flex-col items-center gap-8">
        <h2 className="font-extrabold text-3xl">Plataformas</h2>
        <div className="grid grid-cols-3 bg-[#111111] w-[42rem] items-center h-[12rem] rounded-3xl">
          <div className="justify-self-center col-span-1 bg-black size-3/4"></div>
          <div className="justify-self-center border-x  bg-black size-3/4"></div>
          <div className="justify-self-center bg-black size-3/4"></div>
        </div>
      </section>
      <section className="text-center flex flex-col gap-8">
        <h2 className="font-extrabold text-3xl">Usos</h2>
        <div className="flex flex-row flex-wrap justify-center gap-24">
          <div className="flex flex-col items-center gap-6">
            <div className=" size-36 bg-white"></div>
            <p className="max-w-36">Almacenamiento de documentos e imagenes</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className=" size-36 bg-white"></div>
            <p className="max-w-36">Previsualizacion</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className=" size-36 bg-white"></div>
            <p className="max-w-36">Creacion de notas</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className=" size-36 bg-white"></div>
            <p className="max-w-36">Recordatorios personales</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className=" size-36 bg-white"></div>
            <p className="max-w-36">Calendario</p>
          </div>
        </div>
      </section>
    </div>
  );
}

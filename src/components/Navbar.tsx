import Link from "next/link";
import { ArrowRight, List } from "phosphor-react";

const Navbar = () => {
  return (
    <div className="bg-white fixed z-50 w-full flex justify-between items-center pl-4">
      <h1 className="text-black_500 text-xl font-bold uppercase">
        Oliveira Trade
      </h1>
      <nav className="hidden md:flex flex-1 justify-between items-center ml-14">
        <ul className="flex gap-8 text-gray-500 ">
          <li className="hover:text-black_500 transition-all ease-linear duration-300">
            <Link href="">Conhecimento</Link>
          </li>
          <li className="hover:text-black_500 transition-all ease-linear duration-300">
            <Link href="">Informação</Link>
          </li>
          <li className="hover:text-black_500 transition-all ease-linear duration-300">
            <Link href="">Ferramentas</Link>
          </li>
          <li className="hover:text-black_500 transition-all ease-linear duration-300">
            <Link href="">Comunidade</Link>
          </li>
          <li className="hover:text-black_500 transition-all ease-linear duration-300">
            <Link href="">Panorama</Link>
          </li>
        </ul>
        <div className="flex">
          <button className="uppercase border border-primary_500 hover:text-primary_500  flex justify-center items-center px-6 py-6 text-lg transition-all ease-linear duration-300">
            <Link href="/userLogin">Login</Link>
          </button>

          <button className="group uppercase bg-primary_500 flex justify-center items-center gap-2 px-6 py-6 text-lg transition-all ease-linear duration-300">
            <Link href="/register">Cadastre-se</Link>
            <ArrowRight className="h-6 w-6 transform group-hover:translate-x-4 transition ease-in-out duration-300" />
          </button>
        </div>
      </nav>
      <button className="h-14 w-14 bg-primary_500 flex justify-center items-center md:hidden">
        <List className="text-black text-2xl font-semibold cursor-pointer hover:text-gray-300 " />
      </button>
    </div>
  );
};
export default Navbar;

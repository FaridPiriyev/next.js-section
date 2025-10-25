"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">

        <div className="logo font-semibold">
          <a href="#" className="text-white text-3xl">
            DEVEL/<span className="text-red-600">UP</span>
          </a>
        </div>


        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="hidden md:flex items-center space-x-10 text-white">
          <nav className="flex space-x-10">
            <a href="#" className="hover:bg-red-600 p-2 rounded-xl duration-300 ease-in">
              Haqqımızda
            </a>
            <a href="#" className="hover:bg-red-600 p-2 rounded-xl duration-300 ease-in">
              Videolar
            </a>
            <a href="#" className="hover:bg-red-600 p-2 rounded-xl duration-300 ease-in">
              Suallar
            </a>
            <a href="#" className="hover:bg-red-600 p-2 rounded-xl duration-300 ease-in">
              İdeya Bankı
            </a>
            <a href="#" className="hover:bg-red-600 p-2 rounded-xl duration-300 ease-in">
              Əlaqə
            </a>
          </nav>


          <div className="flex items-center cursor-pointer text-white">
            <p className="bg-blue-500 text-2xl flex items-center justify-center w-12 h-12 rounded-full border-2 border-red-700">
              F
            </p>
            <a
              href="#"
              className="p-3 hover:text-red-600 duration-300 ease-in whitespace-nowrap"
            >
              Fərid Piriyev
            </a>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-zinc-900 mt-4 rounded-xl p-4 text-white space-y-4 animate-fade-in">

          <nav className="flex flex-col space-y-2 text-center">
            <a href="#" className="hover:bg-red-600 p-2 rounded-xl duration-300 ease-in">
              Haqqımızda
            </a>
            <a href="#" className="hover:bg-red-600 p-2 rounded-xl duration-300 ease-in">
              Videolar
            </a>
            <a href="#" className="hover:bg-red-600 p-2 rounded-xl duration-300 ease-in">
              Suallar
            </a>
            <a href="#" className="hover:bg-red-600 p-2 rounded-xl duration-300 ease-in">
              İdeya Bankı
            </a>
            <a href="#" className="hover:bg-red-600 p-2 rounded-xl duration-300 ease-in">
              Əlaqə
            </a>
          </nav>

          <div className="flex flex-col items-center justify-center pt-4 border-t border-gray-700">
            <p className="bg-blue-500 text-2xl flex items-center justify-center w-14 h-14 rounded-full border-2 border-red-700 mb-2">
              F
            </p>
            <a href="#" className="hover:text-red-600 duration-300 ease-in">
              Fərid Piriyev
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

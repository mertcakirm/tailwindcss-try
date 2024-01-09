import React, { Component } from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-1 bg-gray-700 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start ">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-8 py-2 px-2 whitespace-nowrap hover:bg-gray-500 uppercase text-white"
              href="/"
            >
              anasayfa
            </a>
          </div>
          <div className="text-justify relative group">
            <button className="flex items-center mx-96 bg-gray-700 text-white rounded h-10 px-4 text-md">
              Kategoriler
            </button>
            <div className="absolute mx-52 max-w-lg rounded p-4 bg-gray-600 hidden group-focus-within:block group-hover:block mt-1">
              <div className="flex flex-wrap justify-between -mx-2 text-white">
                <a href="#" className="flex-shrink-0 uppercase w-1/4 px-2 mb-2 hover:text-blue-700">
                  Otomotİv
                </a>
                <a href="#" className="flex-shrink-0 uppercase w-1/4 px-2 mb-2 hover:text-blue-700">
                  Fİnans
                </a>
                <a href="#" className="flex-shrink-0 uppercase w-1/4 px-2 mb-2 hover:text-blue-700">
                  Teknolojİ
                </a>
                <a href="#" className="flex-shrink-0 w-1/4 px-2 mb-2 uppercase hover:text-blue-700">
                  uluslararasi
                </a>
                <a href="#" className="flex-shrink-0 uppercase w-1/4 px-2 mb-2 hover:text-blue-700">
                  bİlİm
                </a>
                <a href="#" className="flex-shrink-0 uppercase w-1/4 px-2 mb-2 hover:text-blue-700">
                  sİnematİk
                </a>
                <a href="#" className="flex-shrink-0 w-1/4 uppercase px-2 mb-2 hover:text-blue-700">
                  dİjİtal
                </a>
                <a href="#" className="flex-shrink-0 w-1/4 uppercase px-2 mb-2 hover:text-blue-700">
                  yapay zeka
                </a>
                <a href="#" className="flex-shrink-0 w-1/4 px-2 mb-2 uppercase hover:text-blue-700">
                  sİyasİ
                </a>
                <a href="#" className="flex-shrink-0 w-1/4 px-2 mb-2 uppercase hover:text-blue-700">
                  tarİh
                </a>
                <a href="#" className="flex-shrink-0 w-1/4 px-2 mb-2 uppercase hover:text-blue-700">
                  spor
                </a>
                <a href="#" className="flex-shrink-0 w-1/4 px-2 mb-2 uppercase hover:text-blue-700">
                  yemek
                </a>

              </div>
            </div>
          </div>

          <div
            className="lg:flex flex-grow items-center "
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <li className="nav-item hover:bg-gray-500 ">
                <a
                  className="px-3 mt-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/login"
                >
                  giriş yap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;

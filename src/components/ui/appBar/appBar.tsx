import React from "react";
import Link from "next/link";


export default function AppBar() {
  return (
    <header className="bg-gray-800 p-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold ">
            Vic<span className="text-[#090f1b] ">ken</span>
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="#home" className="text-gray-300 hover:text-indigo-500">
                <i className="bx bx-home-alt"></i>
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-gray-300 hover:text-indigo-500">
                <i className="bx bx-user"></i>
              </Link>
            </li>
            <li>
              <Link href="#articles" className="text-gray-300 hover:text-indigo-500">
                <i className="bx bx-book"></i>
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-gray-300 hover:text-indigo-500">
                <i className="bx bx-cube-alt"></i>
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-gray-300 hover:text-indigo-500">
                <i className="bx bxs-message-square-dots"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  );
}




import Link from "next/link";
import React from "react";


export default function NavBar() {
  return (
   <nav className="bg-gray-100 p-2 flex items-center justify-between inset-0 z-10 relative">
        <img src="/burger.png" alt="Burger" width="50" height="100" />
        <h1 className="text-xl font-bold  gap-4 flex-1 text-left text-black p-4">
          Burger Shop
        </h1>
        <ul className="flex justify-center gap-10 text-black font-medium text-lg text-center p-1">
          <li className="p-2">
            <Link href="/">Home</Link>
          </li>
          <li className="p-2">
            <Link href="/menu">Menu</Link>
          </li>
          <li className="p-2">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="grid grid-cols-1 gap-2 bg-transparent border p-2 rounded-lg transform transition duration-300 hover:scale-105 hover:bg-amber-700 cursor-pointer font-bold">
            <Link href="/order">Order Now</Link>
          </li>
        </ul>
      </nav>
  );
}

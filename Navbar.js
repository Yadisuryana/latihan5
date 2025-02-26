"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const menuItems = [
    { name: "About", path: "/latihan5/about" },
    { name: "Skills", path: "/latihan5/skills" },
    { name: "Portfolio", path: "/latihan5/portfolio" },
    { name: "Layanan", path: "/latihan5/layanan" },
    { name: "Kontak", path: "/latihan5/kontak" },
    { name: "Profile", path: "/latihan5/profile" },
    { name: "Profile Kelas", path: "/latihan5/profilekelas" }, // Perbaikan path
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-200 to-white text-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/latihan5" className="hover:text-blue-600 transition">
            TradeHaven
          </Link>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="/latihan5"
              className={`hover:text-blue-600 transition ${
                pathname === "/latihan5" ? "font-bold text-blue-600" : ""
              }`}
            >
              Home
            </Link>
          </li>
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`hover:text-blue-600 transition ${
                  pathname === item.path ? "font-bold text-blue-600" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Toggle Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
          {menuOpen ? <X size={28} className="text-gray-900" /> : <Menu size={28} className="text-gray-900" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-gradient-to-r from-blue-100 to-white p-4 shadow-lg transition-all duration-300">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                href="/latihan5"
                className="block p-2 hover:bg-blue-300 rounded-lg transition"
              >
                Home
              </Link>
            </li>
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="block p-2 hover:bg-blue-300 rounded-lg transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

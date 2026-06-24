// components/Navbar.tsx - Larger logo
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "What We Do", path: "/services" },
    { name: "Join The Network", path: "/join" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between h-20 items-center">
          {/* Logo - LEFT side (much larger now) */}
          <Link href="/" className="flex items-center">
            <div className="relative w-48 h-48 md:w-60 md:h-60">
              <Image
                src="/qc-face-crop.png"
                alt="Queen Contracting Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop navigation - RIGHT side */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-gray-600 hover:text-black text-sm uppercase tracking-wide transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black">
              {isOpen ? <X size={48} /> : <Menu size={48} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container-custom py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="block text-gray-600 hover:text-black text-sm uppercase tracking-wide py-2"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
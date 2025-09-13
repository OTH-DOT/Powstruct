"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/products", label: "Produits" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "À propos" },
    { href: "/conseil", label: "Conseil" },
    { href: "/partenaires", label: "Partenaires" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="absolute top-[70px] left-0 w-full z-50 bg-black/50 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <div className="-mt-2 flex items-center">
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt="logo"
              width={150}
              height={80}
              style={{ width: "120px", height: "80px" }}
              className="rounded-2xl shadow-lg object-cover hidden md:block"
            />
            <Image
              src="/small_logo.png"
              alt="small logo"
              width={100}
              height={50}
              className="rounded-2xl shadow-lg object-cover md:hidden"
            />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors font-medium ${
                  pathname === link.href
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Action Button */}
        <div className="hidden md:flex -mt-2 items-center">
          <Link
            href="/devis"
            className="px-6 text-2xl py-3 h-[70px] w-[120px] flex items-center justify-center bg-black text-yellow-400 rounded-2xl font-semibold shadow-md hover:bg-yellow-400 hover:text-black transition-colors"
          >
            DEVIS
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <X className="text-white w-8 h-8" />
            ) : (
              <Menu className="text-white w-8 h-8" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md px-6 py-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-white font-medium transition-colors ${
                    pathname === link.href ? "text-yellow-400" : "hover:text-yellow-400"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/devis"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-6 py-3 bg-black text-yellow-400 rounded-2xl font-semibold shadow-md hover:bg-yellow-400 hover:text-black transition-colors"
              >
                DEVIS
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

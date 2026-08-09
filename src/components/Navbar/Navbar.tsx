"use client";
import {
  House,
  LayoutDashboardIcon,
  Menu,
  Package,
  Phone,
  ShoppingCart,
  UserRound,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/", label: "Home", icon: House },
  { href: "/contato", label: "Contato", icon: Phone },
  { href: "/produtos", label: "Produtos", icon: Package },
  { href: "/gerenciamento", label: "Gerenciamento", icon: LayoutDashboardIcon },
  { href: "/carrinho", label: "Carrinho", icon: ShoppingCart },
  { href: "/login", label: "Login", icon: UserRound },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (
    pathname === "/gerenciamento" ||
    pathname === "/login" ||
    pathname === "/cadastro"
  ) {
    return null;
  }

  return (
    <header className="bg-blue-100 text-grey-100 py-2.5 px-6.25">
      <nav className=" flex flex-1 items-center justify-between mx-auto min-w-98.25">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Quantum Store Logo"
            width={148}
            height={100}
            className=" w-25"
          ></Image>
        </Link>
        <ul className=" items-center gap-5 lg:text-heading-h5 text-heading-h6 hidden md:flex ">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-2 border-b-2 transition-all
                  ${
                    isActive
                      ? "text-orange-200 border-orange-200 pb-1"
                      : "text-grey-100 border-transparent hover:text-orange-200 hover:border-orange-200 hover:pb-1 "
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="md:hidden text-grey-100 hover:text-orange-200 transition-colors p-1 cursor-pointer"
          aria-label="Abrir Menu"
        >
          <Menu className="w-8 h-8" />
        </button>
      </nav>

      {/* Modal do Menu Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 md:hidden">
          <div className="bg-blue-100 w-full max-w-60 rounded-3xl p-6 relative flex flex-col gap-2 ">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-grey-100 hover:text-orange-200 transition-colors cursor-pointer"
              aria-label="Fechar Menu"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="h-4" />

            <ul className="flex flex-col gap-3 w-full">
              {links.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-center gap-3 w-full py-3 px-4 rounded-2xl text-heading-h5 transition-all border-b-2 ${
                        isActive
                          ? "bg-orange-200 text-black font-semibold"
                          : "bg-blue-200 text-grey-100 border-transparent hover:text-orange-200 hover:border-orange-200 "
                      }`}
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

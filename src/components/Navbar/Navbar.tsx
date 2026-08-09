"use client";
import {
  House,
  LayoutDashboardIcon,
  Package,
  Phone,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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
        <ul className="flex items-center gap-5 text-heading-h5">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-grey-100 hover:text-orange-200 border-b-2 border-transparent hover:border-orange-200 hover:pb-1 transition-all"
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

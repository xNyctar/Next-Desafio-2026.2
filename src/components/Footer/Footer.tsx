'use client'

import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col md:flex-row mx-auto px-5 py-2.5 bg-blue-100 text-grey-100 md:px-2.5 md:py-6.25 justify-between items-center">
      <div className="flex flex-col gap-4 order-3 md:order-1  md:w-auto">
        <div>
          <h6 className="md:text-heading-h5 text-heading-h6">Endereço</h6>
          <h5 className="md:text-body-h4 text-body-h5">Rua Dão Camargo da Vinte - 230</h5>
        </div>
        <div>
          <h6 className="md:text-heading-h5 text-heading-h6">Telefone de Contato</h6>
          <h5 className="md:text-body-h4 text-body-h5">32 00000-0000</h5>
        </div>
        <div>
          <h6 className="md:text-heading-h5 text-heading-h6">Atendimento</h6>
          <h5 className="md:text-body-h4 text-body-h5">
            08:00 às 20:00 - Segunda a Sexta, horário de Brasília
          </h5>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Facebook">
            <Image
              src="/Facebook.svg"
              alt="Logo Facebook"
              width={25}
              height={25}
              className="w-6 h-6"
            />
          </Link>

          <Link href="#" aria-label="Instagram">
            <Image
              src="/Instagram.svg"
              alt="Logo Instagram"
              width={25}
              height={25}
              className="w-6 h-6"
            />
          </Link>

          <Link href="#" aria-label="Whatsapp">
            <Image
              src="/Whatsapp.svg"
              alt="Logo Whatsapp"
              width={25}
              height={25}
              className="w-6 h-6"
            />
          </Link>
        </div>
      </div>
             {/* LOGO DA EMPRESA  */}
      <div className="flex justify-center items-center order-2 md:order-2">
        <Image
          src="/logo.svg"
          alt="Logo Empresa"
          width={150}
          height={150}
          className=" min-w-55 h-auto object-contain"
        />
      </div>
              {/* NEWSLATTER DA EMPRESA  */}
      <div className="flex flex-col p-2.5 gap-2.5 w-full md:w-auto items-center md:items-start order-1 md:order-3">
        <div>
          <h6 className="text-heading-h5 md:text-heading-h4">Quantum Store NEWS</h6>
          <h5 className="text-body-h4 md:text-body-h5">
            Cadastre seu email e receba todas as novidades
          </h5>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className=" flex w-80 h-10 ">
          <input
            type="email"
            placeholder="Email"
            className="w-full h-full px-4 py-2.5 bg-grey-100 text-black text-body-h5 focus:outline-none placeholder:text-gray-400 " required
          />
          <button
            type="submit"
            className=" flex bg-orange-200 px-3 items-center justify-center h-full text-heading-h5 text-black"
          >
            Cadastrar
          </button>
          </form>
        </div>
    </footer>
  );
};

"use client";

import Image from "next/image";
import Link from "next/link";

export const Contato = () => {
  return (
    <div className="bg-blue-200 flex flex-col px-4 py-8 md:px-12 gap-4 items-center justify-center min-h-screen">
      <h1 className="text-heading-h1 text-grey-100 mb-4">Contato</h1>


      <div className="flex flex-col xl:flex-row gap-8 w-full max-w-7xl">
        
        <div className="w-full  max-w-250 mx-auto xl:w-1/2 bg-blue-100 flex flex-col p-6 md:p-8 rounded-3xl text-grey-100 gap-6">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4 w-full"
          >
            <div className="flex flex-col gap-1.5 w-full">
              <label htmlFor="nome" className="text-grey-100 md:text-heading-h4 text-heading-h5">
                Nome
              </label>
              <input
                id="nome"
                type="text"
                placeholder="Nome"
                className="bg-grey-100 md:text-body-h4 text-body-h5 text-black px-4 py-5 rounded-2xl focus:outline-none placeholder:text-black w-full"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5 w-full">
              <label htmlFor="email" className="text-grey-100 md:text-heading-h4 text-heading-h5">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="bg-grey-100 md:text-body-h4 text-body-h5 text-black px-4 py-5 rounded-2xl focus:outline-none placeholder:text-black w-full"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5 w-full">
              <label htmlFor="assunto" className="text-grey-100 md:text-heading-h4 text-heading-h5">
                Assunto
              </label>
              <input
                id="assunto"
                type="text"
                placeholder="Assunto"
                className="bg-grey-100 md:text-body-h4 text-body-h5 text-black px-4 py-5 rounded-2xl focus:outline-none placeholder:text-black w-full"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5 w-full">
              <label htmlFor="mensagem" className="text-grey-100 md:text-heading-h4 text-heading-h5">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                placeholder="Mensagem"
                rows={5}
                className="bg-grey-100 md:text-body-h4 text-body-h5 text-black px-4 py-5 rounded-2xl focus:outline-none placeholder:text-black w-full resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-orange-200 text-black md:text-heading-h4 text-heading-h5 cursor-pointer py-4 px-6 rounded-2xl hover:bg-orange-100 transition-opacity w-full mt-2"
            >
              Enviar Mensagem
            </button>
          </form>

          {/* Redes Sociais */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-grey-100 text-body-h4 pt-2 w-full">
            <span>Não deixe de entrar em contato</span>
            <div className="flex items-center gap-3">
              <Link href="#" aria-label="Facebook">
                <Image
                  src="/Facebook.svg"
                  alt="Logo Facebook"
                  width={25}
                  height={25}
                  className="w-6 h-6 cursor-pointer"
                />
              </Link>

              <Link href="#" aria-label="Instagram">
                <Image
                  src="/Instagram.svg"
                  alt="Logo Instagram"
                  width={25}
                  height={25}
                  className="w-6 h-6 cursor-pointer"
                />
              </Link>

              <Link href="#" aria-label="Whatsapp">
                <Image
                  src="/Whatsapp.svg"
                  alt="Logo Whatsapp"
                  width={25}
                  height={25}
                  className="w-6 h-6 cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-1/2 bg-blue-100 flex flex-col p-6 md:p-8 rounded-3xl text-grey-100">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15278.236170889212!2d-45.2423!3d-16.1481!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x75525c345b141df%3A0x868cbfa0ea8efb13!2sPint%C3%B3polis%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
    className="w-full h-full min-h-[500px] xl:min-h-0 rounded-2xl border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Mapa de localização Pintópolis"
  />
</div>

      </div>
    </div>
  );
};
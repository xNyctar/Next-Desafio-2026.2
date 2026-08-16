import Image from "next/image";
import {
  CarrosselProdutos,
} from "../components/CarrosselProdutos";
import { MissaoVisaoValores } from "../components/MissaoVisaoValores";
import { CarrosselOfertas } from "../components/CarrosselOfertas";
import prisma from "../lib/db";

export default async function Home() {
  const ofertas = await prisma.produto.findMany({ where: { emOferta: true } });
  const notebooks = await prisma.produto.findMany({ where: { categoria: { nome: 'Notebooks' } } });
  const memorias = await prisma.produto.findMany({ where: { categoria: { nome: 'Peças de Memória' } } });
  const escritorios = await prisma.produto.findMany({ where: { categoria: { nome: 'Escritório' } } });
  return (
    <main className="min-h-screen bg-blue-200 text-grey-100 gap-1">
      {/* Seção Hero Section */}
      <section className="relative w-full min-h-105 md:min-h-120 overflow-hidden flex items-center p-8 md:p-12">
        <Image
          src="/Imagem-landing-page.jpg"
          alt="Imagem da landing page"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 w-[65%] md:w-full md:max-w-150 flex flex-col items-start gap-3">
          <h1 className="md:text-heading-h1 text-heading-h4">
            Eleve a <span className="text-orange-200">Performance</span> do Seu
            Setup ao <span className="text-orange-200">Máximo</span>
          </h1>
          <div className="w-full h-px bg-grey-100 my-1" />

          <p className="md:text-body-h3 text-body-h5 text-grey-100">
            Encontre os componentes de hardware mais avançados do mercado para
            potencializar seus jogos, edições e projetos de alta exigência.
          </p>
          <div className="w-full flex md:justify-center justify-start">
            <a href="#ofertas" className="bg-orange-200 text-black hover:bg-orange-100 md:text-heading-h5 text-heading-h6 md:px-20 px-5 py-2.5 rounded-2xl cursor-pointer">
              Aproveite nossas ofertas
            </a>
          </div>
        </div>
      </section>

      {/* Seção Produtos */}
      <section className="p-10">
        <section className="w-full">
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-heading-h3 md:text-heading-h2 text-grey-100">
              Notebooks
            </h2>
            <div className="flex-1 h-px bg-grey-100" />
          </div>
          <CarrosselProdutos
            produtos={notebooks}
            bgContainer="bg-linear-to-l from-[#14213D] to-[#3558A3]"
          />
        </section>

        <section className="w-full">
          <div className="flex items-center gap-4 w-full">
            <div className="flex-1 h-px bg-grey-100" />
            <h2 className="text-heading-h3 md:text-heading-h2 text-grey-100">
              Peças de Memória
            </h2>
          </div>
          <CarrosselProdutos
            produtos={memorias}
            bgContainer="bg-linear-to-r from-[#14213D] to-[#3558A3]"
          />
        </section>

        <section className="w-full">
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-heading-h3 md:text-heading-h2 text-grey-100">
              Escritório
            </h2>
            <div className="flex-1 h-px bg-grey-100" />
          </div>
          <CarrosselProdutos
            produtos={escritorios}
            bgContainer="bg-linear-to-l from-[#14213D] to-[#3558A3]"
          />
        </section>
      </section>

      {/* Seção quem somos */}
      <section className="w-full px-6 py-10 mb-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-[50%] flex flex-col items-center">
            <h2 className="text-heading-h3 md:text-heading-h2 text-grey-100 text-center mb-6 font-semibold">
              Quem somos?
            </h2>

            <div className="w-full h-px bg-grey-100 mb-6" />

            <p className="text-body-h5 md:text-body-h3 text-grey-100 text-center">
              A Quantum Store nasceu com o propósito de redefinir a sua
              experiência de compra. Inspirados pela ideia de evolução contínua
              e velocidade, nós buscamos muito mais do que apenas oferecer
              produtos: queremos entregar soluções inovadoras, modernas e de
              alta qualidade que facilitem o seu dia a dia. Nosso compromisso é
              conectar você às melhores tendências do mercado de forma ágil,
              segura e inteligente, proporcionando um verdadeiro salto de
              qualidade na forma como você consome.
            </p>
          </div>

          <div className="w-full md:w-[35%] flex justify-center items-center">
            <Image
              src="/logo.svg"
              alt="Logo Quantum Store"
              width={260}
              height={260}
              className="w-72 md:w-95 lg:w-105"
            />
          </div>
        </div>
      </section>

      {/* Seção Missão, Visão e Valores */}
      <MissaoVisaoValores />

      {/* Seção de Super Ofertas */}
      <section className="w-full p-4" id="ofertas">
        <div className="w-full flex items-center gap-4 md:gap-8">
          <div className="flex-1 h-px bg-grey-100" />
          <h2 className="text-heading-h2 whitespace-nowrap">
            Ofertas Imperdíveis
          </h2>
          <div className="flex-1 h-px bg-grey-100" />
        </div>

        <CarrosselOfertas produtos={ofertas} />
      </section>
    </main>
  );
}
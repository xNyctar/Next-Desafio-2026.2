"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { BarraPesquisa } from "../BarraPesquisa";
import { Card, PostItem } from "../Card";


const postsExemplo: PostItem[] = [
  {
    id: 1,
    nome: "Notebook Acer Nitro V15 ANV15-52-778G",
    preco: "R$ 7.599,99",
    descricao:
      "O processador Intel Core i7-13620H de 13ª geração dita o ritmo com seus 10 núcleos e 16 threads, alcançando",
    imagem: "/notebook-2.svg",
  },
  {
    id: 2,
    nome: "Notebook Gamer Lenovo LOQ 15IRX9, 15.6' Full HD",
    preco: "R$ 6.399,00",
    descricao:
      "Processador Intel Core i5-13450HX de alta performance com 10 núcleos para máxima agilidade",
    imagem: "/notebook-1.svg",
  },
  {
    id: 3,
    nome: "Notebook Gamer Rog Strix G16 G615Jpr Nvidia RTX",
    preco: "R$ 12.239,18",
    descricao:
      "Notebook Gamer Rog Strix G16 G615Jpr Nvidia RTX 4070 Intel Core i9 14900HX 32Gb Ram 1TB SSD Windows 11 Home Tela 16",
    imagem: "/notebook-3.svg",
  },
  {
    id: 4,
    nome: "Memória Gamer Redragon Rage 8 Gb Ddr4 3200 Mhz Red Gm-701",
    preco: "R$ 650,00",
    descricao:
      "Se você percebe que seu computador está com baixo desempenho ou que sua capacidade não atende às suas necessidades de uso, é hora de renovar sua",
    imagem: "/memoria-1.svg",
  },
  {
    id: 5,
    nome: "Mesa Elevatória Elétrica Ergonômica C/ Regulagem Altura",
    preco: "R$ 950,59",
    descricao:
      "A mesa elétrica automática com altura ajustável BlackAir é a solução ideal para quem procura um espaço de trabalho",
    imagem: "/escritorio-3.svg",
  },
  {
    id: 6,
    nome: "Memória RGB de desktop Puskill Ddr4 8gbx2 3200mhz Cl18",
    preco: "R$ 775,03",
    descricao:
      "O que você precisa saber sobre este produto. Unidades por kit: 1. Cada módulo tem capacidade de 8 GB de memória. Formato DIMM",
    imagem: "/memoria-3.svg",
  },
];

interface CardPostProps {
  posts?: PostItem[];
}

export const PaginaProdutos = ({ posts = postsExemplo }: CardPostProps) => {
  return (
    <div className="w-full min-h-screen bg-blue-200 flex flex-col items-center ">
      <BarraPesquisa />
      <div className="w-full h-0.5 bg-grey-100 mb-4" />

      <div className="max-w-7xl w-full px-4 flex flex-col items-center gap-6">
        <div className="bg-blue-100 rounded-[70px] px-6 md:px-17.5 py-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-17.5 w-full">
            {posts?.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 text-grey-100 text-body-h3 pt-2 pb-6 w-full">
          <button
            className="hover:text-orange-200 transition-colors cursor-pointer"
            aria-label="Página anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span>1</span>
          <button
            className="hover:text-orange-200 transition-colors cursor-pointer"
            aria-label="Próxima página"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

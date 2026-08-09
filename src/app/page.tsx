import Image from "next/image";
import { Produto } from "../components/CarrosselProdutos/CarrosselProdutos";

const notebooks: Produto[] = [
  {
    id: 1,
    nome: "Notebook Gamer Lenovo LOQ 15IRX9, 15.6' Full HD",
    preco: "R$ 6.269,00",
    descricao:
      "Processador Intel Core i5-13450HX de alta performance com 10 núcleos para máxima agilidade",
    imagem: "/notebook-1.svg",
  },
  {
    id: 2,
    nome: "Notebook Gamer Acer Nitro 5, 15.6' Full HD",
    preco: "R$ 7.599,00",
    descricao:
      "O processador Intel Core i7-13620H de 13ª geração dita o ritmo com seus 10 núcleos e 16 threads, alcançando",
    imagem: "/notebook-2.svg",
  },
  {
    id: 3,
    nome: "Notebook Gamer ROG Strix G16, 15.6' Full HD",
    preco: "R$ 12.239,18",
    descricao:
      "Notebook Gamer Rog Strix G16 G614JPR Nvidia RTX 4070 Intel Core i9",
    imagem: "/notebook-3.svg",
  },
  {
    id: 4,
    nome: "Notebook Dell G15 15.6' Full HD 120Hz",
    preco: "R$ 5.899,00",
    descricao: "Desempenho gráfico para jogos pesados e tarefas exigentes",
    imagem: "/notebook-1.svg",
  },
];

const memorias: Produto[] = [
  {
    id: 1,
    nome: "Memória Gamer Redragon Rage 8 Gb Ddr4 3200 Mhz Red Gm-701",
    preco: "R$ 650,00",
    descricao:
      "Se você percebe que seu computador está com baixo desempenho ou que sua capacidade não atende às suas necessidades de uso, é hora de renovar sua",
    imagem: "/memoria-1",
  },
  {
    id: 2,
    nome: "Memória Ram Twoingames Ddr4 Rgb Cor Branca 16gb",
    preco: "R$ 844,11",
    descricao:
      "A Memória Ram Twoingames DDR4 RGB Cor Branca de 16GB e 3200MHz é a escolha perfeita para gamers e entusiastas de tecnologia que buscam",
    imagem: "/memoria-2",
  },
  {
    id: 3,
    nome: "Memória RGB de desktop Puskill Ddr4 8gbx2 3200mhz Cl18",
    preco: "R$ 775,03",
    descricao:
      "O que você precisa saber sobre este produto. Unidades por kit: 1. Cada módulo tem capacidade de 8 GB de memória. Formato DIMM",
    imagem: "/memoria-3",
  },
  {
    id: 4,
    nome: "Memória RGB de desktop Puskill Ddr4 8gbx2 3200mhz Cl18",
    preco: "R$ 775,03",
    descricao:
      "O que você precisa saber sobre este produto. Unidades por kit: 1. Cada módulo tem capacidade de 8 GB de memória. Formato DIMM",
    imagem: "/memoria-1",
  },
];

const escritorios: Produto[] = [
  {
    id: 1,
    nome: "Mesa Para Setup Gamer 150cm Industrial Escritório Pés Aço",
    preco: "R$ 215,49",
    descricao:
      "A Mesa Gamer Industrial de 150 cm da marca MAYA é ideal para quem procura um espaço funcional e estético, perfeito",
    imagem: "/escritorio-1",
  },
  {
    id: 2,
    nome: "Mesa Gamer Industrial 150cm Para Setup E Escritório Pés Aço",
    preco: "R$ 254,99",
    descricao:
      "A Mesa de Trabalho Industrial 150cm com Pé de Ferro da marca Maya é a escolha ideal para quem busca funcionalidade",
    imagem: "/escritorio-2",
  },
  {
    id: 3,
    nome: "Mesa Eleviatória Elétricia Ergonômica C/ Regulagem Altura",
    preco: "R$ 950,59",
    descricao:
      "A mesa elétrica automática com altura ajustável BlackAir é a solução ideal para quem procura um espaço de trabalho",
    imagem: "/escritorio-3",
  },
  {
    id: 4,
    nome: "Mesa Para Setup Gamer 150cm Industrial Escritório Pés Aço",
    preco: "R$ 215,49",
    descricao:
      "A Mesa Gamer Industrial de 150 cm da marca MAYA é ideal para quem procura um espaço funcional e estético, perfeito",
    imagem: "/escritorio-1",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-200 text-grey-100 gap-2.5 ">
      <section className="relative w-full min-h-[420px] md:min-h-[480px] overflow-hidden flex items-center p-8 md:p-12">
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
          <div className="w-full h-[1px] bg-grey-100 my-1" />

          <p className="md:text-body-h3 text-body-h5 text-grey-100">
            Encontre os componentes de hardware mais avançados do mercado para
            potencializar seus jogos, edições e projetos de alta exigência.
          </p>
          <div className="w-full flex md:justify-center justify-start">
            <button className="bg-orange-200 text-black hover:bg-orange-100 md:text-heading-h5 text-heading-h6 md:px-20 px-5 py-2.5 rounded-2xl cursor-pointer">
              Aproveite nossas ofertas
            </button>
          </div>
        </div>
      </section>

      <section></section>
    </main>
  );
}

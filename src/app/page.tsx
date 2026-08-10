import Image from "next/image";
import {
  CarrosselProdutos,
  Produto,
} from "../components/CarrosselProdutos/CarrosselProdutos";
import { MissaoVisaoValores } from "../components/MissaoVisaoValores";
import { CarrosselOfertas, Oferta } from "../components/CarrosselOfertas";

const ofertas: Oferta[] = [
  {
    id: 1,
    nome: "Controle Sony Dualsense Edge PS5, Sem Fio, Preto e Branco ",
    precoAntigo: "R$ 1.394,07",
    precoAtual: "R$ 1.199,00",
    descricao:
      "Botões reconfiguráveis. Personalize o layout do controle dos seus jogos favoritos para que os comandos estejam adaptados",
    imagem: "/ofertas-1.svg",
  },
  {
    id: 2,
    nome: "Notebook Asus Tuf Gaming F16 Fx607vu RTX4050 Intel",
    precoAntigo: "R$ 9.775,87",
    precoAtual: "R$ 7.479,15",
    descricao:
      "intel core i5sistema operacionalwindows 11 homesistema operacional windows pré-instalado no produto",
    imagem: "/ofertas-2.svg",
  },
  {
    id: 3,
    nome: "Notebook Acer Nitro 5 AN515-47-R5SU - Preto - AMD Ryzen 5",
    precoAntigo: "R$ 5.999,00",
    precoAtual: "R$ 4.298,77",
    descricao:
      "Notebook Acer Nitro 5 AN515-47-R5SU, processador AMD Ryzen 5 de sétima geração 6 núcleos (12 Threads) com velocidade de 4.55GHz",
    imagem: "/ofertas-3.svg",
  },
  {
    id: 4,
    nome: "Notebook Acer Nitro 5 AN515-47-R5SU - Preto - AMD Ryzen 5...",
    precoAntigo: "R$ 5.999,00",
    precoAtual: "R$ 4.298,77",
    descricao:
      "Notebook Acer Nitro 5 AN515-47-R5SU, processador AMD Ryzen 5 de última geração 6 núcleos (12 Threads) com velocidade...",
    imagem: "/ofertas-3.svg",
  },
];

const notebooks: Produto[] = [
  {
    id: 1,
    nome: "Notebook Gamer Lenovo LOQ 15IRX9, 15.6' Full HD",
    preco: "R$ 6.269,00",
    descricao:
      "Processador Intel Core i5-13450HX de alta performance com 10 núcleos para máxima agilidade",
    imagem: "/notebook-1.svg",
  },
  {
    id: 2,
    nome: "Notebook Gamer Acer Nitro 5, 15.6' Full HD",
    preco: "R$ 7.599,00",
    descricao:
      "O processador Intel Core i7-13620H de 13ª geração dita o ritmo com seus 10 núcleos e 16 threads, alcançando",
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
    imagem: "/memoria-1.svg",
  },
  {
    id: 2,
    nome: "Memória Ram Twoingames Ddr4 Rgb Cor Branca 16gb",
    preco: "R$ 844,11",
    descricao:
      "A Memória Ram Twoingames DDR4 RGB Cor Branca de 16GB e 3200MHz é a escolha perfeita para gamers e entusiastas de tecnologia que buscam",
    imagem: "/memoria-2.svg",
  },
  {
    id: 3,
    nome: "Memória RGB de desktop Puskill Ddr4 8gbx2 3200mhz Cl18",
    preco: "R$ 775,03",
    descricao:
      "O que você precisa saber sobre este produto. Unidades por kit: 1. Cada módulo tem capacidade de 8 GB de memória. Formato DIMM",
    imagem: "/memoria-3.svg",
  },
  {
    id: 4,
    nome: "Memória RGB de desktop Puskill Ddr4 8gbx2 3200mhz Cl18",
    preco: "R$ 775,03",
    descricao:
      "O que você precisa saber sobre este produto. Unidades por kit: 1. Cada módulo tem capacidade de 8 GB de memória. Formato DIMM",
    imagem: "/memoria-1.svg",
  },
];

const escritorios: Produto[] = [
  {
    id: 1,
    nome: "Mesa Para Setup Gamer 150cm Industrial Escritório Pés Aço",
    preco: "R$ 215,49",
    descricao:
      "A Mesa Gamer Industrial de 150 cm da marca MAYA é ideal para quem procura um espaço funcional e estético, perfeito",
    imagem: "/escritorio-1.svg",
  },
  {
    id: 2,
    nome: "Mesa Gamer Industrial 150cm Para Setup E Escritório Pés Aço",
    preco: "R$ 254,99",
    descricao:
      "A Mesa de Trabalho Industrial 150cm com Pé de Ferro da marca Maya é a escolha ideal para quem busca funcionalidade",
    imagem: "/escritorio-2.svg",
  },
  {
    id: 3,
    nome: "Mesa Eleviatória Elétricia Ergonômica C/ Regulagem Altura",
    preco: "R$ 950,59",
    descricao:
      "A mesa elétrica automática com altura ajustável BlackAir é a solução ideal para quem procura um espaço de trabalho",
    imagem: "/escritorio-3.svg",
  },
  {
    id: 4,
    nome: "Mesa Para Setup Gamer 150cm Industrial Escritório Pés Aço",
    preco: "R$ 215,49",
    descricao:
      "A Mesa Gamer Industrial de 150 cm da marca MAYA é ideal para quem procura um espaço funcional e estético, perfeito",
    imagem: "/escritorio-1.svg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-200 text-grey-100 gap-1 ">
      {/* Seção Hero Section */}
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
            <div className="flex-1 h-[1px] bg-grey-100" />
          </div>
          <CarrosselProdutos
            produtos={notebooks}
            bgContainer="bg-linear-to-l from-[#14213D] to-[#3558A3] "
          />
        </section>

        <section className="w-full">
          <div className="flex items-center gap-4 w-full">
            <div className="flex-1 h-[1px] bg-grey-100" />
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
            <div className="flex-1 h-[1px] bg-grey-100" />
          </div>
          <CarrosselProdutos
            produtos={escritorios}
            bgContainer="bg-linear-to-l from-[#14213D] to-[#3558A3] "
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

            <div className="w-full h-[1px] bg-grey-100 mb-6" />

            <p className="text-body-h5 md:text-body-h3 text-grey-100 text-center ">
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
              className=" w-72 md:w-[380px] lg:w-[420px]"
            />
          </div>
        </div>
      </section>

      {/* Seção Missão, Visão e Valores */}
      <MissaoVisaoValores />

      {/* Seção de Super Ofertas */}
      <section className="w-full p-4" id="ofertas">
        <div className="w-full flex items-center gap-4 md:gap-8">
          <div className="flex-1 h-[1px] bg-grey-100" />
          <h2 className="text-heading-h2 whitespace-nowrap">
            Ofertas Imperdíveis
          </h2>
          <div className="flex-1 h-[1px] bg-grey-100" />
        </div>

        <CarrosselOfertas produtos={ofertas} />
      </section>
    </main>
  );
}

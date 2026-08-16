import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.itemPedido.deleteMany();
  await prisma.pedido.deleteMany();
  await prisma.produto.deleteMany();
  await prisma.categoria.deleteMany();

  const catNotebooks = await prisma.categoria.create({ data: { nome: 'Notebooks' } });
  const catMemorias = await prisma.categoria.create({ data: { nome: 'Peças de Memória' } });
  const catEscritorio = await prisma.categoria.create({ data: { nome: 'Escritório' } });

  const produtos = [
    // --- OFERTAS IMPERDÍVEIS ---
    {
      nome: 'Controle Sony Dualsense Edge PS5, Sem Fio, Preto e Branco',
      descricao: 'Botões reconfiguráveis. Personalize o layout do controle dos seus jogos favoritos para que os comandos estejam adaptados',
      preco: 1199.00,
      precoAntigo: 1394.07,
      imagem: '/ofertas-1.svg',
      emOferta: true,
      categoriaId: catEscritorio.id,
    },
    {
      nome: 'Notebook Asus Tuf Gaming F16 Fx607vu RTX4050 Intel',
      descricao: 'intel core i5sistema operacionalwindows 11 homesistema operacional windows pré-instalado no produto',
      preco: 7479.15,
      precoAntigo: 9775.87,
      imagem: '/ofertas-2.svg',
      emOferta: true,
      categoriaId: catNotebooks.id,
    },
    {
      nome: 'Notebook Acer Nitro 5 AN515-47-R5SU - Preto - AMD Ryzen 5',
      descricao: 'Notebook Acer Nitro 5 AN515-47-R5SU, processador AMD Ryzen 5 de sétima geração 6 núcleos (12 Threads) com velocidade de 4.55GHz',
      preco: 4298.77,
      precoAntigo: 5999.00,
      imagem: '/ofertas-3.svg',
      emOferta: true,
      categoriaId: catNotebooks.id,
    },

    // --- NOTEBOOKS ---
    {
      nome: "Notebook Gamer Lenovo LOQ 15IRX9, 15.6' Full HD",
      descricao: 'Processador Intel Core i5-13450HX de alta performance com 10 núcleos para máxima agilidade',
      preco: 6269.00,
      imagem: '/notebook-1.svg',
      emOferta: false,
      categoriaId: catNotebooks.id,
    },
    {
      nome: "Notebook Gamer Acer Nitro 5, 15.6' Full HD",
      descricao: 'O processador Intel Core i7-13620H de 13ª geração dita o ritmo com seus 10 núcleos e 16 threads, alcançando',
      preco: 7599.00,
      imagem: '/notebook-2.svg',
      emOferta: false,
      categoriaId: catNotebooks.id,
    },
    {
      nome: "Notebook Gamer ROG Strix G16, 15.6' Full HD",
      descricao: 'Notebook Gamer Rog Strix G16 G614JPR Nvidia RTX 4070 Intel Core i9',
      preco: 12239.18,
      imagem: '/notebook-3.svg',
      emOferta: false,
      categoriaId: catNotebooks.id,
    },

    // --- PEÇAS DE MEMÓRIA ---
    {
      nome: 'Memória Gamer Redragon Rage 8 Gb Ddr4 3200 Mhz Red Gm-701',
      descricao: 'Se você percebe que seu computador está com baixo desempenho ou que sua capacidade não atende às suas necessidades de uso, é hora de renovar sua',
      preco: 650.00,
      imagem: '/memoria-1.svg',
      emOferta: false,
      categoriaId: catMemorias.id,
    },
    {
      nome: 'Memória Ram Twoingames Ddr4 Rgb Cor Branca 16gb',
      descricao: 'A Memória Ram Twoingames DDR4 RGB Cor Branca de 16GB e 3200MHz é a escolha perfeita para gamers e entusiastas de tecnologia',
      preco: 844.11,
      imagem: '/memoria-2.svg',
      emOferta: false,
      categoriaId: catMemorias.id,
    },
    {
      nome: 'Memória RGB de desktop Puskill Ddr4 8gbx2 3200mhz Cl18',
      descricao: 'O que você precisa saber sobre este produto. Unidades por kit: 1. Cada módulo tem capacidade de 8 GB de memória.',
      preco: 775.03,
      imagem: '/memoria-3.svg',
      emOferta: false,
      categoriaId: catMemorias.id,
    },

    // --- ESCRITÓRIO ---
    {
      nome: 'Mesa Para Setup Gamer 150cm Industrial Escritório Pés Aço',
      descricao: 'A Mesa Gamer Industrial de 150 cm da marca MAYA é ideal para quem procura um espaço funcional e estético',
      preco: 215.49,
      imagem: '/escritorio-1.svg',
      emOferta: false,
      categoriaId: catEscritorio.id,
    },
    {
      nome: 'Mesa Gamer Industrial 150cm Para Setup E Escritório Pés Aço',
      descricao: 'A Mesa de Trabalho Industrial 150cm com Pé de Ferro da marca Maya é a escolha ideal para quem busca funcionalidade',
      preco: 254.99,
      imagem: '/escritorio-2.svg',
      emOferta: false,
      categoriaId: catEscritorio.id,
    },
     {
      nome: 'Mesa Eleviatória Elétricia Ergonômica C/ Regulagem Altura',
      descricao: 'A mesa elétrica automática com altura ajustável BlackAir é a solução ideal para quem procura um espaço de trabalho',
      preco: 950.59,
      imagem: '/escritorio-3.svg',
      emOferta: false,
      categoriaId: catEscritorio.id,
    },
  ];

  for (const produto of produtos) {
    await prisma.produto.create({ data: produto });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
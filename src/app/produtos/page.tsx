import { PaginaProdutos } from "@/src/components/PaginaProdutos";
import prisma from "@/src/lib/db";

interface ProdutosPageProps {
  searchParams: Promise<{ q?: string; page?: string }> | { q?: string; page?: string };
}

export default async function ProdutoPage({ searchParams }: ProdutosPageProps) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.q;
  const paginaAtual = Number(resolvedSearchParams?.page) || 1;
  const ITENS_POR_PAGINA = 6;

  const whereClause = query
    ? {
        nome: {
          contains: query,
          mode: "insensitive" as const,
        },
      }
    : undefined;

  const totalProdutos = await prisma.produto.count({ where: whereClause });
  const totalPaginas = Math.ceil(totalProdutos / ITENS_POR_PAGINA);

  const produtos = await prisma.produto.findMany({
    take: ITENS_POR_PAGINA,
    skip: (paginaAtual - 1) * ITENS_POR_PAGINA,
    where: whereClause,
  });

  return (
    <PaginaProdutos
      produtos={produtos}
      paginaAtual={paginaAtual}
      totalPaginas={totalPaginas}
    />
  );
}
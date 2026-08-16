"use client";

import { ChevronLeft, ChevronRight, PackageSearch } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { BarraPesquisa } from "../BarraPesquisa";
import { Card } from "../Card";
import { Produto } from "@/generated/prisma/client";

interface PaginaProdutosProps {
  produtos: Produto[];
  paginaAtual: number;
  totalPaginas: number;
}

export const PaginaProdutos = ({
  produtos,
  paginaAtual,
  totalPaginas,
}: PaginaProdutosProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const temProdutos = produtos && produtos.length > 0;

  const mudarPagina = (novaPagina: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", novaPagina.toString());
    router.push(`/produtos?${params.toString()}`);
  };

  return (
    <div className="w-full min-h-screen bg-blue-200 flex flex-col items-center">
      <BarraPesquisa />
      <div className="w-full h-0.5 bg-grey-100 mb-4" />

      <div className="max-w-7xl w-full px-4 flex flex-col items-center gap-6">
        <div className="bg-blue-100 rounded-[70px] px-6 md:px-17.5 py-10 w-full">
          {temProdutos ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-17.5 w-full">
              {produtos.map((produto) => (
                <Card key={produto.id} post={produto} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center text-grey-100 gap-3">
              <PackageSearch className="w-16 h-16 " />
              <h2 className="text-heading-h4 md:text-heading-h3">
                Nenhum produto encontrado
              </h2>
            </div>
          )}
        </div>

        {/* Paginação */}
        {temProdutos && totalPaginas > 1 && (
          <div className="flex items-center justify-center gap-3 text-grey-100 text-body-h3 pt-2 pb-6 w-full">
            <button
              onClick={() => mudarPagina(paginaAtual - 1)}
              disabled={paginaAtual <= 1}
              className="hover:text-orange-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
              aria-label="Página anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <span>
              {paginaAtual} de {totalPaginas}
            </span>

            <button
              onClick={() => mudarPagina(paginaAtual + 1)}
              disabled={paginaAtual >= totalPaginas}
              className="hover:text-orange-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
              aria-label="Próxima página"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
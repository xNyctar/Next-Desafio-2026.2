"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { BarraPesquisa } from "../BarraPesquisa";
import { Card } from "../Card";
import { Produto } from "@/generated/prisma/client";

interface PaginaProdutosProps {
  produtos: Produto[];
}

export const PaginaProdutos = ({ produtos }: PaginaProdutosProps) => {
  return (
    <div className="w-full min-h-screen bg-blue-200 flex flex-col items-center">
      <BarraPesquisa />
      <div className="w-full h-0.5 bg-grey-100 mb-4" />

      <div className="max-w-7xl w-full px-4 flex flex-col items-center gap-6">
        <div className="bg-blue-100 rounded-[70px] px-6 md:px-17.5 py-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-17.5 w-full">
            {produtos?.map((produto) => (
              <Card key={produto.id} post={produto} />
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

"use client";

import { Search } from "lucide-react";

interface BarraPesquisaProps {
  busca?: string;
  setBusca?: (valor: string) => void;
  onSearch?: () => void;
}

export const BarraPesquisa = ({
  busca,
  setBusca,
  onSearch,
}: BarraPesquisaProps) => {
  return (
    <div className="justify-center items-center px-25 md:px-2.5 py-2.5 flex w-full">
      <div className="w-full max-w-xl flex items-center h-9 md:h-10">
        <input
          type="text"
          placeholder="Buscar"
          value={busca}
          onChange={(e) => setBusca?.(e.target.value)}
          className="w-full bg-grey-100 text-black px-4 outline-none placeholder:text-black rounded-l-3xl text-body-h3 md:text-body-h2 h-full"
        />
        <button
          type="button"
          aria-label="Buscar"
          onClick={onSearch}
          className="px-5 bg-blue-100 text-grey-100 flex items-center justify-center cursor-pointer rounded-r-3xl h-full"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

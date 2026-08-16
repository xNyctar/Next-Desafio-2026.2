"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

export const BarraPesquisa = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [termo, setTermo] = useState(searchParams.get("q") ?? "");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!termo.trim()) {
      router.push("/produtos");
      return;
    }

    router.push(`/produtos?q=${encodeURIComponent(termo.trim())}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="justify-center items-center px-25 md:px-2.5 py-2.5 flex w-full"
    >
      <div className="w-full max-w-xl flex items-center h-9 md:h-10">
        <input
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
          className="w-full bg-grey-100 text-black px-4 outline-none placeholder:text-black rounded-l-3xl text-body-h3 md:text-body-h2 h-full"
        />
        <button
          type="submit"
          aria-label="Buscar"
          className="px-5 bg-blue-100 text-grey-100 flex items-center justify-center cursor-pointer rounded-r-3xl h-full"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};
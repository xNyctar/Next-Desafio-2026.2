"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Star, ShoppingCart, Truck } from "lucide-react";
import { Produto } from "@/generated/prisma/client";

interface VisualizacaoIndividualProps {
  produto: Produto;
}

export const VisualizacaoIndividual = ({
  produto,
}: VisualizacaoIndividualProps) => {
  const [fotoAtiva, setFotoAtiva] = useState<string>(produto.imagem);
  const [quantidade, setQuantidade] = useState(1);
  const [cep, setCep] = useState("");

  useEffect(() => {
    setFotoAtiva(produto.imagem);
  }, [produto]);

  const listaImagens = [produto.imagem];

  return (
    <div className="min-w-screen min-h-screen mx-auto p-6 bg-blue-200 text-grey-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagens do Produto */}
        <div className="flex flex-col gap-4">
          <div className="bg-grey-100 rounded-2xl h-80 md:h-100 relative overflow-hidden flex items-center justify-center">
            <Image
              src={fotoAtiva}
              alt={produto.nome}
              fill
              className="object-cover "
            />
          </div>

          <div className="grid grid-cols-5 gap-2">
            {listaImagens.map((img, index) => (
              <button
                key={index}
                onClick={() => setFotoAtiva(img)}
                className={`bg-grey-100 rounded-xl h-20 relative overflow-hidden border-2 cursor-pointer transition-all ${
                  fotoAtiva === img
                    ? "border-orange-200 scale-95"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Título do Produto */}
        <div className="flex flex-col gap-4 px-4">
          <h1 className="text-heading-h4 md:text-heading-h3 text-grey-100">
            {produto.nome}
          </h1>

          {/* Vendas do Produto */}
          <div className="flex items-center justify-between gap-4 text-body-h4 md:text-body-h3 text-grey-100">
            <div className="flex items-center text-orange-200">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`md:w-6 md:h-6 w-5 h-5 ${
                    i < Math.floor(produto.avaliacao ?? 0)
                      ? "fill-orange-200"
                      : "text-gray-500"
                  }`}
                />
              ))}
            </div>
            <span>{produto.vendas ?? "0 vendas"}</span>
          </div>

          <div className="w-full h-px bg-grey-100 my-1" />

          <span className="text-heading-h4 md:text-heading-h3 text-grey-100">
            {produto.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>

          {/* Comprar o Produto */}
          <div className="flex items-center justify-center gap-4 my-2">
            <div className="flex items-center border border-grey-100 rounded-xl bg-blue-200 px-6 py-4 w-50 justify-center">
              <button
                onClick={() => setQuantidade((prev) => Math.max(1, prev - 1))}
                className="md:text-body-h2 text-body-h3 px-2 cursor-pointer hover:text-orange-200"
              >
                -
              </button>
              <span className="px-4 text-body-h4">{quantidade}</span>
              <button
                onClick={() => setQuantidade((prev) => prev + 1)}
                className="md:text-body-h2 text-body-h3 px-2 cursor-pointer hover:text-orange-200"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:px-20 px-10 text-heading-h6 md:text-heading-h5">
            <button className="w-full bg-blue-100 text-grey-100 py-3 px-5 rounded-xl flex items-center justify-center gap-2 cursor-pointer">
              <ShoppingCart className="md:w-5 md:h-5 h-4 w-4" />
              Adicionar ao carrinho
            </button>
            <button className="w-full bg-orange-200 hover:bg-orange-100 text-black py-3 rounded-xl font-bold cursor-pointer transition-colors">
              Comprar agora
            </button>
          </div>

          {/* Consultar Frete do Produto */}
          <div className="mt-4 flex flex-col items-end gap-2">
            <div className="flex items-center gap-2 text-body-h5 text-grey-100">
              <Truck className="w-4 h-4" />
              <span>Consulte seu frete</span>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Insira seu CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                className="bg-grey-100 text-black p-2 flex-1 outline-none text-body-h4"
              />
              <button className="bg-orange-200 hover:bg-orange-100 text-black px-4 py-2 cursor-pointer transition-colors">
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Descrição do Produto */}
      <div className="mt-12 pt-8">
        <h2 className="md:text-heading-h3 text-heading-h4 text-grey-100 mb-4">
          Descrição do Produto
        </h2>
        <p className="md:text-body-h4 text-body-h5 text-grey-100">
          {produto.descricao}
        </p>
      </div>
    </div>
  );
};
"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Oferta {
  id: number;
  nome: string;
  precoAntigo: string;
  precoAtual: string;
  descricao: string;
  imagem: string;
}

interface CarrosselOfertasProps {
  produtos: Oferta[];
}

export const CarrosselOfertas = ({ produtos }: CarrosselOfertasProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  const [paginaAtual, setPaginaAtual] = useState(1);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPaginaAtual(emblaApi.selectedScrollSnap() + 1);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  if (!produtos || produtos.length === 0) return null;

  return (
    <section className="w-full my-8 flex flex-col gap-4 p-4">
      <div className="relative bg-[linear-gradient(90deg,#14213D_17.31%,#253D70_51.59%,#14213D_100%)] p-4 md:p-8 rounded-3xl flex flex-col items-center">
        <div className="w-full flex items-center gap-2 md:gap-4">
          <button
            onClick={scrollPrev}
            className="text-grey-100 hover:text-orange-200 transition-colors p-1 cursor-pointer"
            aria-label="Anterior - Seta Esquerda"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex">
              {produtos.map((produto) => (
                <div
                  key={produto.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3 min-w-0"
                >
                  <div className="bg-blue-200 rounded-2xl shadow-[13px_10px_4px_0_rgba(0,0,0,0.25)] overflow-hidden flex flex-col h-full">
                    <div className="bg-grey-100 p-4 flex items-center justify-center h-48 relative rounded-t-2xl">
                      <Image
                        src={produto.imagem}
                        alt={produto.nome}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-4 flex flex-col gap-3 flex-1 justify-between">
                      <h3 className="text-body-h4 text-grey-100 line-clamp-2">
                        {produto.nome}
                      </h3>

                      <div>
                        <span className="text-grey-100/60 text-body-h5 line-through block mb-1">
                          {produto.precoAntigo}
                        </span>
                        <span className="bg-orange-200 text-black text-heading-h5 px-3 py-1 rounded-2xl inline-block">
                          {produto.precoAtual}
                        </span>
                      </div>

                      <p className="text-body-h5 text-grey-100 line-clamp-3">
                        {produto.descricao}
                      </p>

                      <div className="flex justify-center pt-2">
                        <button className="bg-orange-200 hover:bg-orange-100 text-black text-heading-h5 py-1 px-6 rounded-full cursor-pointer transition-colors">
                          Ver mais
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollNext}
            className="text-grey-100 hover:text-orange-200 transition-colors p-1 cursor-pointer"
            aria-label="Próximo - Seta Direita"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        <span className="text-grey-100 text-body-h3 mt-4">{paginaAtual}</span>
      </div>
    </section>
  );
};
import React from "react";
import { Rocket, Telescope, Award } from "lucide-react";

export const MissaoVisaoValores = () => {
  return (
    <section className="w-full px-6 py-12 md:py-4 bg-blue-100" >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 min-h-140">
        
        <div className="md:bg-linear-to-t from-[#14213D] to-[#0A111F] md:rounded-t-3xl  bg-linear-to-r from-[#14213D] to-[#0A111F] rounded-r-3xl p-8 md:p-10 flex flex-col items-center text-center justify-start">
          <div className="flex items-center gap-2 mb-4">
            <Rocket className="w-6 h-6 text-grey-100" />
            <h3 className=" md:text-heading-h3 text-heading-h4 text-grey-100">Missão</h3>
          </div>
          <p className="text-grey-100 md:text-body-h3 text-body-h4">
            Levar tecnologia de ponta e componentes de alta performance para
            transformar o setup dos nossos clientes com total segurança.
          </p>
        </div>

        <div className="md:bg-linear-to-b from-[#14213D] to-[#0A111F] md:rounded-b-3xl  bg-linear-to-l from-[#14213D] to-[#0A111F] rounded-l-3xl p-8 md:p-10 flex flex-col items-center text-center justify-center">
          <div className="flex items-center gap-2 mb-4">
            <Telescope className="w-6 h-6 text-grey-100" />
            <h3 className="md:text-heading-h3 text-heading-h4 text-grey-100">Visão</h3>
          </div>
          <p className="text-grey-100 md:text-body-h3 text-body-h4">
            Ser o e-commerce de hardware mais confiável e inovador do Brasil,
            reconhecido pela agilidade e excelência técnica.
          </p>
        </div>

        <div className="md:bg-linear-to-t from-[#14213D] to-[#0A111F] md:rounded-t-3xl bg-linear-to-r from-[#14213D] to-[#0A111F] rounded-r-3xl  p-8 md:p-10 flex flex-col items-center text-center justify-end">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-6 h-6 text-grey-100" />
            <h3 className="md:text-heading-h3 text-heading-h4 text-grey-100">Valores</h3>
          </div>
          <p className="text-grey-100 md:text-body-h3 text-body-h4">
            Transparência total na procedência, compromisso técnico com o cliente
            e paixão por entregar velocidade e máxima performance.
          </p>
        </div>

      </div>
    </section>
  );
};
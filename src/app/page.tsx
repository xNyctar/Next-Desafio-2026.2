import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-blue-200 text-grey-100 gap-2.5 ">
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
           <div className="w-full h-[1px] bg-grey-100 my-1"/>

          <p className="md:text-body-h3 text-body-h5 text-grey-100" >
            Encontre os componentes de hardware mais avançados do mercado para
            potencializar seus jogos, edições e projetos de alta exigência.
          </p>
              <div className="w-full flex md:justify-center justify-start">
          <button className="bg-orange-200 text-black hover:bg-orange-100 md:text-heading-h5 text-heading-h6 md:px-20 px-5 py-2.5 rounded-2xl cursor-pointer">
            Aproveite nossas ofertas
          </button>
          </div>
        </div>
      </section>
  
      <section>

      </section>


    </main>
  );
}

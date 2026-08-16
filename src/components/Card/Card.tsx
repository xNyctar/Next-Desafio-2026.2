import Image from "next/image";

export interface PostItem {
  id: number | string;
  nome: string;
  preco: string;
  descricao: string;
  imagem: string;
}

interface CardProps {
  post: PostItem;
}

export const Card = ({ post }: CardProps) => {
  return (
    <div className="bg-blue-200 rounded-4xl overflow-hidden flex flex-col justify-between h-full shadow-lg">

      <div className="bg-grey-100 w-full h-48 relative flex items-center justify-center p-4">
        <Image
          src={post.imagem}
          alt={post.nome}
          fill
          className="object-contain"
        />
      </div>

      <div className="p-5 flex flex-col justify-between gap-3 flex-1">
        <h3 className="text-grey-100  text-body-h5 md:text-body-h4 line-clamp-2">
          {post.nome}
        </h3>

        <div>
          <span className="bg-orange-200 text-black text-body-h5 md:text-heading-h6 p-2.5 rounded-3xl">
            {post.preco}
          </span>
        </div>

        <p className="text-grey-100 text-body-h5 line-clamp-3 ">
          {post.descricao}
        </p>

        <div className="flex justify-center pt-2">
          <button className="bg-orange-200 hover:bg-orange-100 text-black text-heading-h6 md:text-heading-h5 py-2 px-8 rounded-full cursor-pointer transition-colors">
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
};
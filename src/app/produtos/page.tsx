import { PaginaProdutos } from "@/src/components/PaginaProdutos";
import prisma from "@/src/lib/db";



export default async function ProdutoPage () {
    const produtos = await prisma.produto.findMany();

    return <PaginaProdutos produtos={produtos}/>
}
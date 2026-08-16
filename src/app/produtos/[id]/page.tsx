import { VisualizacaoIndividual } from "@/src/components/VisualizacaoIndividual";
import prisma from "@/src/lib/db";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }> | { id: string };
}

export default async function PageProduto({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const produto = await prisma.produto.findUnique({
    where: { id },
  });

  if (!produto) {
    notFound();
  }

  return <VisualizacaoIndividual produto={produto} />;
}
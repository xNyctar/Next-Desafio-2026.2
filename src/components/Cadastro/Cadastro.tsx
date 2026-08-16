"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Eye, EyeOff, CircleChevronLeft } from "lucide-react";
import { fazerCadastro } from "@/src/services/auth";

export const Cadastro = () => {
  const router = useRouter();
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro(null);

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    try {
      const resposta = await fazerCadastro({
        name: nomeUsuario,
        email,
        password: senha,
      });

      if (resposta.token) {
        localStorage.setItem("token", resposta.token);
      }

      router.push("/login");
    } catch (err: any) {
      setErro(err.message);
    }
  };

  return (
    <div className="min-h-screen max-h-256 w-full flex items-center justify-center p-4 md:p-10 relative bg-blue-200">
      <Image
        src="/fundo-login.png"
        alt="Fundo da Tela de Cadastro"
        fill
        priority
        className="object-cover object-center z-0"
      />

      <div className="bg-blue-100 text-grey-100 rounded-3xl p-6 md:p-10 w-full max-w-md md:max-w-2xl shadow-2xl z-10 relative">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <Link
            href="/login"
            className="text-grey-100 cursor-pointer shrink-0"
            aria-label="Voltar"
          >
            <CircleChevronLeft className="w-7 h-7 md:w-9 md:h-9" />
          </Link>

          <h1 className="text-center text-heading-h4 md:text-heading-h3 flex-1 pr-9 md:pr-11 font-bold">
            Crie sua conta
          </h1>
        </div>

        {erro && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500 text-red-200 rounded-xl text-center text-sm font-medium">
            {erro}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
          {/* Campo Nome de Usuário */}
          <div className="flex flex-col gap-1.5 md:gap-2">
            <label className="text-grey-100 text-body-h4 md:text-body-h3">
              Insira seu nome de usuário
            </label>
            <div className="flex items-center bg-grey-100 rounded-xl shadow-2xl shadow-black px-4 py-3 md:px-5 md:py-4 text-black">
              <User className="w-4 h-4 md:w-5 md:h-5 mr-3 shrink-0" />
              <input
                type="text"
                placeholder="Nome de usuário"
                value={nomeUsuario}
                onChange={(e) => setNomeUsuario(e.target.value)}
                className="w-full bg-transparent outline-none text-body-h4 md:text-body-h3 placeholder:text-black"
                required
              />
            </div>
          </div>

          {/* Campo Email */}
          <div className="flex flex-col gap-1.5 md:gap-2">
            <label className="text-grey-100 text-body-h4 md:text-body-h3">
              Insira seu email
            </label>
            <div className="flex items-center bg-grey-100 rounded-xl px-4 py-3 md:px-5 md:py-4 text-black">
              <Mail className="w-4 h-4 md:w-5 md:h-5 mr-3 shrink-0" />
              <input
                type="email"
                placeholder="Email do usuário"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent outline-none text-body-h4 md:text-body-h3 placeholder:text-black"
                required
              />
            </div>
          </div>

          {/* Campo Senha */}
          <div className="flex flex-col gap-1.5 md:gap-2">
            <label className="text-grey-100 text-body-h4 md:text-body-h3">
              Insira sua senha
            </label>
            <div className="relative flex items-center bg-grey-100 rounded-xl px-4 py-3 md:px-5 md:py-4 text-black">
              <Lock className="w-4 h-4 md:w-5 md:h-5 mr-3 shrink-0" />
              <input
                type={mostrarSenha ? "text" : "password"}
                placeholder="Senha de usuário"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full bg-transparent outline-none text-body-h4 md:text-body-h3 placeholder:text-black pr-8"
                required
              />
              <button
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="absolute right-3 bottom-2 md:right-4 md:bottom-2.5 hover:text-black focus:outline-none cursor-pointer shrink-0"
              >
                {mostrarSenha ? (
                  <Eye className="w-5 h-5" />
                ) : (
                  <EyeOff className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Campo Confirme sua Senha */}
          <div className="flex flex-col gap-1.5 md:gap-2">
            <label className="text-grey-100 text-body-h4 md:text-body-h3">
              Confirme sua senha
            </label>
            <div className="relative flex items-center bg-grey-100 rounded-xl px-4 py-3 md:px-5 md:py-4 text-black">
              <Lock className="w-4 h-4 md:w-5 md:h-5 mr-3 shrink-0" />
              <input
                type={mostrarConfirmarSenha ? "text" : "password"}
                placeholder="Confirme sua senha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                className="w-full bg-transparent outline-none text-body-h4 md:text-body-h3 placeholder:text-black pr-8"
                required
              />
              <button
                type="button"
                onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
                className="absolute right-3 bottom-2 md:right-4 md:bottom-2.5 hover:text-black focus:outline-none cursor-pointer shrink-0"
              >
                {mostrarConfirmarSenha ? (
                  <Eye className="w-5 h-5" />
                ) : (
                  <EyeOff className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Botão de Submit */}
          <div className="flex justify-center items-center px-0 md:px-12 mt-2">
            <button
              type="submit"
              className="w-full bg-orange-200 hover:bg-orange-100 text-black py-3.5 md:py-4 rounded-2xl transition-colors cursor-pointer shadow-2xl font-bold text-body-h3 md:text-body-h2 uppercase tracking-wide"
            >
              CRIAR CONTA
            </button>
          </div>

          <p className="text-center text-grey-100 text-body-h4 md:text-body-h3 mt-2">
            Já possui uma conta?{" "}
            <Link
              href="/login"
              className="text-orange-200 hover:text-orange-100 text-body-h4 md:text-body-h3 transition-colors font-semibold"
            >
              Faça login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
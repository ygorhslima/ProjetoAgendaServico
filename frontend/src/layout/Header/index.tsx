/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { usePathname } from "next/navigation";
import ButtonHamburger from "../ButtonHamburger";
import SearchBar from "../SearchBar";
import PropsHeader from "./PropsHeader";
import "./style.css";
export default function Header({ onToggleMenu }: PropsHeader) {
  const pathname: string = usePathname();

  const conteudos: any = {
    "/": {
      titulo: "Dashboard",
      desc: "Visão geral do sistema",
    },
    "/pacientes": {
      titulo: "Pacientes",
      desc: "Gerenciamento de pacientes cadastrados",
    },
    "/medicos": {
      titulo: "Médicos",
      desc: "Gerenciamento de profissionais de saúde",
    },
    "/agendamentos": {
      titulo: "Agendamentos",
      desc: "Gerenciamento de consultas e horários",
    },
    "/prontuarios": {
      titulo: "Prontuários",
      desc: "Histórico clínico dos pacientes",
    },
  };

  const atual = conteudos[pathname] || conteudos["/"];

  return (
    <header>
      <div className="div-title">
        <ButtonHamburger onClick={onToggleMenu} />
        <div>
          <h1>{atual.titulo}</h1>
          <p>{atual.desc}</p>
        </div>
      </div>
      <SearchBar />
    </header>
  );
}

"use client";
import { usePacientes } from "@/hooks/usePacientes";
import "./dashboard-style.css";
import { Stethoscope } from "lucide-react";
import { BsEnvelopePaper, BsPerson } from "react-icons/bs";
import { GrSchedule } from "react-icons/gr";
import useMedicos from "@/hooks/useMedicos";
import useAgendamentos from "@/hooks/useAgendamentos";
import { useProntuarios } from "@/hooks/useProntuarios";
import { useMemo } from "react";

export default function Dashboard() {
  const { pacientesFiltrados } = usePacientes("");
  const { medicosFiltrados } = useMedicos("");
  const { agendamentosFiltrados } = useAgendamentos("");
  const { prontuariosFiltrados } = useProntuarios("");

  // Lógica para calcular a contagem por especialidade
  const especialidadeRanking = useMemo(() => {
    const contagem: Record<string, number> = {};

    agendamentosFiltrados.forEach((agendamento) => {
      const medico = medicosFiltrados.find(
        (m) => m.id === agendamento.idMedico.id,
      );

      if (medico) {
        const esp = medico.especialidade;
        contagem[esp] = (contagem[esp] || 0) + 1;
      }
    });

    // Transforma o objeto em um array ordenado
    return Object.entries(contagem)
      .map(([nome, qtd]) => ({ nome, qtd }))
      .sort((a, b) => b.qtd - a.qtd); // Do mais procurado para o menos
  });

  return (
    <div className="container-dashboard">
      <div className="div-infos">
        <div className="div-infos-item">
          <div>
            <h3 className="title">Total de Pacientes</h3>
            <p className="info">{pacientesFiltrados.length}</p>
          </div>
          <BsPerson className="icon" />
        </div>
        <div className="div-infos-item">
          <div>
            <h3 className="title">Médicos Ativos</h3>
            <p className="info">{medicosFiltrados.length}</p>
          </div>
          <Stethoscope className="icon" />
        </div>
        <div className="div-infos-item">
          <div>
            <h3 className="title">Agendamentos Hoje</h3>
            <p className="info">{agendamentosFiltrados.length}</p>
          </div>
          <GrSchedule className="icon" />
        </div>
        <div className="div-infos-item">
          <div>
            <h3 className="title">Prontuários</h3>
            <p className="info">{prontuariosFiltrados.length}</p>
          </div>
          <BsEnvelopePaper className="icon" />
        </div>
      </div>

      <div className="container-especialidade">
        <h1 className="especialidade-title">Especialidades Mais Procuradas</h1>
        <div className="especialidade-list">
          {especialidadeRanking.map((item, index) => (
            <div key={index} className="especialidade-item">
              <div className="especialidade-info">
                <span className="especialidade-nome">{item.nome}</span>
                <span className="especialidade-qtd">{item.qtd} quantidade</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

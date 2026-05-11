"use client";
import "./dashboard-style.css";
import { Stethoscope } from "lucide-react";
import { BsEnvelopePaper, BsPerson } from "react-icons/bs";
import { GrSchedule } from "react-icons/gr";

export default function Dashboard() {
  return (
    <div className="container-dashboard">
      <div className="div-infos">
        <div className="div-infos-item">
          <div>
            <h3 className="title">Total de Pacientes</h3>
            <p className="info">1,234</p>
          </div>
          <BsPerson className="icon" />
        </div>
        <div className="div-infos-item">
          <div>
            <h3 className="title">Médicos Ativos</h3>
            <p className="info">45</p>
          </div>
          <Stethoscope className="icon" />
        </div>
        <div className="div-infos-item">
          <div>
            <h3 className="title">Agendamentos Hoje</h3>
            <p className="info">28</p>
          </div>
          <GrSchedule className="icon" />
        </div>
        <div className="div-infos-item">
          <div>
            <h3 className="title">Prontuários</h3>
            <p className="info">856</p>
          </div>
          <BsEnvelopePaper className="icon" />
        </div>
      </div>

      <div className="container-especialidade">
        <h1 className="especialidade-title">Especialidades Mais Procuradas</h1>
        <div className="especialidade-list">
          {[
            { nome: "Cardiologia", qtd: 245, width: "90%" },
            { nome: "Pediatria", qtd: 198, width: "75%" },
            { nome: "Ortopedia", qtd: 156, width: "60%" },
            { nome: "Dermatologia", qtd: 134, width: "50%" },
            { nome: "Neurologia", qtd: 89, width: "35%" },
          ].map((item, index) => (
            <div key={index} className="especialidade-item">
              <div className="especialidade-info">
                <span className="especialidade-nome">{item.nome}</span>
                <span className="especialidade-qtd">{item.qtd} consultas</span>
              </div>
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{ width: item.width }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

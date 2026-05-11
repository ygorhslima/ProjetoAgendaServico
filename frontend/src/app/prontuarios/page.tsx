import { BsEye } from "react-icons/bs";
import "./style-prontuarios.css";
import { FcDocument } from "react-icons/fc";

export default function Prontuarios() {
  const prontuarios = [
    {
      paciente: "João Silva",
      medico: "Dr. Carlos Santos",
      dataRegistro: "07 de maio de 2026",
      diagnostico: "Hipertensão arterial",
      descricaoClinica:
        "Paciente apresenta dor no peito e falta de ar. Pressão arterial: 140/90 mmHg.",
      tratamentoPrescrito: "Prescrição de Losartana 50mg 1x ao dia",
    },
    {
      paciente: "Maria Oliveira",
      medico: "Dra. Ana Costa",
      dataRegistro: "06 de maio de 2026",
      diagnostico: "Infecção viral das vias aéreas superiores",
      descricaoClinica:
        "Criança com febre de 38.5°C, tosse seca e congestão nasal há 2 dias.",
      tratamentoPrescrito: "Repouso, hidratação e antitérmico se necessário",
    },
  ];

  const styleDiv1 = {
    backgroundColor: "#F8F8FC",
    width: "100%",
    padding: "10px",
  };

  const styleDiv2 = {
    backgroundColor: "#EEF4FF",
    width: "100%",
    padding: "10px",
  };

  return (
    <section>
      <div className="header-pages">
        <span>Total de {prontuarios.length} prontuários registrados</span>
        <button className="btn_add">+ Novo Prontuário</button>
      </div>

      <div className="container-prontuarios">
        {prontuarios.map((item, index) => (
          <article key={index} className="item">
            <div className="header-prontuarios">
              <div>
                <h2>
                  <FcDocument />
                  {item.paciente}
                </h2>
                <p>{item.medico}</p>
              </div>
              <button>
                <BsEye />
              </button>
            </div>

            <div className="infos">
              <div>
                <strong>Data do Registro</strong>
                <p>{item.dataRegistro}</p>
              </div>
              <div>
                <strong>Diagnóstico</strong>
                <p>{item.diagnostico}</p>
              </div>
            </div>

            <div className="infos">
              <div style={styleDiv1}>
                <strong>Descrição Clínica</strong>
                <p>{item.descricaoClinica}</p>
              </div>

              <div style={styleDiv2}>
                <strong style={{ color: "#96B7FC", fontWeight: "bold" }}>
                  Tratamento Prescrito
                </strong>
                <p>{item.tratamentoPrescrito}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

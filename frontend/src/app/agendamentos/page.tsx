import FormAgendamento from "./FormAgendamento";

export default function Agendamentos() {
  const agendamentos = [
    {
      paciente: "João Silva",
      medico: "Dr. Carlos Santos",
      especialidade: "Cardiologia",
      data: "09/05/2026",
      hora: "09:00",
      status: "Agendado",
    },
    {
      paciente: "Maria Oliveira",
      medico: "Dra. Ana Costa",
      especialidade: "Pediatria",
      data: "09/05/2026",
      hora: "10:30",
      status: "Agendado",
    },
    {
      paciente: "Pedro Santos",
      medico: "Dr. Lucas Ferreira",
      especialidade: "Ortopedia",
      data: "09/05/2026",
      hora: "14:00",
      status: "Realizado",
    },
    {
      paciente: "Ana Paula",
      medico: "Dra. Beatriz Lima",
      especialidade: "Dermatologia",
      data: "10/05/2026",
      hora: "09:30",
      status: "Agendado",
    },
  ];

  return (
    <>
      <section>
        <div className="header-pages">
          <span>Total de {agendamentos.length} agendamentos</span>
          <button className="btn_add">+ Novo Agendamento</button>
        </div>
        <div className="container-table">
          <table>
            <thead>
              <tr>
                <th className="th-ini">PACIENTE</th>
                <th>MÉDICO</th>
                <th>ESPECIALIDADE</th>
                <th>DATA/HORA</th>
                <th>STATUS</th>
                <th className="th-fim">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {agendamentos.map((item, index) => (
                <tr key={index}>
                  <td>{item.paciente}</td>
                  <td>{item.medico}</td>
                  <td>{item.especialidade}</td>
                  <td>
                    {item.data} às {item.hora}
                  </td>
                  <td>
                    <span>{item.status}</span>
                  </td>
                  <td>
                    <button className="btn-edit">Editar</button>
                    <button className="btn-delete">Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
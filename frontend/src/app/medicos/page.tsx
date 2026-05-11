export default function Medicos() {
  const medicos = [
    {
      nome: "Dr. Carlos Santos",
      crm: "CRM/SP 123456",
      especialidade: "Cardiologia",
      telefone: "(11) 98888-7777",
      email: "carlos@clinica.com",
    },
    {
      nome: "Dra. Ana Costa",
      crm: "CRM/SP 234567",
      especialidade: "Pediatria",
      telefone: "(11) 97777-6666",
      email: "ana@clinica.com",
    },
    {
      nome: "Dr. Lucas Ferreira",
      crm: "CRM/SP 345678",
      especialidade: "Ortopedia",
      telefone: "(11) 96666-5555",
      email: "lucas@clinica.com",
    },
    {
      nome: "Dra. Beatriz Lima",
      crm: "CRM/SP 456789",
      especialidade: "Dermatologia",
      telefone: "(11) 95555-4444",
      email: "beatriz@clinica.com",
    },
  ];

  return (
    <>
      <section>
        <div className="header-pages">
          <span>Total de {medicos.length} médicos cadastrados</span>
          <button className="btn_add">+ Novo Médico</button>
        </div>
        <div className="container-table">
          <table>
            <thead>
              <tr>
                <th className="th-ini">NOME</th>
                <th>CRM</th>
                <th>ESPECIALIDADE</th>
                <th>TELEFONE</th>
                <th>EMAIL</th>
                <th className="th-fim">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {medicos.map((medico, index) => (
                <tr key={index}>
                  <td>{medico.nome}</td>
                  <td>{medico.crm}</td>
                  <td>
                    <span className="especialidade-badge">
                      {medico.especialidade}
                    </span>
                  </td>
                  <td>{medico.telefone}</td>
                  <td>{medico.email}</td>
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

"use client";
import { useSearch } from "@/context/SearchContext";
import useMedicos from "@/hooks/useMedicos";
import SearchBar from "@/layout/SearchBar";
import { useParams } from "next/navigation";

export default function Medicos() {
  const { searchTerm, setSearchTerm } = useSearch();
  const { id } = useParams();
  const { medicosFiltrados, loading } = useMedicos(searchTerm, id);

  if (loading) return <p>Carregando dados de médicos...</p>;

  return (
    <>
      <section>
        <div className="header-pages">
          <span>Total de {medicosFiltrados.length} médicos cadastrados</span>
          <button className="btn_add">+ Novo Médico</button>
          <SearchBar onSearch={setSearchTerm} searchTerm={searchTerm}/>
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
              {medicosFiltrados.map((medico, index) => (
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

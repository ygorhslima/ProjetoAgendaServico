"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsEye, BsPen } from "react-icons/bs";
import "./style-prontuarios.css";
import { FcDocument } from "react-icons/fc";
import { useSearch } from "@/context/SearchContext";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useProntuarios } from "@/hooks/useProntuarios";
import type Prontuarios from "@/interfaces/Prontuario";
import FormProntuarios from "./FormProntuarios";
import SearchBar from "@/layout/SearchBar";

export default function Prontuarios() {
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

  const { searchTerm, setSearchTerm } = useSearch();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prontuariosSelecionado, setProntuariosSelecionado] =
    useState<Prontuarios | null>(null);

  const {
    prontuariosFiltrados,
    loading,
    criarProntuario,
    excluirProntuario,
    editarProntuario,
  } = useProntuarios(searchTerm, id);

  if (loading) return <p>Carregando dados de prontuários...</p>;

  const handleCriar = () => {
    setProntuariosSelecionado(null);
    setIsModalOpen(true);
  };

  const handleEditar = (prontuarios: Prontuarios) => {
    setProntuariosSelecionado(prontuarios);
    setIsModalOpen(true);
  };

  const handleSalvarProntuarios = async (dados: Omit<Prontuarios, "id">) => {
    let sucesso = false;
    if (prontuariosSelecionado) {
      const { id, ...dadosSemId } = dados as any;
      sucesso = await editarProntuario(prontuariosSelecionado.id, dadosSemId);
    } else {
      sucesso = await criarProntuario(dados);
    }
    if (sucesso) {
      setIsModalOpen(false); // Fecha o modal após salvar com sucesso
    }
    return sucesso;
  };

  return (
    <>
      <section>
        <div className="header-pages">
          <span>
            Total de {prontuariosFiltrados.length} prontuários registrados
          </span>
          <button className="btn_add" onClick={handleCriar}>
            + Novo Prontuário
          </button>
          <SearchBar onSearch={setSearchTerm} searchTerm={searchTerm} />
        </div>

        <div className="container-prontuarios">
          {prontuariosFiltrados.map((item) => {
            console.log("Dados do prontuario:", item);
            return (
              <article key={item.id} className="item">
                <div className="header-prontuarios">
                  <div>
                    <h2>
                      <FcDocument />
                      {item.pacienteid?.nome || item.idPaciente?.nome || "Paciente s/ nome"}
                    </h2>
                    <p>{item.medicoid?.nome || item.idMedico?.nome || "Médico s/ nome"}</p>
                  </div>
                  <button onClick={() => handleEditar(item)}>
                    <BsPen />
                  </button>
                </div>
  
                <div className="infos">
                  <div>
                    <strong>Data do Registro</strong>
                    <p>{item.dataregistro}</p>
                  </div>
                </div>
  
                <div className="infos">
                  <div style={styleDiv1}>
                    <strong>Descrição Clínica</strong>
                    <p>{item.descricaoclinica}</p>
                  </div>
  
                  <div style={styleDiv2}>
                    <strong style={{ color: "#96B7FC", fontWeight: "bold" }}>
                      Tratamento Prescrito
                    </strong>
                    <p>{item.tratamentoprescrito}</p>
                  </div>
                </div>
              </article>
            )}
          )}
        </div>
      </section>
      <FormProntuarios
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSalvarProntuarios}
        prontuariosParaEditar={prontuariosSelecionado}
      />
    </>
  );
}

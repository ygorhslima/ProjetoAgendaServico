"use client";

import { useState } from "react";
import FormPaciente from "./FormPaciente";

export default function Pacientes() {
  const pacientes = [
    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      nascimento: "14/05/1985",
      telefone: "(11) 98765-4321",
      convenio: "Unimed",
    },
    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      nascimento: "14/05/1985",
      telefone: "(11) 98765-4321",
      convenio: "Unimed",
    },
    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      nascimento: "14/05/1985",
      telefone: "(11) 98765-4321",
      convenio: "Unimed",
    },
    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      nascimento: "14/05/1985",
      telefone: "(11) 98765-4321",
      convenio: "Unimed",
    },
    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      nascimento: "14/05/1985",
      telefone: "(11) 98765-4321",
      convenio: "Unimed",
    },
    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      nascimento: "14/05/1985",
      telefone: "(11) 98765-4321",
      convenio: "Unimed",
    },
    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      nascimento: "14/05/1985",
      telefone: "(11) 98765-4321",
      convenio: "Unimed",
    },
    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      nascimento: "14/05/1985",
      telefone: "(11) 98765-4321",
      convenio: "Unimed",
    },
    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      nascimento: "14/05/1985",
      telefone: "(11) 98765-4321",
      convenio: "Unimed",
    },
    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      nascimento: "14/05/1985",
      telefone: "(11) 98765-4321",
      convenio: "Unimed",
    },
    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      nascimento: "14/05/1985",
      telefone: "(11) 98765-4321",
      convenio: "Unimed",
    },
    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      nascimento: "14/05/1985",
      telefone: "(11) 98765-4321",
      convenio: "Unimed",
    },
    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      nascimento: "14/05/1985",
      telefone: "(11) 98765-4321",
      convenio: "Unimed",
    },
    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      nascimento: "14/05/1985",
      telefone: "(11) 98765-4321",
      convenio: "Unimed",
    },
    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      nascimento: "14/05/1985",
      telefone: "(11) 98765-4321",
      convenio: "Unimed",
    },
    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      nascimento: "14/05/1985",
      telefone: "(11) 98765-4321",
      convenio: "Unimed",
    },
    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      nascimento: "14/05/1985",
      telefone: "(11) 98765-4321",
      convenio: "Unimed",
    },
    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      nascimento: "14/05/1985",
      telefone: "(11) 98765-4321",
      convenio: "Unimed",
    },
    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      nascimento: "14/05/1985",
      telefone: "(11) 98765-4321",
      convenio: "Unimed",
    },

    {
      nome: "João Silva",
      cpf: "123.456.789-00",
      nascimento: "14/05/1985",
      telefone: "(11) 98765-4321",
      convenio: "Unimed",
    },
    {
      nome: "Maria Oliveira",
      cpf: "987.654.321-00",
      nascimento: "21/08/1990",
      telefone: "(11) 91234-5678",
      convenio: "Bradesco Saúde",
    },
    {
      nome: "Pedro Santos",
      cpf: "456.789.123-00",
      nascimento: "09/12/1978",
      telefone: "(11) 99876-5432",
      convenio: "Particular",
    },
    {
      nome: "Ana Paula",
      cpf: "321.654.987-00",
      nascimento: "29/03/1995",
      telefone: "(11) 97654-3210",
      convenio: "SulAmérica",
    },
  ];

  return (
    <>
      <section>
        <div className="header-pages">
          <span>Total de {pacientes.length} pacientes cadastrados</span>
          <button className="btn_add">+ Novo Paciente</button>
        </div>

        <div className="container-table">
          <table>
            <thead>
              <tr>
                <th className="th-ini">NOME</th>
                <th>CPF</th>
                <th>DATA NASCIMENTO</th>
                <th>TELEFONE</th>
                <th>CONVÊNIO</th>
                <th className="th-fim">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {pacientes.map((paciente, index) => (
                <tr key={index}>
                  <td>{paciente.nome}</td>
                  <td>{paciente.cpf}</td>
                  <td>{paciente.nascimento}</td>
                  <td>{paciente.telefone}</td>
                  <td>{paciente.convenio}</td>
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

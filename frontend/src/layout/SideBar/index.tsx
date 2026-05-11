"use client";

import Link from "next/link";
import "./style.css";
import PropsSideBar from "./PropsSideBar";

import { ROUTES } from "@/constants/routes";
import { BiPaperPlane, BiSolidHome } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { CiMedicalCase } from "react-icons/ci";
import { Calendar } from "lucide-react";

export default function SideBar({ isOpen }: PropsSideBar) {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="logo">
        <h1 style={{ color: "black" }}>ClínicaCare</h1>
        <p style={{ color: "black" }}>Sistema de Gestão</p>
      </div>

      <div className="div-content">
        <div className="view-link">
          <Link href={`${ROUTES.DASHBOARD}`} className="link">
            <BiSolidHome className="link-icon" />
            Dashboard
          </Link>
        </div>

        <div className="view-link">
          <Link href={`${ROUTES.PACIENTES}`} className="link">
            <BsPerson className="link-icon" />
            Pacientes
          </Link>
        </div>

        <div className="view-link">
          <Link href={`${ROUTES.MEDICOS}`} className="link">
            <CiMedicalCase className="link-icon" />
            Médicos
          </Link>
        </div>

        <div className="view-link">
          <Link href={`${ROUTES.AGENDAMENTOS}`} className="link">
            <Calendar className="link-icon" />
            Agendamentos
          </Link>
        </div>

        <div className="view-link">
          <Link href={`${ROUTES.PRONTUARIOS}`} className="link">
            <BiPaperPlane className="link-icon" />
            Prontuários
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client"

import { MenuSquare } from "lucide-react";
import PropsButtonHamburger from "./PropsButtonHamburger";

export default function ButtonHamburger({onClick}:PropsButtonHamburger){
    return(
        <button onClick={onClick}>
            <MenuSquare color="black"/>
        </button>
    )
}
"use client"

import "./globals.css";
import SideBar from "@/layout/SideBar";
import Header from "@/layout/Header";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const onToggleMenu = () => setIsSideBarOpen(!isSideBarOpen);
  return (
    <html lang="pt-br">
      <body>
        <div className="layout-wrapper">
          <SideBar isOpen={isSideBarOpen} />
          <div className="wrapper">
            <Header onToggleMenu={onToggleMenu}/>
            <main>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

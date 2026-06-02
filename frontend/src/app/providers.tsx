"use client";
import { SearchProvider } from "@/context/SearchContext";
import { ReactNode, useState } from "react";
import SideBar from "@/layout/SideBar";
import Header from "@/layout/Header";

export function Providers({ children }: { children: ReactNode }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const onToggleMenu = () => setIsSideBarOpen(!isSideBarOpen);
  return (
    <SearchProvider>
      <div className="layout-wrapper">
        <SideBar isOpen={isSideBarOpen} />
        <div className="wrapper">
          <Header onToggleMenu={onToggleMenu}/>
          <main>{children}</main>
        </div>
      </div>
    </SearchProvider>
  );
}
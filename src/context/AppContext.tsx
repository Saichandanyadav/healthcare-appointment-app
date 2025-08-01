import React, { createContext, useState, ReactNode } from "react";
import type { Doctor } from "../types/doctor";
import doctorData from "../data/doctors.json";

type AppContextType = {
  doctors: Doctor[];
  setDoctors: React.Dispatch<React.SetStateAction<Doctor[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [doctors, setDoctors] = useState<Doctor[]>(doctorData as Doctor[]);
  const [search, setSearch] = useState("");

  return (
    <AppContext.Provider value={{ doctors, setDoctors, search, setSearch }}>
      {children}
    </AppContext.Provider>
  );
};
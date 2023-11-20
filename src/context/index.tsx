"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Media } from "@/types";

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

type GlobalCreateContext = {
  mediaData: Array<Media> | [];
  setMediaData: (val: any) => void;
};

export const GlobalContext = createContext<GlobalCreateContext | null>(null);

const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
  const [mediaData, setMediaData] = useState<Array<Media> | []>([]);

  return <GlobalContext.Provider value={{ mediaData, setMediaData }}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;

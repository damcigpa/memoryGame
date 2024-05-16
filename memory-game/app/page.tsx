'use client'

import { AppProvider } from "@/Contexts/AppContext";
import { Component } from "@/Componenst/Component";

export default function Home() {
  return (
    <AppProvider>
      <Component />
    </AppProvider>
  );
}


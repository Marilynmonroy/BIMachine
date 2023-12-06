"use client";

import Brands from "@/components/Brands";
import Features from "@/components/Features";
import Principal from "@/components/Principal";
import Multiplataform from "@/components/Multiplataform";
import Partner from "@/components/Partner";
import What from "@/components/What";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex min-h-screen bg-surface-500 flex-col justify-between p-24">
        <Principal />
        <What />
        <Partner />
        <Features />
        <Multiplataform />
        <Brands />
      </main>
    </NextUIProvider>
  );
}

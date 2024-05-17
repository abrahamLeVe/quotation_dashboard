"use client";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <Toaster /> {children}
    </SessionProvider>
  );
}

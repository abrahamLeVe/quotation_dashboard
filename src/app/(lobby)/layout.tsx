"use client";
import { Suspense } from "react";
import { ModeToggle } from "@/components/mode-toggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="px-1 md:container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0 h-full overflow-y-auto">
      <div
        className="absolute inset-0 h-full w-full lg:relative lg:flex dark:border-r -z-10"
        style={{
          backgroundImage: `url(auth.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="fixed top-2 right-2">
        <ModeToggle />
      </div>

      <Suspense>{children}</Suspense>
    </main>
  );
}

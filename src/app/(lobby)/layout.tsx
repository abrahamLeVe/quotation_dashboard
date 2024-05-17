import { Suspense } from "react";
import { ModeToggle } from "@/components/mode-toggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="md:container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0 ">
      <div
        className="relative hidden h-full w-full lg:flex dark:border-r"
        style={{
          backgroundImage: `url(auth.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="fixed top-2 right-2">
        <ModeToggle />
      </div>
      <>
        <Suspense>{children}</Suspense>
      </>
    </main>
  );
}

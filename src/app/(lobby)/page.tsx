import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import SigninForm from "./components/AuthForm";

export default function SigninPage({
  searchParams,
}: {
  searchParams: {
    callbackUrl?: string;
    error?: string;
  };
}) {
  return (
    <Card className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Iniciar sesión</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <SigninForm searchParams={searchParams} />
      </CardContent>
    </Card>
  );
}

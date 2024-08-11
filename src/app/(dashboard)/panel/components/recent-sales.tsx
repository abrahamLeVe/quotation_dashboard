import { paymentsData } from "@/app/services/payment.service";
import SalesSummary from "@/components/panel/SalesSummary";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export async function RecentSales() {
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const startDate = firstDayOfMonth.toISOString().split("T")[0];
  const endDate = lastDayOfMonth.toISOString().split("T")[0];

  const response = await paymentsData(startDate, endDate);

  // Extraer datos y formatear
  const payments = response.data || [];

  return (
    <div className="space-y-8">
      {payments.map((payment) => {
        const { id, attributes } = payment;
        const { payment_id, amount, createdAt, cotizacion, user } = attributes;
        const userInfo = user?.data?.attributes;
        const cotizacionInfo = cotizacion?.data?.attributes;
        const initials = `${userInfo?.username.charAt(0).toUpperCase() ?? ""}`;

        return (
          <div
            key={id}
            className="flex flex-col  p-4  border rounded-md shadow-sm"
          >
            <div className="flex items-start space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap-reverse">
                  <div>
                    <p className="text-sm font-medium">
                      {userInfo?.username || "Unknown User"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {userInfo?.email || "No Email"}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-green-600">
                    +S/.{amount.toFixed(2)}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">
                  Payment ID: {payment_id}
                </p>
                <p className="text-xs text-muted-foreground">
                  Fecha: {new Date(createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-2 gap-2">
              <SalesSummary products={cotizacionInfo?.products} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

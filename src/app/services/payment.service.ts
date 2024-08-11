import { fetchDataFromApi } from "@/lib/api";
import { Payments } from "@/models/payment.model";
let qs = require("qs");

export const paymentsData = async (
  startDate: string,
  endDate: string
): Promise<Payments> => {
  const query = qs.stringify(
    {
      populate: "*",
      sort: "createdAt:DESC",
      pagination: {
        page: 1,
        pageSize: 999,
      },
      filters: {
        createdAt: {
          $gte: startDate,
          $lte: endDate,
        },
      },
    },
    { addQueryPrefix: true }
  );

  const res = await fetchDataFromApi(`/api/payments${query}`);
  return res;
};

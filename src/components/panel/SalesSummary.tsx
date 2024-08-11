"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Product } from "@/models/payment.model";

interface PaymentProps {
  products: Product[];
}

export default function SalesSummary({ products }: PaymentProps) {
  const calculateTotal = (field: string) => {
    let total = 0;
    products.forEach((product) => {
      if (field === "quantity") {
        total += product.quantity;
      } else if (field === "size" && product.size) {
        total += 1;
      } else if (field === "color" && product.colors.length) {
        product.colors.forEach((color) => {
          total += color.quantity;
        });
      }
    });
    return total;
  };

  return (
    <>
      {products.length > 0 ? (
        <div className="sticky h-full w-full">
          <div className="flex flex-col gap-2">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">
                  Resumen de productos
                </AccordionTrigger>
                <AccordionContent>
                  <Table>
                    <TableCaption>{`Existen ${
                      products.length
                    } productos en total, con ${calculateTotal(
                      "quantity"
                    )} unidades de productos y ${
                      calculateTotal("size") > 0 ? calculateTotal("size") : "-"
                    } medidas especificadas.`}</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Producto</TableHead>
                        <TableHead>Cantidad y Precio unitario</TableHead>
                        <TableHead>Medida</TableHead>
                        <TableHead>Color</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map((product) => (
                        <TableRow key={product.id}>
                          <Tooltip>
                            <TooltipTrigger>
                              <TableCell>
                                <img
                                  src={product.picture_url}
                                  alt={product.title}
                                  className="w-20 object-cover object-center"
                                  loading="lazy"
                                />
                              </TableCell>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{product.title}</p>
                            </TooltipContent>
                          </Tooltip>
                          <TableCell>
                            {product.quantity} - S/.{product.value.toFixed(2)}
                          </TableCell>
                          <TableCell>{product.size || "-"}</TableCell>
                          <TableCell>
                            {product.colors.length > 0
                              ? product.colors.map((color) => (
                                  <div
                                    key={color.id}
                                    className="flex items-center gap-2"
                                  >
                                    <span
                                      className="block w-4 h-4 rounded-full"
                                      style={{
                                        backgroundColor:
                                          color.color.attributes.code,
                                      }}
                                    />
                                    <span>{color.color.attributes.name}</span>
                                    <span className="text-xs text-gray-500">
                                      {color.quantity}
                                    </span>
                                  </div>
                                ))
                              : "-"}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                    <TableFooter>
                      <TableRow>
                        <TableCell colSpan={1}>Total</TableCell>
                        <TableCell>{calculateTotal("quantity")}</TableCell>
                        <TableCell>{calculateTotal("size") || "-"}</TableCell>
                        <TableCell>{calculateTotal("color") || "-"}</TableCell>
                      </TableRow>
                    </TableFooter>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      ) : null}
    </>
  );
}

export interface Payments {
  data: Payment[];
  meta: Meta;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Payment {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
  payment_id: string;
  amount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  user: User;
  cotizacion: Cotizacion;
}

interface Cotizacion {
  data: Data2;
}

interface Data2 {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  email: string;
  name: string;
  direction: string;
  phone: string;
  dayLimit: number;
  details: null;
  notes: string;
  dateLimit: string;
  codeStatus: string;
  products: Product[];
  tipe_doc: string;
  location: Location;
  num_doc: string;
}

interface Location {
  distrito: string;
  provincia: string;
  departamento: string;
}

interface Product {
  id: number;
  size: null | null | string | string;
  slug: string;
  title: string;
  value: number;
  colors: Color2[][];
  discount: number;
  quantity: number;
  picture_url: string;
}

interface Color2 {
  id: number;
  color: Color;
  quantity: number;
}

interface Color {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  code: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  publishedAt: string;
}

interface User {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  observer: boolean;
}

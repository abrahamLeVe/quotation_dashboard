export interface AuthInterface {
  jwt: string;
  user: User;
}

export interface loginUserPromps {
  identifier: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  observer: boolean;
  role: Role;
  quotations: Quotation[];
  payments: Payment[];
}

interface Payment {
  id: number;
  payment_id: string;
  amount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Quotation {
  id: number;
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
  size: null | string;
  slug: string;
  title: string;
  value: number;
  colors: Color2[];
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
  attributes: Attributes;
}

interface Attributes {
  code: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  publishedAt: string;
}

interface Role {
  id: number;
  name: string;
  description: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

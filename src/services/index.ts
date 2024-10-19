import axios from "axios";

export interface Shipping {
  orderId: string;
  name: string;
  emailAddress: string;
  category: string;
  weight: string;
  fee: number;
  status: string;
  date: string;
}

export const shippings: Shipping[] = [
  {
    orderId: "#DR3E4478",
    name: "Olivia Rhye",
    emailAddress: "olivia@untitledui.com",
    category: "Food",
    weight: "4kg",
    fee: 4000,
    status: "Delivered",
    date: "09-sept-24",
  },
  {
    orderId: "#POS5TIJY",
    name: "Phoenix Baker",
    emailAddress: "phoenix@untitledui.com",
    category: "Electronic",
    weight: "50kg",
    fee: 24000,
    status: "Pending",
    date: "13-sept-24",
  },
  {
    orderId: "#HQY56H1W",
    name: "Lana Steiner",
    emailAddress: "lana@untitledui.com",
    category: "Furniture",
    weight: "40kg",
    fee: 5000,
    status: "Failed",
    date: "03-Oct-24",
  },
  {
    orderId: "#OP1J2EQ1",
    name: "Demi Wilkinson",
    emailAddress: "demi@untitledui.com",
    category: "Food",
    weight: "2kg",
    fee: 2000,
    status: "Shipping",
    date: "02-Nov-24",
  },
  {
    orderId: "#IOP34HRT",
    name: "Candice Wu",
    emailAddress: "candice@untitledui.com",
    category: "Clothing",
    weight: "1kg",
    fee: 3000,
    status: "Pending",
    date: "16-Nov-24",
  },
  // ...
];

type TResponse = {
  status: boolean;
  message: string;
};

type TLoginResponse = {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  phone_number: string;
  email: string;
  website: string;
  address: string;
  reg_number: string;
  country: string;
  webhook_url: string;
  verification_url: string;
  active: boolean;
  logo: string;
  sandbox_credential: {
    secret_key: string;
    public_key: string;
  };
  production_credential: {
    secret_key: string;
    public_key: string;
  };
  token: string;
};

const API = axios.create({ baseURL: "https://api.zipkod.ng" });

export const login = (payload: { email: string; password: string }) => {
  return API.post<TResponse & { data: TLoginResponse }>(
    "/business/login",
    payload
  );
};

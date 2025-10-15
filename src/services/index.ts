import { token } from "@/utils";
import axios from "axios";

// export interface Shipping {
//   orderId: string;
//   amount: number;
//   category: string;
//   created_at: string;
//   description: string;
//   drop_off_location: string;
//   id: string;
//   org_id: string;
//   pickup_location: string;
//   pickup_option: string;
//   recipient_address: string;
//   recipient_email: string;
//   recipient_name: string;
//   recipient_phone: string;
//   shipment_ref: string;
//   status: string;
//   updated_at: string;
//   user_id: string;
//   weight: number;

// }

export interface Shipping {
  id: string;
  recipient_name: string;
  recipient_email: string;
  category: string;
  weight: number;
  amount: number;
  status: string;
  created_at: string;
}

export const shippings = [
  {
    orderId: "#DR3E4478",
    name: "Olivia Rhye",
    emailAddress: "olivia@untitledui.com",
    category: "Food",
    weight: "4kg",
    fee: 4000,
    status: "Delivered",
    date: "09-Sept-24",
  },
  {
    orderId: "#POS5TIJY",
    name: "Phoenix Baker",
    emailAddress: "phoenix@untitledui.com",
    category: "Electronic",
    weight: "50kg",
    fee: 24000,
    status: "Pending",
    date: "13-Sept-24",
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

export type TResponse<T> = {
  statusCode: number;
  message: string;
  data: T;
};

// Business Type
export type BusinessType = {
  label: string;
  value: string;
};

// List of business types
export const businessOptions: BusinessType[] = [
  { label: "Sole Proprietorship", value: "sole_proprietorship" },
  { label: "Partnership", value: "partnership" },
  { label: "Limited Liability Company (LLC)", value: "llc" },
  { label: "Corporation (C Corp)", value: "corporation_c_corp" },
  { label: "S Corporation (S Corp)", value: "s_corporation" },
  { label: "Nonprofit Organization", value: "nonprofit" },
  { label: "Franchise", value: "franchise" },
  { label: "Cooperative", value: "cooperative" },
  { label: "Joint Venture", value: "joint_venture" },
  { label: "Holding Company", value: "holding_company" },
  { label: "Freelance/Independent Contractor", value: "freelance" },
  { label: "E-commerce Store", value: "ecommerce_store" },
  { label: "Brick-and-Mortar Retail", value: "brick_and_mortar_retail" },
  { label: "Online Marketplace Seller", value: "online_marketplace_seller" },
  { label: "Manufacturing", value: "manufacturing" },
  { label: "Wholesale Distributor", value: "wholesale_distributor" },
  { label: "Service-Based Business", value: "service_based" },
  { label: "Consulting Firm", value: "consulting_firm" },
  { label: "Startup", value: "startup" },
  { label: "Tech Company", value: "tech_company" },
  { label: "Real Estate Agency", value: "real_estate_agency" },
  { label: "Import/Export Business", value: "import_export" },
  { label: "Dropshipping Business", value: "dropshipping" },
  { label: "Home-Based Business", value: "home_based" },
  { label: "Subscription Box Business", value: "subscription_box" },
];

// type TLoginResponse = {
//   id: string;
//   created_at: string;
//   updated_at: string;
//   name: string;
//   phone_number: string;
//   email: string;
//   website: string;
//   address: string;
//   reg_number: string;
//   country: string;
//   webhook_url: string;
//   verification_url: string;
//   active: boolean;
//   logo: string;
//   sandbox_credential: {
//     secret_key: string;
//     public_key: string;
//   };
//   production_credential: {
//     secret_key: string;
//     public_key: string;
//   };
//   token: string;
// };

export type TNullable<T> = T | null;

type TUser = {
  id: string;
  org_id: TNullable<string>;
  username: TNullable<string>;
  first_name: string;
  last_name: string;
  email: string;
  profile_image: TNullable<string>;
  has_onboarded: boolean;
  created_at: string;
  updated_at: string;
  is_active: boolean;
};

const endpoints = {
  login: "/auth/login",
  signup: "/auth/signup",
  get_user_profile: "/users/me",
  activate_account: (code: string) => `/users/activate/${code}`,
  forgot_password: "/auth/forgot-password",
  validate_reset_token: (token: string) =>
    `/auth/validate-reset-token/${token}`,
  reset_password: (token: string) => `/auth/reset-password/${token}`,
};

export const API = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

API.interceptors.request.use((config) => {
  if (token.getToken()) {
    config.headers.Authorization = `Bearer ${token.getToken()}`;
  }

  return config;
});

// API.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 401) {
//       token.logout();
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

export const login = (payload: { email: string; password: string }) => {
  return API.post<TResponse<TUser & { token: string }>>(
    endpoints.login,
    payload
  );
};

type TSignupPayload = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
};

export const signup = (payload: TSignupPayload) => {
  return API.post<TResponse<TUser & { activation_code: string }>>(
    endpoints.signup,
    payload
  );
};

//PickaTestApp2305

export const getUserProfile = () => {
  return API.get<TResponse<TUser>>(endpoints.get_user_profile);
};

export const activateAccount = (code: string) => {
  return API.put(endpoints.activate_account(code));
};

// Forgot Password API functions
export const forgotPassword = (email: string) => {
  return API.post<TResponse<null>>(endpoints.forgot_password, { email });
};

export const validateResetToken = (token: string) => {
  return API.get<
    TResponse<{ first_name: string; last_name: string; email: string }>
  >(endpoints.validate_reset_token(token));
};

export const resetPassword = (
  token: string,
  password: string,
  confirmPassword: string
) => {
  return API.post<TResponse<null>>(endpoints.reset_password(token), {
    password,
    confirm_password: confirmPassword,
  });
};

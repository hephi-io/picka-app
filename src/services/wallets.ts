import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_PAYMENT_BASE_URL,
});

const endpoints = {
  get_wallets: `/api/wallet`,
};

export const getWallets = (userId: string) => {
  return API.get(endpoints.get_wallets, {
    headers: {
      "x-user-id": userId,
    },
  });
};

import axios from "axios";

const endpoints = {
  initialize_transaction: "/api/paystack/initialize",
  add_card: "/api/addCard",
};

const API = axios.create({
  baseURL: import.meta.env.VITE_API_PAYMENT_BASE_URL,
});

type IInitializeTransactionResponse = {
  authorization_url: string;
  access_code: string;
  reference: string;
};

export const initializeTransaction = (email = "test@example.com") => {
  return API.post<{ data: IInitializeTransactionResponse }>(
    endpoints.initialize_transaction,
    {
      email,
    }
  );
};

export const addCard = (paymentReference: string) => {
  return API.post(endpoints.add_card, { paymentReference });
};

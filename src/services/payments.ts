import axios from "axios";

const endpoints = {
  initialize_transaction: "/api/payments/initialize",
  add_card: "/api/cards",
};

const API = axios.create({
  baseURL: import.meta.env.VITE_API_PAYMENT_BASE_URL,
});

type IInitializeTransactionResponse = {
  authorization_url: string;
  access_code: string;
  reference: string;
};

export const initializeTransaction = (email: string, userId: string) => {
  return API.post<{ data: IInitializeTransactionResponse }>(
    endpoints.initialize_transaction,
    { email },
    {
      headers: {
        "x-user-id": userId,
      },
    }
  );
};

export const addCard = (paymentReference: string, userId: string) => {
  return API.post(
    endpoints.add_card,
    { paymentReference },
    {
      headers: {
        "x-user-id": userId,
      },
    }
  );
};

import { API, type TResponse } from ".";

type TCreateShipmentPayload = {
  amount: number
  category: string;
  description: string;
  drop_off_location: string;
  pickup_location: string;
  pickup_option: string;
  recipient_address: string;
  recipient_email: string;
  recipient_name: string;
  recipient_phone: string;
  weight: number;
};

const endpoints = {
  singleshipment: "/shipments",
  get_root_shipment: "/shipments/user",
  get_shipment_org: (id: string) => `/shipments/org/${id}`,
  get_shipmentId_activities: (shipmentId: string) =>
    `/shipments/${shipmentId}/activities`,
};


export const createShipment = (payload: TCreateShipmentPayload) => {
  return API.post<TResponse<TCreateShipmentPayload>>(
    endpoints.singleshipment,
    payload
  );
};

export const getRootShipment = () => {
  return API.get<TResponse<TCreateShipmentPayload>>(
    endpoints.get_root_shipment
  );
};

export const getShipmentOrgs = (id: string) => {
  return API.get(endpoints.get_shipment_org(id));
};

export const getShipmentActivities = (id: string) => {
  return API.get(endpoints.get_shipmentId_activities(id));
};

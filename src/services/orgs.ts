import { API, type TResponse } from ".";

type TCreateOrgPayload = {
  address: string;
  business_type: string;
  email: string;
  latitude: string;
  longitude: string;
  name: string;
  phone_no: string;
  profile_image: string;
};

type TOrg = {
  address: string;
  business_type: string;
  created_at: string;
  email: string;
  id: string;
  latitude: string;
  longitude: string;
  name: string;
  phone_no: string;
  profile_image: string;
  updated_at: string;
  user_id: string;
  webhook_url: string;
};

const endpoints = {
  create_org: "/orgs",
  get_root_user_orgs: "/orgs/me"
};

export const createOrg = (payload: TCreateOrgPayload) => {
  return API.post<TResponse<TOrg>>(endpoints.create_org, payload);
};

export const getRootUserOrg =() => {
  return API.get<TResponse<TOrg>>(endpoints.get_root_user_orgs)
}
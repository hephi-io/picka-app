import { defineStore } from "pinia";
import { ref } from "vue";

export const useOrgsStore = defineStore("orgs", () => {
  const shipment = ref({
    amount: 0,
    category: "",
    created_at: "",
    description: "",
    drop_off_location: "",
    id: "",
    org_id: "",
    pickup_location: "",
    pickup_option: "",
    recipient_address: "",
    recipient_email: "",
    recipient_name: "",
    recipient_phone: "",
    shipment_ref: "",
    status: "",
    updated_at: "",
    user_id: "",
    weight: 0,
  });

  function setShipment(data: any) {
    shipment.value = data;
  }
  return { shipment, setShipment };
});

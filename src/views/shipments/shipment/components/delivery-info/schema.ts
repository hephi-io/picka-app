import * as yup from "yup";

export const deliveryInfoSchema = yup.object({
  recipient_email: yup.string().email().required(),
  recipient_name: yup.string().required(),
  recipient_phone: yup.string().required(),
  pickup_location_address: yup.string().required(),
  pickup_location_longitude: yup.number().required(),
  pickup_location_latitude: yup.number().required(),
  drop_off_location_address: yup.string().required(),
  drop_off_location_longitude: yup.number().required(),
  drop_off_location_latitude: yup.number().required(),
  pickup_option: yup.string().required(),
  delivery_notes: yup.string().required(),
  booking_notes: yup.string().required(),
});

export type DeliveryInfoSchema = yup.InferType<typeof deliveryInfoSchema>;

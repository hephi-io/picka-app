import { useForm } from "vee-validate";
import { deliveryInfoSchema } from "../components/delivery-info/schema";
import { DEFAULT_DELIVERY_INFO_FORM_VALUES } from "../components/delivery-info/constants";
import { itemDetailsSchema } from "../components/item-details/schema";
import { DEFAULT_ITEM_DETAILS_FORM_VALUES } from "../components/item-details/constants";

export const useShipmentForm = () => {
  const { errors: deliveryInfoErrors, ...deliveryInfoForm } = useForm({
    validationSchema: deliveryInfoSchema,
    initialValues: DEFAULT_DELIVERY_INFO_FORM_VALUES,
  });

  const [recipientName] = deliveryInfoForm.defineField("recipient_name");
  const [pickupLocationAddress] = deliveryInfoForm.defineField(
    "pickup_location_address"
  );
  const [pickupOption] = deliveryInfoForm.defineField("pickup_option");
  const [bookingNotes] = deliveryInfoForm.defineField("booking_notes");
  const [dropOffLocationAddress] = deliveryInfoForm.defineField(
    "drop_off_location_address"
  );
  const [deliveryNotes] = deliveryInfoForm.defineField("delivery_notes");
  const [recipientEmail] = deliveryInfoForm.defineField("recipient_email");
  const [recipientPhone] = deliveryInfoForm.defineField("recipient_phone");

  const { errors: itemDetailsErrors, ...itemDetailsForm } = useForm({
    validationSchema: itemDetailsSchema,
    initialValues: DEFAULT_ITEM_DETAILS_FORM_VALUES,
  });

  const [category] = itemDetailsForm.defineField("category");
  const [weight] = itemDetailsForm.defineField("weight");
  const [length] = itemDetailsForm.defineField("length");
  const [width] = itemDetailsForm.defineField("width");
  const [height] = itemDetailsForm.defineField("height");

  const clearForm = () => {
    deliveryInfoForm.resetForm();
    itemDetailsForm.resetForm();
  };

  return {
    deliveryInfoForm,
    deliveryInfoErrors,
    recipientName,
    pickupLocationAddress,
    pickupOption,
    bookingNotes,
    dropOffLocationAddress,
    deliveryNotes,
    recipientEmail,
    recipientPhone,
    category,
    weight,
    length,
    width,
    height,
    itemDetailsForm,
    itemDetailsErrors,
    clearForm,
  };
};

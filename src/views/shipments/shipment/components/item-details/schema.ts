import * as yup from "yup";

export const itemDetailsSchema = yup.object({
  category: yup.string().required(),
  weight: yup.number().positive().required(),
  length: yup.number().positive().required(),
  width: yup.number().positive().required(),
  height: yup.number().positive().required(),
});

export type ItemDetailsSchema = yup.InferType<typeof itemDetailsSchema>;

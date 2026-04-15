import type {
  UseFormInitialValues,
  UseFormOnError,
  UseFormOnSubmit,
  UseFormSubmitInput,
  UseFormValues,
} from "../../../../../../isomorphic/core/hooks/use-form";
import type { Schemas } from "./schemas";

export type StreamControlFormSchema = typeof Schemas.Values;

export type StreamControlFormValues = UseFormValues<StreamControlFormSchema>;

export type StreamControlFormInitialValues =
  UseFormInitialValues<StreamControlFormSchema>;

export type StreamControlFormOnError = UseFormOnError;

export type StreamControlFormSubmitInput =
  UseFormSubmitInput<StreamControlFormSchema>;

export type StreamControlFormOnSubmit =
  UseFormOnSubmit<StreamControlFormSchema>;

export type StreamControlFormInput = {
  initialValues: StreamControlFormValues;
  onError?: StreamControlFormOnError;
  onSubmit: StreamControlFormOnSubmit;
};

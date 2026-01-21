import type {
  UseFormInitialValues,
  UseFormOnError,
  UseFormOnSubmit,
  UseFormSubmitInput,
  UseFormValues,
} from "../../../../../../isomorphic/core/hooks/use-form";
import type { Schemas } from "./schemas";

export type DashboardFormSchema = typeof Schemas.Values;

export type DashboardFormValues = UseFormValues<DashboardFormSchema>;

export type DashboardFormInitialValues =
  UseFormInitialValues<DashboardFormSchema>;

export type DashboardFormOnError = UseFormOnError;

export type DashboardFormSubmitInput = UseFormSubmitInput<DashboardFormSchema>;

export type DashboardFormOnSubmit = UseFormOnSubmit<DashboardFormSchema>;

export type DashboardFormInput = {
  initialValues: DashboardFormValues;
  onError?: DashboardFormOnError;
  onSubmit: DashboardFormOnSubmit;
};

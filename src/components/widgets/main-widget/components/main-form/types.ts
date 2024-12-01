import {
  UseMainFormInitialValues,
  UseMainFormValidators,
  UseMainFormValues,
} from "../../../../../hooks/forms/use-main-form";

export type MainFormInitialValues = UseMainFormInitialValues;

export type MainFormData = UseMainFormValues;

export type MainFormErrors = {
  [K in keyof UseMainFormValues]?: string;
};

export type MainFormValidators = UseMainFormValidators;

export type MainFormInput = {
  initialValues?: MainFormInitialValues;
  onSave?: (data: MainFormData) => Promise<MainFormErrors | null | undefined>;
  validate?: UseMainFormValidators;
};

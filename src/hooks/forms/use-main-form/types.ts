import { UseFormReturnType } from "@mantine/form";

export type UseMainFormValues = {
  playlist: string | undefined;
};

export type UseMainFormInitialValues = Partial<UseMainFormValues>;

export type UseMainFormValidators = {
  [K in keyof UseMainFormValues]?: (
    value: UseMainFormValues[K],
  ) => null | string | undefined;
};

export type UseMainFormAllowedValues = {
  playlist: string[];
};

export type UseMainFormDefaultValues = Partial<UseMainFormValues>;

export type UseMainFormInput = {
  initialValues?: UseMainFormInitialValues;
  validate?: UseMainFormValidators;
};

export type UseMainFormOutput = {
  allowedValues: UseMainFormAllowedValues;
  defaultValues: UseMainFormDefaultValues;
  form: UseFormReturnType<UseMainFormValues>;
  loading: boolean;
};

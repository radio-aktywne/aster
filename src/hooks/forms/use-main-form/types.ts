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

export type UseMainFormDefaultValues = Partial<UseMainFormValues>;

export type UseMainFormInput = {
  initialValues?: UseMainFormInitialValues;
  validate?: UseMainFormValidators;
};

export type UseMainFormOutput = {
  defaultValues: UseMainFormDefaultValues;
  form: UseFormReturnType<UseMainFormValues>;
};

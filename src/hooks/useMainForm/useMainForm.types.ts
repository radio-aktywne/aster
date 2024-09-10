export type UseMainFormInitialValues = {
  playlist?: string | null;
};

export type UseMainFormValidators = {
  playlist?: (value: string | null) => string | null | undefined;
};

export type UseMainFormProps = {
  initialValues?: UseMainFormInitialValues;
  validate?: UseMainFormValidators;
};

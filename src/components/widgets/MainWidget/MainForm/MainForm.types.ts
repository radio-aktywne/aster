import {
  UseMainFormInitialValues,
  UseMainFormValidators,
} from "../../../../hooks";

export type MainFormValues = UseMainFormInitialValues;

export type MainFormLabels = {
  fields: {
    playlist: {
      title: string;
      option: (id: string) => string;
    };
  };
  buttons: {
    save: {
      label: string;
    };
  };
};

export type MainFormValidators = UseMainFormValidators;

export type MainFormData = {
  playlist: string | null;
};

export type MainFormErrors = {
  playlist?: string;
};

export type MainFormProps = {
  values: MainFormValues;
  labels: MainFormLabels;
  validate?: MainFormValidators;
  onSave?: (data: MainFormData) => Promise<MainFormErrors | null | undefined>;
};

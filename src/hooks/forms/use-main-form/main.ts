import { useForm } from "@mantine/form";
import "client-only";

import { defaultValues } from "./constants";
import {
  UseMainFormInput,
  UseMainFormOutput,
  UseMainFormValues,
} from "./types";

export function useMainForm({
  initialValues,
  validate,
}: UseMainFormInput): UseMainFormOutput {
  const form = useForm<UseMainFormValues>({
    initialValues: {
      playlist: initialValues?.playlist ?? defaultValues.playlist,
    },
    validate: validate,
  });

  return {
    defaultValues,
    form,
  };
}

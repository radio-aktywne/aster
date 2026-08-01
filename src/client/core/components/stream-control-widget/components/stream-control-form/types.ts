import type { HasRequiredKeys } from "type-fest";
import type * as z from "zod";

import type {
  UseFormErrorInput,
  UseFormErrors,
  UseFormInitialValues,
  UseFormOnError,
  UseFormOnSubmit,
  UseFormSubmitErrorOutput,
  UseFormSubmitInput,
  UseFormSubmitOutput,
  UseFormSubmitSuccessOutput,
} from "../../../../../../isomorphic/core/hooks/use-form";
import type { Schemas } from "./schemas";

export type StreamControlFormInputSchema = typeof Schemas.Input;

export type StreamControlFormOutputSchema = typeof Schemas.Output;

export type StreamControlFormInitialValues = UseFormInitialValues<
  z.output<StreamControlFormInputSchema>
>;

export type StreamControlFormErrorInput = UseFormErrorInput<
  z.output<StreamControlFormInputSchema>
>;

export type StreamControlFormOnError = UseFormOnError<
  z.output<StreamControlFormInputSchema>
>;

export type StreamControlFormSubmitInput = UseFormSubmitInput<
  z.output<StreamControlFormOutputSchema>
>;

export type StreamControlFormErrors = UseFormErrors<
  z.input<StreamControlFormInputSchema>
>;

export type StreamControlFormSubmitErrorOutput = UseFormSubmitErrorOutput<
  z.input<StreamControlFormInputSchema>
>;

export type StreamControlFormSubmitSuccessOutput = UseFormSubmitSuccessOutput<
  z.output<StreamControlFormInputSchema>
>;

export type StreamControlFormSubmitOutput = UseFormSubmitOutput<
  z.input<StreamControlFormInputSchema>,
  z.output<StreamControlFormInputSchema>
>;

export type StreamControlFormOnSubmit = UseFormOnSubmit<
  z.input<StreamControlFormInputSchema>,
  z.output<StreamControlFormInputSchema>,
  z.output<StreamControlFormOutputSchema>
>;

export type StreamControlFormInput = (HasRequiredKeys<
  z.output<StreamControlFormInputSchema>
> extends true
  ? { initialValues: StreamControlFormInitialValues }
  : { initialValues?: StreamControlFormInitialValues }) & {
  onError?: StreamControlFormOnError;
  onSubmit: StreamControlFormOnSubmit;
};

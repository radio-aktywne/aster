import { msg } from "@lingui/core/macro";

export const errors = {
  generic: msg({
    message: "An error occurred while updating current playlist.",
  }),
  invalidInput: msg({ message: "Invalid input." }),
  unauthorized: msg({
    message: "You are not authorized to update current playlist.",
  }),
};

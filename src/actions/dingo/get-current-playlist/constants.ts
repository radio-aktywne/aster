import { msg } from "@lingui/macro";

export const errors = {
  generic: msg({
    message: "An error occurred while getting current playlist.",
  }),
  unauthorized: msg({
    message: "You are not authorized to get current playlist.",
  }),
};

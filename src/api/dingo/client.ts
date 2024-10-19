import "server-only";

import createClient from "openapi-fetch";
import type { paths } from "./types";

const scheme = process.env.ASTER__DINGO__HTTP__SCHEME || "http";
const host = process.env.ASTER__DINGO__HTTP__HOST || "localhost";
const port =
  process.env.ASTER__DINGO__HTTP__PORT === undefined
    ? 10101
    : process.env.ASTER__DINGO__HTTP__PORT;
const path = (process.env.ASTER__DINGO__HTTP__PATH || "")
  // Ensure path starts with a slash
  .replace(/^(?!\/)(.*)$/, "/$1")
  // Remove trailing slashes
  .replace(/\/+$/, "");
const url = `${scheme}://${host}${port ? `:${port}` : ""}${path}`;

export const dingo = createClient<paths>({ baseUrl: url });

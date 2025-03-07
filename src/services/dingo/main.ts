import createClient, { ClientOptions } from "openapi-fetch";
import "server-only";

import type { paths } from "./types";

const scheme = process.env.ASTER__DINGO__HTTP__SCHEME || "http";
const host = process.env.ASTER__DINGO__HTTP__HOST || "localhost";
const port = process.env.ASTER__DINGO__HTTP__PORT ?? 10101;
const path = (process.env.ASTER__DINGO__HTTP__PATH || "")
  // Ensure path starts with a slash
  .replace(/^(?!\/)(.*)$/, "/$1")
  // Remove trailing slashes
  .replace(/\/+$/, "");
const url = `${scheme}://${host}${port ? `:${port}` : ""}${path}`;

export const dingoConfig = {
  baseUrl: url,
} satisfies ClientOptions;

export const dingo = createClient<paths>(dingoConfig);

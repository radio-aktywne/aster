"use client";

import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";

import { useDocumentMetadata } from "../../../../hooks/use-document-metadata";
import { RootNotFoundMetadataInput } from "./types";

export function RootNotFoundMetadata({}: RootNotFoundMetadataInput) {
  const { _ } = useLingui();

  useDocumentMetadata({
    description: _(msg({ message: "aster" })),
    title: _(msg({ message: "Not Found • aster" })),
  });

  return null;
}

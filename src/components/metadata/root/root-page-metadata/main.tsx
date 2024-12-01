"use client";

import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";

import { useDocumentMetadata } from "../../../../hooks/use-document-metadata";
import { RootPageMetadataInput } from "./types";

export function RootPageMetadata({}: RootPageMetadataInput) {
  const { _ } = useLingui();

  useDocumentMetadata({
    description: _(msg({ message: "aster" })),
    title: _(msg({ message: "aster" })),
  });

  return null;
}
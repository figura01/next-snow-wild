"use client";

import { type ReactNode, createElement } from "react";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "@/lib/apollo-client";

export function ApolloWrapper({ children }: { children: ReactNode }) {
  return createElement(
    ApolloProvider as unknown as string,
    { client },
    children,
  );
}

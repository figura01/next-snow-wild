import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const uri =
  typeof window === "undefined"
    ? `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/api/graphql`
    : "/api/graphql";

export const client = new ApolloClient({
  link: new HttpLink({
    uri,
    credentials: "same-origin",
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          equipments: {
            keyArgs: ["category"],
          },
        },
      },
    },
  }),
});

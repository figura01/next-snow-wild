import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export function getClient() {
  return new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_SITE_URL
        ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/graphql`
        : "http://localhost:3000/api/graphql",
      fetchOptions: { cache: "no-store" },
    }),
    cache: new InMemoryCache(),
  });
}

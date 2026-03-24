import { ApolloServer } from "@apollo/server";
import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolvers";

declare global {
  // eslint-disable-next-line no-var
  var apolloServer: ApolloServer | undefined;
}

async function getServer() {
  if (!global.apolloServer) {
    global.apolloServer = new ApolloServer({ typeDefs, resolvers });
    await global.apolloServer.start();
  }
  return global.apolloServer;
}

export async function POST(request: Request) {
  const server = await getServer();
  const body = await request.json();

  const result = await server.executeOperation({
    query: body.query,
    variables: body.variables,
    operationName: body.operationName,
  });

  if (result.body.kind === "single") {
    return Response.json(result.body.singleResult);
  }

  return Response.json({ errors: [{ message: "Unexpected response kind" }] });
}

export async function GET() {
  return Response.json({ message: "GraphQL endpoint — use POST" });
}

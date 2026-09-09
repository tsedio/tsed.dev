---
url: /api/graphql/apollo/types/services/class-apollo-service.md
description: api documentation of ApolloService from @tsed/apollo
---

## Usage

```typescript
import { ApolloService } from "@tsed/apollo";
```

> See [/packages/graphql/apollo/src/services/ApolloService.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/graphql/apollo/src/services/ApolloService.ts#L0-L0).

## Overview

```ts
class ApolloService {
    platformName: string | undefined;
    protected servers: Map<string, {
        instance: ApolloServer<ApolloContext>;
        schema?: GraphQLSchema;
        typeDefs?: IExecutableSchemaDefinition<ApolloContext>["typeDefs"];
        resolvers?: IExecutableSchemaDefinition<ApolloContext>["resolvers"];
    }>;
    protected app: PlatformApplication<any>;
    protected httpServer: Http.Server<typeof Http.IncomingMessage, typeof Http.ServerResponse> | null;
    protected httpsServer: Https.Server<typeof Http.IncomingMessage, typeof Http.ServerResponse> | null;
    createServer(id: string, settings: ApolloSettings): Promise<ApolloServer<ApolloContext>>;
    get(id?: string): ApolloServer<ApolloContext> | undefined;
    getSchema(id?: string): GraphQLSchema | undefined;
    getTypeDefs(id?: string): import("@graphql-tools/utils").TypeSource | undefined;
    getResolvers(id?: string): import("@graphql-tools/utils").IResolvers<any, ApolloContext> | import("@graphql-tools/utils").IResolvers<any, ApolloContext>[] | undefined;
    has(id?: string): boolean;
    createContextHandler(server: ApolloServer<ApolloContext>, settings: ApolloSettings): () => Promise<ApolloContext>;
    protected createInstance(options: ApolloServerOptions<ApolloContext>, server?: ApolloCustomServerCB<ApolloContext>): ApolloServer<ApolloContext>;
}
```

## platformName

```ts
platformName: string | undefined;
```

## protected servers

```ts
protected servers: Map<string, {
     instance: ApolloServer<ApolloContext>;
     schema?: GraphQLSchema;
     typeDefs?: IExecutableSchemaDefinition<ApolloContext>["typeDefs"];
     resolvers?: IExecutableSchemaDefinition<ApolloContext>["resolvers"];
 }>;
```

## protected app

```ts
protected app: PlatformApplication<any>;
```

## protected httpServer

```ts
protected httpServer: Http.Server<typeof Http.IncomingMessage, typeof Http.ServerResponse> | null;
```

## protected httpsServer

```ts
protected httpsServer: Https.Server<typeof Http.IncomingMessage, typeof Http.ServerResponse> | null;
```

## createServer

```ts
createServer(id: string, settings: ApolloSettings): Promise<ApolloServer<ApolloContext>>;
```

## get

```ts
get(id?: string): ApolloServer<ApolloContext> | undefined;
```

Get an instance of ApolloServer from his id

## getSchema

```ts
getSchema(id?: string): GraphQLSchema | undefined;
```

Get schema of the ApolloServer from his id

## getTypeDefs

```ts
getTypeDefs(id?: string): import("@graphql-tools/utils").TypeSource | undefined;
```

Get TypeDefs of the ApolloServer from his id

## getResolvers

```ts
getResolvers(id?: string): import("@graphql-tools/utils").IResolvers<any, ApolloContext> | import("@graphql-tools/utils").IResolvers<any, ApolloContext>[] | undefined;
```

## has

```ts
has(id?: string): boolean;
```

## createContextHandler

```ts
createContextHandler(server: ApolloServer<ApolloContext>, settings: ApolloSettings): () => Promise<ApolloContext>;
```

create a new dataSources function to use with apollo server config

## protected createInstance

```ts
protected createInstance(options: ApolloServerOptions<ApolloContext>, server?: ApolloCustomServerCB<ApolloContext>): ApolloServer<ApolloContext>;
```

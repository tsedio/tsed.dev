---
title: ApolloSettings from @tsed/apollo
description: api documentation of ApolloSettings from @tsed/apollo
meta:
 - name: keywords
   description: api typescript node.js documentation ApolloSettings type
---
# ApolloSettings - @tsed/apollo

## Usage

```typescript
import { ApolloSettings } from "@tsed/graphql/apollo/src/interfaces/ApolloSettings";
```

> See [/packages/graphql/apollo/src/interfaces/ApolloSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/graphql/apollo/src/interfaces/ApolloSettings.ts#L0-L0).

## Overview

```ts
type ApolloSettings<TContext extends ApolloContext = ApolloContext> = ApolloServerOptionsBase<TContext> & TsED.ApolloSettings & {
    path: string;
    server?: ApolloCustomServerCB<TContext>;
    playground?: boolean;
    serverRegistration?: ApolloMiddlewareOptions;
    middlewareOptions?: ApolloMiddlewareOptions;
    schema?: GraphQLSchema;
    typeDefs?: IExecutableSchemaDefinition<TContext>["typeDefs"];
    resolvers?: IExecutableSchemaDefinition<TContext>["resolvers"];
    gateway?: GatewayInterface;
    dataSources?: () => Record<string, unknown>;
};
```

<!-- Members -->

## path

```ts
path: string;
```

## server

```ts
server?: ApolloCustomServerCB<TContext>;
```

## playground

```ts
playground?: boolean;
```

## serverRegistration

```ts
serverRegistration?: ApolloMiddlewareOptions;
```

## middlewareOptions

```ts
middlewareOptions?: ApolloMiddlewareOptions;
```

## schema

```ts
schema?: GraphQLSchema;
```

## typeDefs

```ts
typeDefs?: IExecutableSchemaDefinition<TContext>["typeDefs"];
```

## resolvers

```ts
resolvers?: IExecutableSchemaDefinition<TContext>["resolvers"];
```

## gateway

```ts
gateway?: GatewayInterface;
```

## dataSources:

```ts
dataSources?: () => Record<string, unknown>;
```

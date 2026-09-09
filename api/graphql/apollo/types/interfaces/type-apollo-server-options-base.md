---
url: /api/graphql/apollo/types/interfaces/type-apollo-server-options-base.md
description: api documentation of ApolloServerOptionsBase from @tsed/apollo
---

## Usage

```typescript
import { ApolloServerOptionsBase } from "@tsed/graphql/apollo/src/interfaces/ApolloSettings";
```

> See [/packages/graphql/apollo/src/interfaces/ApolloSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/graphql/apollo/src/interfaces/ApolloSettings.ts#L0-L0).

## Overview

```ts
type ApolloServerOptionsBase<TContext extends ApolloContext = ApolloContext> = Omit<ApolloServerOptionsWithSchema<TContext>, "schema" | "typeDefs" | "resolvers" | "gateway">;
```

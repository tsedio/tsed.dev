---
title: ApolloCustomServerCB from @tsed/apollo
description: api documentation of ApolloCustomServerCB from @tsed/apollo
meta:
 - name: keywords
   description: api typescript node.js documentation ApolloCustomServerCB type
---
# ApolloCustomServerCB - @tsed/apollo

## Usage

```typescript
import { ApolloCustomServerCB } from "@tsed/graphql/apollo/src/interfaces/ApolloSettings";
```

> See [/packages/graphql/apollo/src/interfaces/ApolloSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/graphql/apollo/src/interfaces/ApolloSettings.ts#L0-L0).

## Overview

```ts
type ApolloCustomServerCB<TContext extends ApolloContext> = (config: ApolloServerOptions<TContext>) => ApolloServer<TContext>;
```

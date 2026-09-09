---
title: AlterApolloServerPlugins from @tsed/apollo
description: api documentation of AlterApolloServerPlugins from @tsed/apollo
meta:
 - name: keywords
   description: api typescript node.js documentation AlterApolloServerPlugins interface
---
# AlterApolloServerPlugins - @tsed/apollo

## Usage

```typescript
import { AlterApolloServerPlugins } from "@tsed/apollo";
```

> See [/packages/graphql/apollo/src/interfaces/AlterApolloServerPlugins.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/graphql/apollo/src/interfaces/AlterApolloServerPlugins.ts#L0-L0).

## Overview

```ts
interface AlterApolloServerPlugins {
    $alterApolloServerPlugins(plugins: ApolloServerPlugin[], serverSettings: ApolloSettings): ApolloServerPlugin[] | Promise<ApolloServerPlugin[]>;
}
```

<!-- Members -->

## $alterApolloServerPlugins

```ts
$alterApolloServerPlugins(plugins: ApolloServerPlugin[], serverSettings: ApolloSettings): ApolloServerPlugin[] | Promise<ApolloServerPlugin[]>;
```

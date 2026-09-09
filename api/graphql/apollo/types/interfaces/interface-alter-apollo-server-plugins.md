---
url: /api/graphql/apollo/types/interfaces/interface-alter-apollo-server-plugins.md
description: api documentation of AlterApolloServerPlugins from @tsed/apollo
---

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

## $alterApolloServerPlugins

```ts
$alterApolloServerPlugins(plugins: ApolloServerPlugin[], serverSettings: ApolloSettings): ApolloServerPlugin[] | Promise<ApolloServerPlugin[]>;
```

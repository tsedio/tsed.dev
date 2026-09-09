---
url: /api/graphql/graphql-ws/types/class-graph-qlws-module.md
description: api documentation of GraphQLWSModule from @tsed/graphql-ws
---

## Usage

```typescript
import { GraphQLWSModule } from "@tsed/graphql-ws";
```

> See [/packages/graphql/graphql-ws/src/GraphQLWSModule.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/graphql/graphql-ws/src/GraphQLWSModule.ts#L0-L0).

## Overview

```ts
class GraphQLWSModule {
    
    createWSServer(settings: GraphQLWSOptions): Promise<import("graphql-ws").Disposable>;
    $alterApolloServerPlugins(plugins: any[], settings: GraphQLWSOptions): Promise<any[]>;
}
```

## createWSServer

```ts
createWSServer(settings: GraphQLWSOptions): Promise<import("graphql-ws").Disposable>;
```

## $alterApolloServerPlugins

```ts
$alterApolloServerPlugins(plugins: any[], settings: GraphQLWSOptions): Promise<any[]>;
```

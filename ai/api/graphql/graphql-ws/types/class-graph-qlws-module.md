---
title: GraphQLWSModule from @tsed/graphql-ws
description: api documentation of GraphQLWSModule from @tsed/graphql-ws
meta:
 - name: keywords
   description: api typescript node.js documentation GraphQLWSModule class
---
# GraphQLWSModule - @tsed/graphql-ws

## Usage

```typescript
import { GraphQLWSModule } from "@tsed/graphql-ws";
```

> See [/packages/graphql/graphql-ws/src/GraphQLWSModule.ts](https://github.com/tsedio/tsed/blob/v8.50.2/packages/graphql/graphql-ws/src/GraphQLWSModule.ts#L0-L0).

## Overview

```ts
class GraphQLWSModule {
    
    createWSServer(settings: GraphQLWSOptions): Promise<import("graphql-ws").Disposable>;
    protected createUWSServer(uwsApp: any, settings: GraphQLWSOptions): Promise<{
        dispose(): Promise<void>;
    }>;
    $alterApolloServerPlugins(plugins: any[], settings: GraphQLWSOptions): Promise<any[]>;
}
```

<!-- Members -->

## createWSServer

```ts
createWSServer(settings: GraphQLWSOptions): Promise<import("graphql-ws").Disposable>;
```

## protected createUWSServer

```ts
protected createUWSServer(uwsApp: any, settings: GraphQLWSOptions): Promise<{
     dispose(): Promise<void>;
 }>;
```

A server on uWebSockets.js, as with PlatformFulmine, has no Node.js socket to take the upgrade from: the
subscriptions are served by its uWebSockets.js app, with the behavior graphql-ws provides for it.

## $alterApolloServerPlugins

```ts
$alterApolloServerPlugins(plugins: any[], settings: GraphQLWSOptions): Promise<any[]>;
```

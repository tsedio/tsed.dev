---
title: AlterApolloContext from @tsed/apollo
description: api documentation of AlterApolloContext from @tsed/apollo
meta:
 - name: keywords
   description: api typescript node.js documentation AlterApolloContext interface
---
# AlterApolloContext - @tsed/apollo

## Usage

```typescript
import { AlterApolloContext } from "@tsed/apollo";
```

> See [/packages/graphql/apollo/src/interfaces/AlterApolloContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/graphql/apollo/src/interfaces/AlterApolloContext.ts#L0-L0).

## Overview

```ts
interface AlterApolloContext<Context extends ApolloContext = ApolloContext> {
    $alterApolloContext(context: Context, $ctx: PlatformContext): Context | Promise<Context>;
}
```

<!-- Members -->

## $alterApolloContext

```ts
$alterApolloContext(context: Context, $ctx: PlatformContext): Context | Promise<Context>;
```

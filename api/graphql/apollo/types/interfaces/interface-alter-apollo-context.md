---
url: /api/graphql/apollo/types/interfaces/interface-alter-apollo-context.md
description: api documentation of AlterApolloContext from @tsed/apollo
---

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

## $alterApolloContext

```ts
$alterApolloContext(context: Context, $ctx: PlatformContext): Context | Promise<Context>;
```

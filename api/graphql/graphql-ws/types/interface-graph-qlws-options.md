---
url: /api/graphql/graphql-ws/types/interface-graph-qlws-options.md
description: api documentation of GraphQLWSOptions from @tsed/graphql-ws
---

## Usage

```typescript
import { GraphQLWSOptions } from "@tsed/graphql-ws";
```

> See [/packages/graphql/graphql-ws/src/GraphQLWSOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/graphql/graphql-ws/src/GraphQLWSOptions.ts#L0-L0).

## Overview

```ts
interface GraphQLWSOptions {
    path: string;
    schema: UseServerOptions["schema"];
    wsUseServerOptions?: UseServerOptions;
    wsServerOptions?: WSServerOptions;
}
```

## path

```ts
path: string;
```

## schema

```ts
schema: UseServerOptions["schema"];
```

## wsUseServerOptions

```ts
wsUseServerOptions?: UseServerOptions;
```

## wsServerOptions

```ts
wsServerOptions?: WSServerOptions;
```

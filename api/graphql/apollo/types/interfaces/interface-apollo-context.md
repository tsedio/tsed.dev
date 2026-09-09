---
url: /api/graphql/apollo/types/interfaces/interface-apollo-context.md
description: api documentation of ApolloContext from @tsed/apollo
---

## Usage

```typescript
import { ApolloContext } from "@tsed/apollo";
```

> See [/packages/graphql/apollo/src/interfaces/ApolloContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/graphql/apollo/src/interfaces/ApolloContext.ts#L0-L0).

## Overview

```ts
interface ApolloContext extends BaseContext {
    dataSources: Record<string, unknown>;
}
```

## dataSources

```ts
dataSources: Record<string, unknown>;
```

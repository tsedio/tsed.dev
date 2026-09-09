---
url: /api/graphql/apollo/types/interfaces/type-apollo-settings-with-id.md
description: api documentation of ApolloSettingsWithID from @tsed/apollo
---

## Usage

```typescript
import { ApolloSettingsWithID } from "@tsed/graphql/apollo/src/interfaces/ApolloSettings";
```

> See [/packages/graphql/apollo/src/interfaces/ApolloSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/graphql/apollo/src/interfaces/ApolloSettings.ts#L0-L0).

## Overview

```ts
type ApolloSettingsWithID<TContext extends ApolloContext = ApolloContext> = ApolloSettings<TContext> & {
    id: string;
};
```

## id

```ts
id: string;
```

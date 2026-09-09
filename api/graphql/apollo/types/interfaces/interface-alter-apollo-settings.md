---
url: /api/graphql/apollo/types/interfaces/interface-alter-apollo-settings.md
description: api documentation of AlterApolloSettings from @tsed/apollo
---

## Usage

```typescript
import { AlterApolloSettings } from "@tsed/apollo";
```

> See [/packages/graphql/apollo/src/interfaces/AlterApolloSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/graphql/apollo/src/interfaces/AlterApolloSettings.ts#L0-L0).

## Overview

```ts
interface AlterApolloSettings<Context extends ApolloContext = ApolloContext> {
    $alterApolloSettings(settings: ApolloSettingsWithID<Context>): (ApolloSettingsWithID<Context> & {
        id: string;
    }) | Promise<ApolloSettingsWithID<Context>>;
}
```

## $alterApolloSettings

```ts
$alterApolloSettings(settings: ApolloSettingsWithID<Context>): (ApolloSettingsWithID<Context> & {
     id: string;
 }) | Promise<ApolloSettingsWithID<Context>>;
```

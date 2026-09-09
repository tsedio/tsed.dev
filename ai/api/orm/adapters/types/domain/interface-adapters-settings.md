---
title: AdaptersSettings from @tsed/adapters
description: api documentation of AdaptersSettings from @tsed/adapters
meta:
 - name: keywords
   description: api typescript node.js documentation AdaptersSettings interface
---
# AdaptersSettings - @tsed/adapters

## Usage

```typescript
import { AdaptersSettings } from "@tsed/adapters";
```

> See [/packages/orm/adapters/src/domain/AdaptersSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/adapters/src/domain/AdaptersSettings.ts#L0-L0).

## Overview

```ts
interface AdaptersSettings {
    Adapter?: Type<Adapter>;
    lowdbDir?: string;
    connectionName?: string;
    [key: string]: any;
}
```

<!-- Members -->

## Adapter

```ts
Adapter?: Type<Adapter>;
```

Injectable service to manage database connexion

## lowdbDir

```ts
lowdbDir?: string;
```

## connectionName

```ts
connectionName?: string;
```

Use the connection name for the RedisAdapter.

## \[key: string]

```ts
[key: string]: any;
```

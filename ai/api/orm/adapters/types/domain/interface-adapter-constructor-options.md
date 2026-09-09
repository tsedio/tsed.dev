---
title: AdapterConstructorOptions from @tsed/adapters
description: api documentation of AdapterConstructorOptions from @tsed/adapters
meta:
 - name: keywords
   description: api typescript node.js documentation AdapterConstructorOptions interface
---
# AdapterConstructorOptions - @tsed/adapters

## Usage

```typescript
import { AdapterConstructorOptions } from "@tsed/adapters";
```

> See [/packages/orm/adapters/src/domain/Adapter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/adapters/src/domain/Adapter.ts#L0-L0).

## Overview

```ts
interface AdapterConstructorOptions<T = any> extends Record<string, any> {
    model: Type<T> | Object;
    collectionName?: string;
    useAlias?: string;
    indexes?: {
        [propertyKey: string]: Record<string, any>;
    };
}
```

<!-- Members -->

## model

```ts
model: Type<T> | Object;
```

## collectionName

```ts
collectionName?: string;
```

## useAlias

```ts
useAlias?: string;
```

## indexes

```ts
indexes?: {
     [propertyKey: string]: Record<string, any>;
 };
```

---
url: /api/specs/schema/types/domain/interface-json-entity-store-options.md
description: api documentation of JsonEntityStoreOptions from @tsed/schema
---

## Usage

```typescript
import { JsonEntityStoreOptions } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/JsonEntityStore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonEntityStore.ts#L0-L0).

## Overview

```ts
interface JsonEntityStoreOptions {
    decoratorType: DecoratorTypes;
    target: Type<any>;
    propertyKey?: string | symbol;
    index?: number;
    descriptor?: any;
    type?: Type<any>;
    collectionType?: Type<any>;
    beforeMiddlewares?: Function[];
    middlewares?: Function[];
    afterMiddlewares?: Function[];
    [key: string]: any;
}
```

## Description

Configuration options for creating a JsonEntityStore.

## decoratorType

```ts
decoratorType: DecoratorTypes;
```

## target

```ts
target: Type<any>;
```

## propertyKey

```ts
propertyKey?: string | symbol;
```

## index

```ts
index?: number;
```

## descriptor

```ts
descriptor?: any;
```

## type

```ts
type?: Type<any>;
```

## collectionType

```ts
collectionType?: Type<any>;
```

## beforeMiddlewares

```ts
beforeMiddlewares?: Function[];
```

## middlewares

```ts
middlewares?: Function[];
```

## afterMiddlewares

```ts
afterMiddlewares?: Function[];
```

## \[key: string]

```ts
[key: string]: any;
```

---
title: s from @tsed/schema
description: api documentation of s from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation s const
---
# s - @tsed/schema

## Usage

```typescript
import { s } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/index.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/index.ts#L0-L0).

## Overview

```ts
const s: {
    readonly from: typeof from;
    readonly allOf: typeof allOf;
    readonly anyOf: typeof anyOf;
    readonly any: typeof any;
    readonly boolean: typeof boolean;
    readonly array: typeof array;
    readonly map: typeof map;
    readonly set: typeof set;
    readonly record: typeof record;
    readonly date: typeof date;
    readonly datetime: typeof datetime;
    readonly time: typeof time;
    readonly email: typeof email;
    readonly enums: typeof enums;
    readonly integer: typeof integer;
    readonly number: typeof number;
    readonly lazyRef: typeof lazyRef;
    readonly object: typeof object;
    readonly oneOf: typeof oneOf;
    readonly $ref: typeof ref;
    readonly string: typeof string;
    readonly uri: typeof uri;
    readonly url: typeof url;
    readonly generic: typeof generic;
    readonly get: typeof get;
    readonly store: typeof getJsonEntityStore & {
        get: typeof getJsonEntityStore;
        method: typeof getJsonMethodStore;
    };
    readonly schema: {
        readonly compile: typeof compile;
        readonly merge: typeof mergeSchema;
    };
    readonly compile: typeof compile;
    readonly oas: typeof compileSpec & {
        compile: typeof compileSpec;
        merge: typeof mergeSpec;
    };
};
export namespace s {
    type infer<S> = Infer<S>;
}
```

<!-- Description -->

## Description

A namespace of all schema builder functions.

<!-- Members -->

## readonly from

```ts
readonly from: typeof from;
```

## readonly allOf

```ts
readonly allOf: typeof allOf;
```

## readonly anyOf

```ts
readonly anyOf: typeof anyOf;
```

## readonly any

```ts
readonly any: typeof any;
```

## readonly boolean

```ts
readonly boolean: typeof boolean;
```

## readonly array

```ts
readonly array: typeof array;
```

## readonly map

```ts
readonly map: typeof map;
```

## readonly set

```ts
readonly set: typeof set;
```

## readonly record

```ts
readonly record: typeof record;
```

## readonly date

```ts
readonly date: typeof date;
```

## readonly datetime

```ts
readonly datetime: typeof datetime;
```

## readonly time

```ts
readonly time: typeof time;
```

## readonly email

```ts
readonly email: typeof email;
```

## readonly enums

```ts
readonly enums: typeof enums;
```

## readonly integer

```ts
readonly integer: typeof integer;
```

## readonly number

```ts
readonly number: typeof number;
```

## readonly lazyRef

```ts
readonly lazyRef: typeof lazyRef;
```

## readonly object

```ts
readonly object: typeof object;
```

## readonly oneOf

```ts
readonly oneOf: typeof oneOf;
```

## readonly $ref

```ts
readonly $ref: typeof ref;
```

## readonly string

```ts
readonly string: typeof string;
```

## readonly uri

```ts
readonly uri: typeof uri;
```

## readonly url

```ts
readonly url: typeof url;
```

## readonly generic

```ts
readonly generic: typeof generic;
```

## readonly get

```ts
readonly get: typeof get;
```

## readonly store

```ts
readonly store: typeof getJsonEntityStore & {
     get: typeof getJsonEntityStore;
     method: typeof getJsonMethodStore;
 };
```

## readonly schema

```ts
readonly schema: {
     readonly compile: typeof compile;
     readonly merge: typeof mergeSchema;
 };
```

## readonly compile

```ts
readonly compile: typeof compile;
```

## readonly oas

```ts
readonly oas: typeof compileSpec & {
     compile: typeof compileSpec;
     merge: typeof mergeSpec;
 };
```

## type infer

```ts
type infer<S> = Infer<S>;
```

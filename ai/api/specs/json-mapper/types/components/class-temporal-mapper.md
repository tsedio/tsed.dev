---
title: TemporalMapper from @tsed/json-mapper
description: api documentation of TemporalMapper from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation TemporalMapper class
---
# TemporalMapper - @tsed/json-mapper

## Usage

```typescript
import { TemporalMapper } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/components/TemporalMapper.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/components/TemporalMapper.ts#L0-L0).

## Overview

```ts
class TemporalMapper implements JsonMapperMethods {
    deserialize(data: string | number, ctx: JsonMapperCtx): unknown;
    deserialize(data: boolean | null | undefined, ctx: JsonMapperCtx): boolean | null | undefined;
    serialize(object: {
        toString(): string;
    } | null | undefined): any;
}
```

<!-- Description -->

## Description

Mapper for the `Temporal.*` types (`Instant`, `ZonedDateTime`, `PlainDate`, `PlainDateTime`,
`PlainTime`, `PlainYearMonth`, `PlainMonthDay`, `Duration`).

Every Temporal type exposes a static `from(string)` factory and an ISO-8601 `toString()`, so a
single mapper handles all of them: `serialize()` calls `toString()`, and `deserialize()` rebuilds
the concrete type read from `ctx.type` (the deserializer sets it to the registered constructor).

Registration is guarded by a runtime `Temporal` check so importing `@tsed/json-mapper` stays safe
on runtimes that don't expose the global `Temporal` object.

<!-- Members -->

## deserialize

```ts
deserialize(data: string | number, ctx: JsonMapperCtx): unknown;
```

## deserialize

```ts
deserialize(data: boolean | null | undefined, ctx: JsonMapperCtx): boolean | null | undefined;
```

## serialize

```ts
serialize(object: {
     toString(): string;
 } | null | undefined): any;
```

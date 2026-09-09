---
url: /api/specs/json-mapper/types/components/class-date-mapper.md
description: api documentation of DateMapper from @tsed/json-mapper
---

## Usage

```typescript
import { DateMapper } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/components/DateMapper.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/components/DateMapper.ts#L0-L0).

## Overview

```ts
class DateMapper implements JsonMapperMethods {
    deserialize(data: string | number): Date;
    deserialize(data: boolean | null | undefined): boolean | null | undefined;
    serialize(object: Date): any;
}
```

## Description

Mapper for `Date` type.

## deserialize

```ts
deserialize(data: string | number): Date;
```

## deserialize

```ts
deserialize(data: boolean | null | undefined): boolean | null | undefined;
```

## serialize

```ts
serialize(object: Date): any;
```

---
url: /api/specs/schema/types/domain/type-ctor-to-type.md
description: api documentation of CtorToType from @tsed/schema
---

## Usage

```typescript
import { CtorToType } from "@tsed/specs/schema/src/domain/types";
```

> See [/packages/specs/schema/src/domain/types.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/types.ts#L0-L0).

## Overview

```ts
type CtorToType<C> = C extends StringConstructor ? string : C extends NumberConstructor ? number : C extends BooleanConstructor ? boolean : C extends DateConstructor ? Date : C extends ArrayConstructor ? any[] : C extends MapConstructor ? Record<string, any> : C extends SetConstructor ? Set<any> : C extends ObjectConstructor ? Record<string, any> : C extends abstract new (...args: any) => any ? InstanceType<C> : any;
```

## Description

Maps common JavaScript constructors to their corresponding TypeScript types.

This utility type converts constructor functions (String, Number, Date, etc.) into
their corresponding runtime types, enabling better type inference when creating
schemas programmatically.

### Type Mappings

* `StringConstructor` → `string`
* `NumberConstructor` → `number`
* `BooleanConstructor` → `boolean`
* `DateConstructor` → `Date`
* `ArrayConstructor` → `any[]`
* `MapConstructor` → `Record<string, any>`
* `SetConstructor` → `Set<any>`
* `ObjectConstructor` → `Record<string, any>`
* Custom classes → `InstanceType<C>`

### Usage

```typescript
type StringType = CtorToType<StringConstructor>;  // string
type DateType = CtorToType<DateConstructor>;      // Date
type CustomType = CtorToType<typeof MyClass>;     // MyClass
```

---
url: /api/core/types/utils/interface-any-promise-result.md
description: api documentation of AnyPromiseResult from @tsed/core
---

## Usage

```typescript
import { AnyPromiseResult } from "@tsed/core";
```

> See [/packages/core/src/utils/AnyToPromise.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/AnyToPromise.ts#L0-L0).

## Overview

```ts
interface AnyPromiseResult<T = any> {
    state: AnyToPromiseStatus;
    type: AnyToPromiseResponseTypes;
    status?: number;
    headers?: Record<string, any>;
    data: T;
}
```

## Description

Result shape returned by `AnyToPromise` when resolved.

Only the symbol itself is documented per the symbols-only rule (member fields are self-explanatory).

## state

```ts
state: AnyToPromiseStatus;
```

## type

```ts
type: AnyToPromiseResponseTypes;
```

## status

```ts
status?: number;
```

## headers

```ts
headers?: Record<string, any>;
```

## data

```ts
data: T;
```

---
title: AnyToPromiseStatus from @tsed/core
description: api documentation of AnyToPromiseStatus from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation AnyToPromiseStatus enum
---
# AnyToPromiseStatus - @tsed/core

## Usage

```typescript
import { AnyToPromiseStatus } from "@tsed/core";
```

> See [/packages/core/src/utils/AnyToPromise.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/AnyToPromise.ts#L0-L0).

## Overview

```ts
enum AnyToPromiseStatus {
    PENDING = "PENDING",
    CANCELED = "CANCELED",
    RESOLVED = "RESOLVED",
    REJECTED = "REJECTED"
}
```

<!-- Description -->

## Description

Represents the lifecycle state of an `AnyToPromise` operation.

<!-- Members -->

## PENDING

```ts
PENDING = "PENDING",
```

## CANCELED

```ts
CANCELED = "CANCELED",
```

## RESOLVED

```ts
RESOLVED = "RESOLVED",
```

## REJECTED

```ts
REJECTED = "REJECTED"
```

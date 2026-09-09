---
url: /api/core/types/utils/function-get-value.md
description: api documentation of getValue from @tsed/core
---

## Usage

```typescript
import { getValue } from "@tsed/core";
```

> See [/packages/core/src/utils/getValue.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/getValue.ts#L0-L0).

## Overview

```ts
function getValue<T = any>(scope: any, expression: string | undefined): T | undefined;
export function getValue<T = any>(scope: any, expression: string | undefined, defaultValue: T, separator?: string): T;
export function getValue<T = any>(expression: string | undefined, scope: any): T | undefined;
export function getValue<T = any>(expression: string | undefined, scope: any, defaultValue: T, separator?: string): T;
```

## Description

Retrieves a value from an object using a dot-separated path expression.

Supports flexible argument order (scope-first or expression-first), optional default values,
and custom path separators. Can navigate nested objects and call .get() methods when available.

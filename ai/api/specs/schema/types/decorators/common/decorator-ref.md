---
title: Ref from @tsed/schema
description: api documentation of Ref from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation Ref decorator
---
# Ref - @tsed/schema

## Usage

```typescript
import { Ref } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/ref.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/ref.ts#L0-L0).

## Overview

```ts
function Ref(ref: string): (...args: any[]) => any;
```

-   **ref** (`string`): - Reference URI

<!-- Description -->

## Description

Set a `$ref` value on the current schema property/parameter.

Supports local references (`#/...`) and external URLs.

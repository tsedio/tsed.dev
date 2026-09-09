---
title: mergeSpec from @tsed/schema
description: api documentation of mergeSpec from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation mergeSpec function
---
# mergeSpec - @tsed/schema

## Usage

```typescript
import { mergeSpec } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/oas/mergeSpec.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/oas/mergeSpec.ts#L0-L0).

## Overview

```ts
function mergeSpec<Spec = OpenSpec2 | OpenSpec3>(spec: Partial<Spec>, input: Partial<Spec>): Partial<Spec>;
```

<!-- Description -->

## Description

Merge two spec

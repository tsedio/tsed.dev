---
title: For from @tsed/schema
description: api documentation of For from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation For decorator
---
# For - @tsed/schema

## Usage

```typescript
import { For } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/schema.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/schema.ts#L0-L0).

## Overview

```ts
function For(specType: SpecTypes, schema: any): (...args: any[]) => any;
```

<!-- Description -->

## Description

Apply a specific schema depending on the spec version

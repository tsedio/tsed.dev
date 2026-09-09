---
title: compileSpec from @tsed/schema
description: api documentation of compileSpec from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation compileSpec function
---
# compileSpec - @tsed/schema

## Usage

```typescript
import { compileSpec } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/oas/compileSpec.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/oas/compileSpec.ts#L0-L0).

## Overview

```ts
function compileSpec(model: Type<any>, options?: SpecSerializerOptions): Partial<OpenSpec3>;
export function compileSpec(options: GenerateSpecOptions): OpenSpec2 | OpenSpec3;
```

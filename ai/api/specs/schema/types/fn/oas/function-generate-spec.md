---
title: generateSpec from @tsed/schema
description: api documentation of generateSpec from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation generateSpec function
---
# generateSpec - @tsed/schema

## Usage

```typescript
import { generateSpec } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/oas/generateSpec.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/oas/generateSpec.ts#L0-L0).

## Overview

```ts
function generateSpec({ tokens, ...options }: GenerateSpecOptions): OpenSpec2 | OpenSpec3;
```

<!-- Description -->

## Description

Generate OpenAPI spec from multiple sources (models, files, conf)

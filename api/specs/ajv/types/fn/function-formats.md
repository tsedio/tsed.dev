---
url: /api/specs/ajv/types/fn/function-formats.md
description: api documentation of formats from @tsed/ajv
---

## Usage

```typescript
import { formats } from "@tsed/ajv";
```

> See [/packages/specs/ajv/src/fn/formats.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/fn/formats.ts#L0-L0).

## Overview

```ts
function formats<Token extends TokenProvider>(token: Token, name: string, options?: FormatsOptions): TsED.ProviderBuilder<Token>;
```

## Description

Create a new custom formats validator

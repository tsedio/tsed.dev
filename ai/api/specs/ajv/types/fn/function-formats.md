---
title: formats from @tsed/ajv
description: api documentation of formats from @tsed/ajv
meta:
 - name: keywords
   description: api typescript node.js documentation formats function
---
# formats - @tsed/ajv

## Usage

```typescript
import { formats } from "@tsed/ajv";
```

> See [/packages/specs/ajv/src/fn/formats.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/fn/formats.ts#L0-L0).

## Overview

```ts
function formats<Token extends TokenProvider>(token: Token, name: string, options?: FormatsOptions): TsED.ProviderBuilder<Token>;
```

<!-- Description -->

## Description

Create a new custom formats validator

---
url: /api/specs/ajv/types/decorators/decorator-formats.md
description: api documentation of Formats from @tsed/ajv
---

## Usage

```typescript
import { Formats } from "@tsed/ajv";
```

> See [/packages/specs/ajv/src/decorators/formats.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/decorators/formats.ts#L0-L0).

## Overview

```ts
function Formats(name: string, options?: FormatsOptions): ClassDecorator;
```

## Description

Create a new custom formats validator

---
url: >-
  /api/platform/platform-response-filter/types/decorators/decorator-response-filter.md
description: api documentation of ResponseFilter from @tsed/platform-response-filter
---

## Usage

```typescript
import { ResponseFilter } from "@tsed/platform-response-filter";
```

> See [/packages/platform/platform-response-filter/src/decorators/responseFilter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-response-filter/src/decorators/responseFilter.ts#L0-L0).

## Overview

```ts
function ResponseFilter(...contentTypes: ResponseFilterKey[]): ClassDecorator;
```

## Description

Register a response filter service.

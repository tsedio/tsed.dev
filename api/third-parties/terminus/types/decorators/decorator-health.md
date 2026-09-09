---
url: /api/third-parties/terminus/types/decorators/decorator-health.md
description: api documentation of Health from @tsed/terminus
---

## Usage

```typescript
import { Health } from "@tsed/terminus";
```

> See [/packages/third-parties/terminus/src/decorators/health.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/terminus/src/decorators/health.ts#L0-L0).

## Overview

```ts
function Health(name: string): MethodDecorator;
```

## Description

Create a readiness / liveness checks.

```ts
import { Health } from "@tsed/terminus";

@Controller("/mongo")
class MongoCtrl {
  @Health("/health")
  health() {
    // Here check the mongo health
    return Promise.resolve();
  }
}

@param name
@decorator
@terminus
```

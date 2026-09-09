---
title: Health from @tsed/terminus
description: api documentation of Health from @tsed/terminus
meta:
 - name: keywords
   description: api typescript node.js documentation Health decorator
---
# Health - @tsed/terminus

## Usage

```typescript
import { Health } from "@tsed/terminus";
```

> See [/packages/third-parties/terminus/src/decorators/health.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/terminus/src/decorators/health.ts#L0-L0).

## Overview

```ts
function Health(name: string): MethodDecorator;
```

<!-- Description -->

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

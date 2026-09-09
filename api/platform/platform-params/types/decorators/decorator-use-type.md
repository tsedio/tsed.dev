---
url: /api/platform/platform-params/types/decorators/decorator-use-type.md
description: api documentation of UseType from @tsed/platform-params
---

## Usage

```typescript
import { UseType } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/decorators/useType.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/decorators/useType.ts#L0-L0).

## Overview

```ts
function UseType(useType: undefined | any | Type<any>): ParameterDecorator;
```

## Description

Set the type of the item collection.

Prefer @@CollectionOf@@ usage.

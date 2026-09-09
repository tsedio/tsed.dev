---
title: UseType from @tsed/platform-params
description: api documentation of UseType from @tsed/platform-params
meta:
 - name: keywords
   description: api typescript node.js documentation UseType decorator
---
# UseType - @tsed/platform-params

## Usage

```typescript
import { UseType } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/decorators/useType.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/decorators/useType.ts#L0-L0).

## Overview

```ts
function UseType(useType: undefined | any | Type<any>): ParameterDecorator;
```

<!-- Description -->

## Description

Set the type of the item collection.

Prefer [CollectionOf](/ai/api/specs/schema/types/decorators/collections/decorator-collection-of.md) usage.

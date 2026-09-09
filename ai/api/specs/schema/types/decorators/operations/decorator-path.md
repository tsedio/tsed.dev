---
title: Path from @tsed/schema
description: api documentation of Path from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation Path decorator
---
# Path - @tsed/schema

## Usage

```typescript
import { Path } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/path.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/path.ts#L0-L0).

## Overview

```ts
function Path(path: string): ClassDecorator;
```

<!-- Description -->

## Description

Set class path to expose all endpoints

::: warning
Don't use this decorator to change the path if you develop your application with Ts.ED.
:::

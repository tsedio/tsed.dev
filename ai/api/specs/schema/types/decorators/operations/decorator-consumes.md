---
title: Consumes from @tsed/schema
description: api documentation of Consumes from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation Consumes decorator
---
# Consumes - @tsed/schema

## Usage

```typescript
import { Consumes } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/consumes.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/consumes.ts#L0-L0).

## Overview

```ts
function Consumes(...consumes: string[]): ClassDecorator & MethodDecorator;
```

<!-- Description -->

## Description

Add consumes metadata on the decorated element.

## Examples

```typescript
class Model {
   @Consumes("application/x-www-form-urlencoded")
   id: string;
}
```

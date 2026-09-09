---
title: RequiredGroups from @tsed/schema
description: api documentation of RequiredGroups from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation RequiredGroups decorator
---
# RequiredGroups - @tsed/schema

## Usage

```typescript
import { RequiredGroups } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/requiredGroups.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/requiredGroups.ts#L0-L0).

## Overview

```ts
function RequiredGroups(...groups: string[]): PropertyDecorator;
```

<!-- Description -->

## Description

Apply groups validation strategy for required property.

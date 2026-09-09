---
title: Groups from @tsed/schema
description: api documentation of Groups from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation Groups decorator
---
# Groups - @tsed/schema

## Usage

```typescript
import { Groups } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/groups.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/groups.ts#L0-L0).

## Overview

```ts
function Groups<T>(groupsDefinition: Record<string, (keyof T)[]>): ClassDecorator;
export function Groups<T>(groupName: string, groups: string[]): ParameterDecorator;
export function Groups(...groups: string[]): Function;
```

<!-- Description -->

## Description

Apply groups validation strategy

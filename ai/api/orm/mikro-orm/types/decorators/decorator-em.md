---
title: Em from @tsed/mikro-orm
description: api documentation of Em from @tsed/mikro-orm
meta:
 - name: keywords
   description: api typescript node.js documentation Em decorator
---
# Em - @tsed/mikro-orm

## Usage

```typescript
import { Em } from "@tsed/mikro-orm";
```

> See [/packages/orm/mikro-orm/src/decorators/entityManager.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mikro-orm/src/decorators/entityManager.ts#L0-L0).

## Overview

```ts
const Em: (contextName?: string) => PropertyDecorator;
```

<!-- Description -->

## Description

Get the entity manager for the given context name.

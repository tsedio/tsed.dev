---
title: Subscriber from @tsed/mikro-orm
description: api documentation of Subscriber from @tsed/mikro-orm
meta:
 - name: keywords
   description: api typescript node.js documentation Subscriber decorator
---
# Subscriber - @tsed/mikro-orm

## Usage

```typescript
import { Subscriber } from "@tsed/mikro-orm";
```

> See [/packages/orm/mikro-orm/src/decorators/subscriber.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mikro-orm/src/decorators/subscriber.ts#L0-L0).

## Overview

```ts
const Subscriber: (options?: {
    contextName: string;
}) => any;
```

<!-- Description -->

## Description

Register a new subscriber for the given context name.

<!-- Members -->

## contextName

```ts
contextName: string;
```

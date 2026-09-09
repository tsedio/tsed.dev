---
url: /api/orm/mikro-orm/types/decorators/decorator-transactional.md
description: api documentation of Transactional from @tsed/mikro-orm
---

## Usage

```typescript
import { Transactional } from "@tsed/mikro-orm";
```

> See [/packages/orm/mikro-orm/src/decorators/transactional.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mikro-orm/src/decorators/transactional.ts#L0-L0).

## Overview

```ts
const Transactional: (contextNameOrOptions?: string | TransactionOptions) => MethodDecorator;
```

## Description

Register a new request context for your method and execute it inside the context.

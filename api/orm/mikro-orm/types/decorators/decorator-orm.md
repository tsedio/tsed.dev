---
url: /api/orm/mikro-orm/types/decorators/decorator-orm.md
description: api documentation of orm from @tsed/mikro-orm
---

## Usage

```typescript
import { orm } from "@tsed/mikro-orm";
```

> See [/packages/orm/mikro-orm/src/decorators/orm.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mikro-orm/src/decorators/orm.ts#L0-L0).

## Overview

```ts
function orm(contextName?: string): MikroORM | undefined;
```

## Description

Get the ORM for the given context name using new inject() function.

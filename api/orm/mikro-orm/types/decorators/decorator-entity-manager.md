---
url: /api/orm/mikro-orm/types/decorators/decorator-entity-manager.md
description: api documentation of entityManager from @tsed/mikro-orm
---

## Usage

```typescript
import { entityManager } from "@tsed/mikro-orm";
```

> See [/packages/orm/mikro-orm/src/decorators/entityManager.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mikro-orm/src/decorators/entityManager.ts#L0-L0).

## Overview

```ts
function entityManager(contextName?: string): import("@mikro-orm/core").EntityManager<import("@mikro-orm/core").IDatabaseDriver<import("@mikro-orm/core").Connection>> | undefined;
```

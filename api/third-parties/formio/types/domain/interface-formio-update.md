---
url: /api/third-parties/formio/types/domain/interface-formio-update.md
description: api documentation of FormioUpdate from @tsed/formio
---

## Usage

```typescript
import { FormioUpdate } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/FormioUpdate.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioUpdate.ts#L0-L0).

## Overview

```ts
interface FormioUpdate {
    db: Db;
    version: string;
    initialize(cb: (err: unknown, db: any) => void): Promise<Formio>;
    sanityCheck(req: Request, res: Response, next: NextFunction): void;
}
```

## db

```ts
db: Db;
```

## version

```ts
version: string;
```

## initialize

```ts
initialize(cb: (err: unknown, db: any) => void): Promise<Formio>;
```

## sanityCheck

```ts
sanityCheck(req: Request, res: Response, next: NextFunction): void;
```

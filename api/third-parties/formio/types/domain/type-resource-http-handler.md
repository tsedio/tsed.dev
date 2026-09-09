---
url: /api/third-parties/formio/types/domain/type-resource-http-handler.md
description: api documentation of ResourceHttpHandler from @tsed/formio
---

## Usage

```typescript
import { ResourceHttpHandler } from "@tsed/third-parties/formio/src/domain/Resource";
```

> See [/packages/third-parties/formio/src/domain/Resource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/Resource.ts#L0-L0).

## Overview

```ts
type ResourceHttpHandler = (req: Request, res: Response, next: NextFunction) => void;
```

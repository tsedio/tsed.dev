---
url: /api/specs/openapi-utils/types/decorators/decorator-docs.md
description: api documentation of Docs from @tsed/openapi-utils
---

## Usage

```typescript
import { Docs } from "@tsed/openapi-utils";
```

> See [/packages/specs/openapi-utils/src/decorators/docs.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openapi-utils/src/decorators/docs.ts#L0-L0).

## Overview

```ts
function Docs(...docs: string[]): Function;
```

## Description

Set the type documentation for this class.

See [swagger documentation](/tutorials/swagger.html)

---
url: /api/specs/schema/types/fn/oas/function-transform-information.md
description: api documentation of transformInformation from @tsed/schema
---

## Usage

```typescript
import { transformInformation } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/oas/transformToOS2.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/oas/transformToOS2.ts#L0-L0).

## Overview

```ts
function transformInformation(server: any): {
    host: string | undefined;
    basePath: string;
    schemes: string[] | undefined;
};
```

## host

```ts
host: string | undefined;
```

## basePath

```ts
basePath: string;
```

## schemes

```ts
schemes: string[] | undefined;
```

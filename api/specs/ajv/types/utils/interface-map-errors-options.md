---
url: /api/specs/ajv/types/utils/interface-map-errors-options.md
description: api documentation of MapErrorsOptions from @tsed/ajv
---

## Usage

```typescript
import { MapErrorsOptions } from "@tsed/ajv";
```

> See [/packages/specs/ajv/src/utils/mapErrors.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/utils/mapErrors.ts#L0-L0).

## Overview

```ts
interface MapErrorsOptions {
    collectionType?: Type<any> | any;
    errorFormatter: ErrorFormatter;
    type?: Type<any> | any;
    value: unknown;
}
```

## collectionType

```ts
collectionType?: Type<any> | any;
```

## errorFormatter

```ts
errorFormatter: ErrorFormatter;
```

## type

```ts
type?: Type<any> | any;
```

## value

```ts
value: unknown;
```

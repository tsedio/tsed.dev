---
title: MapErrorsOptions from @tsed/ajv
description: api documentation of MapErrorsOptions from @tsed/ajv
meta:
 - name: keywords
   description: api typescript node.js documentation MapErrorsOptions interface
---
# MapErrorsOptions - @tsed/ajv

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

<!-- Members -->

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

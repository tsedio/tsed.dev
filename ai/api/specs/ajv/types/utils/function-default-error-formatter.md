---
title: defaultErrorFormatter from @tsed/ajv
description: api documentation of defaultErrorFormatter from @tsed/ajv
meta:
 - name: keywords
   description: api typescript node.js documentation defaultErrorFormatter function
---
# defaultErrorFormatter - @tsed/ajv

## Usage

```typescript
import { defaultErrorFormatter } from "@tsed/ajv";
```

> See [/packages/specs/ajv/src/utils/defaultErrorFormatter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/utils/defaultErrorFormatter.ts#L0-L0).

## Overview

```ts
function defaultErrorFormatter(error: AjvErrorObject & {
    dataPath: string;
}): string;
```

<!-- Members -->

## dataPath

```ts
dataPath: string;
```

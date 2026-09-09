---
title: mapErrors from @tsed/ajv
description: api documentation of mapErrors from @tsed/ajv
meta:
 - name: keywords
   description: api typescript node.js documentation mapErrors function
---
# mapErrors - @tsed/ajv

## Usage

```typescript
import { mapErrors } from "@tsed/ajv";
```

> See [/packages/specs/ajv/src/utils/mapErrors.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/utils/mapErrors.ts#L0-L0).

## Overview

```ts
function mapErrors(errors: ErrorObject[], options: MapErrorsOptions): AjvValidationError;
```

-   **errors** (`ErrorObject[]`): Raw AJV error objects.

-   **options** (`MapErrorsOptions`): Validation context used to enrich error payloads.

<!-- Description -->

## Description

Map raw AJV errors to framework-level validation error output.

Enriches errors with collection/model information and contextual data values,
then formats each message via the configured `errorFormatter`.

---
title: SwaggerSettings from @tsed/swagger
description: api documentation of SwaggerSettings from @tsed/swagger
meta:
 - name: keywords
   description: api typescript node.js documentation SwaggerSettings type
---
# SwaggerSettings - @tsed/swagger

## Usage

```typescript
import { SwaggerSettings } from "@tsed/specs/swagger/src/interfaces/SwaggerSettings";
```

> See [/packages/specs/swagger/src/interfaces/SwaggerSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/swagger/src/interfaces/SwaggerSettings.ts#L0-L0).

## Overview

```ts
type SwaggerSettings = OpenApiSettings & {
    showExplorer?: boolean;
    options?: SwaggerUIOptions;
};
```

<!-- Members -->

## showExplorer

```ts
showExplorer?: boolean;
```

## options

```ts
options?: SwaggerUIOptions;
```

SwaggerUI options. See (https://github.com/swagger-api/swagger-ui/blob/HEAD/docs/usage/configuration.md)

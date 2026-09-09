---
title: OpenAPI3Settings from @tsed/openapi-utils
description: api documentation of OpenAPI3Settings from @tsed/openapi-utils
meta:
 - name: keywords
   description: api typescript node.js documentation OpenAPI3Settings interface
---
# OpenAPI3Settings - @tsed/openapi-utils

## Usage

```typescript
import { OpenAPI3Settings } from "@tsed/openapi-utils";
```

> See [/packages/specs/openapi-utils/src/interfaces/OpenApiSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openapi-utils/src/interfaces/OpenApiSettings.ts#L0-L0).

## Overview

```ts
interface OpenAPI3Settings extends OpenApiSettingsBase {
    specVersion?: OS3Versions;
    spec?: Partial<OpenSpec3>;
}
```

<!-- Members -->

## specVersion

```ts
specVersion?: OS3Versions;
```

## spec

```ts
spec?: Partial<OpenSpec3>;
```

OpenSpec 3

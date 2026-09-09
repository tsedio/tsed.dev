---
title: ScalarSettings from @tsed/scalar
description: api documentation of ScalarSettings from @tsed/scalar
meta:
 - name: keywords
   description: api typescript node.js documentation ScalarSettings type
---
# ScalarSettings - @tsed/scalar

## Usage

```typescript
import { ScalarSettings } from "@tsed/specs/scalar/src/interfaces/ScalarSettings";
```

> See [/packages/specs/scalar/src/interfaces/ScalarSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/scalar/src/interfaces/ScalarSettings.ts#L0-L0).

## Overview

```ts
type ScalarSettings = OpenApiSettings & ReferenceConfiguration & {
    cdn?: string;
    options?: ReferenceConfiguration;
};
```

<!-- Members -->

## cdn

```ts
cdn?: string;
```

## options

```ts
options?: ReferenceConfiguration;
```
